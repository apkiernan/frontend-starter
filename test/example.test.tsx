import { describe, it, expect } from 'vitest';
import { screen } from '@testing-library/react';
import { http, HttpResponse } from 'msw';
import server from './server';
import { renderWithClient } from './utils';
import { Index } from '../src/routes/home/route.lazy';

// Example component test with MSW
describe('Example API Test', () => {
	it('should handle API responses correctly', async () => {
		// Setup mock handler for this specific test
		server.use(
			http.get('/api/about', () => {
				return HttpResponse.json({ message: 'Hello from MSW!' });
			})
		);

		// Your test implementation here
		// Example:
		renderWithClient(<Index />);
		expect(await screen.findByText('Hello from test!')).toBeTruthy();
	});
});
