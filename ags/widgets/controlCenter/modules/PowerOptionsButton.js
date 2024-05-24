import { getSettingsIcon, getPowerIcon } from "../../utils/GetIcon.js"


export default function PowerOptionsButton() {
  const settingsButton = Widget.Button({
    hexpand: true,
    child: getSettingsIcon(),
  })

  const powerOptionsButton = Widget.Button({
    class_name: 'shutdown-button',
    on_clicked: () => App.toggleWindow('power-options'),
    hexpand: true,
    child: getPowerIcon()
  })

  return Widget.Box({
    hpack: 'end',
    hexpand: true,
    children: [
      settingsButton,
      powerOptionsButton,
    ]
  })
}
