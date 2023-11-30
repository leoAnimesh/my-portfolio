'use client';
import React, { ReactNode } from 'react';
import { NextUIProvider } from "@nextui-org/react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

export const Providers: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <NextUIProvider>
      <NextThemesProvider attribute="class" defaultTheme="system">
        {children}
      </NextThemesProvider>
    </NextUIProvider>
  );
};
