import { SidebarDrawerProvider } from '@/context/SidebarDrawerContext'
import { Flex } from '@chakra-ui/react'
import { ReactNode } from 'react'
import { Header } from '../components/Header'
import { Sidebar } from '../components/Sidebar'

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <SidebarDrawerProvider>
      <Flex direction="column" h="100vh">
        <Header />
        <Flex w="100%" my="6" maxWidth={1400} mx="auto" px="6">
          <Sidebar />
          {children}
        </Flex>
      </Flex>
    </SidebarDrawerProvider>
  )
}
