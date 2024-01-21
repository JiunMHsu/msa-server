import { Pool, createPool } from 'mysql2/promise';
import { ServerConfig } from '../../config/config';

export class DataBase extends ServerConfig {
   private pool: Pool;

   constructor() {
      super();
      this.pool = createPool({
         host: this.database.host,
         user: this.database.user,
         password: this.database.password,
         database: this.database.name,
      });
   }

   public async selectQuery<T>(query: string, values?: any[]): Promise<T[]> {
      const connection = await this.pool.getConnection();

      try {
         const [results] = await connection.query(query, values);
         return results as T[];

         // se podría manejar un error custom aca,
         // sino no hace falta el catch (se esta capturando en el controller)
         // } catch (error) {
         //    throw error;
      } finally {
         connection.release();
      }
   }

   // !! Revisar
   public async insertQuery(query: string, values?: any[]): Promise<void> {
      const connection = await this.pool.getConnection();

      try {
         await connection.execute(query, values);
      } finally {
         connection.release();
      }
   }
}

export const dataBase = new DataBase();
