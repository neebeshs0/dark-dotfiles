
export default function BrightnessSlider() {
  const brightnessSlider = Widget.Slider({
    class_name: 'brightness-slider',
    drawValue: false,
    hexpand: true,
    min: 0,
    max: 100,
  })
  const brighnessIcon = Widget.Icon({
    icon: 'display-brightness-symbolic',
    css: 'color: #f6c177;',
    size: 24,
  })
  return Widget.Box({
    class_name: 'brightness-container',
    children: [
      brighnessIcon,
      brightnessSlider,
    ]
  })
}
