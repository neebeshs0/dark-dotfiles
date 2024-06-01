

export function getConfigBoolean(section, title) {
  const configBoolean = Variable('', {
    listen: [
      ['bash',
        '-c',
        `hyprctl getoptions ${section}:${title} | cut -c6-10`],
      (out) => `${out.trim()}`
    ]
  })

  return configBoolean
}

export function getConfigIntValue(section, title) {
  return Variable('', {
    listen: [
      [
        'bash',
        '-c',
        `hyprctl getoptions ${section}:${title} | grep -m1 "" | rev | cut -c1-2 | rev`],
      (out) => `${out.trim()}`
    ]
  })
}

export function getConfigFloatValue(section, title) {
  return Variable('', {
    listen: [
      [
        'bash',
        '-c',
        `hyprctl getoptions ${section}:${title} | grep -m1 "" | rev | cut -c1-8 | rev`],
      (out) => `${out.trim()}`
    ]
  })
}
