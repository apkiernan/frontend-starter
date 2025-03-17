import { createLazyFileRoute } from '@tanstack/react-router';

import { useTranslation } from '@/i18n/useTranslation';

export const Route = createLazyFileRoute('/home')({
	component: Index,
});

export function Index() {
	const { t } = useTranslation('dashboard');
	return (
		<div className="p-2">
			<h3 className="text-3xl font-bold">{t('hello')}</h3>
		</div>
	);
}
