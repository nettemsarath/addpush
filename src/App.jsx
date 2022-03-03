import React from "react";
import { QueryClient, QueryClientProvider } from 'react-query'
import './App.css'


import Routing from "@/Routes/Routing";
const queryClient = new QueryClient()

function App() {
  console.log("VITE_APP", import.meta.env.VITE_PUBLIC_URL);
  return (
    <QueryClientProvider client={queryClient}>
      <div className='App'>
      
      <Routing />
    </div>
  </QueryClientProvider>
  );
};

export default App;
