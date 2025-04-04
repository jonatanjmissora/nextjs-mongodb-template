import GithubSVG from '@/app/_assets/GithubSVG'
import GoogleSVG from '@/app/_assets/GoogleSVG'
import { LoginLink } from '@kinde-oss/kinde-auth-nextjs/components'
import React from 'react'

export default function page() {
    return (
        <div className='flex-1 flex flex-col gap-4 justify-center items-center mx-auto w-[95%] h-full sm:w-1/2'>

            <div className='flex items-center justify-center gap-6 flex-col p-20 rounded-xl w-[98%] sm:w-max bg-[var(--color-secondary)] shadow-[var(--shadow)]'>

                <p className='text-2xl font-bold tracking-wider text-center text-[var(--white)]'>Bienvenido a (app)</p>
                <p className='text-xl fo nt-bold tracking-wider text-[var(--white)]'>Ingresa con</p>

                <LoginLink
                    className="bg-[var(--color-primary)] p-2 px-20 sm:px-32 rounded-xl shadow flex gap-4 justify-center items-center font-bold tracking-wider hover:bg-[var(--color-primary-hover)] text-[var(--white)] transition-colors duration-300"
                    authUrlParams={{
                        connection_id: process.env.NEXT_PUBLIC_KINDE_CONNECTION_GOOGLE || ""
                    }}
                >
                    <GoogleSVG className='size-7' />
                    Google
                </LoginLink>

                <LoginLink
                    className="bg-[var(--color-primary)] p-2 px-20 sm:px-32 rounded-xl shadow flex gap-4 justify-center items-center font-bold tracking-wider hover:bg-[var(--color-primary-hover)] text-[var(--white)] transition-colors duration-300"
                    authUrlParams={{
                        connection_id: process.env.NEXT_PUBLIC_KINDE_CONNECTION_GITHUB || ""
                    }}
                >
                    <GithubSVG className='size-7' />
                    Github
                </LoginLink>

            </div>

        </div>
    )
}
