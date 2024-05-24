local awful = require("awful")
local gears = require("gears")

local mod_key = require("configuration.keybinds.mod").mod_key
local alt_key = require("configuration.keybinds.mod").alt_key

local function toggleFullscreen(c)
	c.fullscreen = not c.fullscreen
	c:raise()
end

local fullscreen_keybinds = gears.table.join(
	awful.key({ mod_key }, "f", function(c)
		toggleFullscreen(c)
	end, { description = "toggle fullscreen", group = "client" }),
	awful.key({ alt_key }, "Return", function(c)
		toggleFullscreen(c)
	end, { description = "toggle fullscreen", group = "client" })
)

local close_client_keybinds = gears.table.join(
	awful.key({ mod_key }, "q", function(c)
		c:kill()
	end, { description = "close", group = "client" }),
	awful.key({ mod_key, "Shift" }, "c", function(c)
		c:kill()
	end, { description = "close", group = "client" }),
	awful.key({ alt_key }, "F4", function(c)
		c:kill()
	end, { description = "close", group = "client" })
)

local client_keybinds = gears.table.join(close_client_keybinds, fullscreen_keybinds)

return client_keybinds
