import {
	createFileRoute,
	Outlet,
} from '@tanstack/react-router'
import { useState, useEffect } from 'react'


import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { contactInfoQueryOptions } from '@/utils/contactInfo'
import { useSuspenseQuery } from '@tanstack/react-query'

export const Route = createFileRoute('/_root')({
	loader: async ({ context }) => {
		await context.queryClient.ensureQueryData(contactInfoQueryOptions())
	},
	component: IndexDocument,
})

function IndexDocument() {
	const contactInfoQuery = useSuspenseQuery(contactInfoQueryOptions())
	const [scrollTrigger, setScrollTrigger] = useState(false)
	
	const linkItems: {
		title: string,
		path: string
	} = [
		{
			"title": "Forside",
			"path": "/"
		},
		{
			"title": "Om os",
			"path": "/omos"
		},
		{
			"title": "Services",
			"path": "/services"
		},
		{
			"title": "FAQ",
			"path": "/faq"
		},
		{
			"title": "Nyheder",
			"path": "/nyheder"
		},
		{
			"title": "Kontakt os",
			"path": "/kontakt"
		}
	]
	
	function scrollToTop() {
		window.scrollTo(0, 0);
	}
	
	function handleScroll() {
		setScrollTrigger(window.scrollY > 128);
	}

	useEffect(() => {
		window.addEventListener("scroll", handleScroll);

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);
	
	const [email, setEmail] = useState('')
	
	return (
		<>
			<Header links={linkItems} data={contactInfoQuery.data} />
			<main className=''>
				<Outlet />
				<button onClick={() => scrollToTop()} className={`${ scrollTrigger === true ? "fixed bottom-12 right-10" : "hidden" } rounded-md bg-pumpkin border-1 border-pumpkin text-white w-8 h-8 hover:bg-white hover:text-pumpkin`}><span className='fa fa-angle-up' /></button>
			</main>
			<Footer links={linkItems} data={contactInfoQuery.data}>
				<section className='w-100 lg:w-2/5 2xl:w-79'>
					<form
						method='post'
						onSubmit={(event) => {
							event.preventDefault()
							const value = new FormData(event.currentTarget).get('email')
							if (typeof value === 'string') {
								mutation.mutate(value)
							}
						}}
						className='flex flex-col items-start w-79'
					>
						<h2>
							Nyhedsbrev
						</h2>
						<label htmlFor='mail' className='mb-6'>Tilmeld dig vores nyhedsbrev her</label>
						<input type='email' id='mail' placeholder='Din Email' value={email} onChange={(e) => setEmail(e.target.value)} className='outline-none bg-charcoal placeholder-eerie-black h-10 px-4 w-full rounded-md' />
						<button type='submit' className='mt-4 py-3 w-1/2 bg-pumpkin border-1 border-pumpkin rounded-md text-md uppercase text-center text-seasalt hover:bg-transparent hover:text-pumpkin duration-250'>Tilmeld</button>
					</form>
				</section>
			</Footer>
		</>
	)
}