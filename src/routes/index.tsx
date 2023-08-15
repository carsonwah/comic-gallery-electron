import { createHashRouter } from "react-router-dom";

import Home from "../containers/Home";

const router = createHashRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '*',
    element: <div>Not Found</div>,
  },
]);

export default router;
