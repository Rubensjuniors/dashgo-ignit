import { Button, Flex, Stack } from '@chakra-ui/react'
import { Input } from '../components/Form/Input'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { SignInFormData, SingInFormSchema } from '@/schemas/singInForm'
import { useRouter } from 'next/router'

const userValidity = {
  email: 'user@example.com',
  password: 'senha123'
}


export default function SignIn() {
  const router = useRouter()
  const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm<SignInFormData>(
    {resolver: zodResolver(SingInFormSchema)}
    )

  const handleSignIn = async (data: SignInFormData) => {
    await new Promise(resolve => setTimeout(resolve, 2000))
    console.log(data)

    if(data.email === userValidity.email && data.password === userValidity.password) {
      router.push('/dashboard')
    }
    reset()
  }

  return (
    <Flex
      w="100vw"
      h="100vh"
      align="center"
      justify="center"
    >
      <Flex
        as="form"
        width="100%"
        maxWidth={360}
        bg="gray.800"
        p="8"
        borderRadius={8}
        flexDir="column"
        onSubmit={handleSubmit(handleSignIn)}
      >
        <Stack spacing="4">
          <Input
            label="E-mail"
            type="email"
            error={errors.email}
            {...register("email")}
          />
          <Input
            label="Senha"
            type="password"
            error={errors.password}
            {...register("password")}
          />
        </Stack>

        <Button
          type="submit"
          mt="6"
          colorScheme="pink"
          size="lg"
          isLoading={isSubmitting}
          isDisabled={isSubmitting}
        >
          Entrar
        </Button>
      </Flex>
    </Flex>
  )
}
