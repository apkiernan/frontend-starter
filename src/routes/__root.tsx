import { createRootRoute, Link, Outlet } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/router-devtools';

export const Route = createRootRoute({
	component: () => (
		<>
			<div className="flex gap-2 p-2">
				<Link to="/home" className="[&.active]:font-bold">
					Home
				</Link>
			</div>
			<hr />
			<Outlet />
			{process.env.NODE_ENV === 'development' && <TanStackRouterDevtools />}
		</>
	),
});
