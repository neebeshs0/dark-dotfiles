import { getBluetoothIcon, } from "../../utils/GetIcon.js"
const bluetooth = await Service.import('bluetooth')

export default function BluetoothButton() {
  return Widget.Button({
    hexpand: true,
    class_name: 'control-center-buttons',
    on_clicked: () => {
      Utils.execAsync('blueman-manager')
      App.toggleWindow('control-center')
    },
    child: Widget.Box({
      hpack: 'start',
      children: [
        getBluetoothIcon(),
        Widget.Label({
          hpack: 'end',
          class_name: 'network-buttons-label',
          maxWidthChars: 22,
          truncate: 'end',
          label: 'Bluetooth'
        }).hook(bluetooth, self => {
          if (bluetooth.enabled && bluetooth.connected_devices.length > 0) {
            self.label = `${bluetooth.connected_devices[0].alias}`
          }
        })
      ]
    })
  }).hook(bluetooth, self => {
    if (bluetooth.enabled && bluetooth.connected_devices.length > 0) {
      self.css = 'border: 2px solid #31748f'
    }
    if (bluetooth.enabled) {
      self.css = 'border: 2px solid #f6c177'
    }
    if (!bluetooth.enabled) {
      self.css = 'border: 2px solid #eb6f92'
    }
  })

}
