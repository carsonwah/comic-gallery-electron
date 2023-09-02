import React, { CSSProperties, FC, useState } from 'react';
import { Button } from '@blueprintjs/core';

import type { GalleryFolder } from '../../types/file';
import CoverCard from '../components/CoverCard';
import { getAllFoldersInPathWithCoverPhotoPath, selectDir, openFolder } from '../api/electron-backend';

const waitForUserSelectDirectory: () => Promise<string> = async () => {
  const dirPath = await selectDir();
  console.info(`Selected directory path: ${dirPath}`);
  return dirPath;
};

const Home: FC = () => {
  const [path, setPath] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [folders, setFolders] = useState<GalleryFolder[]>([]);

  const onChangeDirectory = async (newPath: string) => {
    console.debug(`onChangeDirectory(): started`);
    if (!newPath) return;
    setPath(newPath);
    setFolders([]);
    const newFolders = await getAllFoldersInPathWithCoverPhotoPath(newPath);
    setFolders(newFolders);
  };

  const onClickSelectDirectory = async () => {
    console.debug(`onClickSelectDirectory(): started`);
    const newPath = await waitForUserSelectDirectory();
    setIsLoading(true);
    await onChangeDirectory(newPath);
    setIsLoading(false);
  };

  const onClickFolder = async (folder: GalleryFolder) => {
    console.debug(`onClickFolder(): folder.path=${folder.path}`);
    await openFolder(folder.path);
  };

  return (
    <div style={styles.pageContainer}>
      <div style={styles.row}>Current Directory: {path}</div>
      <div style={styles.row}>
        <Button icon="folder-open" text='Select directory' onClick={onClickSelectDirectory} />
      </div>
      <div style={styles.row}>
        { isLoading && <div>Loading...</div> }
      </div>
      {/* <NavBar filePath={} onClickChangePath={} /> */}
      <div style={styles.cardArea}>
        {
          folders.map(folder => (
            <CoverCard key={folder.name} imageUrl={folder.coverPhotoPath} title={folder.name} onClick={() => onClickFolder(folder)} />
          ))
        }
      </div>
    </div>
  );
};

const styles: {[key: string]: CSSProperties} = {
  pageContainer: {
    maxWidth: 1200,
    minWidth: 700,
    overflowX: 'visible',
  },
  row: {
    marginTop: 8,
  },
  cardArea: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 8,
  },
};

export default Home;
