import { exchangeTwitchCodeForToken } from '@/app/api/auth/server/auth'
import { NextRequest, NextResponse } from 'next/server'

export async function GET(req: NextRequest) {
	const { searchParams } = new URL(req.url)
	const code = searchParams.get('code')

	if (!code) {
		return NextResponse.json({ error: 'No code provided' }, { status: 400 })
	}

	try {
		const tokens = await exchangeTwitchCodeForToken(code)
		// Store tokens securely (e.g., in a database, encrypted cookies, or session)
		return NextResponse.json(tokens)
	} catch (error) {
		console.error('Error exchanging code for tokens:', error)
		return NextResponse.json({ error: 'Failed to fetch tokens' }, { status: 500 })
	}
}
