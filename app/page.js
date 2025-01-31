'use client'

import { useEffect, useState } from 'react';
import Login from './components/Login';
import User from './components/User';
import { createTheme, CssBaseline, ThemeProvider } from '@mui/material';


export default function Home() {

  const [loggin,setLoggin] = useState(false);

  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
    },
  });


  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      {loggin ? <User setLoggin={setLoggin}/> : <Login setLoggin={setLoggin}/>}
      </ThemeProvider>  
  );
}
