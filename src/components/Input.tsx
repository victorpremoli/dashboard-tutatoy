import { InputHTMLAttributes } from 'react'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string
}

export function Input({ label, ...rest }: InputProps) {
  return (
    <div className="flex flex-col gap-2">
      <label className="font-bold">{label}</label>
      <input
        className="bg-gray-900 rounded border-solid border-2 border-sky-300 p-2 focus:outline-none focus:border-sky-500"
        {...rest}
      />
    </div>
  )
}
