import CloseButton from "./modules/CloseButton.js"
import RebootButton from "./modules/RebootButton.js"
import ShutdownButton from "./modules/ShutdownButton.js"
import LockButton from "./modules/LockButton.js"

export function PowerOptionsWindow() {
  return Widget.Window({
    name: "power-options",
    class_name: 'power-options-window',
    visible: false,
    keymode: "exclusive",
    setup: self => self.keybind("Escape", () => {
      App.closeWindow('power-options')
    }),
    child: Widget.Box({
      class_name: 'power-options-container',
      children: [
        CloseButton(),
        LockButton(),
        RebootButton(),
        ShutdownButton(),
      ]
    })
  })
}
