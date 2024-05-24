local awful = require("awful")
local beautiful = require("beautiful")

local mod_key = require("configuration.keybinds.mod").mod_key
local alt_key = require("configuration.keybinds.mod").alt_key

-- Keybindings
local global_keybinds = awful.util.table.join(

	-- Close client/window
	awful.key({ mod_key }, "q")
)

return global_keybinds
