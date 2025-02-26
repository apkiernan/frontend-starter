import { render } from '@testing-library/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { createRouter, RouterProvider } from '@tanstack/react-router';
import { ReactElement } from 'react';
import { routeTree } from '../src/routeTree.gen';

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
export function renderWithClient(
	ui: ReactElement,
	includeRouterProvider = true
) {
	const testQueryClient = createTestQueryClient();
	const { rerender, ...result } = render(
		<QueryClientProvider client={testQueryClient}>
			{includeRouterProvider ? (
				<RouterProvider router={createRouter({ routeTree })} />
			) : null}
			{ui}
		</QueryClientProvider>
	);
	return {
		...result,
		rerender: (rerenderUi: ReactElement) =>
			rerender(
				<QueryClientProvider client={testQueryClient}>
					{rerenderUi}
				</QueryClientProvider>
			),
	};
}
