const speed = Variable("", {
  poll: [
    3000,
    ['bash', '-c', `vnstat -tr | grep rx | cut -c16-28`]
  ]
})

export default function NetworkSpeed() {
  return Widget.Label({
    class_name: 'bar-network-speed',
    label: speed.bind()
  })
}
