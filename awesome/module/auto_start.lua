local awful = require("awful")

-- Using a script so that the apps don't launch again when reloading Awesomewm
awful.spawn.with_shell("~/.config/awesome/util/autostart.sh")
