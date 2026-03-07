const { contextBridge, ipcRenderer } = require("electron");

contextBridge.exposeInMainWorld("api", {
    getClients: () => ipcRenderer.invoke("get-clients"),
    saveClients: (clients) => ipcRenderer.invoke("save-clients", clients)
});