import { Link } from '@tanstack/react-router'

export const Header = () => {

	return (
		<header className='sticky top-0 -top-12 h-32 text-platinum-2 w-full px-2 lg:px-0 bg-onyx'>
			<div className='mx-auto h-3/5 lg:w-3xl xl:w-3/5'>
				hi
			</div>
			<nav className='mx-auto md:h-24 lg:w-3xl xl:w-3/5 flex flex-row-reverse gap-4 md:flex-row flex-wrap-reverse rounded-sm shadow-ctr shadow-seasalt items-center justify-between pt-6  md:pt-0 px-6 bg-white'>
				<ul className='flex flex-col md:flex-row justify-between w-full md:w-3/5 text-eerie-black font-medium uppercase [&_a]:block [&_a]:p-2 [&_a]:text-white md:[&_a]:text-inherit md:[&_a]:p-1 [&>li]:bg-onyx [&>li]:has-[.active]:bg-pumpkin [&>li]:hover:bg-pumpkin md:[&>li]:has-[.active]:bg-inherit md:[&>li]:hover:bg-inherit md:[&>li]:bg-transparent [&>li]:border-t-1 [&>li]:border-white [&>li]:first:border-none md:[&>li]:hover:text-pumpkin md:[&>li]:has-[.active]:text-pumpkin'>
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
				<search className='flex w-56 h-10 border-1 border-platinum-2 rounded-sm text-gray'>
					<form action='./s' className='flex justify-between w-full px-4'>
						<input type='search' id='search' name='q' placeholder='Søg' className='w-8/9 outline-none' />
						<button type='submit' className='font-icons cursor-pointer w-8'>&#xf002;</button>
					</form>
				</search>
				<button className='md:hidden font-icons text-white bg-onyx w-12 h-12 cursor-pointer'>
					&#xf0c9;
				</button>
			</nav>
		</header>
	)
}