import { GalleryFolder } from "../../types/file";

const selectDir = async (): Promise<string> => {
  return await window.electronAPI.selectDir();
};

const getAllFoldersInPathWithCoverPhotoPath = async (newPath: string): Promise<GalleryFolder[]> => {
  const folders = await window.electronAPI.getAllFoldersInPathWithCoverPhotoPath(newPath);
  console.debug(`getAllFoldersInPathWithCoverPhotoPath(): newPath=${newPath}, folders=\n${folders.map((x: any) => x.name).join('\n')}`);
  return folders
};

const readImageAsBase64Src = async (imagePath: string) => {
  console.debug(`readImageAsBase64Src(): imagePath=${imagePath}`);
  return await window.electronAPI.readImageAsBase64Src(imagePath);
};

const openFolder = async (folderPath: string) => {
  console.debug(`openFolder(): folderPath: ${folderPath}`);
  return await window.electronAPI.openFolder(folderPath);
};

export {
  selectDir,
  getAllFoldersInPathWithCoverPhotoPath,
  readImageAsBase64Src,
  openFolder,
};
