import fs from 'fs';
import path from 'path';
import { dialog, shell } from 'electron';

import type { GalleryFolder } from '../types/file';

const SUPPORTED_IMAGE_TYPES = ['.jpg', '.png'];

const handleUserSelectDir: () => Promise<string> = async () => {
  const { canceled, filePaths } = await dialog.showOpenDialog({ properties: ['openDirectory'] });
  if (!canceled) {
    return filePaths[0]
  }
  return '';
}

const getCoverPhotoPathForFolder = async (folder: GalleryFolder): Promise<GalleryFolder> => {
  console.debug(`getCoverPhotoPathForFolder(): Processing folder: ${folder.name}`);
  const filesInFolder = await fs.promises.readdir(folder.path, { encoding: 'utf-8', withFileTypes: true });
  console.debug(`getCoverPhotoPathForFolder(): filesInFolder: ${filesInFolder.map(x => x.name).join(',')}`);
  if (filesInFolder.length === 0) return folder;
  const firstFile = filesInFolder[0];
  const firstFileExtension = path.extname(firstFile.name);
  console.debug(`getCoverPhotoPathForFolder(): firstFileExtension: ${firstFileExtension}`);
  if (!SUPPORTED_IMAGE_TYPES.includes(firstFileExtension)) return folder;
  const coverPhotoPath = path.join(folder.path, firstFile.name);
  console.debug(`getCoverPhotoPathForFolder(): Folder has cover photo: ${coverPhotoPath}`);
  const coverPhotoBase64 = await readImageAsBase64Src(coverPhotoPath);
  return {
    name: folder.name,
    path: folder.path,
    coverPhotoPath: coverPhotoBase64,
  }
};

const getAllFoldersInPathWithCoverPhotoPath = async (folderPath: string): Promise<GalleryFolder[]> => {
  const files = await fs.promises.readdir(folderPath, { encoding: 'utf-8', withFileTypes: true });
  const dirItems: GalleryFolder[] = files
    .filter(dirent => dirent.isDirectory())
    .map(dirent => ({ name: dirent.name, path: path.join(folderPath, dirent.name) }));
  return await Promise.all(dirItems.map(folder => getCoverPhotoPathForFolder(folder)));
};

const readImageAsBase64Src = async (filePath: string): Promise<string> => {
  console.debug(`readImageAsBase64Src(): Reading image path: ${filePath}`);
  const extension = path.extname(filePath);
  if (!SUPPORTED_IMAGE_TYPES.includes(extension)) {
    console.warn(`Unsupported path: ${filePath}`);
    return '';
  }
  const imageContentBase64 = (await fs.promises.readFile(filePath)).toString('base64');
  const result = `data:image/${extension};base64,${imageContentBase64}`;
  return result;
};

const openFolder = async (folderPath: string) => {
  await shell.openPath(folderPath);
};

export {
  handleUserSelectDir,
  getAllFoldersInPathWithCoverPhotoPath,
  readImageAsBase64Src,
  openFolder,
};
