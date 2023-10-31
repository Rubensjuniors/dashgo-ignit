import * as z from 'zod'

export const SingUpFormSchema = z.object({
  fullName: z.string().nonempty({message: 'First name is required'}),
  email: z.string().email({message: "This is not a valid email."}).nonempty({message: 'E-mail is required'}),
  password: z.string({
    required_error: 'Password is required',
}).min(8, {message: 'Password is required 8 characters'}).nonempty({message: 'Password is required'}),
  confirmPassword: z.string({
    required_error: 'Confirm password is required',
  }).min(8, {message: 'Password is required 8 characters'}).nonempty({message: 'Confirm password is required'})
}).refine((data) => data.password === data.confirmPassword, {
  message: 'Passwords do not match',
  path: ['confirmPassword'],
})

export type SignUpFormData = z.infer<typeof SingUpFormSchema>
