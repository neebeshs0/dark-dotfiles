import Brightness from "../../../services/Brightness.js"
import { getBrightnessIcon } from '../../utils/GetIcon.js'

export default function BrightnessSlider() {
  const brightnessSlider = Widget.Slider({
    class_name: 'brightness-slider',
    drawValue: false,
    hexpand: true,
    on_change: self => Brightness.screen_value = self.value,
    value: Brightness.bind('screen_value'),
    max: 1,
    min: 0.01,
  })

  const brighnessIcon = getBrightnessIcon()

  return Widget.Box({
    class_name: 'brightness-container',
    children: [
      brighnessIcon,
      brightnessSlider,
    ]
  })
}
