import Link from 'next/link'

export default function NotFound() {
	return (
		<main className='flex flex-1 items-center justify-center p-6'>
			<section className='max-w-xl space-y-4 text-center'>
				<p className='text-brand text-sm font-medium tracking-widest uppercase'>
					404
				</p>
				<h1 className='font-heading text-4xl font-semibold tracking-tight'>
					Page not found
				</h1>
				<p className='text-muted-foreground'>
					The page you requested does not exist or has moved.
				</p>
				<Link
					className='text-brand font-medium underline underline-offset-4'
					href='/'
				>
					Return home
				</Link>
			</section>
		</main>
	)
}
