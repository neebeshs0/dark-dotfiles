import HyprlandSlider from "./MakeSliders.js"
import { evenMarker } from "./getMarkers.js"

export default function GeneralSection() {
  const children = [
    Widget.Label({
      class_name: 'st-hyprland-sections',
      label: 'General',
    }),
    HyprlandSlider(
      'border_size',
      0, 2, evenMarker(12), 0, 12, 'Size of the border around windows'
    ),
    HyprlandSlider(
      'gaps_in',
      0, 8, evenMarker(24), 0, 24, 'Gaps between windows'
    ),
    HyprlandSlider(
      'gaps_out',
      0, 12, evenMarker(24), 0, 24, 'Gaps between windows and monitor edges'
    ),
    HyprlandSlider(
      'gaps_workspaces',
      0, 12, evenMarker(24), 0, 24, 'Gaps between windows'
    ),
  ]

  return Widget.Box({
    vertical: true,
    hexpand: true,
    children: children
  })
}
