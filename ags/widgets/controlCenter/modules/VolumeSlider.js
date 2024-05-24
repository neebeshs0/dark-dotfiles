import { getVolumeIcon } from "../../utils/GetIcon.js";

const audio = await Service.import('audio')

export default function VolumeSlider() {
  const volumeIcon = getVolumeIcon().hook(audio, self => {
    const volume = audio.speaker.volume * 100
    self.tooltip_text = `${Math.floor(volume)}%`
    if (Math.floor(volume) === 0 || audio.speaker.is_muted) {
      self.css = 'color: #eb6f92'
    } else {
      self.css = 'color: #ebbcba'
    }
  })

  const volumeSlider = Widget.Slider({
    class_name: 'volume-slider',
    drawValue: false,
    hexpand: true,
    on_change: self => audio.speaker.volume = self.value,
    value: audio.speaker.bind('volume'),
    max: 1.5,
    min: 0.01,
  })

  return Widget.Box({
    class_name: 'volume-container',
    children: [
      volumeIcon,
      volumeSlider,
    ]
  })
}
