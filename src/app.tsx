import React, { FC } from 'react';
import { RouterProvider } from 'react-router-dom';

import './App.scss';
import router from './routes';

const App: FC = () => (
  <RouterProvider router={router} />
)

export default App;
