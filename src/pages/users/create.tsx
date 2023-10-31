import { Input } from '@/components/Form/Input'
import RootLayout from '@/layout'
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
import { ReactNode } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { SingUpFormSchema, SignUpFormData } from '@/schemas/singUpForm'
import { useRouter } from 'next/router'

export default function CreateUser() {
  const router = useRouter()
  const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm<SignUpFormData>(
    {resolver: zodResolver(SingUpFormSchema)}
    )

    const handleSignUp = async (data: SignUpFormData) => {
      await new Promise(resolve => setTimeout(resolve, 2000))
      console.log(data)
      reset()
    }

  return (
    <Box as="form" flex="1" borderRadius={8} bg="gray.800" p={['6', '8']} onSubmit={handleSubmit(handleSignUp)}>
      <Heading size="lg" fontWeight="normal">
        Criar usuário
      </Heading>
      <Divider my="6" borderColor="gray.700" />
      <VStack spacing={['6', '8']} >
        <SimpleGrid minChildWidth="240px" spacing={['6', '8']} w="100%">
          <Input label="Nome completo" {...register('fullName')} error={errors.fullName} isRequired />
          <Input  type="email" label="E-mail" {...register('email')} error={errors.email} isRequired/>
        </SimpleGrid>

        <SimpleGrid minChildWidth="240px" spacing={['6', '8']} w="100%">
          <Input type="password" label="Senha" {...register('password')} error={errors.password} isRequired/>
          <Input
            type="password"
            label="Confirmação da senha"
            error={errors.confirmPassword}
            isRequired
            {...register('confirmPassword')}
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
          <Button type="submit" colorScheme="pink" isLoading={isSubmitting} isDisabled={isSubmitting} onClick={() => router.push('/users')}>
            Salvar
          </Button>
        </HStack>
      </Flex>
    </Box>
  )
}

CreateUser.getLayout = (page: ReactNode) => {
  return <RootLayout>{page}</RootLayout>
}
