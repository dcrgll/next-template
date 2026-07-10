import { ImageResponse } from 'next/og'

export const alt = 'next-template'

export const size = {
	height: 630,
	width: 1200
}

export const contentType = 'image/png'

export default function openGraphImage() {
	return new ImageResponse(
		<div
			style={{
				alignItems: 'center',
				background: '#14120b',
				color: '#edecec',
				display: 'flex',
				fontSize: 96,
				fontWeight: 700,
				height: '100%',
				justifyContent: 'center',
				letterSpacing: '-0.04em',
				width: '100%'
			}}
		>
			next-template
		</div>,
		size
	)
}
