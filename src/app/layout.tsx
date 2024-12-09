import type { Metadata } from 'next'

import { AntdRegistry } from '@ant-design/nextjs-registry'
import './globals.css'

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
          <AntdRegistry>{children}</AntdRegistry>
        </body>
      </body>
    </html>
  )
}
