
export default function TopButton(settings, icon, toolTip) {
  return Widget.Button({
    class_name: 'st-top-buttons',
    tooltipText: `${toolTip}`,
    on_clicked: () => {
      Utils.execAsync(`${settings}`)
      App.toggleWindow('settings-window')
    },
    child: icon
  })
}
