"use client"
import { useSession, signIn, signOut } from 'next-auth/react';
import { Button } from '@mui/material';


export default function Signin() {
  
  return (
    <div>
      <Button onClick={() => signIn('google')}>sign in with gooogle</Button>
    </div>
  );
}