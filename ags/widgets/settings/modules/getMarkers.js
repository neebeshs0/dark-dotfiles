export const evenMarker = (length) => {
  const markers = []
  for (let i = 0; i <= length; i += 2) {
    markers.push([i, `${i}`, 'bottom'])
  }
  return markers
}

export const decimalMarker = (length) => {
  const markers = []
  for (let i = 0; i <= length; i += 0.2) {
    markers.push([i, `${Math.round(i * 100) / 100}`, 'bottom'])
  }
  return markers
}
