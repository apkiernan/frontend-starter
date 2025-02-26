import { afterAll, afterEach, beforeAll } from 'vitest';
import server from './server';

beforeAll(() => {
	// Start the interception
	server.listen({ onUnhandledRequest: 'error' });
});

afterEach(() => {
	// Reset handlers between tests
	server.resetHandlers();
});

afterAll(() => {
	// Clean up after all tests are done
	server.close();
});
