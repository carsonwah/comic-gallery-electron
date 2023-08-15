import React, { FC, useState } from 'react';
import { Button } from '@blueprintjs/core';

import NavBar from '../components/NavBar';

const waitForUserSelectDirectory: () => Promise<string> = async () => {
  const dirPath = await window.electronAPI.selectDir();
  return dirPath;
};

const Home: FC = () => {
  const [path, setPath] = useState('');
  return (
    <div className="App">
      <div>{path}</div>
      <Button icon="folder-open" text='Open directory' onClick={async () => {
        const newPath = await waitForUserSelectDirectory();
        setPath(newPath);
      }} />
      <NavBar />
      {/* <CoverCard imageUrl='file:' /> */}
    </div>
  );
};

export default Home;
