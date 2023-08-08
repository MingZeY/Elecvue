const { app, BrowserWindow } = require('electron');
const { spawn } = require('child_process');
const path = require('path');

const createWindow = () => {
    const win = new BrowserWindow({
      width: 800,
      height: 600,
      webPreferences:{
        nodeIntegration:true
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