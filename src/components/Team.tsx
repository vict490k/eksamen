import { Link } from '@tanstack/react-router'
import { useState, useEffect } from 'react'

export const Team = ({ data }) => {
	const some: {
		name: string
		link: string
		icon: string
		_id: string
	} = [
		{
			"name": "Twitter",
			"link": "https://twitter.com/stroem-grenaa",
			"icon": "fa-twitter",
			"_id": "635d6013927aee13026e5146"
		},
		{
			"name": "LinkedIn",
			"link": "https://linkedin.com/stroem-grenaa",
			"icon": "fa-linkedin",
			"_id": "635d604c927aee13026e5151"
		},
		{
			"name": "pinterest",
			"link": "https://pinterest.com/stroem-grenaa",
			"icon": "fa-pinterest",
			"_id": "635d6035927aee13026e514b"
		},
		{
			"name": "Facebook",
			"link": "https://facebook/stroem-grenaa",
			"icon": "fa-facebook",
			"_id": "635d606a927aee13026e5158"
		}
	]
	
	const [cardHover, setCardHover] = useState(0)
	
	return (
		<section className='flex flex-col items-center gap-12 justify-center py-24'>
			<header className='flex flex-col items-center gap-4 text-center w-full'>
				<h2 className='w-fit text-4xl font-semibold [&>span]:text-pumpkin'>Vores <span>team</span></h2>
				<p className='text-gray'>Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusm tempor</p>
				<div className='w-fit'>
					<hr className='inline-block text-gray pb-1 w-12' />
					<span className='fa fa-circle-o text-pumpkin' />
					<hr className='inline-block text-gray pb-1 w-12' />
				</div>
			</header>
				<div className='flex flex-col lg:flex-row gap-6'>
				{data &&
					data.reverse().map((team, index) => (
						<div key={index} onMouseEnter={() => setCardHover(index + 1)} onMouseLeave={() => setCardHover(0)} className='grid grid-cols-1 grid-rows-1 overflow-hidden'>
							<div className={`${ cardHover === index + 1 ? "top-50" : "top-0" } relative duration-250 col-start-1 row-start-1 self-end gonyclip bg-seasalt w-full h-2/3 z-7`} />
							<img
								src={`http://localhost:5333/images/team/${team.image}`}
								className='col-start-1 row-start-1 last:order-first z-8'
							/>
							<div className={`${ cardHover === index + 1 ? "top-0" : "top-50" } relative duration-250 col-start-1 row-start-1 self-end flex flex-col justify-end gap-2 pb-6 items-center clipygon bg-pumpkin text-white w-full h-2/3 z-9`} >
								<h3 className='text-xl font-medium'>{team.name}</h3>
								<p>{team.title}</p>
								<ul	className='flex justify-between gap-4 text-center'>
									{some &&
										some.map((some) => (
											<li key={some._id} className='last:-order-1'>
												<Link
													to={some.link}
													className='block py-1 w-8 h-8 bg-transparent rounded-full hover:text-pumpkin hover:bg-white duration-250'
												>
													<span className={`fa ${some.icon}`} />
												</Link>
											</li>
										))
									}
								</ul>
							</div>
						</div>
					))
				}
				</div>
		</section>
	)
}