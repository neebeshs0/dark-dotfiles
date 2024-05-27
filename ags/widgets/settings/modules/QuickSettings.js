import TopButton from "./MakeTopButton.js"

import {
  getSpeakerIcon,
  getDiskIcon,
  getMonitorIcon,
  getNvidiaIcon,
  getThemeIcon
} from "../../utils/GetIcon.js"

// TODO use hyprland widget instead of Utils.exec

export default function QuickSettings() {
  return Widget.Box({
    spacing: 12,
    children: [
      TopButton('helvum', getSpeakerIcon(), 'Speaker Settings'),
      TopButton('nwg-displays', getMonitorIcon(), 'Monitor Settings'),
      TopButton('nwg-look', getThemeIcon(), 'GTK Settings'),
      TopButton('gnome-disks', getDiskIcon(), 'Disk Settings'),
      TopButton('nvidia-settings', getNvidiaIcon(), 'Nvidia Settings'),
    ]
  })
}
