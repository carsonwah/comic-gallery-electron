import { ipcMain } from "electron";
import { handleUserSelectDir, getAllFoldersInPathWithCoverPhotoPath, readImageAsBase64Src, openFolder } from "./file";

const registerHandlers = () => {
  ipcMain.handle('dialog:selectDir', handleUserSelectDir);
  ipcMain.handle('file:getAllFoldersInPathWithCoverPhotoPath', (event, { folderPath }) => getAllFoldersInPathWithCoverPhotoPath(folderPath));
  ipcMain.handle('file:readImageAsBase64Src', (event, { folderPath }) => readImageAsBase64Src(folderPath));
  ipcMain.handle('file:openFolder', (event, { folderPath }) => openFolder(folderPath));
};

export {
  registerHandlers,
};
