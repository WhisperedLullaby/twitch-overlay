'use server'

const TWITCH_AUTH_URL = 'https://id.twitch.tv/oauth2/authorize'
const TWITCH_TOKEN_URL = 'https://id.twitch.tv/oauth2/token'

export async function getTwitchAuthUrl() {
	const { TWITCH_CLIENT_ID, TWITCH_REDIRECT_URI } = process.env

	const url = `${TWITCH_AUTH_URL}?client_id=${TWITCH_CLIENT_ID}&redirect_uri=${encodeURIComponent(
		TWITCH_REDIRECT_URI || ''
	)}&response_type=code&scope=channel:read:subscriptions`

	return url
}

export async function exchangeTwitchCodeForToken(code: string) {
	const { TWITCH_CLIENT_ID, TWITCH_CLIENT_SECRET, TWITCH_REDIRECT_URI } = process.env

	const response = await fetch(TWITCH_TOKEN_URL, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/x-www-form-urlencoded',
		},
		body: new URLSearchParams({
			client_id: TWITCH_CLIENT_ID!,
			client_secret: TWITCH_CLIENT_SECRET!,
			code,
			grant_type: 'authorization_code',
			redirect_uri: TWITCH_REDIRECT_URI!,
		}),
	})

	if (!response.ok) {
		throw new Error(`Failed to fetch tokens: ${response.statusText}`)
	}

	const tokens = await response.json()
	return tokens
}
