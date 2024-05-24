local gears = require('gears')
local beautiful = require('beautiful')

-- Set client/window border radius here
local border_radius = 12
client.connect_signal(
    "manage",
    function(c)
        c.shape = function(cr, w, h)
            gears.shape.rounded_rect(cr, w, h, border_radius)
        end
    end
)

-- Change border color on focus change
client.connect_signal(
    "focus",
    function(c)
        c.border_color = beautiful.border_focus
    end
)
client.connect_signal(
    "unfocus",
    function(c)
        c.border_color = beautiful.border_normal
    end
)

-- Enable sloppy focus, so that focus follows mouse.
client.connect_signal("mouse::enter",
    function(c)
        c:emit_signal(
            "request::activate",
            "mouse_enter",
            { raise = false })
    end
)
