import { createRouter as createTanStackRouter } from '@tanstack/react-router'
import { routeTree } from './routeTree.gen'

import { setupRouterSsrQueryIntegration } from '@tanstack/react-router-ssr-query'

import { getContext } from './integrations/tanstack-query/root-provider'

export function getRouter() {
	const context = getContext()

	const router = createTanStackRouter({
		routeTree,
		rewrite: {
			input: ({ url }) => {
				const subdomain = url.hostname.split('.')[0]
				
				// admin.example.com/users → /admin/users
				if (subdomain === 'admin') {
					url.pathname = '/admin' + url.pathname
				}
				// api.example.com/v1/users → /api/v1/users
				else if (subdomain === 'api') {
					url.pathname = '/api' + url.pathname
				}
				
				return url
			},
			output: ({ url }) => {
				// Reverse the transformation for link generation
				if (url.pathname.startsWith('/admin')) {
					url.hostname = 'admin.localhost:3000'
					url.pathname = url.pathname.replace(/^\/admin/, '') || '/'
				} else if (url.pathname.startsWith('/api')) {
					url.hostname = 'api.localhost:3000'
					url.pathname = url.pathname.replace(/^\/api/, '') || '/'
				}
				
				return url
			},
	},
		context,
		scrollRestoration: true,
		defaultPreload: 'intent',
		defaultPreloadStaleTime: 0,
	})

	setupRouterSsrQueryIntegration({ router, queryClient: context.queryClient })

	return router
}

declare module '@tanstack/react-router' {
	interface Register {
		router: ReturnType<typeof getRouter>
	}
}
