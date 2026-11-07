import {
  useMutation,
  useQueryClient,
  useSuspenseQuery,
} from '@tanstack/react-query'
import { createFileRoute, useHydrated } from '@tanstack/react-router'
import { useServerFn } from '@tanstack/react-start'
import { newsQueryOptions, postNews, putNews, deleteNews } from '@/utils/news'

export const Route = createFileRoute('/admin/')({
	loader: async ({ context }) => {
    await context.queryClient.query(newsQueryOptions())
	},
	component: Admin,
})

interface createNews {
	title: string;
	content: string;
	image: string;
}

interface putNews {
	_id: string;
	title: string;
	content: string;
	image: string;
}

interface deleteNews {
	_id: string;
}

function Admin() {
	const { data: news } = useSuspenseQuery(newsQueryOptions())
	const queryClient = useQueryClient()
	const save = useServerFn(postNews)
	const put = useServerFn(putNews)
	const erase = useServerFn(deleteNews)
	const hydrated = useHydrated()
	const mutation = useMutation({
		mutationFn: (news: createNews) => save({ data: news }),
		onSuccess: () =>
		queryClient.invalidateQueries({ queryKey: newsQueryOptions.queryKey }),
	})
	const putMutation = useMutation({
		mutationFn: (news: putNews) => put({ data: news }),
		onSuccess: () =>
		queryClient.invalidateQueries({ queryKey: newsQueryOptions.queryKey }),
	})
	const deleteMutation = useMutation({
		mutationFn: (news: deleteNews) => erase({ data: news }),
		onSuccess: () =>
		queryClient.invalidateQueries({ queryKey: newsQueryOptions.queryKey }),
	})
	
	return (
		<>
			{news &&
				news.map((data, index) => (
					<form
						key={index}
						method="post"
						onSubmit={(event) => {
							event.preventDefault()
							console.log(event.target)
							const value = new FormData(event.target)
							console.log(value)
								mutation.mutate(value)
						}}
					>
						<fieldset
						disabled={!hydrated || mutation.isPending}
						className="flex gap-3"
						>
						<label>
							Title
							<input
								name="title"
								defaultValue={data.title}
								required
								className="rounded border p-1"
							/>
						</label>
						<label>
							Content
							<input
								name="content"
								defaultValue={data.content}
								required
								className="rounded border p-1"
							/>
						</label>
						<label>
							Image
							<input
								type="file"
								name="image"
								required
							className="rounded border p-1"
							/>
						</label>
						<button type="submit" className="rounded border px-3">
							{mutation.isPending ? 'Posting...' : 'Post news'}
						</button>
						</fieldset>
						{mutation.isError ? (
						<p role="alert">Could not post news. Try again.</p>
						) : null}
					</form>
				))}
			{news &&
				news.map((data, index) => (
					<form
						key={index}
						method="put"
						onSubmit={(event) => {
							event.preventDefault()
							const value = new FormData(event.target)
							console.log(value)
							putMutation.mutate(value)
						}}
					>
						<fieldset
						disabled={!hydrated || putMutation.isPending}
						className="flex gap-3"
						>
						<label>
							_id
							<input
								name="_id"
								defaultValue={data._id}
								required
							className="rounded border p-1"
							/>
						</label>
						<label>
							Title
							<input
								name="title"
								defaultValue={data.title}
								required
								className="rounded border p-1"
							/>
						</label>
						<label>
							Content
							<input
								name="content"
								defaultValue={data.content}
								required
								className="rounded border p-1"
							/>
						</label>
						<label>
							Image
							<input
								type="file"
								name="image"
							className="rounded border p-1"
							/>
						</label>
						<button type="submit" className="rounded border px-3">
							{putMutation.isPending ? 'Putting...' : 'Put news'}
						</button>
						</fieldset>
						{putMutation.isError ? (
						<p role="alert">Could not put news. Try again.</p>
						) : null}
					</form>
				))}
			{news &&
				news.map((data, index) => (
					<form
						key={index}
						method="delete"
						onSubmit={(event) => {
							event.preventDefault()
							const value = new FormData(event.target)
							console.log(value)
							deleteMutation.mutate(value)
						}}
					>
						<fieldset
						disabled={!hydrated || deleteMutation.isPending}
						className="flex gap-3"
						>
						<label>
							_id
							<input
								name="_id"
								defaultValue={data._id}
								required
							className="rounded border p-1"
							/>
						</label>
						<button type="submit" className="rounded border px-3">
							{deleteMutation.isPending ? 'Deleting...' : 'Delete news'}
						</button>
						</fieldset>
						{deleteMutation.isError ? (
						<p role="alert">Could not delete news. Try again.</p>
						) : null}
					</form>
				))}
		</>
	)
}



