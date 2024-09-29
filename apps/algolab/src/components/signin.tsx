"use client"
import { useSession, signIn, signOut } from 'next-auth/react';
import { Button } from '@mui/material';


export default function Signin() {
  
  return (
    <div className='flex p-8'>
      <Button onClick={() => signIn('google')} variant="outlined">sign in with gooogle</Button>
    </div>
  );
}