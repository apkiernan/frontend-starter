import { createLazyFileRoute } from '@tanstack/react-router';

export const Route = createLazyFileRoute('/home')({
	component: Index,
});

export function Index() {
	return (
		<div className="p-2">
			<h3 className="text-3xl font-bold">Home</h3>
		</div>
	);
}
