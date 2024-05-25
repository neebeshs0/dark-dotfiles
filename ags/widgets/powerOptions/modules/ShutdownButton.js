import { getPowerIcon } from "../../utils/GetIcon.js"

export default function ShutdownButton() {
  const shutdownButton = Widget.Button({
    class_name: 'po-shutdown-button',
    on_clicked: () => Utils.execAsync('poweroff'),
    hexpand: true,
    vexpand: true,
    child: getPowerIcon(48)
  })

  return shutdownButton
}
