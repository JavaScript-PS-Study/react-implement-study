import React, { ReactNode } from 'react';
import { createBrowserRouter } from 'react-router-dom';

import App from '@/App';
import * as Switch from '@/pages';
import { PAGE_URL } from '@/config/path';
import { CommonLayout } from '@/components';

interface RouterInfoType {
  path: string;
  element: ReactNode;
  label: string;
}
const RouterInfo: RouterInfoType[] = [
  {
    path: `${PAGE_URL.Main}`,
    element: <Switch.MainPage />,
    label: '메인페이지',
  },
  // {
  //   path: `${PAGE_URL.Todo}`,
  //   element: <Switch.MainPage />,
  //   label: '메인페이지',
  // },
];

const router = createBrowserRouter([
  {
    path: `${PAGE_URL.Main}`,
    element: <App />,
    children: RouterInfo.map((routerInfo) => {
      return {
        element: <CommonLayout />,
        children: [{ path: `${routerInfo.path}`, element: routerInfo.element }],
      };
    }),
  },
]);

export default router;
