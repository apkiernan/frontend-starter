import { ReactElement } from 'react';
import { render } from '@testing-library/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

// Create a new query client for each test
const createTestQueryClient = () =>
	new QueryClient({
		defaultOptions: {
			queries: {
				retry: false,
				gcTime: 0,
			},
		},
	});

// Wrapper component that provides the query client
export function renderWithClient(ui: ReactElement) {
	const testQueryClient = createTestQueryClient();
	const { rerender, ...result } = render(
		<QueryClientProvider client={testQueryClient}>{ui}</QueryClientProvider>
	);
	return {
		...result,
		rerender: () =>
			rerender(
				<QueryClientProvider client={testQueryClient}>{ui}</QueryClientProvider>
			),
	};
}
