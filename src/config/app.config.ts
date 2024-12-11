export default () => ({
    host: process.env.HOST || '127.0.0.1',
    port: parseInt(process.env.PORT || '3000', 10),

    jwtPrivate: process.env.JWT_PRIVATE || '',

    database: {
        host: process.env.DB_HOST || 'localhost',
        port: parseInt(process.env.DB_PORT || '5432', 10),
        username: process.env.DB_USER || 'postgres',
        password: process.env.DB_PASSWORD || 'postgres',
        name: process.env.DB_NAME || 'msadb',
        sync: Boolean(process.env.DB_SYNC || 'false'),
    },
});
