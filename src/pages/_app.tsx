import { Header } from '@/components/Header'
import { Sidebar } from '@/components/Sidebar'
import { SidebarDrawerProvider } from '@/context/SidebarDrawerContext'
import { theme } from '@/styles/theme'
import { ChakraProvider, Flex } from '@chakra-ui/react'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <SidebarDrawerProvider>
      <ChakraProvider theme={theme}>
        <Flex direction="column" h="100vh">
          <Header />
          <Flex w="100%" my="6" maxWidth={1400} mx="auto" px="6">
            <Sidebar />
            <Component {...pageProps} />
          </Flex>
        </Flex>
      </ChakraProvider>
    </SidebarDrawerProvider>
  )
}
