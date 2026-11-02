import {
	createFileRoute,
	Outlet,
} from '@tanstack/react-router'

export const Route = createFileRoute('/admin')({component: IndexDocument})

function IndexDocument() {
	
	return (
		<>
			<main className=''>
				<Outlet />
			</main>
		</>
	)
}