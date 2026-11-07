import { queryOptions } from '@tanstack/react-query' 
import { notFound } from '@tanstack/react-router'
import { createServerFn } from '@tanstack/react-start'
import axios from 'axios'

export type Slider = Array<{
	_id: string
	caption: string
	image: string
	__v: number
}>

export const fetchSlider = createServerFn({method: 'GET' }).handler(
	async () => {
		console.info('Fetching slider...')
		return axios
			.get<Slider>('http://localhost:5333/slider')
			.then((r) => r.data.slice(0, 2))
	},
)

export const sliderQueryOptions = () =>
	queryOptions({
		queryKey: ['slider'],
		queryFn: () => fetchSlider(),
		staleTime: 10 * 60 * 1000,
	})
