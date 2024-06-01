import { getConfigBoolean } from "./getHyprlandConfigValue.js"


export default function ToggleButton(section, title, toolTip) {
  const titleLabel = Widget.Label({
    hpack: 'start',
    tooltipText: toolTip,
    class_name: 'st-variable-title',
    label: `${title}`
  })

  const valueSwitch = Widget.Switch({
    class_name: 'st-switch',
    hpack: 'end',
    onActivate: ({ active }) => console.log(active)
  })

  const defaultLabel = Widget.Label({
    class_name: 'st-variable-default',
    label: getConfigBoolean(section, title).bind().as(value => value.toString())
  })

  return Widget.CenterBox({
    class_name: 'st-variable-container toggle-container',
    hexpand: true,
    startWidget: titleLabel,
    endWidget: Widget.Box({
      hpack: 'end',
      hexpand: true,
      children: [
        Widget.Box({
          children: [
            Widget.Label({
              class_name: 'st-variable-default',
              css: 'margin-right: 0;',
              hpack: 'start',
              label: 'Default = '
            }),
            defaultLabel,
          ]
        }),
        valueSwitch,
      ]
    }),
  })
}
