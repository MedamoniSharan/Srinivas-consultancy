import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { Toaster } from 'sonner';

export function SonnerToaster() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setMounted(true);
    const update = () => setIsMobile(window.innerWidth < 768);
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);

  const theme = mounted && resolvedTheme === 'light' ? 'light' : 'dark';

  return <Toaster position={isMobile ? 'top-center' : 'bottom-right'} theme={theme} />;
}
