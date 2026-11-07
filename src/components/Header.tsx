import { Link } from '@tanstack/react-router'
import { useState, useEffect } from 'react'

export const Header = ({ links, data }) => {
	const [menuToggle, setMenuToggle] = useState(false)
	const [wrapperToggle, setWrapperToggle] = useState(false)
	const [winWidthCheck, setWinWidthCheck] = useState(false)
	const [scrollCheck, setScrollCheck] = useState(false)
	
	function handleWinWidth() {
		if (window.innerWidth >= 1024) {
			setMenuToggle(false)
		}
	}
	
	
	useEffect(() => {
		window.addEventListener('resize', handleWinWidth);
		
		return () => {
			window.removeEventListener('resize', handleWinWidth);
		}
	}, []);

	return (
		<header className='sticky -top-57 lg:-top-19 h-70 lg:h-32 text-white w-full px-2 lg:px-0 bg-onyx z-10'>
			<div className='mx-auto items-center flex flex-col lg:flex-row gap-4 justify-between pt-4 pb-8 lg:p-0 lg:h-3/5 lg:w-4xl xl:w-4/5'>
				<Link
					to='/'
				>
					<img src='images/logo.png' alt='Strom logo' className='w-40' />
				</Link>
				<address className='flex flex-col lg:flex-row items-center lg:flex-row gap-4 lg:gap-10 lg:text-sm not-italic [&_span]:pe-3 [&_span]:text-pumpkin'>
					<p><span className='fa fa-map-marker' /> {data.address}, {data.zipcity}</p>
					<p><span className='fa fa-clock-o' /> {data.openinghours}</p>
					<Link
						to={`tel:${data.phone}`}
					>
						<span className='fa fa-phone' /> {data.phone}
					</Link>
				</address>
			</div>
			<div className={`${ scrollCheck === true ? "bg-seasalt" : "bg-transparent"} w-full`}>
				<nav className='mx-auto lg:h-24 lg:w-4xl xl:w-4/5 flex flex-row-reverse lg:flex-row flex-wrap-reverse rounded-sm shadow-ctr shadow-seasalt items-center justify-between px-6 pt-6 bg-white'>
					<ul
						className={`${ menuToggle === true ? "flex" : "hidden"} lg:flex flex-col lg:flex-row justify-between w-full lg:w-3/5 lg:mb-4 text-eerie-black font-medium uppercase`}>
						{links &&
							links.map((items, index) => (
								<li key={index} className='bg-onyx border-t border-white first:border-none last:border-b hover:bg-pumpkin has-[.active]:bg-pumpkin lg:bg-inherit lg:border-none lg:hover:text-pumpkin lg:hover:bg-inherit lg:has-[.active]:bg-inherit lg:has-[.active]:text-pumpkin duration-250'>
									<Link
										to={items.path}
										onClick={() => setMenuToggle(false)}
										className='block p-2 text-white lg:text-inherit lg:px-1 lg:py-4'
									>
										{items.title}
									</Link>
								</li>
						))}
					</ul>
					<search className='flex w-56 h-12 mb-4 border-1 border-platinum-2 rounded-sm text-gray'>
						<form action='./s' className='flex justify-between w-full ps-4'>
							<input type='search' id='search' name='q' placeholder='Søg' className='w-8/9 outline-none text-onyx placeholder:text-onyx lg:placeholder:text-gray' />
							<button type='submit' className='cursor-pointer w-14'><span className='fa fa-search' /></button>
						</form>
					</search>
					<button onClick={() => setMenuToggle(!menuToggle)} className='lg:hidden text-white bg-onyx w-12 h-12 mb-4 cursor-pointer'>
						<span className='fa fa-bars' />
					</button>
				</nav>
			</div>
		</header>
	)
}