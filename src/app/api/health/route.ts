function get() {
	return Response.json(
		{ status: 'ok' },
		{
			headers: {
				'Cache-Control': 'no-store'
			}
		}
	)
}

export { get as GET }
