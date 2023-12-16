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
}
