import { queryOptions } from '@tanstack/react-query' 
import { notFound } from '@tanstack/react-router'
import { createServerFn } from '@tanstack/react-start'
import axios from 'axios'

export type News = Array<{
	_id: string
	title: string
	content: string
	received: Date
	comments: Array<[
		name: string,
		comment: string,
		publish: boolean,
		id: string,
		received: Date,
	]>
	image: string
	__v: number
}>

export type createNews = {
	title: string
	content: string
	image: string
}

export type putNews = {
	title: string
	content: string
	image: string
	_id: string
}

export type deleteNews = {
	_id: string
}

export const fetchNews = createServerFn({method: 'GET' }).handler(
	async () => {
		console.info('Fetching news...')
		return axios
			.get<News>('http://localhost:5333/news')
			.then((r) => r.data)
	},
)

export const newsQueryOptions = () =>
	queryOptions({
		queryKey: ['news'],
		queryFn: () => fetchNews(),
		staleTime: 10 * 60 * 1000,
	})

export const fetchHomeNews = createServerFn({method: 'GET' }).handler(
	async () => {
		console.info('Fetching home news...')
		return axios
			.get<News>('http://localhost:5333/news')
			.then((r) => r.data.reverse().slice(0, 3))
	},
)

export const homeNewsQueryOptions = () =>
	queryOptions({
		queryKey: ['homeNews'],
		queryFn: () => fetchHomeNews(),
		staleTime: 10 * 60 * 1000,
	})

export const postNews = createServerFn({method: 'POST' }).handler(
	async ({data}) => {
		console.info('Posting news...')
		return axios
			.post<createNews>('http://localhost:5333/news/admin', data)
			.then((r) => r.data)
	})
	
export const putNews = createServerFn({method: 'PUT' }).handler(
	async ({data}) => {
		console.info('Putting news at ' + data._id)
		return axios
			.put<putNews>(`http://localhost:5333/news/admin/${data._id}`, data)
			.then((r) => r.data)
	})
	
export const deleteNews = createServerFn({method: 'DELETE' }).handler(
	async ({data}) => {
		console.ingo('Deleting news at ' + data)
		return axios
			.delete<deleteNews>('http://localhost:5333/news/admin/' + data._id)
			.then((r) => r.data)
	})