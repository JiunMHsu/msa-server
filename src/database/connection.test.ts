import * as mysql from 'mysql2/promise';

interface A {
   id: string;
   name: string;
}

class DataBase {
   private _pool: mysql.Pool;

   constructor() {
      this._pool = mysql.createPool({
         host: 'localhost',
         user: 'root',
         password: '',
         database: 'music_streamer',
      });
   }

   // no toy seguro de si retornar Promise<any> esta bueno
   public async query(query: string, values?: any): Promise<any> {
      // error de conexion no manejado (tampoco deberia de haber error?)
      const connection = await this._pool.getConnection();

      try {
         const [rows] = await connection.query(query, values);
         return rows;
      } catch (error) {
         throw new Error(`Error executing query: ${error}`);
      } finally {
         // cerrar la coneccion
         connection.release();
      }
   }
}

export const dataBase = new DataBase();
