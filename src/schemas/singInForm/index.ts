import * as z from 'zod'

export const SingInFormSchema = z.object({
  email: z.string().email("This is not a valid email.").nonempty({message: 'E-mail is required'}),
  password: z.string().min(8, {message: 'Password is required 8 characters'}).nonempty({message: 'Password is required'})
})

export type SignInFormData = z.infer<typeof SingInFormSchema>
