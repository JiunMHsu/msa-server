import { DataBase, dataBase } from './database';

export interface Model<T, U> {
   _data: T; // valor inseguro
   _dataList: T[];
   _sqlData: U;
   _sqlDataList: U[];
   readonly _database: DataBase;

   adaptToData: (u: U) => T;
   adaptToSqlData: (t: T) => U;
   adaptToDataList: (u: U[]) => T[];
   adaptToSqlDataList: (t: T[]) => U[];
}
