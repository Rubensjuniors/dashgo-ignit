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
  Spinner,
} from '@chakra-ui/react'
import { RiAddLine, RiPencilLine } from 'react-icons/ri'
import { Pagination } from '../../components/Pagination'
import RootLayout from '@/layout'
import { ReactNode, useState } from 'react'
import { useUsers } from '@/hooks/useUsers'
import { API } from '@/services/axios'
import { queryClient } from '@/services/queryClint'
import { useRouter } from 'next/router'

export default function UserList() {
  const [currentPage, setCurrentPage] = useState(1)
  const router = useRouter()
  const { data, isLoading, isFetching, error } = useUsers(currentPage, /*{
    initialData: { users, totalCount },
  }*/)
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  })

  async function handlePrefetchUser(userId: string) {
    await queryClient.prefetchQuery(['user', userId], async () => {
      const response = await API.get(`users/${userId}`)

      return response.data.user
    }, {
      staleTime: 1000 * 60 * 10,  // 10 minutes
    })
  }
  return (
    <Box flex="1" borderRadius={8} bg="gray.800" p="8">
      <Flex mb="8" justify="space-between" align="center">
        <Heading size="lg" fontWeight="normal">
          Usuários
          {!isLoading && isFetching && (
            <Spinner size="sm" color="gray.500" ml="4" />
          )}
        </Heading>

          <Button
            as="a"
            size="sm"
            fontSize="sm"
            colorScheme="pink"
            leftIcon={<Icon as={RiAddLine} fontSize="28" />}
            onClick={() => router.push('/users/create')}
            >
            Criar novo
          </Button>

      </Flex>

      { isLoading ? (
            <Flex justify="center">
              <Spinner />
            </Flex>
          ) : error ? (
            <Flex justify="center">
              <Text>Falha em obter dados dos usuários</Text>
            </Flex>
          ) : (
            <>
              <Table colorScheme="whiteAlpha">
                <Thead>
                  <Tr>
                    <Th px={["4", "4", "6"]} color="gray.300" width="8">
                      <Checkbox colorScheme="pink" />
                    </Th>
                    <Th>Usuário</Th>
                    { isWideVersion && <Th>Data de cadastro</Th> }
                    { isWideVersion && <Th width="8"></Th> }
                  </Tr>
                </Thead>
                <Tbody>
                  {data?.users.map((user) => {
                    return (
                      <Tr key={user.id}>
                        <Td px={["4", "4", "6"]}>
                          <Checkbox colorScheme="pink" />
                        </Td>
                        <Td>
                          <Box>
                              <Link
                                color="purple.400"
                                fontWeight="bold"
                                onMouseEnter={() => handlePrefetchUser(user.id)}
                              >
                                  {user.name}
                              </Link>
                            <Text fontSize="sm" color="gray.300">
                              {user.email}
                            </Text>
                          </Box>
                        </Td>
                        { isWideVersion && <Td>{user.createdAt}</Td> }
                        { isWideVersion && (
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

              <Pagination
                totalCountOfRegisters={data?.totalCount}
                currentPage={currentPage}
                onPageChange={setCurrentPage}/>
            </>
          )}
    </Box>
  )
}

UserList.getLayout = (page: ReactNode) => {
  return <RootLayout>{page}</RootLayout>
}
