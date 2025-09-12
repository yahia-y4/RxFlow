const { app, BrowserWindow } = require("electron");
const path = require("path");
const { spawn } = require("child_process");

let serverProcess;

function createWindow() {
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
      preload: path.join(__dirname, "preload.js"),
    },
  });

  mainWindow.loadFile("dist/index.html");
}

app.whenReady().then(() => {
  // createWindow();

  // if (serverProcess) {
  //   serverProcess.kill();
  // }

serverProcess = spawn('node', [path.join(__dirname, '../server/server.js')], { stdio: 'inherit' });
});

app.on("before-quit", () => {
  console.log("Quitting app, terminating server process...");
  if (serverProcess) serverProcess.kill();
});
