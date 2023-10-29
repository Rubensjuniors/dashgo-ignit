import {
  Box,
  Button,
  Checkbox,
  Flex,
  Heading,
  Icon,
  Table,
  Link,
  Text,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  useBreakpointValue,
} from '@chakra-ui/react'
import { RiAddLine, RiPencilLine } from 'react-icons/ri'
import NextLink from 'next/link'
import { Pagination } from '../../components/Pagination'
import RootLayout from '@/layout'
import { ReactNode } from 'react'
import { formatDistanceToNow } from 'date-fns'

const users = [
  {
    id: 1,
    name: 'User test 1',
    email: 'Usertest1@gmail.com',
    createdAt: `2023-08-02T00:00:00.000Z`,
  },
  {
    id: 2,
    name: 'User test 2',
    email: 'Usertest2@gmail.com',
    createdAt: `2023-09-18T00:00:00.000Z`,
  },
  {
    id: 3,
    name: 'User test 3',
    email: 'Usertest3@gmail.com',
    createdAt: `2023-09-28T00:00:00.000Z`,
  },
]

export default function UserList() {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  })
  return (
    <Box flex="1" borderRadius={8} bg="gray.800" p="8">
      <Flex mb="8" justify="space-between" align="center">
        <Heading size="lg" fontWeight="normal">
          Usuários
          {/* {!isLoading && isFetching && (
            <Spinner size="sm" color="gray.500" ml="4" />
          )} */}
        </Heading>

        <NextLink href="/users/create" passHref>
          <Button
            as="a"
            size="sm"
            fontSize="sm"
            colorScheme="pink"
            leftIcon={<Icon as={RiAddLine} fontSize="28" />}
          >
            Criar novo
          </Button>
        </NextLink>
      </Flex>

      <Table colorScheme="whiteAlpha">
        <Thead>
          <Tr>
            <Th px={['4', '4', '6']} color="gray.300" width="8">
              <Checkbox colorScheme="pink" />
            </Th>
            <Th>Usuário</Th>
            {isWideVersion && <Th>Data de cadastro</Th>}
            {isWideVersion && <Th width="8"></Th>}
          </Tr>
        </Thead>
        <Tbody>
          {users.map((user) => {
            return (
              <Tr key={user.id}>
                <Td px={['4', '4', '6']}>
                  <Checkbox colorScheme="pink" />
                </Td>
                <Td>
                  <Box>
                    <Text fontWeight="bold">
                      <Link
                        color="purple.400"
                        href="#"
                        // onMouseEnter={() => handlePrefetchUser(user.id)}
                      >
                        {user.name}
                      </Link>
                    </Text>
                    <Text fontSize="sm" color="gray.300">
                      {user.email}
                    </Text>
                  </Box>
                </Td>
                {isWideVersion && (
                  <Td>{formatDistanceToNow(new Date(user.createdAt))}</Td>
                )}
                {isWideVersion && (
                  <Td>
                    <Button
                      as="a"
                      size="sm"
                      fontSize="sm"
                      colorScheme="purple"
                      leftIcon={<Icon as={RiPencilLine} fontSize="16" />}
                    >
                      Editar
                    </Button>
                  </Td>
                )}
              </Tr>
            )
          })}
        </Tbody>
      </Table>

      <Pagination />
    </Box>
  )
}

UserList.getLayout = (page: ReactNode) => {
  return <RootLayout>{page}</RootLayout>
}
