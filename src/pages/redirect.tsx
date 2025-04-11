import { Box } from "@/components/box";
import { Link } from '@/components/link';

export function Redirect() {
  return (
    <div className="size-full flex items-center justify-center">
      <Box className="gap-6 py-16 px-12 w-full items-center max-w-[580px]">
        <img className='w-[48px] object-contain' src={"/Logo_Icon.svg"} alt='404' />
        <strong className='text-2xl'>Redirecionando...</strong>
        <div className='flex flex-col'>
          <span className='font-semibold text-sm text-gray-500 text-center leading-[18px]'>
            O link será aberto automaticamente em alguns instantes.
          </span>
          <span className='font-semibold text-sm text-gray-500 text-center leading-[18px]'>
            Não foi redirecionado? <Link to={'/'}>Acesse aqui</Link>
          </span>
        </div>
      </Box>
    </div>
  )
}