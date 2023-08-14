import React, { useState } from 'react';
import './App.scss';
import NavBar from './components/NavBar';
import CoverCard from './components/CoverCard';
import { Button } from '@blueprintjs/core';

const waitForUserSelectDirectory: () => Promise<string> = async () => {
  const dirPath = await window.electronAPI.selectDir();
  return dirPath;
};

function App() {
  const [path, setPath] = useState('');
  return (
    <div className="App">
      <div>{path}</div>
      <Button icon="folder-open" title='Open directory' onClick={async () => {
        const newPath = await waitForUserSelectDirectory();
        setPath(newPath);
      }} />
      <NavBar />
      {/* <CoverCard imageUrl='file:' /> */}
    </div>
  );
}

export default App;
