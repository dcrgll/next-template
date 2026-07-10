'use client'

export default function globalError({
	unstable_retry
}: {
	unstable_retry: () => void
}) {
	return (
		<html lang='en'>
			<body>
				<main>
					<h1>Something went wrong</h1>
					<p>Try again, or return to the home page.</p>
					<button onClick={unstable_retry} type='button'>
						Try again
					</button>
				</main>
			</body>
		</html>
	)
}
