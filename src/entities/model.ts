

export abstract class BaseModel<T> {
   private _data: T = {} as T; // valor inseguro

   constructor(id?: string) {
      // inicializacion incompleta
      if (id) {
         this._data = this.getDataById(id);
      }
   }

   protected getDataById(id: string): T {
      console.log(id);
      return {} as T;
   }
}
