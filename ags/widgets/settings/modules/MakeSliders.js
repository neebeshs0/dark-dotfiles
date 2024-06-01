import { getConfigIntValue, getConfigFloatValue } from "./getHyprlandConfigValue.js"
const hyprland = await Service.import('hyprland')

export default function HyprlandSlider(
  section,
  title,        // Name of hyprland variables
  digits,       // The number of decimal places that are displayed in the value
  configValue,  // The value in the hyprland config
  marks,        // Marker for set values below the slider
  minValue,     // Minimum value the slider can set
  maxValue,     // Maximum value the slider can set
  toolTip       // Description of what the slider does on hover
) {


  const titleLabel = Widget.Label({
    hpack: 'start',
    tooltipText: toolTip,
    class_name: 'st-variable-title',
    label: `${title}`
  })



  const defaultIntLabel = Widget.Label({
    hpack: 'start',
    class_name: 'st-variable-default',
    label: getConfigIntValue(section, title).bind()
  })

  const defaultFloatLabel = Widget.Label({
    hpack: 'start',
    class_name: 'st-variable-default',
    label: getConfigFloatValue(section, title).bind()
  })


  const valueSlider = Widget.Slider({
    class_name: 'st-slider',
    on_change: ({ value }) => hyprland.messageAsync(`keyword ${section}:${title} ${value}`),
    drawValue: true,
    digits: digits,
    max: maxValue,
    min: minValue,
    marks: marks,
  }).hook(App, self => {
    self.value = configValue
  })

  return Widget.Box({
    class_name: 'st-variable-container',
    hexpand: true,
    vertical: true,

  }).hook(hyprland, self => {
    if (digits > 0) {
      self.children = [
        titleLabel,
        Widget.Box({
          children: [
            Widget.Label({
              class_name: 'st-variable-default',
              css: 'margin-right: 0;',
              hpack: 'start',
              label: 'Default = '
            }),
            defaultFloatLabel,
          ]
        }),
        valueSlider,
      ]
    }
    if (digits <= 0) {
      self.children = [
        titleLabel,
        Widget.Box({
          children: [
            Widget.Label({
              class_name: 'st-variable-default',
              css: 'margin-right: 0;',
              hpack: 'start',
              label: 'Default = '
            }),
            defaultIntLabel,
          ]
        }),
        valueSlider,
      ]
    }
  })
}
