"use client";
//This custom provider is to prevent hydration issues from ThemeProvider
import * as React from "react";
import dynamic from "next/dynamic";
import { type ThemeProviderProps } from "next-themes/dist/types";

// Dynamically import ThemeProvider from next-themes
const NextThemesProvider = dynamic(
  () => import("next-themes").then((mod) => mod.ThemeProvider),
  { ssr: false }
);

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}
