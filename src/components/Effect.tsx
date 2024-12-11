'use client'

import { usePathname } from 'next/navigation'
import Snowfall from 'react-snowfall'

export default function Effect() {
  const pathname = usePathname()

  if (pathname.slice(1)) {
    return <></>
  }

  return <Snowfall color='#df4601' snowflakeCount={100} />
}
