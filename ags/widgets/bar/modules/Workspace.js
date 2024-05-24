const hyprland = await Service.import("hyprland")

export default function WorkSpace() {
  const dispatch = ws => hyprland.messageAsync(`dispatch workspace ${ws}`);
  const activeID = hyprland.active.workspace.bind('id')
  return Widget.EventBox({
    onScrollUp: () => dispatch('m+1'),
    onScrollDown: () => dispatch('m-1'),
    class_name: 'bar-ws-container',
    child: Widget.Box({
      class_name: 'bar-ws-buttons',
      children: Array.from({ length: 10 }, (_, id) => id + 1).map(id => Widget.Button({
        attribute: id,
        label: `${id}`,
        class_name: activeID.as(i => `${i === id ? "bar-ws-focused" : "bar-ws-notfocused"}`),
        onClicked: () => dispatch(id),
      })),
      setup: self => self.hook(hyprland, () => self.children.forEach(button => {
        button.visible = hyprland.workspaces.some(ws => ws.id === button.attribute)
      })),
    }),
  })
}
