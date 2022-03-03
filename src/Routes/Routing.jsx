import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "@/components/Header";
import Home from '@/pages/Home';
import AddCampaign from '@/pages/AddCampaign';

const AllRoutes = [
  {
    path:"/",
    component:<Home />
  },
  {
    path:"/addcampaign",
    component:<AddCampaign />
  }
]

function Routing() {
  
  return (
    (<BrowserRouter basename={import.meta.env.VITE_PUBLIC_URL}>
        <Header />
        <Routes>
          {
            AllRoutes.map(route=> <Route key={route.path} path={route.path} element={route.component} /> )
          }
        </Routes>
  </BrowserRouter>)
  );
}

export default Routing;