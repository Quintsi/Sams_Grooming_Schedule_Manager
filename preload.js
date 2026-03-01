const { contextBridge, ipcRenderer } = require("electron");

contextBridge.exposeInMainWorld("api", {
    openAddClient: () => ipcRenderer.send("open-add-client")
});