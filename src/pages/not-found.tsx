import image404 from '@/assets/404.svg'
import { Box } from "@/components/ui/box";
import { Link } from '@/components/ui/link';

export function NotFound() {
  return (
    <div className="size-full flex items-center justify-center">
      <Box className="gap-6 py-16 px-12 w-full items-center max-w-[580px]">
        <img className='w-[194px] object-contain' src={image404} alt='404' />
        <strong className='text-2xl'>Link não encontrado</strong>
        <span className='font-semibold text-sm text-gray-500 text-center leading-[18px]'>
          O link que você está tentando acessar não existe,
          {" "}foi removido ou é uma URL inválida.
          {" "}Saiba mais em <Link to={'/'}>brev.ly</Link>.</span>
      </Box>
    </div>
  )
}