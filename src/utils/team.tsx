import { queryOptions } from '@tanstack/react-query' 
import { notFound } from '@tanstack/react-router'
import { createServerFn } from '@tanstack/react-start'
import axios from 'axios'

export type Team = Array<{
	_id: string
	title: string
	name: string
	image: string
	__v: number
}>

export const fetchTeam = createServerFn({method: 'GET' }).handler(
	async () => {
		console.info('Fetching team...')
		return axios
			.get<Team>('http://localhost:5333/team')
			.then((r) => r.data)
	},
)

export const teamQueryOptions = () =>
	queryOptions({
		queryKey: ['team'],
		queryFn: () => fetchTeam(),
		staleTime: 10 * 60 * 1000,
	})
