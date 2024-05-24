import { getWifiIcon, getWiredIcon } from "../../utils/GetIcon.js"

const network = await Service.import('network')

export default function NetworkButton() {
  const onButtonPress = () => {
    Utils.execAsync('nm-connection-editor')
    App.toggleWindow('control-center')
  }

  if (network.primary === 'wired') {
    return Widget.Button({
      hexpand: true,
      class_name: 'control-center-buttons',
      on_clicked: onButtonPress,
      child: Widget.Box({
        hpack: 'start',
        children: [
          getWiredIcon(),
          Widget.Label({
            class_name: 'network-buttons-label',
            maxWidthChars: 22,
            truncate: 'end',
            label: 'Wired'
          }).hook(network, self => {
            if (network.wired.internet === 'connected' || network.wired.internet === 'connecting') {
              self.label = `${network.wired.state}`
            }
            if (network.wifi.internet === 'disconnected') {
              self.label = 'No Internet >:['
              self.css = 'color: #eb6f92;'
            }
          })
        ]
      })
    }).hook(network, self => {
      if (network.wired.internet === 'connected') {
        self.css = 'border: 2px solid #31748f'
      }
      if (network.wired.internet === 'connecting') {
        self.css = 'border: 2px solid #f6c177'
      }
      if (network.wired.internet === 'disconnected') {
        self.css = 'border: 2px solid #eb6f92'
      }
    })

  }
  if (network.primary === 'wifi') {
    return Widget.Button({
      hexpand: true,
      class_name: 'control-center-buttons',
      on_clicked: onButtonPress,
      child: Widget.Box({
        hpack: 'start',
        children: [
          getWifiIcon(),
          Widget.Label({
            class_name: 'network-buttons-label',
            maxWidthChars: 22,
            truncate: 'end',
            label: 'WiFi'
          }).hook(network, self => {
            if (network.wifi.internet === 'connected' || network.wifi.internet === 'connecting') {
              self.label = `${network.wifi.ssid}`
              self.css = 'color: #e0def4;'
            }
            if (network.wifi.internet === 'disconnected') {
              self.label = 'No Internet >:['
              self.css = 'color: #eb6f92;'
            }
          })
        ]
      })
    }).hook(network, self => {
      if (network.wifi.internet === 'connected') {
        self.css = 'border: 2px solid #31748f'
      }
      if (network.wifi.internet === 'connecting') {
        self.css = 'border: 2px solid #f6c177'
      }
      if (network.wifi.internet === 'disconnected') {
        self.css = 'border: 2px solid #eb6f92'
      }
    })
  }
  return Widget.Label({
    label: `${network.primary}`
  })
}
