import { useState, useEffect } from 'react'

export const Testimonials = ({ data }) => {
	const [index, setIndex] = useState(0)
	const [cardHover, setCardHover] = useState(false)
	
	useEffect(() => {
		if (!cardHover) {
			const interval	= setInterval(() => {
				if (index + 1 <= data.length - 3) {
					setIndex(index + 1);
				} else {
					setIndex(0)
				}
			}, 6000)
			return () => {
				clearInterval(interval);
			}
		}
	}, [index, cardHover])
	
	const slideLeft = () => {
		if (index - 1 >= 0) {
			setIndex(index - 1);
		} else {
			setIndex(data.length - 3)
		}
	};
	
	const slideRight = () => {
		if (index + 1 <= data.length - 3) {
			setIndex(index + 1);
		} else {
			setIndex(0)
		}
	};
	
	return (
		<section className='grid grid-cols-2 lg:grid-cols-5 xl:grid-cols-10 grid-rows-5 justify-items-center items-center h-170 text-white text-center bg-seasalt'>
			<img src='images/backgroundimage.jpg' className='col-span-full col-start-1 row-span-3 row-start-1 h-full w-auto zoom-150 lg:zoom-100 object-none object-top' />
			<div className='relative col-span-full col-start-1 row-span-3 row-start-1 bg-onyx/80 brightness-80 h-full w-full z-8' />
			<header className='flex flex-col items-center gap-2 col-span-full row-span-2 row-start-1 w-fit z-9'>
				<h2 className='w-fit text-4xl font-semibold [&>span]:text-pumpkin'>Vores <span>kunder siger</span></h2>
				<p className='text-platinum'>Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusm tempor</p>
				<div className='w-fit'>
					<hr className='inline-block text-platinum pb-1 w-12' />
					<span className='fa fa-circle-o text-pumpkin' />
					<hr className='inline-block text-platinum pb-1 w-12' />
				</div>
			</header>
			<div onMouseEnter={() => setCardHover(!cardHover)} onMouseLeave={() => setCardHover(!cardHover)} className='relative col-span-full row-span-4 row-start-2 flex justify-around items-center overflow-hidden lg:w-4xl xl:w-4/5 h-full w-full z-9'>
				{data &&
					data.map((item, n) => {
						let position = n > (index + 2) ? "nextCard" : n > (index + 1) ?
							"rightCard" : n > index ? "centreCard" : n === index ? "leftCard" : "prevCard"
						return (
							<div key={n} className={`${position} absolute flex flex-col items-center bg-white rounded-lg overflow-visible h-1/2 w-72 duration-1000 *:pointer-events-none *:select-none`}>
								<img src={`http://localhost:5333/images/testimonial/${item.image}`} className='relative rounded-full border-4 border-white -top-12 w-24 h-24' />
								<header className='relative -top-10'>
									<h3 className='text-red-500 font-semibold text-lg'>{item.name}</h3>
									<p className='text-orange-400'>{item.title}</p>
								</header>
								<p className='relative -top-7 text-gray'>{item.review}</p>
							</div>
						)
					})
				}
			</div>
			<button onClick={slideLeft} className='lg:col-start-2 xl:col-start-3 lg:row-start-5 px-4 lg:px-0 border-1 border-eerie-black text-eerie-black w-12 h-12 rounded-full fa fa-arrow-left z-9 duration-250' />
			<button onClick={slideRight} className='lg:col-start-4 xl:col-start-8 lg:row-start-5 px-4 lg:px-0 border-1 border-eerie-black text-eerie-black w-12 h-12 rounded-full fa fa-arrow-right z-9 duration-250' />
		</section>
	)
}