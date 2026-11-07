import { Link } from '@tanstack/react-router'
import { useState, useEffect } from 'react'


export const Slider = ({ data, captions }) => {
	const [gridOpacity, setGridOpacity] = useState(false)
	const [gridHover, setGridHover] = useState(false)
	
	useEffect(() => {
		if (!gridHover) {
			const interval = setInterval(() => {
				setGridOpacity(!gridOpacity);
			}, 6000);
		
			return () => {
				clearInterval(interval);
			}
		}
	}, [gridOpacity, gridHover])
	
	
	return (
		<div onMouseEnter={() => setGridHover(!gridHover)} onMouseLeave={() => setGridHover(!gridHover)} className='grid grid-cols-2 lg:grid-cols-4 xl:grid-cols-10 grid-rows-4 h-120 lg:h-[750px] text-seasalt text-center'>
			{data &&
				data.reverse().map((slider, index) => (
					<div key={index} className={` ${gridOpacity === true ? "odd:opacity-100 even:opacity-0" : "odd:opacity-0 even:opacity-100" } duration-2000 gap-8 col-span-full row-span-full grid grid-cols-subgrid grid-rows-subgrid place-items-center [&>button]:col-span-1`}>
						<img
							src={`http://localhost:5333/images/slider/${slider.image}`}
							className='col-span-full row-span-full h-full w-auto object-none object-top z-7'
						/>
						<div className='relative col-span-full row-span-full bg-teal-950/40 brightness-80 h-full w-full z-8' />
						<p className='col-span-full row-span-1 row-start-2 lg:col-span-2 lg:col-start-2 xl:col-span-4 xl:col-start-4 text-2xl/12 z-9 [&_span]:font-semibold [&_span]:text-7xl/24' dangerouslySetInnerHTML={{__html: captions[index].caption}} />
						
					</div>
				))
			}
			<Link
				to='/kontakt'
				className='col-span-full row-span-1 row-start-3 xl:col-span-4 xl:col-start-4 xl:row-span-1 xl:row-start-3 justify-self-center self-center w-fit h-fit py-3 px-12 font-semibold bg-pumpkin border-1 border-pumpkin rounded-md text-md uppercase text-center text-seasalt hover:bg-transparent hover:text-pumpkin duration-250 z-9'
			>
				Kontakt os
			</Link>
			<button onClick={() => setGridOpacity(!gridOpacity)} className={`${ gridHover === true ? 'opacity-100' : 'opacity-0' } col-span-1 col-start-1 xl:col-start-2 justify-self-start lg:justify-self-center xl:justify-self-start self-center row-span-2 row-start-2 px-4 lg:px-0 border-1 border-seasalt w-12 h-12 rounded-full fa fa-arrow-left z-9 duration-250`} />
			<button onClick={() => setGridOpacity(!gridOpacity)} className={`${ gridHover === true ? 'opacity-100' : 'opacity-0' } col-span-1 col-start-2 lg:col-start-4 xl:col-start-9 justify-self-end lg:justify-self-center xl:justify-self-end self-center row-span-2 row-start-2 px-4 lg:px-0 border-1 border-seasalt w-12 h-12 rounded-full fa fa-arrow-right z-9 duration-250`} />
		</div>
	)
}