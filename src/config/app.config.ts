export default () => ({
    host: process.env.APP_HOST || '127.0.0.1',
    port: parseInt(process.env.APP_PORT || '3524', 10),

    jwtPrivate: process.env.JWT_PRIVATE || '',

    database: {
        host: process.env.DB_HOST || 'localhost',
        port: parseInt(process.env.DB_PORT || '5432', 10),
        username: process.env.DB_USER || 'postgres',
        password: process.env.DB_PASSWORD || 'postgres',
        name: process.env.DB_NAME || 'msa_db',
        log: Boolean(process.env.DB_LOG || 'false'),
        autoloadEntities: Boolean(process.env.DB_AUTOLOAD_ENTITIES || 'false'),
        sync: Boolean(process.env.DB_SYNC || 'false'),
        dropSchema: Boolean(process.env.DB_DROP_SCHEMA || 'false'),
        seed: Boolean(process.env.DB_SEED || 'false'),
    },

    seeds: (process.env.SEEDS ?? '').split(' '),
});
