import { Link } from '@tanstack/react-router'

export const Footer = () => {

	return (
		<footer className='flex flex-col justify-between gap-28 lg:gap-4 items-center bg-onyx 2xl:h-116 text-platinum text-sm px-4 lg:px-0'>
			<div className='mx-auto pt-20 flex flex-wrap justify-between w-2/3 lg:h-3/4 lg:w-3xl xl:w-3/5 [&_h2]:text-white [&_h2]:text-lg [&_h2]:py-4 [&_section]:first:[&_h2]:pt-0 [&_section]:w-100 lg:[&_section]:w-2/5 2xl:[&_section]:w-2/9'>
				<section className=''>
					<h2>
						<img src='images/logo.png' alt='Strom A/S' className='w-40' />
					</h2>
					<p></p>
				</section>
				<section>
					<h2>
						Link
					</h2>
					
				</section>
				<section>
					<h2>
						Kontakt os
					</h2>
					<address className='flex flex-col items-start gap-2 lg:text-sm not-italic [&_span]:pe-3 [&_span]:font-semibold'>
						<p><span>Adresse:</span></p>
						<Link
							to='tel:'
						>
						<span>Telefon:</span>
						</Link>
						<Link
							to='mailto:'
						>
						<span>Email:</span>
						</Link>
					</address>
				</section>
				<section>
					<form action='/' className='flex flex-col items-start w-full'>
						<h2>
							Nyhedsbrev
						</h2>
						<label for='mail' className='mb-4'>Tilmeld dig vores nyhedsbrev her</label>
						<input type='email' id='mail' placeholder='Din Email' className='outline-none bg-charcoal placeholder-eerie-black h-10 px-4 w-full rounded-md' />
						<button type='submit' className='mt-4 py-3 w-1/2 bg-pumpkin rounded-md text-md uppercase text-center text-seasalt'>Tilmeld</button>
					</form>
				</section>
			</div>
			<div className='w-full border-t-1 border-charcoal'>
				<div className='mx-auto flex justify-between items-center w-2/3 h-16 lg:w-3xl xl:w-3/5'>
					<p><span className='text-pumpkin'>Strom</span> &#169; 2017 All rights reserved</p>
					<ul	className='flex justify-between gap-4 text-white text-center [&_a]:block [&_a]:py-1 [&_a]:w-8 [&_a]:h-8 [&_a]:hover:text-pumpkin [&_a]:bg-transparent [&_a]:hover:bg-white [&_a]:border-1 [&_a]:border-white [&_a]:rounded-full'>
						
						<li>
							<Link
								to='/'
							>
								
							</Link>
						</li>
						<li>
							<Link
								to='/'
							>
								
							</Link>
						</li>
						<li>
							<Link
								to='/'
							>
								
							</Link>
						</li>
						<li>
							<Link
								to='/'
							>
								
							</Link>
						</li>
					</ul>
				</div>
			</div>
		</footer> 
	)
}