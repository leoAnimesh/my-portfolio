'use client';
import { ThemeProvider } from 'next-themes';
import React, { ReactNode, useEffect, useState } from 'react';

export const Providers: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <>{children}</>;
  }
  return <ThemeProvider attribute="class">{children}</ThemeProvider>;
};
