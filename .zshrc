# If not running interactively, don't do anything
[[ $- != *i* ]] && return

# Rose pine colors
if [ "$TERM" = "linux" ]; then
	/bin/echo -e "
	\e]P0#191724
	\e]P1#eb6f92
	\e]P2#9ccfd8
	\e]P3#f6c177
	\e]P4#31748f
	\e]P5#c4a7e7
	\e]P6#ebbcba
	\e]P7#e0def4
	\e]P8#26233a
	\e]P9#eb6f92
	\e]PA#9ccfd8
	\e]PB#f6c177
	\e]PC#31748f
	\e]PD#c4a7e7
	\e]PE#ebbcba
	\e]PF#e0def4
	"
	# get rid of artifacts
	clear
fi

if [ -e $HOME/.zsh_aliases ]; then
    source $HOME/.zsh_aliases
fi

# Download Znap, if it's not there yet.
[[ -r ~/Repos/znap/znap.zsh ]] ||
    git clone --depth 1 -- \
        https://github.com/marlonrichert/zsh-snap.git ~/Repos/znap
source ~/Repos/znap/znap.zsh  # Start Znap

znap install aureliojargas/clitest zsh-users/zsh-completions
znap install zsh-users/zsh-autosuggestions
znap install Aloxaf/fzf-tab
znap install zsh-users/zsh-syntax-highlighting
znap source zsh-users/zsh-syntax-highlighting
znap source zsh-users/zsh-autosuggestions
znap source zsh-users/zsh-completions
znap source Aloxaf/fzf-tab

# Command History
HITSIZE=8000
HISTFILE=~/.zsh_history
SAVEHIST=$HITSIZE
HISTDUP=erase
setopt appendhistory
setopt sharehistory
setopt hist_ignore_space
setopt hist_ignore_space
setopt hist_ignore_all_dups
setopt hist_save_no_dups
setopt hist_ignore_dups

# Keybinds
bindkey -v
bindkey '^p' history_search_backward
bindkey '^n' history_search_forward

# Completion Styling
zstyle ':completion:*' matcher-list 'm:{a-z}={A-Za-z}'
zstyle ':completion:*' list-colors '${(s.:.)LS_COLORS}'
zstyle ':completion:*' menu no
zstyle ':fzf-tab:complete:cd:*' fzf-preview 'eza -1 --color $realpath'
zstyle ':fzf-tab:complete:__zoxide_z:*' fzf-preview 'eza -1 --color $realpath'

# Shell integration
eval "$(starship init zsh)"
eval "$(fzf --zsh)"
eval "$(zoxide init --cmd cd zsh)"


# Flutter enviroment variables
export ANDROID_HOME=$HOME/android-sdk
export PATH="/usr/bin/flutter/bin:$PATH"
export PATH=$PATH:$ANDROID_HOME/platform-tools
export JAVA_HOME=/usr/lib/jvm/java-17-openjdk
export CHROME_EXECUTABLE=/opt/google/chrome/chrome
# Spicetify enviroment variables
export PATH=$PATH:/home/snafu/.spicetify


alias ls='ls -a --color=auto'
alias grep='grep --color=auto'
