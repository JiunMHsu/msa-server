import { CorsOptions } from '@nestjs/common/interfaces/external/cors-options.interface';

export const corsConstant: CorsOptions = {
    origin: true,
    methods: 'GET, HEAD, POST, PUT, PATCH, DELETE', // OPTIONS?
    // allowedHeaders: 'Content-Type, Authorization',
    credentials: true,
};
