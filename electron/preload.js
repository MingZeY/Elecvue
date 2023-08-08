const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld(
  'electron',
  {
    // 暴露 ipcRanderer ，
    ipcRenderer: {
      send: (channel, data) => ipcRenderer.send(channel, data),
      on: (channel, func) => {
        const validChannels = ['default']; // 定义合法的通道名字 提供 ['default'] 通道用于主进程接受并操作，这里还可以定义更多的通道
        if (validChannels.includes(channel)) {
          // 将原始的事件对象剥离，因为它包含了许多不应该在渲染进程中访问的元数据
          ipcRenderer.on(channel, (event, ...args) => func(...args));
        }
      }
    }
  }
);
