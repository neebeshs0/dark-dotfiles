import getCloseButton from "../utils/GetCloseButton.js"

function Top() {
  return Widget.CenterBox({
    hpack: 'start',
    vpack: 'start',
    startWidget: getCloseButton('settings-window', 'st-close-button', 24),
    centerWidget: Widget.Label('placeholder1'),
    endWidget: Widget.Label('placeholder2'),
  })
}

function Center() {
  return Widget.CenterBox({
    hpack: 'start',
    vpack: 'start',
    startWidget: Widget.Label('placeholder1'),
    centerWidget: Widget.Label('placeholder1'),
    endWidget: Widget.Label('placeholder2'),
  })
}

function Bottom() {
  return Widget.CenterBox({
    hpack: 'start',
    vpack: 'start',
    startWidget: Widget.Label('placeholder1'),
    centerWidget: Widget.Label('placeholder1'),
    endWidget: Widget.Label('placeholder2'),
  })
}

export default function SettingsWindow() {
  return Widget.Window({
    name: 'settings-window',
    class_name: 'settings-window',
    layer: 'top',
    visible: false,
    anchor: ['left', 'bottom', 'right'],
    child: Widget.CenterBox({
      class_name: 'settings-container',
      vertical: true,
      startWidget: Top(),
      centerWidget: Center(),
      endWidget: Bottom(),
    })
  })
}
