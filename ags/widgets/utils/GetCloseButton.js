import { getCloseIcon } from "./GetIcon.js"

export default function getCloseButton(windowName, className, iconSize) {
  const closeButton = Widget.Button({
    class_name: className,
    on_clicked: () => App.closeWindow(`${windowName}`),
    hexpand: true,
    vexpand: true,
    child: getCloseIcon(iconSize),
  })

  return closeButton
}
