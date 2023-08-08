const { app, BrowserWindow, ipcMain } = require('electron');
const { spawn } = require('child_process');
const path = require('path');

const createWindow = () => {
    const win = new BrowserWindow({
      width: 800,
      height: 600,
      webPreferences:{
        nodeIntegration:true,
        preload:path.join(__dirname,'preload.js'),//通过 perload scrpit 暴露 ipcRanderer 给该窗口，详见 preload.js
      }
    });
    if(process.env.NODE_ENV == 'development'){
        // 启动vite
        let vite = spawn('node', ['./node_modules/vite/bin/vite.js'], { cwd: path.join(__dirname,'../vue'), encoding: 'utf8' });
        vite.stdout.pipe(process.stdout);

        win.loadURL(`http://localhost:10600`);
        win.webContents.openDevTools();
    }else{
        win.loadFile('./dist/index.html');
    }
}


app.whenReady().then(() => {
    createWindow();
});

ipcMain.on('default',(event,arg) => {
  console.log(arg);
  const stackTrace = {};
  Error.captureStackTrace(stackTrace);
  console.log(stackTrace.stack.replace('Error','Hello Trace'));
});
