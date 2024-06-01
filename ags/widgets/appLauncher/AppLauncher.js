import { getSearchIcon } from "../utils/GetIcon.js"

const applications = await Service.import('applications')
const { query } = applications
const WINDOW_NAME = 'launcher'

const AppItem = app => Widget.Button({
  class_name: 'al-app-item',
  on_clicked: () => {
    App.closeWindow(WINDOW_NAME)
    app.launch()
  },
  attribute: { app },
  child: Widget.Box({
    children: [
      Widget.Icon({
        icon: app.icon_name || "",
        size: 48,
      }),
      Widget.Label({
        class_name: "al-app-title",
        label: app.name,
        xalign: 0,
        vpack: "center",
        truncate: "end",
      }),
    ],
  }),
})

function AppLauncher() {
  // list application buttons
  let appList = query("").map(AppItem)

  // container holding the buttons
  const appListContainer = Widget.Box({
    class_name: 'al-app-list-container',
    vertical: true,
    children: appList,
    spacing: 3,
  })

  function repopulateApp() {
    appList = query("").map(AppItem)
    appListContainer.children = appList
  }

  // Search Box
  const appEntry = Widget.Entry({
    class_name: 'al-app-entry',
    hexpand: true,
    on_accept: () => {
      // make sure we only consider visible (searched for) applications
      const results = appList.filter((item) => item.visible);
      if (results[0]) {
        App.toggleWindow(WINDOW_NAME)
        results[0].attribute.app.launch()
      }
    },
    // filter out the list
    on_change: ({ text }) => appList.forEach(item => {
      item.visible = item.attribute.app.match(text ?? "")
    }),
  })

  return Widget.Box({
    class_name: 'app-launcher-container',
    vertical: true,
    children: [
      Widget.Box({
        class_name: 'al-app-entry-container',
        children: [
          getSearchIcon(),
          appEntry,
        ]
      }),
      Widget.Scrollable({
        class_name: 'al-app-scrollable',
        hscroll: 'never',
        child: appListContainer
      })
    ],
    setup: self => self.hook(App, (_, windowName, visible) => {
      if (windowName !== WINDOW_NAME) return

      if (visible) {
        repopulateApp(),
          appEntry.text = ""
        appEntry.grab_focus()
      }
    })

  })
}

export default function AppLauncherWindow() {
  return Widget.Window({
    name: WINDOW_NAME,
    class_name: 'al-launcher-window',
    keymode: 'exclusive',
    visible: false,
    anchor: ['bottom'],
    child: AppLauncher(),
    setup: self => self.keybind("Escape", () => {
      App.closeWindow(WINDOW_NAME)
    })
  })
}
