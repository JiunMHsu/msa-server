import { Pool, createPool } from 'mysql2/promise';
import { ServerConfig } from '../config/config';

export class DataBase extends ServerConfig {
   private _pool: Pool;

   constructor() {
      super();
      this._pool = createPool({
         host: this.database.host,
         user: this.database.user,
         password: this.database.password,
         database: this.database.name,
      });
   }

   public async selectQuery<T>(query: string, values?: any[]): Promise<T[]> {
      const connection = await this._pool.getConnection();

      try {
         const [results] = await connection.execute(query, values);
         return results as T[];

         // se podría manejar un error custom aca,
         // sino no hace falta el catch (se esta capturando en el controller)
         // } catch (error) {
         //    throw error;
      } finally {
         connection.release();
      }
   }
}

export const dataBase = new DataBase();
