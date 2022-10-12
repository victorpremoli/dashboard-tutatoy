import { ReactNode } from 'react'
import { SideBar } from './Sidebar'

interface LayoutProps {
  children: ReactNode
}

export function LayoutDashboard({ children }: LayoutProps) {
  return (
    <main className="flex">
      <SideBar />
      {children}
    </main>
  )
}
