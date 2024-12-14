import OrderDetail from '@/app/(customer)/order-detail/[id]/page'

export default function Page({ params }: { params: Promise<{ id: string }> }) {
  console.log(11112)

  return <OrderDetail params={params} />
}
