import { getRebootIcon } from "../../utils/GetIcon.js"

export default function RebootButton() {
  const rebootButton = Widget.Button({
    class_name: 'po-reboot-button',
    on_clicked: () => Utils.execAsync('reboot'),
    hexpand: true,
    vexpand: true,
    child: getRebootIcon(48)
  })

  return rebootButton
}
