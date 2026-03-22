import type { ReactNode } from 'react';
import { ThemeProvider } from 'next-themes';

export function AppProviders({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem storageKey="telivai-theme">
      {children}
    </ThemeProvider>
  );
}
