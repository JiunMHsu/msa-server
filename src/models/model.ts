import { Adapter } from '../utilities';
import { dataBase } from './database';

export abstract class Model<T, U> {
   protected adapter = new Adapter<T, U>();
   protected dataBase = dataBase;
}
