import React from 'react';
import Logo from '../components/Logo';
import DarkModeButton from '../components/DarkModeButton';

export default function Navbar() {
  return (
    <div className="flex justify-between mb-8">
      <Logo />
      <DarkModeButton />
    </div>
  );
}
