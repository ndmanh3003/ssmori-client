import type { Metadata } from 'next'

import { AntdRegistry } from '@ant-design/nextjs-registry'
import { ConfigProvider } from 'antd'

import './globals.css'
import antdConfig from '@/config/antd'

export const metadata: Metadata = {
  title: 'Sushi Mori 🍣',
  description:
    'Sushi Mori với thực đơn đa dạng món ăn và luôn đảm bảo độ tươi ngon, mang đến trải nghiệm trọn vẹn dành cho quý thực khách.'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body>
        <body>
          <AntdRegistry>
            <ConfigProvider {...antdConfig}>{children}</ConfigProvider>
          </AntdRegistry>
        </body>
      </body>
    </html>
  )
}
