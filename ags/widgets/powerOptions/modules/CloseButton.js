import { getCloseIcon } from "../../utils/GetIcon.js"

export default function CloseButton() {
  const closeButton = Widget.Button({
    class_name: 'po-close-button',
    on_clicked: () => App.closeWindow('power-options'),
    hexpand: true,
    vexpand: true,
    child: getCloseIcon(48),
  })

  return closeButton
}
