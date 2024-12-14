import Booking from '@/app/(customer)/booking/[branch]/page'

export default function Page({ params }: { params: Promise<{ branch: string }> }) {
  return <Booking params={params} />
}
