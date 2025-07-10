### 🌐 PT-BR
#### [EN-US](https://github.com/ArthurFakhouri/Brev.ly/blob/main/READMEEN.md)

<div align="center">
    <img alt="brev.ly" title="#brevly" src=".github/logo.svg" width="250px" />
</div>

<h4 align="center"> 
	:heavy_check_mark: 🚀 Brev.ly 🚀 :heavy_check_mark:
</h4>

<p align="center">
  <a href="#-projeto">Projeto</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-como-executar">Como executar</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#%EF%B8%8F-demonstração">Demonstração</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-tecnologias">Tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#memo-licença">Licença</a>
</p>

## 🈸 Projeto
Brev.ly é um projeto desenvolvido durante minha pós-graduação em FTR. Este projeto é um projeto de links curtos criado com o objetivo de lidar com um alto número de links criados, trabalhando com streams.

<b>Funcionalidades:</b>
- [✅]  Deve ser possível criar um link
    - [✅]  Não deve ser possível criar um link com URL encurtada mal formatada
    - [✅]  Não deve ser possível criar um link com URL encurtada já existente
- [✅]  Deve ser possível deletar um link
- [✅]  Deve ser possível obter a URL original por meio de uma URL encurtada
- [✅]  Deve ser possível listar todas as URL’s cadastradas
- [✅]  Deve ser possível incrementar a quantidade de acessos de um link
- [✅]  Deve ser possível exportar os links criados em um CSV
    - [✅]  Deve ser possível acessar o CSV por meio de uma CDN (Amazon S3, Cloudflare R2, etc)
    - [✅]  Deve ser gerado um nome aleatório e único para o arquivo
    - [✅]  Deve ser possível realizar a listagem de forma performática
    - [✅]  O CSV deve ter campos como, URL original, URL encurtada, contagem de acessos e data de criação.

## 🔧 Como executar
### Server
Vá para a pasta em que você clonou o projeto, abra o terminal e execute os comandos para rodar o servidor:
- 01 - cd server
- 02 - npm i -g pnpm (Instalação do pnpm globalmente)
- 03 - pnpm i
- 04 - Configure as variáveis de ambiente em um arquivo .env
- 05 - docker compose up -d (Para criar as imagens dos banco de dados utilizados)
- 06 - pnpm run dev

### Web
Vá para a pasta em que você clonou o projeto, abra o terminal e execute os comandos para rodar o web:
- 01 - cd web
- 02 - npm i -g pnpm (Instalação do pnpm globalmente)
- 03 - pnpm i
- 04 - Configure as variáveis de ambiente em um arquivo .env
- 05 - pnpm run dev

## 📽️ Demonstração


https://github.com/user-attachments/assets/7f057e7b-f268-4b30-b53f-d70aa725b5e9







## 🚀 Tecnologias

O projeto foi desenvolvido utilizando as seguintes tecnologias:

Servidor:
- [<img alt="" src="https://nodejs.org/favicon.ico" width="16px" /> Node](https://nodejs.org)
- [<img alt="" src="https://static1.smartbear.co/swagger/media/assets/swagger_fav.png" width="16px" /> Swagger](https://swagger.io/)
- [<img alt="" src="https://scalar.com/favicon.png" width="16px" /> Scalar](https://scalar.com/)
- [<img alt="" src="https://fastify.dev/img/favicon.ico" width="16px" /> Fastify](https://fastify.dev/)
- [<img alt="" src="https://biomejs.dev/img/favicon.svg" width="16px" /> Biome](https://biomejs.dev)
- [<img alt="" src="https://www.docker.com/favicon.ico" width="16px" /> Docker](https://www.docker.com/)
- [<img alt="" src="https://orm.drizzle.team/favicon.ico" width="16px" /> Drizzle](https://orm.drizzle.team/)
- [<img alt="" src="https://www.postgresql.org/favicon.ico" width="16px" /> PostgreSQL](https://www.postgresql.org/)
- [<img alt="" src="https://redis.io/favicon.ico" width="16px" /> Redis](https://redis.io)
- [<img alt="" src="https://csv.js.org/favicon-32x32.png" width="16px" /> CSV-Stringify](https://csv.js.org/)
- [<img alt="" src="https://zod.dev/icon.png?39fe259ddd7f4224" width="16px" /> Zod](https://zod.dev/)
- [<img alt="" src="https://cloudflare.com/favicon.ico" width="16px" /> Cloudflare R2](https://cloudflare.com)

Web:
- [<img alt="" src="https://react.dev/favicon.ico" width="16px" /> React](https://react.dev)
- [<img alt="" src="https://vite.dev/logo.svg" width="16px" /> Vite](https://react.dev)
- [<img alt="" src="https://reactrouter.com/favicon-dark.png" width="16px" /> React Router](https://react.dev)
- [<img alt="" src="https://react-hook-form.com/images/logo/react-hook-form-logo-only.png" width="16px" /> React Hook Form](https://react-hook-form.com/)
- [<img alt="" src="https://framerusercontent.com/images/3aQX5dnH5Yqgsn98QXKF2ZXxIE.png" width="16px" /> Motion](https://motion.dev/)
- [<img alt="" src="https://axios-http.com/assets/favicon.ico" width="16px" /> Axios](https://axios-http.com/)
- [<img alt="" src="https://biomejs.dev/img/favicon.svg" width="16px" /> Biome](https://biomejs.dev)
- [<img alt="" src="https://www.radix-ui.com/favicon-white.svg" width="16px" /> Radix](https://www.radix-ui.com/)
- [<img alt="" src="https://tailwindcss.com/favicon.ico" width="16px" /> TailwindCSS](https://tailwindcss.com)
- [<img alt="" src="https://www.tailwind-variants.org/favicon/favicon-16x16.png" width="16px" /> Tailwind Variants](https://www.tailwind-variants.org/)
- [<img alt="" src="https://www.typescriptlang.org/favicon.ico" width="16px" /> Typescript](https://www.typescriptlang.org)
- [<img alt="" src="https://phosphoricons.com/favicon.ico" width="16px" /> Phosphor Icons](https://phosphoricons.com)
- [<img alt="" src="https://zod.dev/icon.png?39fe259ddd7f4224" width="16px" /> Zod](https://zod.dev/)
- [<img alt="" src="https://zustand-demo.pmnd.rs/favicon.ico" width="16px" /> Zustand](https://zustand-demo.pmnd.rs/)

## :memo: Licença
Este projeto está sob a licença do MIT. Consulte a [LICENÇA](LICENSE) para obter detalhes.

