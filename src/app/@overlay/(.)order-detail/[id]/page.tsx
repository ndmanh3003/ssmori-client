import OrderDetail from '@/app/(customer)/order-detail/[id]/page'

export default function Page({ params }: { params: Promise<{ id: string }> }) {
  return <OrderDetail params={params} />
}
