import HyprlandSlider from './MakeSliders.js'
import ToggleButton from './MakeToggleButton.js'
import { evenMarker, decimalMarker } from './getMarkers.js'

export default function BlurSection() {
  const children = [
    Widget.Label({
      class_name: 'st-hyprland-sections',
      label: 'Blur',
    }),

    ToggleButton(
      'decoration:blur',
      'enabled',
      'enable kawase window background blur'
    ),
    HyprlandSlider(
      'decoration:blur',
      'size',
      0, 6, evenMarker(8), 0, 8, 'blur size (distance)'
    ),
    HyprlandSlider(
      'decoration:blur',
      'passes',
      0, 3, evenMarker(8), 0, 8, 'the amount of passes to perform'
    ),
    ToggleButton(
      'decoration:blur',
      'ignore_opacity',
      'make the blur layer ignore the opacity of the window	'
    ),
    ToggleButton(
      'decoration:blur',
      'new_optimizations',
      'whether to enable further optimizations to the blur. Recommended to leave on, as it will massively improve performance.'
    ),
    ToggleButton(
      'decoration:blur',
      'xray',
      'if enabled, floating windows will ignore tiled windows in their blur. Only available if blur_new_optimizations is true. Will reduce overhead on floating blur significantly.'
    ),
    HyprlandSlider(
      'decoration:blur',
      'noise',
      4, 0.0117, decimalMarker(1), 0, 1, 'how much noise to apply. [0.0 - 1.0]'
    ),
    HyprlandSlider(
      'decoration:blur',
      'contrast',
      4, 0.8916, decimalMarker(2), 0, 2, 'contrast modulation for blur. [0.0 - 2.0]'
    ),
    HyprlandSlider(
      'decoration:blur',
      'brightness',
      4, 1, decimalMarker(2), 0, 2, 'brightness modulation for blur. [0.0 - 2.0]'
    ),
    HyprlandSlider(
      'decoration:blur',
      'vibrancy',
      4, 0.1696, decimalMarker(1), 0, 1, 'Increase saturation of blurred colors. [0.0 - 1.0]'
    ),
    HyprlandSlider(
      'decoration:blur',
      'vibrancy_darkness',
      4, 0, decimalMarker(1), 0, 1, 'How strong the effect of vibrancy is on dark areas . [0.0 - 1.0]'
    ),
    ToggleButton(
      'decoration:blur',
      'special',
      'whether to blur behind the special workspace (note: expensive)'
    ),
    ToggleButton(
      'decoration:blur',
      'popups',
      'whether to blur popups (e.g. right-click menus)'
    ),
    HyprlandSlider(
      'decoration:blur',
      'popups_ignorealpha',
      4, 0.2, decimalMarker(1), 0, 1, 'works like ignorealpha in layer rules. If pixel opacity is below set value, will not blur. [0.0 - 1.0]'
    ),
  ]

  return Widget.Box({
    vertical: true,
    hexpand: true,
    children: children
  })
}
