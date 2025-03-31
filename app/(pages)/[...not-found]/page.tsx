import Link from 'next/link';

export default function page() {
  return (
    <div className="flex-1 flex flex-col justify-center items-center gap-3">

      <p className='text-[20rem] font-extrabold tracking-widest drop-shadow-[10px_10px_10px_#000000] text-[var(--color-primary)] leading-none'>404</p>

      <p className='text-[3rem] font-bold tracking-wide drop-shadow-[10px_10px_10px_#000000] text-[var(--color-primary)]'>Page Not Found</p>

      <Link
        className="btn btn-ghost m"
        href="/"
      >
        Volver
      </Link>
    </div>
  )
}
