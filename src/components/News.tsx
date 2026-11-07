import { Link } from '@tanstack/react-router'

export const News = ({ data, content }) => {	
	
	return (
		<section className='flex flex-col items-center gap-12 justify-center py-24'>
			<header className='flex flex-col items-center gap-4 text-center w-full'>
				<h2 className='w-fit text-4xl font-semibold [&>span]:text-pumpkin'>Sidste <span>nyt</span></h2>
				<p className='text-gray'>Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusm tempor</p>
				<div className='w-fit'>
					<hr className='inline-block text-gray pb-1 w-12' />
					<span className='fa fa-circle-o text-pumpkin' />
					<hr className='inline-block text-gray pb-1 w-12' />
				</div>
			</header>
			<div className='flex flex-col gap-4 lg:flex-row'>
				{data &&
					data.map((news, index) => (
						<Link 
							key={index}
							to={`/nyheder/${news.title}`}
							className='flex flex-col items-center bg-white shadow-lg hover:shadow-ctr rounded-lg duration-10 h-fit w-72 duration-500'
						>
							<img src={`http://localhost:5333/images/news/${news.image}`} className='h-full w-auto rounded-t-lg' />
							<div className='relative -top-45 -left-27 bookmark bg-pumpkin flex flex-col items-center justify-start [&>p]:text-white rounded-t-sm h-16 w-12'>
								<p className='text-xl'>
									{new Date(data[index].received).toLocaleDateString('en-DK', {
										day: '2-digit'
										}
									)}
								</p>
								<p className='text-xs'>
									{new Date(data[index].received).toLocaleDateString('en-DK', {
										month: 'short'
										}
									)}
								</p>
							</div>
							<header className='relative -top-16 p-4'>
								<h3 className='text-lg pb-2'>{news.title}</h3>
								<p className='text-gray'>{content[index].content}</p>
							</header>
						</Link>
					))
				}
			</div>
			<Link
				to='/nyheder'
				className='w-fit h-fit py-3 px-12 font-semibold bg-pumpkin border-1 border-pumpkin rounded-md text-md uppercase text-center text-seasalt hover:bg-transparent hover:text-pumpkin duration-250'
			>
				Flere nyheder...
			</Link>	
		</section>
	)
}