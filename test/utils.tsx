import { ReactElement } from 'react';
import { render } from '@testing-library/react';
import i18n from 'i18next';
import { I18nextProvider, initReactI18next } from 'react-i18next';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import enJson from '../public/locales/en/dashboard/translation.json';

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

i18n.use(initReactI18next).init({
	lng: 'en',
	fallbackLng: 'en',
	// have a common namespace used around the full app
	ns: ['dashboard'],
	resources: {
		en: { dashboard: enJson },
	},
	interpolation: {
		escapeValue: false,
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
				<I18nextProvider i18n={i18n}>
					<QueryClientProvider client={testQueryClient}>
						{ui}
					</QueryClientProvider>
				</I18nextProvider>
			),
	};
}
