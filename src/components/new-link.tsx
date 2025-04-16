import { useNewLink } from "@/hooks/useNewLink";
import { urlMask } from "@/utils/urlMask";
import { CircleNotch } from "@phosphor-icons/react";
import { Button } from "./ui/Button";
import { Box } from "./ui/box";
import { Input } from "./ui/input";

export function NewLink() {

  const {
    errors,
    isSubmitting,
    register,
    handleSubmit,
  } = useNewLink()

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-[380px]">
      <Box className="gap-5 w-full">
        <h2 className="text-gray-600 font-bold text-lg leading-6">Novo link</h2>
        <div className="flex flex-col gap-4">
          <Input
            label="Link original"
            placeholder="www.exemplo.com.br"
            {...register('urlOriginal')}
            error={errors.urlOriginal?.message}
          />
          <Input
            label="Link encurtado"
            prefix="brev.ly/"
            {...register('urlShortened')}
            error={errors.urlShortened?.message}
            mask={urlMask}
          />
        </div>
        <Button type="submit" className="gap-1" disabled={isSubmitting}>
          {isSubmitting && (
            <>
              <CircleNotch size={16} className="animate-spin" />
              Salvando link...
            </>
          )}
          {!isSubmitting && 'Salvar link'}
        </Button>
      </Box>
    </form>
  )
}