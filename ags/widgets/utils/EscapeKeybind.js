export default function EscapeKeybind(self, windowName) {
  self.keybind("Escape", () => {
    App.closeWindow(`${windowName}`)
  })
}

