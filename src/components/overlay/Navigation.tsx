import { Button } from '@/components/ui/button'
import Link from 'next/link'

const Navigation = () => (
	<div className='flex space-x-4'>
		<Link href='/'>
			<Button>Default</Button>
		</Link>
		<Link href='/chatting'>
			<Button>Chatting</Button>
		</Link>
		<Link href='/afk'>
			<Button>AFK</Button>
		</Link>
	</div>
)

export default Navigation
