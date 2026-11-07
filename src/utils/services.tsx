import { queryOptions } from '@tanstack/react-query' 
import { notFound } from '@tanstack/react-router'
import { createServerFn } from '@tanstack/react-start'
import axios from 'axios'

export type Services = Array<{
	_id: string
	title: string
	teaser: string
	content: string
	icon: string
	image: string
	__v: number
}>

export const fetchServices = createServerFn({method: 'GET' }).handler(
	async () => {
		console.info('Fetching services...')
		return axios
			.get<Services>('http://localhost:5333/service')
			.then((r) => r.data)
	},
)

export const servicesQueryOptions = () =>
	queryOptions({
		queryKey: ['services'],
		queryFn: () => fetchServices(),
		staleTime: 10 * 60 * 1000,
	})
