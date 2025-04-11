import { Button } from "./Button";
import { Box } from "./box";
import { Input } from "./input";

export function NewLink() {
  return (
    <Box className="gap-5 w-full max-w-[380px]">
      <h2 className="text-gray-600 font-bold text-lg leading-6">Novo link</h2>
      <div className="flex flex-col gap-4">
        <Input
          label="Link original"
          placeholder="www.exemplo.com.br"
        />
        <Input
          label="Link encurtado"
          placeholder="brev.ly/"
        />
      </div>
      <Button disabled>Salvar link</Button>
    </Box>
  )
}