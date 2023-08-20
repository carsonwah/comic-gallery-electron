import React, { FC, useState } from 'react';
import { Button } from '@blueprintjs/core';

import NavBar from '../components/NavBar';
import type { GalleryFolder } from '../../types/file';
import CoverCard from '../components/CoverCard';
import { getAllFoldersInPathWithCoverPhotoPath, selectDir, readImageAsBase64Src, openFolder } from '../api/electron-backend';

const waitForUserSelectDirectory: () => Promise<string> = async () => {
  const dirPath = await selectDir();
  console.info(`Selected directory path: ${dirPath}`);
  return dirPath;
};

const Home: FC = () => {
  const [path, setPath] = useState('');
  const [folders, setFolders] = useState<GalleryFolder[]>([]);

  const onChangeDirectory = async (newPath: string) => {
    console.debug(`onChangeDirectory(): started`);
    setPath(newPath);
    const newFolders = await getAllFoldersInPathWithCoverPhotoPath(newPath);
    setFolders(newFolders);
  };

  const onClickSelectDirectory = async () => {
    console.debug(`onClickSelectDirectory(): started`);
    const newPath = await waitForUserSelectDirectory();
    onChangeDirectory(newPath);
  };

  const onClickFolder = async (folder: GalleryFolder) => {
    console.debug(`onClickFolder(): folder.path=${folder.path}`);
    await openFolder(folder.path);
  };

  return (
    <div className="App">
      <div>{path}</div>
      <Button icon="folder-open" text='Select directory' onClick={onClickSelectDirectory} />
      {/* <NavBar filePath={} onClickChangePath={} /> */}
      {/* <CoverCard imageUrl='file:' /> */}
      {
        folders.map(folder => (
          <CoverCard key={folder.name} imageUrl={folder.coverPhotoPath} title={folder.name} onClick={() => onClickFolder(folder)} />
        ))
      }
    </div>
  );
};

export default Home;
