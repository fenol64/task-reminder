const { Tray } = require('electron')
const { resolve } = require('path')

function createTray() {

    let icon_path = resolve(__dirname, "../", "assets", "icon.png")

    const tray = new Tray(icon_path)
    tray.setToolTip("SELECTS POP UP")

    return tray;
}

module.exports = createTray()