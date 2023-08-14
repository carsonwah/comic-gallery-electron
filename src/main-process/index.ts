import { ipcMain } from "electron";
import { handleUserSelectDir } from "./file";

const registerHandlers = () => {
  ipcMain.handle('dialog:selectDir', handleUserSelectDir);
};

export {
  registerHandlers,
};
