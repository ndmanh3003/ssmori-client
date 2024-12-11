import Heading from '@/components/Heading'
import { regions } from '@/mock'

export default function Page({ params }: { params: { branch: string } }) {
  const { branch: branchId } = params
  const branch = regions.flatMap((region) => region.branches).find((branch) => branch.id === Number(branchId))

  return (
    <>
      <Heading>
        Menu <span className='font-sans text-xl'>at {branch?.name}</span>
      </Heading>
    </>
  )
}
