const { BrowserWindow } = require("electron");

function createWindow(params) {

    const win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true
        }
    })

    win.loadFile('index.html')

    return win;

}

module.exports = createWindow()