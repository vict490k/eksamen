import { Link } from '@tanstack/react-router'

export const Footer = ({ links, data, children }) => {

	return (
		<footer className='flex flex-col justify-center lg:justify-between gap-28 lg:gap-4 items-center bg-onyx 2xl:h-116 text-platinum text-sm px-4 lg:px-0'>
			<div className='mx-auto pt-20 flex flex-wrap flex-col lg:flex-row gap-6 justify-between w-2/3 lg:h-3/4 lg:w-4xl xl:w-4/5 [&_h2]:text-white [&_h2]:text-lg [&_h2]:py-4 [&_section]:first:[&_h2]:pt-0'>
				<section className='w-100 2xl:w-64'>
					<h2>
						<img src='images/logo.png' alt='Strom A/S' className='w-40' />
					</h2>
					<p>Som medlem af Elinstallatørernes Landsorganisation, ELFO, er vi tilsluttet et ankernævn og en garantiordning</p>
				</section>
				<section className='lg:w-2/5 2xl:w-fit'>
					<h2>
						Link
					</h2>
					<ul className='flex flex-col justify-start gap-3'>
						{links &&
							links.slice(1).map((items, index) => (
								<li key={index}>
									<Link
										to={items.path}
										className='hover:text-pumpkin duration-250'
									>
										<span className='fa fa-angle-right pr-2' />{items.title}
									</Link>
								</li>
						))}
					</ul>
				</section>
				<section>
					<h2>
						Kontakt os
					</h2>
					<address className='flex flex-col items-start gap-2 lg:text-sm not-italic [&_span]:pe-2 [&_span]:font-semibold'>
						<p><span>Adresse:</span>{data.address}, {data.zipcity}</p>
						<Link
							to={`tel:${data.phone}`}
						>
						<span>Telefon:</span> {data.phone}
						</Link>
						<Link
							to={`mailto:${data.email}`}
						>
						<span>Email:</span>{data.email}
						</Link>
					</address>
				</section>
				{children}
			</div>
			<div className='w-full border-t-1 border-charcoal'>
				<div className='mx-auto flex justify-between items-center w-2/3 h-16 lg:w-4xl xl:w-4/5'>
					<p><span className='text-pumpkin'>Strom</span> &#169; 2017 All rights reserved</p>
					<ul	className='flex justify-between gap-4 text-white text-center'>
						{data.some &&
							data.some.map((some) => (
								<li key={some._id} className='last:-order-1'>
									<Link
										to={some.link}
										className='block py-1 w-8 h-8 bg-transparent border-1 border-white rounded-full hover:text-pumpkin hover:bg-white duration-250'
									>
										<span className={`fa ${some.icon}`} />
									</Link>
								</li>
							))
						}
					</ul>
				</div>
			</div>
		</footer> 
	)
}