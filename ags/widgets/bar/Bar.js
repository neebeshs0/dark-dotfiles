import Clock from "./modules/Clock.js"
import WorkSpace from "./modules/Workspace.js"
import SystemInformation from "./modules/SystemInformation.js"
import NetworkSpeed from "./modules/NetworkSpeed.js"
import { PlayerButtons, PlayerSong } from "./modules/Player.js"
import ControlCenter from '../controlCenter/ControlCenter.js'

function Left() {
  return Widget.Box({
    class_name: 'bar-left',
    hpack: 'start',
    children: [
      Clock(),
      WorkSpace(),
    ]
  })
}

function Center() {
  return Widget.Box({
    hpack: 'center',
    children: [
      PlayerSong(),
    ]
  })

}

function Right() {
  return Widget.Box({
    hpack: 'end',
    class_name: 'bar-right',
    children: [
      NetworkSpeed(),
      PlayerButtons(),
      SystemInformation(),
      ControlCenter(),
    ]
  })
}

export default function Bar(monitor = 0) {
  return Widget.Window({
    name: `bar-${monitor}`,
    class_name: 'bar',
    monitor,
    anchor: ['top', 'left', 'right'],
    margins: [8, 8, 0],
    exclusivity: 'exclusive',
    child: Widget.CenterBox({
      start_widget: Left(),
      center_widget: Center(),
      end_widget: Right(),
    })
  })

}
