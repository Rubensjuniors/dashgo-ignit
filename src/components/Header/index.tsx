import { Flex, Icon, IconButton, useBreakpointValue } from '@chakra-ui/react'

import { Logo } from './components/Logo'
import { NotificationsNav } from './components/Notification'
import { Profile } from './components/Profile'
import { SearchBox } from './components/SearchBox'
import { RiMenuLine } from 'react-icons/ri'
import { useSidebarDrawer } from '../../context/SidebarDrawerContext'

export function Header() {
  const { onOpen } = useSidebarDrawer()

  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  })
  return (
    <Flex
      as="header"
      align="center"
      w="100%"
      maxWidth={1400}
      h="20"
      mx="auto"
      mt="4"
      px="6"
    >
      {!isWideVersion && (
        <IconButton
          aria-label="Open navigation"
          icon={<Icon as={RiMenuLine} />}
          variant="unstyled"
          onClick={onOpen}
          fontSize="24"
          mr="2"
        ></IconButton>
      )}

      <Logo />
      {isWideVersion && <SearchBox />}

      <Flex align="center" ml="auto">
        <NotificationsNav />
        <Profile showProfileData={isWideVersion} />
      </Flex>
    </Flex>
  )
}
