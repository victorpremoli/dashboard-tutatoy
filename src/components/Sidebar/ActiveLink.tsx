import Link from 'next/link'
import { useRouter } from 'next/router'
import { ReactNode } from 'react'

interface ActiveLinkProps {
  path: string
  label: string
  icon: ReactNode
}

export function ActiveLink({ path, icon, label }: ActiveLinkProps) {
  const router = useRouter()

  return (
    <Link href={path}>
      <li
        className={
          router.pathname === path
            ? 'font-bold flex gap-2 bg-pink-600 p-4 rounded-3xl cursor-pointer'
            : 'font-bold flex gap-2 p-4 cursor-pointer hover:opacity-80'
        }
      >
        {icon}
        <a>{label}</a>
      </li>
    </Link>
  )
}
