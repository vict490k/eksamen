import {
	Link,
	createFileRoute,
	Outlet,
} from '@tanstack/react-router'

export const Route = createFileRoute('/_root')({component: IndexDocument})

function IndexDocument() {
	
	return (
		<>
			<header className='sticky top-0 xl:-top-12 h-32 text-platinum-2 w-full bg-onyx'>
				<div className='xl:w-3/5 xl:h-3/5 mx-auto'>
					hi
				</div>
				<nav className='mx-auto h-24 xl:w-3/5 flex rounded-sm shadow-ctr shadow-seasalt items-center justify-between px-6 bg-white'>
					<ul className='flex flex-row justify-between xl:w-3/5 text-eerie-black font-medium uppercase [&>li]:has-[.active]:text-pumpkin'>
						<li className=''>
							<Link
								to="/"
							>
								Forside
							</Link>
						</li>
						<li className=''>
							<Link
								to="/omos"
							>
								Om os
							</Link>
						</li>
						<li className=''>
							<Link
								to="/service"
							>
								Service
							</Link>
						</li>
						<li className=''>
							<Link
								to="/faq"
							>
								FAQ
							</Link>
						</li>
						<li className=''>
							<Link
								to="/nyheder"
							>
								Nyheder
							</Link>
						</li>
						<li className=''>
							<Link
								to="/kontakt"
							>
								Kontakt os
							</Link>
						</li>
					</ul>
					<search className=' w-56 h-10 py-1 px-4 border-1 border-platinum-2 rounded-sm text-gray'>
						Placeholder
					</search>
				</nav>
			</header>
			<main className=''>
				<Outlet />
			</main>
		</>
	)
}