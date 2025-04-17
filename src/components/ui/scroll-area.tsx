import * as ScrollAreaRadix from '@radix-ui/react-scroll-area'

type ScrollAreaProps = {

} & ScrollAreaRadix.ScrollAreaProps

export function ScrollArea({
  children,
  ...props
}: ScrollAreaProps) {
  return (
    <ScrollAreaRadix.Root type='auto' className='overflow-hidden'>
      <ScrollAreaRadix.Viewport {...props}>
        {children}
      </ScrollAreaRadix.Viewport>
      <ScrollAreaRadix.Scrollbar
        className='flex bg-[#0000000e] rounded-sm touch-none select-none p-0.5 transition-colors duration-[160ms] ease-out data-[orientation=horizontal]:h-2.5 data-[orientation=vertical]:w-2.5 data-[orientation=horizontal]:flex-col'
        orientation="vertical"
      >
        <ScrollAreaRadix.Thumb className='relative flex-1 rounded-[10px] bg-blue-base before:absolute before:left-1/2 before:top-1/2 before:size-full before:min-h-11 before:min-w-11 before:-translate-x-1/2 before:-translate-y-1/2' />
      </ScrollAreaRadix.Scrollbar>
      <ScrollAreaRadix.Scrollbar
        className='flex touch-none select-none p-0.5 transition-colors duration-[160ms] ease-out data-[orientation=horizontal]:h-2.5 data-[orientation=vertical]:w-2.5 data-[orientation=horizontal]:flex-col'
        orientation="horizontal"
      >
        <ScrollAreaRadix.Thumb className='relative flex-1 rounded-[10px] bg-zinc-600 before:absolute before:left-1/2 before:top-1/2 before:size-full before:min-h-11 before:min-w-11 before:-translate-x-1/2 before:-translate-y-1/2' />
      </ScrollAreaRadix.Scrollbar>
    </ScrollAreaRadix.Root>
  )
}