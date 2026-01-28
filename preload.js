const { contextBridge, ipcRenderer } = require("electon");

contextBridge.exposeInMainWorld("api", {
    openAddClient: () => ipcRenderer.send("open-add-client")
});