import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/home')({
	loader: async () => {
		const res = await fetch('/api/example');
		const data = await res.json();
		return data.message;
	},
});
