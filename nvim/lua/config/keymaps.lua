-- Keymaps are automatically loaded on the VeryLazy event
-- Default keymaps that are always set: https://github.com/LazyVim/LazyVim/blob/main/lua/lazyvim/config/keymaps.lua
-- Add any additional keymaps here

local map = vim.keymap.set

-- Save key strokes (now we do not need to press shift to enter command mode).
map({ "n", "x" }, ";", ":")

-- Start an external command with a single bang
map("n", "!", ":!", { desc = "Execute Shell Command" })

-- Use 'jk' to exit insert mode
map("i", "jk", "<Esc>")

--Insert a new line without entering insert mode
map("n", "<leader>o", "m`o<Esc>``", { desc = "Insert line below" })
map("n", "<leader>O", "m`O<Esc>``", { desc = "Insert line above" })
