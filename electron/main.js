const { app } = require('electron')

function App() {
    const window = require('./createWindow.js');
    const tray = require('./tray.js');

    tray.on('click', () => {
        if (window.isVisible()) window.hide()
        else {
            window.show()
            window.focus()
        }
    })
}

app.whenReady().then(App)

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit()
    }
})

// app.dock.hide()
