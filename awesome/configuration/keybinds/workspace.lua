local awful = require("awful")

local workspace_keys = awful.util.table.join(awful.key({ modkey }, "a", function()
	awful.layout.set(awful.layout.suit.corner.nw)
	for _, c in ipairs(client.get()) do
		if c.maximized then
			c.maximized = not c.maximized
			c:raise()
		end
	end
end, { description = "show all open windows of workspace", group = "client" }))

return workspace_keys
