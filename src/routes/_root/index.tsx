import { createFileRoute, Link, ClientOnly } from '@tanstack/react-router'

import { Fragment, useState, useEffect } from 'react'

import { Slider } from '@/components/Slider'
import { Testimonials } from '@/components/Testimonials'
import { Team } from '@/components/Team'
import { News } from '@/components/News'
	
import { sliderQueryOptions } from '@/utils/slider'
import { aboutQueryOptions } from '@/utils/about'
import { servicesQueryOptions } from '@/utils/services'
import { testimonialsQueryOptions } from '@/utils/testimonials'
import { teamQueryOptions } from '@/utils/team'
import { homeNewsQueryOptions } from '@/utils/news'

import { useSuspenseQuery } from '@tanstack/react-query'
import DOMPurify from 'isomorphic-dompurify'

export const Route = createFileRoute('/_root/')({
	loader: async ({ context }) => {
		await context.queryClient.ensureQueryData(sliderQueryOptions())
		await context.queryClient.ensureQueryData(aboutQueryOptions())
		await context.queryClient.ensureQueryData(servicesQueryOptions())
		await context.queryClient.ensureQueryData(testimonialsQueryOptions())
		await context.queryClient.ensureQueryData(teamQueryOptions())
		await context.queryClient.ensureQueryData(homeNewsQueryOptions())
	},
	component: Home,
})

function Home() {
	const sliderQuery = useSuspenseQuery(sliderQueryOptions())
	const aboutQuery = useSuspenseQuery(aboutQueryOptions())
	const servicesQuery = useSuspenseQuery(servicesQueryOptions())
	const testimonialsQuery = useSuspenseQuery(testimonialsQueryOptions())
	const teamQuery = useSuspenseQuery(teamQueryOptions())
	const newsQuery = useSuspenseQuery(homeNewsQueryOptions())
	
	const captions: { caption: string }[] = [
		{
			"caption": DOMPurify.sanitize(sliderQuery.data[1].caption, {ALLOWED_TAGS: ['span', 'br']})
		},
		{
			"caption": DOMPurify.sanitize(sliderQuery.data[0].caption, {ALLOWED_TAGS: ['span', 'br']})
		}
	]
	
	const about: {
		title: string,
		teaser: string
	} = {
		"title": DOMPurify.sanitize(aboutQuery.data.title, {ALLOWED_TAGS: ['span']}),
		"teaser": DOMPurify.sanitize(aboutQuery.data.teaser, {ALLOWED_TAGS: ['span']})
	}

	const services: {
		title: string,
		teaser: string,
		icon: string
	}[] = servicesQuery.data.map(item => (
		{
			"title": item.title,
			"teaser": DOMPurify.sanitize(item.teaser, {ALLOWED_TAGS: ['span']}),
			"icon": item.icon
		}))
	
	const testimonials: {
		title: string,
		name: string,
		review: string,
		image: string
	}[] = testimonialsQuery.data.map(item => (
		{
			"title": item.title,
			"name": item.name,
			"review": DOMPurify.sanitize(item.review, {ALLOWED_TAGS: ['span']}),
			"image": item.image
		}))
	
	const content: {
		content: string
	}[] = newsQuery.data.map(item => (
		{
			"content": DOMPurify.sanitize(item.content, {ALLOWED_TAGS: ['span']}),
		}))
	
	return (
		<>
			<ClientOnly fallback={<span>-</span>}>
				<Slider data={sliderQuery.data} captions={captions} />
			</ClientOnly>
			<section className='flex flex-col items-center justify-center pt-8 pb-32 text-center text-dim-gray'>
				<h1 dangerouslySetInnerHTML={{__html: about.title}} className='text-4xl font-semibold text-eerie-black [&>span]:text-pumpkin' />
				<p dangerouslySetInnerHTML={{__html: about.teaser}} className='pb-8 w-3/5' />
				<Link
					to='/omos'
					className='w-fit h-fit py-3 px-12 font-semibold bg-pumpkin border-1 border-pumpkin rounded-md text-md uppercase text-center text-seasalt hover:bg-transparent hover:text-pumpkin duration-250'
				>
					Læs mere
				</Link>
			</section>
			<section className='flex flex-col gap-4 items-center justify-center px-2 pt-12 pb-16 lg:px-0 bg-onyx text-center text-seasalt'>
				<h2 className='text-4xl font-semibold [&>span]:text-pumpkin'>
					Skal du bruge <span>hjælp</span> fra <span>Strøm?</span>
				</h2>
				<p className='pb-4'>Lorem ipsum dolor sit amet consectetur</p>
				<Link
					to='/kontakt'
					className='w-fit h-fit py-3 px-12 font-semibold bg-pumpkin border-1 border-pumpkin rounded-md text-md uppercase text-center text-seasalt hover:bg-transparent hover:text-pumpkin duration-250'
				>
					Kontakt os
				</Link>
			</section>
			<section className='flex flex-col gap-4 items-center justify-center px-2 pt-24'>
				<div className='grid grid-cols-2 lg:grid-cols-5 xl:grid-cols-10 grid-rows-[auto] justify-items-center gap-y-12 inset-shadow-b'>
					<header className='col-span-full lg:col-start-2 xl:col-start-2 lg:justify-self-start w-3/5 lg:w-fit'>
						<h2 className='text-4xl font-semibold [&>span]:text-pumpkin'>Vores <span>services</span></h2>
						<p>Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusm tempor</p>
						<span className='fa fa-circle-o text-pumpkin' />
						<hr className='inline-block text-platinum pb-1 w-18' />
					</header>
					<div className='flex flex-wrap justify-between gap-y-8 col-span-2 xl:col-span-5 lg:col-start-2 xl:col-start-2 lg:justify-self-start h-fit w-3/5 lg:w-fit'>
						{services &&
							services.reverse().map((e, i) => (
								<article key={i} className='first:order-1 grid grid-cols-[auto_1fr] gap-x-4 content-start grid-rows-[auto] h-fit xl:w-1/2'>
									<span className={`${e.icon} text-5xl text-pumpkin w-fit`} />
									<Link
										to={`/services/${e.title}`}
										className='col-start-2 w-fit pe-4 text-lg font-semibold hover:text-pumpkin duration-250'>
										{e.title}
									</Link>
									<p dangerouslySetInnerHTML={{__html: e.teaser}} className='col-start-2' />
								</article>
							))
						}
					</div>
					<img
						src='images/1.png'
						className='col-span-2 lg:col-span-3 xl:col-span-3 lg:col-start-2 xl:col-start-7'
					/>
				</div>
			</section>
			<form action='/' className='flex flex-col lg:flex-row items-center gap-4 mx-auto px-2 p-4 lg:px-0 lg:w-4xl xl:w-4/5'>
				<h2 className='lg:w-32 me-24 text-2xl font-semibold [&>span]:text-pumpkin'><span>Book</span> service nu</h2>
				<input type='text' placeholder='Dit navn' className='outline-none border-1 border-platinum-2 rounded-md w-64 h-12 px-4' />
				<input type='text' placeholder='Din Email' className='outline-none border-1 border-platinum-2 rounded-md w-64 h-12 px-4' />
				<input type='text' placeholder='Telefon nr.' className='outline-none border-1 border-platinum-2 rounded-md w-64 h-12 px-4' />
				<button type='submit' className='cursor-pointer bg-pumpkin border-1 border-pumpkin rounded-md w-32 h-12 font-semibold text-md uppercase text-center text-seasalt hover:bg-transparent hover:text-pumpkin duration-250'>Send</button>
			</form>
			<Testimonials data={testimonials} />
			<ClientOnly fallback={<span>-</span>}>
				<Team data={teamQuery.data} />
			</ClientOnly>
			<News data={newsQuery.data} content={content} />
		</>
	)
}
