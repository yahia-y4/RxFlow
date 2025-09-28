const { contextBridge, ipcRenderer } = require("electron");

let SERVER_PORT = null;

ipcRenderer.on("server-port", (event, port) => {
  SERVER_PORT = port;
});

contextBridge.exposeInMainWorld("electronAPI", {
  getServerPort: () => SERVER_PORT,
  waitForServerPort: () => {
    return new Promise((resolve) => {
      if (SERVER_PORT) {
        resolve(SERVER_PORT);
      } else {
        ipcRenderer.once("server-port", (event, port) => {
          resolve(port);
        });
      }
    });
  },
});
