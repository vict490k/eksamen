import {
	Link,
	createFileRoute,
	Outlet,
} from '@tanstack/react-router'

import { Header } from '@/components/Header'

export const Route = createFileRoute('/_root')({component: IndexDocument})

function IndexDocument() {
	
	return (
		<>
			<Header />
			<main className=''>
				<Outlet />
			</main>
			<footer className=''>
				
			</footer>
		</>
	)
}