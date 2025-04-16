import { z } from 'zod'

export const newLinkSchema = z.object({
  urlShortened: z.string().min(1, 'Informe o link encurtado'),
  urlOriginal: z
    .string()
    .url('Formato de URL inválido')
    .min(1, 'Informe o link original'),
})

export type NewLinkProps = z.infer<typeof newLinkSchema>
