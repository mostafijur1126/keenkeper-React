import React from 'react';
import { createBrowserRouter } from 'react-router';
import RootLayout from '../Layout/RootLayout';
import Home from '../components/home/Home';
import Timeline from '../components/timeline/Timeline';
import Stats from '../components/Stats/Stats';
import FriendsDetails from '../components/home/Friends/FriendsDetails';

const router = createBrowserRouter([
  {
    path: "/",
    Component:RootLayout,
    children:[
      {index:true, Component: Home},
      {path:"/:id", Component: FriendsDetails},
      {path:"/timeline", Component:Timeline},
      {path:"/stats", Component:Stats}
    ]
  },
]);

export default router;