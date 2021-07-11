import fastify from 'fastify';

const main = () => {
  const server = fastify({
    logger: true,
  });

  server.get('/', async (request, reply) => {
    reply.type('application/json').code(200);
    return { hello: 'world' };
  });

  server.listen(3000, (error, address) => {
    if (error) throw error;
    server.log.info(`🛡️  Server listening on port: ${address} 🛡️`);
  });
};

main();
