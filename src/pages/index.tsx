import { Button, Flex, Stack } from '@chakra-ui/react'
import { Input } from '../components/Form/Input'
import { useForm } from 'react-hook-form'
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

const SingInFormSchema = z.object({
  email: z.string().email("This is not a valid email."),
  password: z.string().min(8)
})

type SignInFormData = z.infer<typeof SingInFormSchema>

export default function SignIn() {
  const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm<SignInFormData>(
    {resolver: zodResolver(SingInFormSchema)}
    )

  const handleSignIn = async (data: SignInFormData) => {
    await new Promise(resolve => setTimeout(resolve, 2000))
    console.log(data)
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
        >
          Entrar
        </Button>
      </Flex>
    </Flex>
  )
}
