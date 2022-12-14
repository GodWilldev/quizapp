const { app, BrowserWindow } = require('electron');
const path = require('path');

//const path = require('path')
//var {PythonShell} =  require('python-shell');
//const isDev = require('electron-is-dev')

require('@electron/remote/main').initialize();

function createWindow() {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    icon: __dirname + './icon.ico',
    webPreferences: {
      nodeIntegration: true,
      enableRemoteModule: true
    }
  })
  mainWindow.removeMenu();

  //mainWindow.loadFile(path.join(__dirname, '../build/index.html'))
  
  mainWindow.loadURL(
    //'http://localhost:3000'
    `file://${path.join(__dirname, '../build/index.html')}`
  );

  mainWindow.webContents.on('new-window', function(e, url) {
    e.preventDefault();
    require('electron').shell.openExternal(url);
  });

}

app.on('ready', createWindow)

// Quit when all windows are closed.
app.on('window-all-closed', function () {
  // On OS X it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', function () {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (BrowserWindow.getAllWindows().length === 0) createWindow()
})
