const { app, BrowserWindow } = require('electron/main');
const { ipcMain } = require("electron");
const fs = require("fs");
const path = require("path");

const dataPath = path.join(__dirname, "data", "clients.json");

ipcMain.handle("get-clients", async () => {
  const data = fs.readFileSync(dataPath, "utf8");
  return JSON.parse(data);
});

ipcMain.handle("save-clients", async (event, clients) => {
  fs.writeFileSync(dataPath, JSON.stringify(clients, null, 2));
});

const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600
  })

  win.loadFile('renderer/app.html')
}

app.whenReady().then(() => {
  createWindow()

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow()
    }
  })
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})