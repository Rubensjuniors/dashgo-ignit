import { Button, Flex, Stack } from '@chakra-ui/react'
import { Input } from '../components/Form/Input'

export default function SignIn() {
  return (
    <Flex w="100wh" h="100vh" align="center" justify="center">
      <Flex
        as="form"
        width="100%"
        maxWidth={360}
        bg="gray.800"
        p="8"
        borderRadius={8}
        direction="column"
      >
        <Stack spacing={4}>
          <Input name="email" label="E-mail" />
          <Input name="password" label="Password" />
        </Stack>
        <Button type="submit" marginTop="6" colorScheme="pink" size="lg">
          Entrar
        </Button>
      </Flex>
    </Flex>
  )
}
