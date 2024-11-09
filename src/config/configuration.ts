export default () => ({
    host: process.env.HOST || '127.0.0.1',
    port: parseInt(process.env.DATABASE_PORT || '3000', 10),

    jwtPrivate: process.env.JWT_PRIVATE || '',

    database: {
        host: process.env.DATABASE_HOST || '127.0.0.1',
        port: parseInt(process.env.DATABASE_PORT || '5432', 10),
        user: process.env.DATABASE_USER || 'postgres',
        password: process.env.DATABASE_PASSWORD || 'postgres',
        name: process.env.DATABASE_NAME || 'sakura',
    },
});
