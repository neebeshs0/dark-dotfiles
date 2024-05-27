
export default function HyprlandSlider(
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
    class_name: 'st-slider-title',
    label: `${title}`
  })

  const valueSlider = Widget.Slider({
    class_name: 'st-slider',
    drawValue: true,
    digits: digits,
    max: maxValue,
    min: minValue,
    marks: marks,
  }).hook(App, self => {
    self.value = configValue
  })

  return Widget.Box({
    class_name: 'st-slider-container',
    hexpand: true,
    vertical: true,
    children: [
      titleLabel,
      valueSlider,
    ]
  })
}
