import { describe, it, expect } from 'vitest';
import { screen } from '@testing-library/react';
import { http, HttpResponse } from 'msw';
import server from '../../../test/server';
import { renderWithClient } from '../../../test/utils';
import { Index } from './route.lazy';

// Example component test with MSW
describe('Example API Test', () => {
	it('should handle API responses correctly', async () => {
		server.use(
			http.get('/api/about', () => {
				return HttpResponse.json({ message: 'Hello from test!' });
			})
		);

		renderWithClient(<Index />);
		expect(await screen.findByText('Hello from test!')).toBeTruthy();
	});
});
