import { dialog } from 'electron';

export const handleUserSelectDir: () => Promise<string> = async () => {
  const { canceled, filePaths } = await dialog.showOpenDialog({ properties: ['openDirectory'] });
  if (!canceled) {
    return filePaths[0]
  }
  return '';
}
