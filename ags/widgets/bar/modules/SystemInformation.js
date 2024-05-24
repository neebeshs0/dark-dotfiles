import { getBluetoothIcon, getVolumeIcon, getWifiIcon, getWiredIcon } from "../../utils/GetIcon.js"

const audio = await Service.import('audio')
const network = await Service.import('network')
const bluetooth = await Service.import('bluetooth')

function Volume() {
  const volumeIcon = getVolumeIcon()

  return Widget.Button({
    class_name: "sys-buttons",
    on_clicked: () => audio.speaker.is_muted = !audio.speaker.is_muted,
    on_scroll_up: () => audio.speaker.volume += 0.05,
    on_scroll_down: () => audio.speaker.volume -= 0.05,
    child: volumeIcon,
  }).hook(audio.speaker, self => {
    const volume = audio.speaker.volume * 100
    self.tooltip_text = `${Math.floor(volume)}%`
    if (Math.floor(volume) === 0 || audio.speaker.is_muted) {
      self.css = 'color: #eb6f92'
    } else {
      self.css = 'color: #9ccfd8'
    }
  })
}

function NetworkStatus() {
  const wifiIcon = getWifiIcon()
  const wiredIcon = getWiredIcon()

  const wifiButton = Widget.Button({
    class_name: "sys-buttons",
    child: wifiIcon,
    tooltipText: `${network.wifi.ssid}     ${network.wifi.strength}% \n${network.wifi.internet}`,
  })
  const wiredButton = Widget.Button({
    class_name: "sys-buttons",
    child: wiredIcon,
    tooltipText: `${network.wired.state} \n${network.wired.internet}`
  })

  return Widget.Box({
    class_name: 'network-container',
    children: [
      wiredButton,
      wifiButton,
    ]
  })
}

function Bluetooth() {
  const bluetoothIndicator = getBluetoothIcon()

  return Widget.Button({
    class_name: 'sys-buttons',
    child: bluetoothIndicator,
  }).hook(bluetooth, (self) => {
    self.on_clicked = () => {
      bluetooth.enabled ? Utils.exec('bluetoothctl power off') : Utils.exec('bluetoothctl power on')
    }
    if (!bluetooth.enabled) {
      self.tooltip_text = "Off"
    } else {
      self.tooltip_text = "On"
    }
    if (bluetooth.connected_devices.length === 1) {
      self.tooltip_text = `${bluetooth.connected_devices[0].alias} ${bluetooth.connected_devices[0].battery_percentage}%`
    }
  })
}

export default function SystemInformation() {
  return Widget.Box({
    class_name: 'sys-info-container',
    children: [
      Volume(),
      Bluetooth(),
      NetworkStatus(),
    ]
  })
}
