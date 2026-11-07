import { queryOptions } from '@tanstack/react-query' 
import { notFound } from '@tanstack/react-router'
import { createServerFn } from '@tanstack/react-start'
import axios from 'axios'

export type ContactInfo = {
	_id: string
	address: string
	company: string
	cvr: number
	email: string
	openinghours: string
	phone: string
	zipcity: string
	__v: number
	some: Array<string>
}

export const fetchContactInfo = createServerFn({method: 'GET' }).handler(
	async () => {
		console.info('Fetching contactinformation...')
		return axios
			.get<ContactInfo>('http://localhost:5333/contactinformation')
			.then((r) => r.data)
	},
)

export const contactInfoQueryOptions = () =>
	queryOptions({
		queryKey: ['contactInfo'],
		queryFn: () => fetchContactInfo(),
		staleTime: 10 * 60 * 1000,
	})
