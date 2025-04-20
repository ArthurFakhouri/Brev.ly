import fastifyCors from '@fastify/cors'
import fastifySwagger from '@fastify/swagger'
import scalarUI from '@scalar/fastify-api-reference'
import fastify from 'fastify'
import {
  hasZodFastifySchemaValidationErrors,
  jsonSchemaTransform,
  serializerCompiler,
  validatorCompiler,
} from 'fastify-type-provider-zod'
import { routes } from './routes'

const server = fastify()

server.setValidatorCompiler(validatorCompiler)
server.setSerializerCompiler(serializerCompiler)

server.setErrorHandler((error, request, reply) => {
  if (hasZodFastifySchemaValidationErrors(error)) {
    return reply.status(400).send({
      message: 'Validation error',
      errors: error.validation,
    })
  }

  return reply.status(500).send({
    message: 'Internal server error',
  })
})

server.register(fastifyCors, {
  origin: '*',
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'],
  credentials: true,
})

server.register(fastifySwagger, {
  openapi: {
    info: {
      title: 'Brev.ly API Docs',
      version: '1.0.0',
    },
  },
  transform: jsonSchemaTransform,
})

Object.values(routes).map(route => server.register(route))

server.register(scalarUI, {
  routePrefix: '/docs',
  configuration: {
    theme: 'purple',
    layout: 'modern',
  },
})

server.listen({ port: 3333, host: '0.0.0.0' }).then(() => {
  console.log('HTTP Server Running! 🚀')
})
