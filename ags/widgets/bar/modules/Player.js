import { getNextIcon, getBackIcon } from "../../utils/GetIcon.js"

const mpris = await Service.import('mpris')
const spotify = mpris.getPlayer('spotify')
const pauseIcon = "media_pause-symbolic"
const playIcon = "media_play-symbolic"
const iconSize = 24

function getNextButton() {
  return Widget.Button({
    class_name: 'song-button',
    hpack: "end",
    on_primary_click: () => {
      const player = spotify || mpris.getPlayer()
      if (!player) return
      player.next()
    },
    child: getNextIcon()
  })
}

function getPlayPauseButton() {
  return Widget.Button({
    class_name: 'song-button',
    on_primary_click: () => {
      const player = spotify || mpris.getPlayer()
      if (!player) return
      player.playPause()
    },
    child: Widget.Icon().hook(mpris, self => {
      self.size = iconSize
      const player = spotify || mpris.getPlayer()
      if (!player) return
      const playStatus = player.play_back_status
      if (playStatus === "Playing") {
        self.icon = pauseIcon
      } else if (playStatus === "Paused") {
        self.icon = playIcon
      }
    })

  })
}

function getBackButton() {
  return Widget.Button({
    class_name: 'song-button',
    hpack: "start",
    on_primary_click: () => {
      const player = spotify || mpris.getPlayer()
      if (!player) return
      player.previous()
    },
    child: getBackIcon()
  })

}

export function PlayerSong() {
  return Widget.Label({
    max_width_chars: 48,
    truncate: 'end',
    class_name: 'song-title',
  }).hook(mpris, self => {
    const player = spotify || mpris.getPlayer()
    if (!player) return
    self.label = player?.track_title + " - " + player?.track_artists;
  })
}

export function PlayerButtons() {
  return Widget.Box({
    class_name: 'player-container',
    children: [
      getBackButton(),
      getPlayPauseButton(),
      getNextButton(),
    ]
  })
}
