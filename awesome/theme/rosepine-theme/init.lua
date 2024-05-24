local filesystem = require('gears.filesystem')
local theme_dir  = filesystem.get_configuration_dir() .. '/theme'


-- Rose-Pine & Rose-Pine Dawn (light version) Colors

-- base for main and accessory panels — application frames, sidebars, tabs, and extensions to the focal context
local base                = '#191724'
local base_dawn           = '#faf4ed'
-- surface for panels that are not directly related to the focal context - cards, input and statusline
local surface             = '#1f1d2e'
local surface_dawn        = '#fffaf3'
-- overlay for panels that are more temporary in nature - popovers, notifications and dialogs
local overlay             = '#26233a'
local overlay_dawn        = '#f2e9e1'
-- muted for ignored content - disabeld elements and unfocused text
local muted               = '#6e6a86'
local muted_dawn          = '#9893a5'
-- subtle for secondary content - comments, punctuation and tab names
local subtle              = '#908caa'
local subtle_dawn         = '#797593'
-- text for primary content - normal text, variables, and active contents
local text                = '#e0def4'
local text_dawn           = '#575279'

-- love for diagnostic errors, deleted git files, Terminal red, bright red
local love                = '#eb6f92'
local love_dawn           = '#b4637a'
-- gold for diagnostic warnings, Terminal yellow, bright yellow
local gold                = '#f6c177'
local gold_dawn           = '#ea9d34'
-- rose for matching search background paired with base foreground, modified git files, Terminal cyan, bright cyan
local rose                = '#ebbcba'
local rose_dawn           = '#d7827e'
-- pine for renamed git files, Terminal green, bright green
local pine                = '#31748f'
local pine_dawn           = '#286983'
-- foam for diagnostic information, git addition, Terminal blue, bright blue
local foam                = '#9ccfd8'
local foam_dawn           = '#56949f'
-- iris for diagnostic hints, inline links, merged and staged git modifications, Terminal magenta, bright magenta
local iris                = '#c4a7e7'
local iris_dawn           = '#907aa9'

-- highlightLow for cursorline background
local highlight_low       = '#21202e'
local highlight_low_dawn  = '#f4ede8'
-- highlightMed for selection background paired with text foreground
local highlight_med       = '#403d52'
local highlight_med_dawn  = '#dfdad9'
-- highlightHigh for broders or visual dividers, cursorline background paired with text
local highlight_high      = '#524f67'
local highlight_high_dawn = '#cecacd'


-- Create theme table
local theme                = {}
theme.font                 = 'SF Pro 12'
theme.dir                  = theme_dir

-- Colorscheme
theme.system_black_dark    = base
theme.system_black_light   = base_dawn

theme.system_red_dark      = love
theme.system_red_light     = love_dawn

theme.system_green_dark    = pine
theme.system_green_light   = pine_dawn

theme.system_yellow_dark   = gold
theme.system_yellow_light  = gold_dawn

theme.system_blue_dark     = foam
theme.system_blue_light    = foam_dawn

theme.system_magenta_dark  = iris
theme.system_magenta_light = iris_dawn

theme.system_cyan_dark     = rose
theme.system_cyan_light    = rose_dawn

theme.system_white_dark    = text
theme.system_white_light   = text_dawn

-- Background color
theme.background           = base
theme.background_light     = base_dawn

-- Transparent
theme.transparent          = muted

local awesome_overrides    = function(theme)
    theme.dir                      = theme_dir

    -- Foreground
    theme.fg_normal                = subtle
    theme.fg_focus                 = text
    theme.fg_urgent                = love

    theme.bg_normal                = theme.background
    theme.bg_focus                 = overlay
    theme.bg_urgent                = highlight_med

    -- Borders
    theme.border_focus             = pine
    theme.border_normal            = base
    theme.border_marked            = base

    -- System tray
    theme.bg_systray               = theme.background
    theme.tooltip_border_color     = theme.transparent

    -- Notification
    theme.notification_position    = 'top_left'
    theme.notification_bg          = overlay

    -- Hotkey popup
    theme.hotkeys_font             = 'SF Pro'
    theme.hotkeys_description_font = 'SF Pro'
    theme.hotkeys_bg               = theme.background
end

return {
    theme = theme,
    awesome_overrides = awesome_overrides
}
