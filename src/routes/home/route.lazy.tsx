import { createLazyFileRoute } from '@tanstack/react-router';
import { useTranslation } from 'react-i18next';

export const Route = createLazyFileRoute('/home')({
	component: Index,
});

export function Index() {
	const { t } = useTranslation();
	return (
		<div className="p-2">
			<h3 className="text-3xl font-bold">{t('hello')}</h3>
		</div>
	);
}
