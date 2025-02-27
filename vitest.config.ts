import { defineConfig, mergeConfig } from 'vitest/config';
import baseConfig from './vite.config';

export default mergeConfig(
	baseConfig,
	defineConfig({
		test: {
			environment: 'happy-dom',
			setupFiles: ['./test/setup.ts'],
			globals: true,
		},
	})
);
