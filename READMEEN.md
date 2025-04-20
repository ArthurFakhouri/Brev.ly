### 🌐 EN-US
#### [PT-BR](https://github.com/ArthurFakhouri/Brev.ly/blob/main/README.md)

<div align="center">
    <img alt="nlw-connect" title="#nlw-connect" src=".github/logo.svg" width="250px" />
</div>

<h4 align="center"> 
	:heavy_check_mark: 🚀 Brev.ly 🚀 :heavy_check_mark:
</h4>

<p align="center">
  <a href="#-project">Project</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-how-to-run">How to run</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#%EF%B8%8F-demo">Demo</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-tecnologies">Technologies</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#memo-license">License</a>
</p>

## 🈸 Project
Brev.ly is a project developed during my postgraduate studies in FTR. This project is a short links project created with the goal of dealing with a high number of created links, working with streams.

<b>Functionalities:</b>
- [✅] It must be possible to create a link
  - [✅] It must not be possible to create a link with a poorly formatted shortened URL
  - [✅] It must not be possible to create a link with an existing shortened URL
- [✅] It must be possible to delete a link
- [✅] It must be possible to obtain the original URL through a shortened URL
- [✅] It must be possible to list all registered URLs
- [✅] It must be possible to increase the number of hits on a link
- [✅] It must be possible to export the created links in a CSV
  - [✅] It must be possible to access the CSV through a CDN (Amazon S3, Cloudflare R2, etc.)
  - [✅] A random and unique name must be generated for the file
  - [✅] It must be possible to perform the listing in a performant way
  - [✅] The CSV must have fields such as, original URL, shortened URL, count of accesses and creation date.

## 🔧 How to run
### Server
Go to the folder where you cloned the project, open the terminal and run the commands to run the server:
- 01 - cd server
- 02 - npm i -g pnpm (Installation of pnpm globally)
- 03 - pnpm i
- 04 - Configure the environment variables in a .env file
- 05 - docker compose up -d (To create the images of the databases used)
- 06 - pnpm run dev

### Web
Go to the folder where you cloned the project, open the terminal and run the commands to run the web:
- 01 - cd web
- 02 - npm i -g pnpm (Installation of pnpm globally)
- 03 - pnpm i
- 04 - Configure the environment variables in a .env file
- 05 - pnpm run dev

## 📽️ Demo






## 🚀 Technologies

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
- [<img alt="" src="https://zod.dev/static/favicon.ico" width="16px" /> Zod](https://zod.dev/)
- [<img alt="" src="https://cloudflare.com/favicon.ico" width="16px" /> Cloudflare R2](https://cloudflare.com)

Web:
- [<img alt="" src="https://react.dev/favicon.ico" width="16px" /> React](https://react.dev)
- [<img alt="" src="https://react-hook-form.com/images/logo/react-hook-form-logo-only.png" width="16px" /> React Hook Form](https://react-hook-form.com/)
- [<img alt="" src="https://framerusercontent.com/images/3aQX5dnH5Yqgsn98QXKF2ZXxIE.png" width="16px" /> Motion](https://motion.dev/)
- [<img alt="" src="https://axios-http.com/assets/favicon.ico" width="16px" /> Axios](https://axios-http.com/)
- [<img alt="" src="https://biomejs.dev/img/favicon.svg" width="16px" /> Biome](https://biomejs.dev)
- [<img alt="" src="https://www.radix-ui.com/favicon-white.svg" width="16px" /> Radix](https://www.radix-ui.com/)
- [<img alt="" src="https://tailwindcss.com/favicon.ico" width="16px" /> TailwindCSS](https://tailwindcss.com)
- [<img alt="" src="https://www.tailwind-variants.org/favicon/favicon-16x16.png" width="16px" /> Tailwind Variants](https://www.tailwind-variants.org/)
- [<img alt="" src="https://www.typescriptlang.org/favicon.ico" width="16px" /> Typescript](https://www.typescriptlang.org)
- [<img alt="" src="https://phosphoricons.com/favicon.ico" width="16px" /> Phosphor Icons](https://phosphoricons.com)
- [<img alt="" src="https://zod.dev/static/favicon.ico" width="16px" /> Zod](https://zod.dev/)
- [<img alt="" src="https://zustand-demo.pmnd.rs/favicon.ico" width="16px" /> Zustand](https://zustand-demo.pmnd.rs/)

## :memo: License
This project is licensed under the MIT License. See [LICENSE] for details.

