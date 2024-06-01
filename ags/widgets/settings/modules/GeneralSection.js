import HyprlandSlider from "./MakeSliders.js"
import ToggleButton from "./MakeToggleButton.js"
import { evenMarker, decimalMarker } from "./getMarkers.js"

export default function GeneralSection() {
  const children = [
    Widget.Label({
      class_name: 'st-hyprland-sections',
      label: 'General',
    }),
    HyprlandSlider(
      'general',
      'sensitivity',
      1, 1, decimalMarker(4.1), 0, 4, 'mouse sensitivity (legacy, may cause bugs if not 1, prefer input:sensitivity)'
    ),
    HyprlandSlider(
      'general',
      'border_size',
      0, 2, evenMarker(12), 0, 12, 'Size of the border around windows'
    ),
    ToggleButton(
      'general',
      'no_border_on_floating',
      'disable borders for floating windows'
    ),
    HyprlandSlider(
      'general',
      'gaps_in',
      0, 8, evenMarker(24), 0, 24, 'Gaps between windows'
    ),
    HyprlandSlider(
      'general',
      'gaps_out',
      0, 12, evenMarker(24), 0, 24, 'Gaps between windows and monitor edges'
    ),
    HyprlandSlider(
      'general',
      'gaps_workspaces',
      0, 12, evenMarker(24), 0, 24, 'Gaps between windows'
    ),
    HyprlandSlider(
      'general',
      'resize_corner',
      0, 0, evenMarker(4), 0, 4, 'force floating windows to use a specific corner when being resized (1-4 going clockwise from top left, 0 to disable)'
    )
  ]

  return Widget.Box({
    vertical: true,
    hexpand: true,
    children: children
  })
}
