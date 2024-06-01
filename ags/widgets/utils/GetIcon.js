import Brightness from "../../services/Brightness.js"

const audio = await Service.import('audio')
const network = await Service.import('network')
const bluetooth = await Service.import('bluetooth')

const defualtIconSize = 24

App.addIcons(`${App.configDir}/assets`)

export function getBrightnessIcon(iconSize = defualtIconSize) {
  const icon = Widget.Icon({
    css: 'color: #f6c177;',
    size: iconSize,
  }).hook(Brightness, self => {
    if (Brightness.screen_value < 0.40) {
      self.icon = "brightness_low-symbolic"
    }
    if (Brightness.screen_value >= 0.40 && Brightness.screen_value <= 0.75) {
      self.icon = "brightness_medium-symbolic"
    }
    if (Brightness.screen_value > 0.75) {
      self.icon = "brightness_high-symbolic"
    }
  })

  return icon
}

export function getBluetoothIcon(iconSize = defualtIconSize) {
  const icon = Widget.Icon({
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

  return icon
}


export function getVolumeIcon(iconSize = defualtIconSize) {
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

  const icon = Widget.Icon({
    icon: Utils.watch(chooseVolumeIcon(), audio.speaker, chooseVolumeIcon),
    size: iconSize,
  })

  return icon
}

export function getWifiIcon(iconSize = defualtIconSize) {
  const icon = Widget.Icon().hook(network, icon => {
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
  return icon
}

export function getWiredIcon(iconSize = defualtIconSize) {
  const icon = Widget.Icon().hook(network, icon => {
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
  return icon
}

export function getTemperatureIcon(iconSize = defualtIconSize) {
  const iconName = 'system_temperature-symbolic'

  const icon = Widget.Icon({
    icon: iconName,
    size: iconSize,
    css: 'color: #f6c177;'
  })

  return icon
}

export function getCpuIcon(iconSize = defualtIconSize) {
  const iconName = 'system_cpu-symbolic'

  const icon = Widget.Icon({
    icon: iconName,
    size: iconSize,
    css: 'color: #9ccfd8;'
  })

  return icon
}

export function getGpuIcon(iconSize = defualtIconSize) {
  const iconName = 'system_gpu-symbolic'
  const icon = Widget.Icon({
    icon: iconName,
    size: iconSize,
    css: 'color: #9ccfd8;'
  })

  return icon
}

export function getRamIcon(iconSize = defualtIconSize) {
  const iconName = 'system_ram-symbolic'
  const icon = Widget.Icon({
    icon: iconName,
    size: iconSize,
    css: 'color: #9ccfd8;'
  })

  return icon
}

export function getSpotifyIcon(iconSize = defualtIconSize) {
  return Widget.Icon({
    icon: 'spotify-icon-symbolic',
    size: iconSize,
  })
}

export function getBackIcon(iconSize = defualtIconSize) {
  App.addIcons(`${App.configDir}/assets`)
  const iconName = "media_skip_back-symbolic"
  const icon = Widget.Icon({
    size: iconSize,
    icon: iconName,
  })
  return icon
}

export function getNextIcon(iconSize = defualtIconSize) {
  const iconName = "media_skip_next-symbolic"
  const icon = Widget.Icon({
    size: iconSize,
    icon: iconName,
  })
  return icon
}

export function getSettingsIcon(iconSize = defualtIconSize) {
  const iconName = 'system_setting-symbolic'
  const icon = Widget.Icon({
    icon: iconName,
    size: iconSize
  })
  return icon
}

export function getPowerIcon(iconSize = defualtIconSize) {
  const iconName = 'power_shutdown-symbolic'
  const icon = Widget.Icon({
    icon: iconName,
    size: iconSize
  })
  return icon
}

export function getRebootIcon(iconSize = defualtIconSize) {
  const iconName = 'power_restart-symbolic'
  const icon = Widget.Icon({
    icon: iconName,
    size: iconSize
  })
  return icon
}

export function getLockIcon(iconSize = defualtIconSize) {
  const iconName = 'power_lock-symbolic'
  const icon = Widget.Icon({
    icon: iconName,
    size: iconSize
  })
  return icon
}

export function getCloseIcon(iconSize = defualtIconSize) {
  const iconName = 'system_close-symbolic'
  const icon = Widget.Icon({
    icon: iconName,
    size: iconSize
  })
  return icon
}

export function getMonitorIcon(iconSize = defualtIconSize) {
  const iconName = 'setting_monitor-symbolic'
  const icon = Widget.Icon({
    icon: iconName,
    size: iconSize
  })
  return icon
}

export function getThemeIcon(iconSize = defualtIconSize) {
  const iconName = 'setting_theme-symbolic'
  const icon = Widget.Icon({
    icon: iconName,
    size: iconSize
  })
  return icon
}

export function getDiskIcon(iconSize = defualtIconSize) {
  const iconName = 'setting_disk-symbolic'
  const icon = Widget.Icon({
    icon: iconName,
    size: iconSize
  })
  return icon
}

export function getNvidiaIcon(iconSize = defualtIconSize) {
  const iconName = 'setting_gpu-symbolic'
  const icon = Widget.Icon({
    icon: iconName,
    size: iconSize
  })
  return icon
}

export function getSpeakerIcon(iconSize = defualtIconSize) {
  const iconName = 'setting_audio-symbolic'
  const icon = Widget.Icon({
    icon: iconName,
    size: iconSize
  })
  return icon
}

export function getSearchIcon(iconSize = defualtIconSize) {
  const iconName = "app_search-symbolic"
  const icon = Widget.Icon({
    size: iconSize,
    icon: iconName,
    css: 'color: #e0def4;'
  })
  return icon
}
