import * as dotenv from 'dotenv';

export abstract class ServerConfig {
   constructor() {
      const envPath = this.getEnvPath(this.nodeEnv);
      dotenv.config({
         path: envPath,
      });
   }

   public get nodeEnv(): string {
      return this.getEnviroment('NODE_ENV') || '';
   }

   public getEnviroment(key: string): string | undefined {
      return process.env[key];
   }

   public getNumberEnv(key: string): number {
      return Number(this.getEnviroment(key));
   }

   public getEnvPath(nodeEnv: string): string {
      return nodeEnv == '' ? '.env' : `.${nodeEnv}.env`;
   }

   public get database() {
      return {
         host: this.getEnviroment('DB_HOST'),
         user: this.getEnviroment('DB_USER'),
         password: this.getEnviroment('DB_PASSWORD'),
         name: this.getEnviroment('DB_DATABASE'),
      };
   }
}
