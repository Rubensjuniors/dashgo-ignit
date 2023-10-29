import { Input } from '@/components/Form/Input'
import {
  Box,
  Divider,
  Heading,
  SimpleGrid,
  VStack,
  Flex,
  Button,
  HStack,
} from '@chakra-ui/react'
import Link from 'next/link'

export default function CreateUser() {
  return (
    <Box as="form" flex="1" borderRadius={8} bg="gray.800" p={['6', '8']}>
      <Heading size="lg" fontWeight="normal">
        Criar usuário
      </Heading>
      <Divider my="6" borderColor="gray.700" />
      <VStack spacing={['6', '8']}>
        <SimpleGrid minChildWidth="240px" spacing={['6', '8']} w="100%">
          <Input name="name" label="Nome completo" />
          <Input name="email" type="email" label="E-mail" />
        </SimpleGrid>

        <SimpleGrid minChildWidth="240px" spacing={['6', '8']} w="100%">
          <Input name="password" type="password" label="Senha" />
          <Input
            name="password_confirmation"
            type="password"
            label="Confirmação da senha"
          />
        </SimpleGrid>
      </VStack>
      <Flex mt="8" justify="flex-end">
        <HStack spacing={['3', '4']}>
          <Link href="/users" passHref>
            <Button as="a" colorScheme="whiteAlpha">
              Cancelar
            </Button>
          </Link>
          <Button type="submit" colorScheme="pink">
            Salvar
          </Button>
        </HStack>
      </Flex>
    </Box>
  )
}
