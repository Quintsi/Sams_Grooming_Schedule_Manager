const path = require("path");
const { app, BrowserWindow, ipcMain } = require('electron')

const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600
  })

  win.loadFile(path.join(__dirname, 'index.html'))

  createChildWindow(win);
}

app.whenReady().then(() => {
  createWindow()
})

const createChildWindow = (window) => {
  const childWindow = new BrowserWindow({
    width: 400,
    height: 300,
    parent: window,
    modal: true,
    show: false,
    webPreferences: {
      preload: path.join(__dirname, "preload.js"),
      nodeIntegration: false,
      contextIsolation: true
    }
  });

  childWindow.loadFile("addClient.html");

  childWindow.once("ready-to-show", () => {
    childWindow.show()
  });

  childWindow.on("closed", () => {
    //TODO:
    //preform clean-up operations
  });

};

// Example IPC handler to open the window from the renderer
//ipcMain.on('open-child-window', (event, arg) => {
//  createChildWindow();
//});

// ... your existing mainWindow creation code ...