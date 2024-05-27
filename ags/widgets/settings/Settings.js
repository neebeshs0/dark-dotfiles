import getCloseButton from "../utils/GetCloseButton.js"
import QuickSettings from "./modules/QuickSettings.js"
import GeneralSection from "./modules/GeneralSection.js"
import DecorationSection from "./modules/DecorationSection.js"
import EscapeKeybind from "../utils/EscapeKeybind.js"
import { getSettingsIcon } from "../utils/GetIcon.js"

function Top() {
  return Widget.CenterBox({
    class_name: 'st-top-container',
    vpack: 'start',
    hexpand: true,
    startWidget: getSettingsIcon()
      .hook(App, self => {
        self.hpack = 'start'
        self.class_name = 'st-top-icon'
      }),
    centerWidget: QuickSettings(),
    end_widget: getCloseButton('settings-window', 'st-close-button', 24)
      .hook(App, self => self.hpack = 'end'),
  })
}

function Center() {
  return Widget.Scrollable({
    class_name: 'st-center-container',
    vscroll: 'automatic',
    hscroll: 'never',
    vexpand: true,
    hexpand: true,
    child: Widget.Box({
      vertical: true,
      children: [
        GeneralSection(),
        DecorationSection(),
      ]
    })
  })
}

function Bottom() {
  return Widget.Box({
    class_name: 'st-bottom-container',
    vertical: true,
    spacing: 0,
    hpack: 'center',
    vpack: 'end',
    children: [
      Widget.Label('These hyprland changes will be temporary'),
      Widget.Label('Sliders may interfere with scrolling putting the cursor in the empty space within the box should work'),
    ]
  })
}

export default function SettingsWindow() {
  const windowName = 'settings-window'
  return Widget.Window({
    name: windowName,
    visible: false,
    class_name: 'settings-window',
    keymode: 'on-demand',
    layer: 'top',
    anchor: ['left', 'bottom', 'top'],
    margins: [8, 0, 8],
    child: Widget.CenterBox({
      class_name: 'settings-container',
      vertical: true,
      startWidget: Top(),
      centerWidget: Center(),
      endWidget: Bottom(),
    }),
    setup: self => EscapeKeybind(self, windowName)
  })
}
