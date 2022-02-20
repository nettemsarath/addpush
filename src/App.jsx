import React from "react";
import { QueryClient, QueryClientProvider } from 'react-query'
import './App.css'


import Routing from "@/Routes/Routing";
const queryClient = new QueryClient()
 
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className='App'>
      
      <Routing />
    </div>
  </QueryClientProvider>
  );
};

export default App;
