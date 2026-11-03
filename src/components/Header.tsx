import { Link } from '@tanstack/react-router'

export const Header = () => {

	return (
		<header className='sticky top-0 -top-12 h-70 lg:h-32 text-white w-full px-2 lg:px-0 bg-onyx'>
			<div className='mx-auto items-center flex flex-col lg:flex-row gap-4 justify-between pt-4 pb-8 lg:p-0 lg:h-3/5 lg:w-3xl xl:w-3/5'>
				<Link
					to='/'
				>
					<img src='images/logo.png' alt='Strom logo' className='w-40' />
				</Link>
				<address className='flex flex-col lg:flex-row items-center lg:flex-row gap-4 lg:gap-10 lg:text-sm not-italic [&_span]:pe-3 [&_span]:text-pumpkin'>
					<p><span className='font-icons'>&#xf041;</span>a;kljsewgnaweks.lrj4nhb</p>
					<p><span className='font-icons'>&#xf017;</span>aljekhwgbvawe</p>
					<Link
						to='tel:'
					>
						<span className='font-icons'>&#xf095;</span>asd;fkujhasdf
					</Link>
				</address>
			</div>
			<nav className='mx-auto lg:h-24 lg:w-3xl xl:w-3/5 flex flex-row-reverse gap-4 lg:flex-row flex-wrap-reverse rounded-sm shadow-ctr shadow-seasalt items-center justify-between p-6 bg-white'>
				<ul
					className='
						hidden lg:flex flex-col lg:flex-row justify-between w-full lg:w-3/5 text-eerie-black font-medium uppercase
						
						[&_a]:block [&_a]:p-2 [&_a]:text-white lg:[&_a]:text-inherit lg:[&_a]:px-1 lg:[&_a]:py-4
						
						[&>li]:bg-onyx [&>li]:has-[.active]:bg-pumpkin [&>li]:hover:bg-pumpkin [&>li]:border-t-1 [&>li]:border-white [&>li]:first:border-none lg:[&>li]:bg-inherit lg:[&>li]:has-[.active]:bg-inherit lg:[&>li]:hover:bg-inherit lg:[&>li]:border-none lg:[&>li]:hover:text-pumpkin lg:[&>li]:has-[.active]:text-pumpkin
					'
				>
					<li>
						<Link
							to="/"
						>
							Forside
						</Link>
					</li>
					<li>
						<Link
							to="/omos"
						>
							Om os
						</Link>
					</li>
					<li>
						<Link
							to="/services"
						>
							Services
						</Link>
					</li>
					<li>
						<Link
							to="/faq"
						>
							FAQ
						</Link>
					</li>
					<li>
						<Link
							to="/nyheder"
						>
							Nyheder
						</Link>
					</li>
					<li>
						<Link
							to="/kontakt"
						>
							Kontakt os
						</Link>
					</li>
				</ul>
				<search className='flex w-56 h-12 border-1 border-platinum-2 rounded-sm text-gray'>
					<form action='./s' className='flex justify-between w-full ps-4'>
						<input type='search' id='search' name='q' placeholder='Søg' className='w-8/9 outline-none text-onyx placeholder:text-onyx lg:placeholder:text-gray' />
						<button type='submit' className='font-icons cursor-pointer w-14'>&#xf002;</button>
					</form>
				</search>
				<button className='lg:hidden font-icons text-white bg-onyx w-12 h-12 cursor-pointer'>
					&#xf0c9;
				</button>
			</nav>
		</header>
	)
}