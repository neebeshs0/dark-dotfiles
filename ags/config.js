import Bar from "./widgets/bar/Bar.js"
import SettingsWindow from "./widgets/settings/Settings.js"
import AppLauncherWindow from "./widgets/appLauncher/AppLauncher.js"
import { CalendarWindow } from "./widgets/bar/modules/Clock.js"
import { ControlCenterWindow } from "./widgets/controlCenter/ControlCenter.js"
import { PowerOptionsWindow } from "./widgets/powerOptions/PowerOptions.js"

App.addIcons(`${App.configDir}/assets/icons`)
App.config({
  style: './styles/style.css',
  windows: [
    Bar(1),
    AppLauncherWindow(),
    CalendarWindow(),
    ControlCenterWindow(),
    SettingsWindow(),
    PowerOptionsWindow(),
  ]
})
