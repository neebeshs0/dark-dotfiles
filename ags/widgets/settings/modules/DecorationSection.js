import HyprlandSlider from "./MakeSliders.js"
import { evenMarker, decimalMarker } from "./getMarkers.js"

export default function DecorationSection() {
  const children = [
    Widget.Label({
      class_name: 'st-hyprland-sections',
      label: 'Decoration',
    }),
    HyprlandSlider('rounding', 0, 12, evenMarker(24), 0, 24, 'Rounded corners’ radius (in layout px)'),
    HyprlandSlider('active_opacity', 1, 1, decimalMarker(1), 0, 1.0, 'Opacity of active windows'),
    HyprlandSlider('inactive_opacity', 1, 1, decimalMarker(1), 0, 1.0, 'Opacity of inactive windows'),
    HyprlandSlider('fullscreen_opacity', 1, 1, decimalMarker(1), 0, 1.0, 'Opacity of fullscreen windows'),
    HyprlandSlider('shadow_range', 0, 10, evenMarker(24), 0, 24, 'Shadow range (“size”) in layout px'),
    HyprlandSlider('shadow_render_power', 0, 5, evenMarker(8), 0, 8, 'in what power to render the falloff (more power, the faster the falloff)'),
    HyprlandSlider('shadow_range', 1, 1, decimalMarker(1), 0, 1.0, 'shadow’s scale'),
    HyprlandSlider('dim_strength', 1, 0.5, decimalMarker(1), 0, 1.0, 'how much inactive windows should be dimmed'),
    HyprlandSlider('dim_special', 1, 0.2, decimalMarker(1), 0, 1.0, 'how much to dim the rest of the screen by when a special workspace is open. '),
    HyprlandSlider('dim_around', 1, 0.4, decimalMarker(1), 0, 1.0, 'how much the dimaround window rule should dim by'),
  ]
  return Widget.Box({
    vertical: true,
    hexpand: true,
    children: children
  })
}
