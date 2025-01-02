import cn from '@/utils/cn'

export default function Heading({
  impact,
  children,
  isBig
}: Readonly<{ children: React.ReactNode; impact?: string; isBig?: boolean }>) {
  return (
    <>
      <div
        className={cn('font-impact text-mr-rd text-4xl font-semibold', {
          'text-3xl': !isBig
        })}
      >
        {impact}
      </div>
      <div
        className={cn('font-header text-black text-[70px] font-medium', {
          'text-4xl': !isBig
        })}
      >
        {children}
      </div>
    </>
  )
}
