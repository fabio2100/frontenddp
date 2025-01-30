'use client'

import { useState } from 'react';
import Login from './components/Login';
import User from './components/User';


export default function Home() {

  const [loggin,setLoggin] = useState(false);

  return (
    <div>
      {loggin ? <User /> : <Login />}
    </div>
  );
}
