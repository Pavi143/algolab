"use client"
import { useSession, signIn, signOut } from 'next-auth/react';
import { Button } from '@mui/material';


export default function Signin() {
  const { data, status } = useSession();
  if (status === 'loading') return <h1> loading... please wait</h1>;
  return (
    <div>
      <Button onClick={() => signIn('google')}>sign in with gooogle</Button>
    </div>
  );
}