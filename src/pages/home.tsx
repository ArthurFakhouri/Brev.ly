import logoBrevly from '@/assets/Logo.svg'
import { MyLinks } from '@/components/my-links'
import { NewLink } from '@/components/new-link'
import { useHome } from '@/hooks/useHome'

export function Home() {

  const {
    links,
    isLoading
  } = useHome()

  return (
    <div className='flex flex-col gap-3.5 w-full justify-center md:flex-row md:gap-5 md:mt-22'>
      <div className='w-full max-w-[980px] flex flex-col items-center gap-6 md:gap-8 md:items-baseline'>
        <img className='w-[96.67px] h-auto object-contain' src={logoBrevly} alt='brev.ly logo' />
        <div className='flex flex-col w-full items-center gap-3.5  md:flex-row md:flex-wrap md:gap-5 md:items-start'>
          <NewLink />
          <MyLinks listLinks={links} isLoading={isLoading} />
        </div>
      </div>
    </div>
  )
}