import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { TanStackRouterVite } from '@tanstack/router-plugin/vite';
import tsconfigpaths from 'vite-tsconfig-paths';
import tailwind from '@tailwindcss/vite';

// vitest automatically sets NODE_ENV to 'test' when running tests
const isTest = process.env.NODE_ENV === 'test';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		react(),
		tsconfigpaths(),
		tailwind(),
		!isTest && TanStackRouterVite(),
	],
});
