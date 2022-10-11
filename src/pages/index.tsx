import Image from "next/image";
import { Input } from "../components/Input";

export default function Home() {
  return (
    <main className=" flex w-screen h-screen items-center justify-center flex-1">
      <div className="max-w-xs flex flex-col justify-center w-72 p-4" >
        <Image src='/logo.png' alt='' width={200} height={200} className="object-cover" />

        <form className=" flex flex-col gap-4">
          <Input label="Usuário" type="text" />
          <Input label="Senha" type="password" />

          <button type="submit" className="bg-sky-500 text-zinc-800 p-2 rounded font-semibold transition-all hover:bg-sky-700">
            Entrar
          </button>
        </form>
      </div>
    </main>
  )
}
