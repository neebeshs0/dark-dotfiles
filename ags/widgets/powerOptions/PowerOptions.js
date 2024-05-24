import { getPowerIcon, getRebootIcon } from "../utils/GetIcon.js"

export function PowerOptionsWindow() {
  const shutdownButton = Widget.Button({
    class_name: 'shutdown-button',
    on_clicked: () => Utils.execAsync('poweroff'),
    hexpand: true,
    child: getPowerIcon()
  })

  const rebootButton = Widget.Button({
    class_name: 'reboot-button',
    on_clicked: () => Utils.execAsync('reboot'),
    hexpand: true,
    child: getRebootIcon()
  })

  return Widget.Window({
    name: "power-options",
    visible: false,
    child: Widget.Box({
      children: [
        shutdownButton,
        rebootButton,
      ]
    })
  })
}
