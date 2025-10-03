const { app, BrowserWindow } = require("electron");
const server = require('../server/server.js');
const path = require("path");

const port = 0; // 0 = بورت عشوائي
let serverPort;
let listener;

const preloadPath = path.join(__dirname, "preload.js");
console.log(preloadPath);

function createWindow() {
  const mainWindow = new BrowserWindow({
    width: 1000,
    height: 800,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: true,
      preload: preloadPath,
    },
  });

  // أرسل البورت للعالم الخارجي بعد أن تفتح النافذة
  mainWindow.webContents.once('dom-ready', () => {
    mainWindow.webContents.send('server-port', serverPort);
  });

  mainWindow.loadURL(`http://localhost:3000`);
  console.log("Window opened on port 3000");
}

// تحويل createServer إلى Promise
function createServer() {
  return new Promise((resolve, reject) => {
     listener = server.listen(port, () => {
      serverPort = listener.address().port;
      console.log(`Server running on port ${serverPort}`);
      resolve();
    });
    listener.on('error', reject);
  });
}

async function startApp() {
 try {
    await createServer(); // حاول تشغيل السيرفر
    createWindow();       // فقط إذا نجح السيرفر افتح النافذة
  } catch (error) {
    console.error("Application will not start because server failed:", error);
    app.quit();           // أو يمكنك ترك التطبيق مفتوح مع رسالة خطأ
  }
}

app.whenReady().then(startApp);
app.on('before-quit', () => {
  listener.close(() => {
    console.log('Server closed');
  });
});
app.on('window-all-closed', () => {
  app.quit(() => {
    console.log('Application quit');
  });
});
