import Image from 'next/image'
import {
  CalendarBlank,
  ClipboardText,
  HouseLine,
  ShoppingCart,
} from 'phosphor-react'
import { ActiveLink } from './ActiveLink'

export function SideBar() {
  return (
    <nav className="w-52 h-screen flex flex-col bg-gray-800 ">
      <header>
        <Image
          src="/logo.png"
          alt=""
          width={208}
          height={208}
          className="object-cover"
        />
      </header>

      <div className="p-6">
        <ul className="flex flex-col gap-4">
          <ActiveLink
            label="Início"
            path="/dashboard"
            icon={<HouseLine size={20} />}
          />
          <ActiveLink
            label="Produtos"
            path="/dashboard/produtos"
            icon={<ShoppingCart size={20} />}
          />
          <ActiveLink
            label="Pedidos"
            path="/dashboard/pedidos"
            icon={<ClipboardText size={20} />}
          />
          <ActiveLink
            label="Calendário"
            path="/dashboard/calendario"
            icon={<CalendarBlank size={20} />}
          />
        </ul>
      </div>
    </nav>
  )
}
