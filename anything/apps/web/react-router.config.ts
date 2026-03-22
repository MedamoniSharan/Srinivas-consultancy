import { vercelPreset } from '@vercel/react-router/vite';
import type { Config } from '@react-router/dev/config';

export default {
	appDirectory: './src/app',
	ssr: true,
	// Omit brittle `/*?`-style prerender paths (they can break builds, e.g. on
	// Windows, and time out on Vercel). HTML is rendered via SSR on each request.
	// Required on Vercel: emits `.vercel/react-router-build-result.json` and
	// wires SSR routes to Vercel Functions (see Vercel React Router docs).
	presets: [vercelPreset()],
} satisfies Config;
