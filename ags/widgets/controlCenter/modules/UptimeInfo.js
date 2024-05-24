export default function UptimeInfo() {
  const uptime = Widget.Label({
    hexpand: true,
    class_name: 'uptime-info',
    setup: (self) => self.poll(5000, label => {
      Utils.execAsync([
        'zsh',
        '-c',
        `uptime -p | cut -d " " -f2-`
      ])
        .then(upTimeString => {
          label.label = `${upTimeString}`
        }).catch(print)
    })
  })
  return Widget.Box({
    hpack: 'start',
    hexpand: true,
    class_name: 'uptime-info-container',
    children: [
      Widget.Label({
        class_name: 'uptime-marker',
        label: 'Uptime:'
      }),
      uptime
    ]
  })
}
