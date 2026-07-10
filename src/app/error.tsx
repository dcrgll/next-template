'use client'

export default function error({
	unstable_retry
}: {
	unstable_retry: () => void
}) {
	return (
		<main className='flex flex-1 items-center justify-center p-6'>
			<section className='max-w-xl space-y-4 text-center'>
				<h1 className='font-heading text-4xl font-semibold tracking-tight'>
					Something went wrong
				</h1>
				<p className='text-muted-foreground'>
					Try again, or return to the home page.
				</p>
				<button
					className='bg-primary text-primary-foreground rounded-md px-4 py-2 font-medium'
					onClick={unstable_retry}
					type='button'
				>
					Try again
				</button>
			</section>
		</main>
	)
}
