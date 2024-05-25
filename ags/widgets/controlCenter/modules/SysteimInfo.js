import { getCpuIcon, getGpuIcon, getRamIcon, getTemperatureIcon } from "../../utils/GetIcon.js"

const gpuTempValue = Variable("", {
  poll: [
    5000,
    ['bash', '-c', 'nvidia-settings -q gpucoretemp -t'],
    temp => temp + '°C'
  ]
})

const cpuTempValue = Variable("", {
  poll: [
    5000,
    ['bash', '-c', `sensors coretemp-isa-0000 | grep 'Package id 0:' | cut -c17-18`],
    temp => temp + '°C'
  ]
})

const cpuUsageValue = Variable("", {
  poll: [
    5000,
    ['bash', '-c', `top -b -n1 | grep "Cpu(s)" | awk '{print $2 + $4}'`],
    out => Math.round(out).toString() + '%'
  ]
})

const gpuUsageValue = Variable("", {
  poll: [
    5000,
    ['bash', '-c', `nvidia-smi | grep 'Default' | cut -c74-75`],
    out => Math.round(out).toString() + '%'
  ]
})

const ramUsageValue = Variable("", {
  poll: [
    5000,
    ['bash', '-c', `free | grep Mem | awk '{print $3/$2 * 100.0}'`],
    out => Math.round(out).toString() + '%'
  ]
})

function systemBox(icon, value, toolTipText) {
  return Widget.Box({
    tooltipText: toolTipText,
    className: 'cc-sysinfo',
    children: [
      icon,
      Widget.Label({
        justification: 'center',
        label: value,
      })
    ]
  })
}

function rightBox() {
  return Widget.Box({
    hpack: 'center',
    children: [
      systemBox(getTemperatureIcon(36), cpuTempValue.bind(), 'CPU Temps'),
      systemBox(getTemperatureIcon(36), gpuTempValue.bind(), 'GPU Temps'),
    ]
  })
}

function leftBox() {
  return Widget.Box({
    hpack: 'center',
    children: [
      systemBox(getCpuIcon(36), cpuUsageValue.bind(), 'CPU Usage'),
      systemBox(getGpuIcon(36), gpuUsageValue.bind(), 'GPU Usage'),
      systemBox(getRamIcon(36), ramUsageValue.bind(), 'RAM Usage'),
    ]
  })
}


export default function SystemInfo() {
  return Widget.Box({
    hexpand: true,
    vertical: true,
    className: 'cc-sysinfo-container',
    hpack: 'end',
    css: 'min-width: 264px;',
    children: [
      leftBox(),
      rightBox(),
    ]
  })
}
