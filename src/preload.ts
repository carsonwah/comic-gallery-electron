// See the Electron documentation for details on how to use preload scripts:
// https://www.electronjs.org/docs/latest/tutorial/process-model#preload-scripts
const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('electronAPI', {
  selectDir: () => ipcRenderer.invoke('dialog:selectDir'),
  getAllFoldersInPathWithCoverPhotoPath: (folderPath: string) => ipcRenderer.invoke('file:getAllFoldersInPathWithCoverPhotoPath', { folderPath }),
  readImageAsBase64Src: (folderPath: string) => ipcRenderer.invoke('file:readImageAsBase64Src', { folderPath }),
  openFolder: (folderPath: string) => ipcRenderer.invoke('file:openFolder', { folderPath }),
});
