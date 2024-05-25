import { getLockIcon } from "../../utils/GetIcon.js"

// TODO finish setting up hyprlock
export default function LockButton() {
  const lockButton = Widget.Button({
    class_name: 'po-lock-button',
    hexpand: true,
    vexpand: true,
    child: getLockIcon(48),
  })

  return lockButton
}
