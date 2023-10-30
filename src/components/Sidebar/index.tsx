import {
  Box,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  useBreakpointValue,
} from '@chakra-ui/react'

import { SidebarNav } from './components/SidebarNav'
import { useSidebarDrawer } from '../../context/SidebarDrawerContext'

export function Sidebar() {
  const { isOpen, onClose } = useSidebarDrawer()
  const isFloatingSidebar = useBreakpointValue({
    base: true,
    lg: false,
  })

  console.log(isOpen)

  if (isFloatingSidebar) {
    return (
      <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
        <DrawerOverlay>
          <DrawerContent bg="gray.800">
            <DrawerCloseButton mt="6" />
            <DrawerHeader>Navegação</DrawerHeader>

            <DrawerBody>
              <SidebarNav />
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    )
  } else {
    return (
      <Box as="aside" w="64" mr="8">
        <SidebarNav />
      </Box>
    )
  }
}
