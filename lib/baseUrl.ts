const baseUrl =
	process.env.NODE_ENV === 'development'
		? process.env.NEXT_PUBLIC_DEV_URL
		: process.env.NEXT_PUBLIC_APP_URL

export default baseUrl
