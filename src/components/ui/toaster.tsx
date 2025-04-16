import { CheckCircle, Warning } from '@phosphor-icons/react'
import { Toaster as ToasterSonner } from 'sonner'

export function Toaster() {
  return (
    <ToasterSonner
      toastOptions={{
        classNames: {
          toast: "bg-white shadow-2xl !gap-3",
          title: "text-gray-600 text-base font-bold leading-6",
          description: "text-gray-500 text-sm leading-3.5",
        },
      }}
      icons={{
        success: <CheckCircle weight='fill' size={24} className='text-green-base mr-10' />,
        error: <Warning weight='fill' size={24} className="text-danger mr-10" />
      }}
    />
  )
}