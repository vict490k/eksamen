import { queryOptions } from '@tanstack/react-query' 
import { notFound } from '@tanstack/react-router'
import { createServerFn } from '@tanstack/react-start'
import axios from 'axios'

export type About = {
	_id: string
	content: string
	teaser: string
	title: string
	image: string
}

export const fetchAbout = createServerFn({method: 'GET' }).handler(
	async () => {
		console.info('Fetching about...')
		return axios
			.get<About>('http://localhost:5333/about')
			.then((r) => r.data)
	},
)

export const aboutQueryOptions = () =>
	queryOptions({
		queryKey: ['about'],
		queryFn: () => fetchAbout(),
		staleTime: 10 * 60 * 1000,
	})
