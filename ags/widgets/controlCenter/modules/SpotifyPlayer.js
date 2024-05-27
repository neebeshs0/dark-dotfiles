const mpris = await Service.import('mpris')
const iconSize = 24

// importing from GetIcon.js creates an error with the player being null 
// or something like that :/
App.addIcons(`${App.configDir}/assets`)
function spotifyIcon() {
  return Widget.Icon({
    size: iconSize,
    icon: 'spotify-icon-symbolic'
  })
}

function trackInfo(player) {
  const trackName = Widget.Label({
    class_name: 'cc-track-name',
    label: player !== null ? player.bind('track_title') : '',
    justification: "left",
    truncate: 'end',
    xalign: 0,
  })

  const artistsName = Widget.Label({
    class_name: 'cc-artist-name',
    label: player !== null ? player.bind('track_artists').as(artists => artists.join(', ')) : '',
    justification: "left",
    truncate: 'end',
    xalign: 0,
  })

  return Widget.Box({
    class_name: 'cc-track-info', vertical: true, children: [trackName, artistsName,]
  })
}

function playPauseButton(player) {
  return Widget.Button({
    class_name: 'cc-play-pause',
    on_clicked: () => player.playPause(),
    child: Widget.Icon({
      size: iconSize,
      icon: player.bind('play_back_status')
        .transform(self => {
          if (self === 'Playing') {
            return "media_pause-symbolic"
          }
          return 'media_play-symbolic'
        })
    })
  }).hook(mpris, self => {
    const playStatus = player.play_back_status
    if (playStatus === "Playing") {
      self.css = 'border-radius: 12px;'
    } else if (playStatus === "Paused") {
      self.css = 'border-radius: 100%; padding: 4px 10px; '
    }
  })
}

function previousButton(player) {
  return Widget.Button({
    class_name: 'cc-song-button',
    hpack: "start",
    on_primary_click: () => {
      player.previous()
    },
    child: Widget.Icon({
      size: iconSize,
      icon: "media_skip_back-symbolic"
    })
  })
}

function positionSlider(player) {
  return Widget.Slider({
    class_name: 'spotify-slider',
    hexpand: true,
    draw_value: false,
    on_change: ({ value }) => player.position = value * player.length, visible: player.bind('length').as(l => l > 0),
    setup: self => {
      function update() {
        const value = player.position / player.length
        self.value = value > 0 ? value : 0
      }
      self.hook(player, update)
      self.hook(player, update, 'position')
      self.poll(1000, update)
    }
  })
}

function nextButton(player) {
  return Widget.Button({
    class_name: 'cc-song-button',
    hpack: "end",
    on_primary_click: () => {
      if (!player) return
      player.next()
    },
    child: Widget.Icon({
      size: iconSize,
      icon: "media_skip_next-symbolic",
    })
  })
}

function shuffleButton(player) {
  return Widget.Button({
    class_name: 'cc-song-button', on_clicked: () => player.shuffle(),
    child: Widget.Icon('media_shuffle-symbolic').hook(mpris, self => {
      self.size = 24
      const shuffleStatus = player.shuffle_status
      if (shuffleStatus === null) { self.visible = false }
      if (!shuffleStatus) {
        self.css = 'color: #6e6a86;'
      } else {
        self.css = 'color: #e0def4;'
      }
    })
  })
}

function loopButton(player) {
  return Widget.Button({
    class_name: 'cc-song-button',
    onClicked: () => player.loop(),
    child: Widget.Icon({
      size: 24,
      icon: player.bind("loop-status").as(status => {
        if (status === 'Track')
          return 'media_repeat_one-symbolic'
        return 'media_repeat-symbolic'
      }),
      visible: player.bind("loop-status").as(status => status != null),
      class_name: player.bind("loop-status").as(status => (status !== "None") ? 'loop-button-active' : 'loop-button-none'),
    }),
  })
}

function Top() {
  return Widget.Box({
    children: [
      spotifyIcon()
    ]
  })
}

function Center(player) {
  return Widget.CenterBox({
    hexpand: true,
    startWidget: trackInfo(player),
    endWidget: playPauseButton(player),
  })
}

function Bottom(player) {
  return Widget.Box({
    hexpand: true,
    children: [
      previousButton(player),
      positionSlider(player),
      nextButton(player),
      shuffleButton(player),
      loopButton(player)
    ]
  })
}

export default function SpotifyPlayer() {
  const spotify = mpris.getPlayer('spotify') || mpris.players[0] || null

  const spotifyNotOpen = Widget.Box({
    children: [
      Widget.Label('Spotify is not open :[')
    ]
  })

  const spotifyContainer = Widget.CenterBox({
    class_name: 'spotify-container',
    hexpand: true,
    vertical: true,
    spacing: 12,
    css: spotify !== null ? spotify.bind('cover_path').transform(path =>
      `background: linear-gradient(
          rgba(0, 0, 0, 0.7), 
          rgba(0, 0, 0, 0.7)
        ),url('${path}'); 
      background-position: center; 
      background-size: cover; 
      background-repeat: no-repeat;`) : 'background: #26233a;',
    startWidget: Top(),
    centerWidget: Center(spotify),
    endWidget: Bottom(spotify)
  })

  if (spotify !== null) { return spotifyContainer }
  return spotifyNotOpen
}
