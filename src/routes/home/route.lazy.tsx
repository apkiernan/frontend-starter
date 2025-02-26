import { createLazyFileRoute } from '@tanstack/react-router';

export const Route = createLazyFileRoute('/home')({
	component: Index,
});

export function Index() {
	const data = Route.useLoaderData();
	return (
		<div className="p-2">
			<h3 className="text-3xl font-bold">{data.message}</h3>
		</div>
	);
}
