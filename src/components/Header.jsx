import Link from 'next/link'
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs'

const Header = () => {
    return (
        <div className='bg-gradient-to-r px-4 from-purple-200 via-pink-300 to-red-300'>
            <div className='max-w-7xl mx-auto flex  flex-row justify-between py-5 '>
                <Link href="/">
                    <h1 className='text-2xl font-bold bg-gradient-to-l from-purple-400 via-pink-500 to-red-900 text-transparent bg-clip-text'>Next Auth</h1>
                </Link>
                <div className='flex flex-row items-center gap-5'>
                    <Link href="/about">
                        About
                    </Link>
                    <SignedIn>
                        <UserButton />
                    </SignedIn>
                    <SignedOut>
                        <SignInButton />
                    </SignedOut>
                </div>
            </div>
        </div>
    )
}

export default Header
