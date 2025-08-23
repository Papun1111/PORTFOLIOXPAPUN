import type { Metadata } from 'next'

import './globals.css'

export const metadata: Metadata = {
  title: 'Papun Mohapatra',
  description: 'Created By me',
  generator: 'Nextjs',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
     
<link rel="preconnect" href="https://fonts.googleapis.com"/>
<link rel="preconnect" href="https://fonts.gstatic.com" />
<link href="https://fonts.googleapis.com/css2?family=Google+Sans+Code:wght@500&display=swap" rel="stylesheet"/>
      </head>
      <body>
        
        {children}
        </body>
    </html>
  )
}
