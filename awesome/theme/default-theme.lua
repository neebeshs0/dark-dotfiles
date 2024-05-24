local gears             = require('gears')

local filesystem        = gears.filesystem
local beautiful         = require('beautiful')

local dpi               = beautiful.xresources.apply_dpi
local theme_dir         = filesystem.get_configuration_dir() .. '/theme'

-- Create theme table
local theme             = {}

-- Font
theme.font              = 'SF Pro 12'

local awesome_overrides = function(theme)
    theme.dir                     = theme_dir

    -- Default wallpaper path
    theme.wallpaper               = theme_dir .. '/wallpaper/perfect-blue-final.png'

    -- Default Font
    theme.font                    = 'SF Pro 12'

    -- System Tray
    theme.systemtray_icon_spacing = dpi(12)

    -- UI Groups
    theme.groups_radius           = dpi(16)

    -- Borders
    theme.border_width            = dpi(2)
    theme.border_radius           = dpi(12)

    -- Decorations
    theme.useless_gap             = dpi(8)
    theme.client_shape_rectangle  = gears.shape.rounded_rect
    theme.client_shape_rounded    = function(cr, width, height)
        gears.shape.rounded_rect(cr, width, height, dpi(12))
    end

    -- Menu
    theme.menu_font               = 'SF Pro 11'
    theme.menu_height             = dpi(34)
    theme.menu_width              = dpi(200)
    theme.menu_border_width       = dpi(20)

    -- Tooltips
    theme.tooltip_gaps            = dpi(5)
end

return {
    theme = theme,
    awesome_overrides = awesome_overrides
}
