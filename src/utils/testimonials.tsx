import { queryOptions } from '@tanstack/react-query' 
import { notFound } from '@tanstack/react-router'
import { createServerFn } from '@tanstack/react-start'
import axios from 'axios'

export type Testimonials = Array<{
	_id: string
	title: string
	name: string
	review: string
	image: string
	__v: number
}>

export const fetchTestimonials = createServerFn({method: 'GET' }).handler(
	async () => {
		console.info('Fetching testimonials...')
		return axios
			.get<Testimonials>('http://localhost:5333/testimonial')
			.then((r) => r.data)
	},
)

export const testimonialsQueryOptions = () =>
	queryOptions({
		queryKey: ['testimonials'],
		queryFn: () => fetchTestimonials(),
		staleTime: 10 * 60 * 1000,
	})
