import Card from '@/components/customer/Card'
import InformationDetail from '@/components/form/InformationDetail'

export default function App() {
  return (
    <div className='text-base grid grid-cols-2 gap-10'>
      <div>
        <div className='text-xl mb-5 font-bold'>Information Detail</div>
        <div className='mb-5'>
          Customer tier: <span className='font-bold text-mr-nd'>Gold</span>, upgraded on June 30, 2024.
        </div>
        <InformationDetail />
      </div>
      <div>
        <div className='text-xl mb-5 font-bold'>Card Detail</div>
        <div className='my-5'>Your card now is open, you can flip it to see the back side.</div>
        <div className='w-full flex justify-center'>
          <Card type='M' />
        </div>
      </div>
    </div>
  )
}
