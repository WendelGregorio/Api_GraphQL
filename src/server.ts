import { ApolloServer } from "apollo-server";
import { buildSchemaSync } from "type-graphql";

import path from 'node:path'

import "reflect-metadata";
import { AppointmentsResolver } from "./resolvers/appointments-resolver";

async function bootstrap() {
    const schema = await buildSchemaSync({
        resolvers: [
            AppointmentsResolver,
        ],
        emitSchemaFile: path.resolve(__dirname, 'schema.gql'),
    })

    const server = new ApolloServer({
        schema,
    })

    const { url } = await server.listen()

    console.log(`HTTP server runing on ${url}`);
}

bootstrap()