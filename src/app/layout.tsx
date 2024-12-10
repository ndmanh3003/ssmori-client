import type { Metadata } from 'next'

import { AntdRegistry } from '@ant-design/nextjs-registry'
import { ConfigProvider, App } from 'antd'

import './globals.css'
import 'antd/dist/reset.css'
import antdConfig from '@/config/antd'
import Effect from '@/components/Effect'

export const metadata: Metadata = {
  title: 'Sushi Mori 🍣',
  description: 'Sushi Mori với thực đơn đa dạng món ăn và luôn đảm bảo độ tươi ngon, mang đến trải nghiệm trọn vẹn dành cho quý thực khách.'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body>
        <AntdRegistry>
          <ConfigProvider {...antdConfig}>
            <App>
              <div className='bg-mr-th min-h-[100vh] w-full flex justify-center'>
                <div className='fixed w-full h-full z-0'>
                  <Effect />
                </div>
                <div className='max-w-[1440px] w-full h-full overflow-hidden px-10 z-10'>{children}</div>
              </div>
            </App>
          </ConfigProvider>
        </AntdRegistry>
      </body>
    </html>
  )
}
