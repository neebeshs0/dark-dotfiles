const audio = await Service.import('audio')
const network = await Service.import('network')
const bluetooth = await Service.import('bluetooth')

const iconSize = 24

App.addIcons(`${App.configDir}/assets`)

export function getBluetoothIcon() {
  const bluetoothIcon = Widget.Icon({
    icon: bluetooth.bind('enabled')
      .as(on => `bluetooth_${on ? 'active' : 'disabled'}-symbolic`),
    size: iconSize,
  }).hook(bluetooth, (self) => {
    if (bluetooth.enabled) {
      self.css = 'color: #f6c177;'
    }
    if (bluetooth.enabled && bluetooth.connected_devices.length > 0) {
      self.css = 'color: #9ccfd8;'
      self.icon = 'bluetooth_paired-symbolic'
    }
    if (!bluetooth.enabled) {
      self.icon = 'bluetooth_disabled-symbolic'
      self.css = 'color: #eb6f92;'
    }
  })

  return bluetoothIcon
}


export function getVolumeIcon() {
  const volumeOptions = {
    101: "overamplified",
    67: "high",
    34: "medium",
    1: "low",
    0: "muted",
  }

  function chooseVolumeIcon() {
    const icon = audio.speaker.is_muted ? 0 : [101, 67, 34, 1, 0].find(
      threshold => threshold <= audio.speaker.volume * 100)

    return `volume_${volumeOptions[icon]}-symbolic`
  }

  const volumeIcon = Widget.Icon({
    icon: Utils.watch(chooseVolumeIcon(), audio.speaker, chooseVolumeIcon),
    size: iconSize,
  })

  return volumeIcon
}

export function getWifiIcon() {
  const wifiIcon = Widget.Icon().hook(network, icon => {
    icon.size = iconSize
    if (network.wifi.strength <= 100 && network.wifi.strength > 80) {
      icon.icon = 'wifi_4-symbolic'
    }
    if (network.wifi.strength <= 80 && network.wifi.strength > 60) {
      icon.icon = 'wifi_3-symbolic'
    }
    if (network.wifi.strength <= 60 && network.wifi.strength > 40) {
      icon.icon = 'wifi_2-symbolic'
    }
    if (network.wifi.strength <= 40 && network.wifi.strength > 20) {
      icon.icon = 'wifi_1-symbolic'
    }
    if (network.wifi.strength <= 20 && network.wifi.strength > 0) {
      icon.icon = 'wifi_0-symbolic'
    }
    if (network.wifi.internet === 'connected') {
      icon.css = 'color:#9ccfd8;'
    }
    if (network.wifi.internet === 'connecting') {
      icon.css = 'color:#f6c177'
    }
    if (network.wifi.internet === 'disconnected') {
      icon.css = 'color:#eb6f92'
      icon.icon = 'wifi_disconnected-symbolic'
    }
  })
  return wifiIcon
}

export function getWiredIcon() {
  const wiredIcon = Widget.Icon().hook(network, icon => {
    icon.size = iconSize
    if (network.wired.internet === 'connected') {
      icon.css = 'color:#9ccfd8;'
      icon.icon = 'wired_connected-symbolic'
    }
    if (network.wired.internet === 'connecting') {
      icon.css = 'color:#f6c177'
      icon.icon = 'wired_connected-symbolic'
    }
    if (network.wired.internet === 'disconnected') {
      icon.css = 'color:#eb6f92'
      icon.icon = 'wired_disconnected-symbolic'
    }
  })
  return wiredIcon
}

export function getSpotifyIcon() {
  return Widget.Icon({
    css: 'font-size: 24px;',
    icon: 'spotify-icon-symbolic'
  })
}

export function getBackIcon() {
  App.addIcons(`${App.configDir}/assets`)
  const iconName = "media_skip_back-symbolic"
  const backIcon = Widget.Icon({
    size: iconSize,
    icon: iconName,
  })
  return backIcon
}

export function getNextIcon() {
  const iconName = "media_skip_next-symbolic"
  const nextIcon = Widget.Icon({
    size: iconSize,
    icon: iconName,
  })
  return nextIcon
}

export function getSettingsIcon() {
  const iconName = 'setting_-symbolic'
  const settingsIcon = Widget.Icon({
    icon: iconName,
    size: iconSize
  })
  return settingsIcon
}

export function getPowerIcon() {
  const iconName = 'power_shutdown-symbolic'
  const shutdownIcon = Widget.Icon({
    icon: iconName,
    size: iconSize
  })
  return shutdownIcon
}

export function getRebootIcon() {
  const iconName = 'power_restart-symbolic'
  const rebootIcon = Widget.Icon({
    icon: iconName,
    size: iconSize
  })
  return rebootIcon
}
