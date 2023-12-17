export abstract class BaseModel<T> {
   private _data: T = {} as T; // valor inseguro

   constructor(id?: string) {
      // inicializacion incompleta
      if (id) {
         this._data = this.getDataById(id);
      }
   }

   /**
    * !! implementar
    *
    * Funcion propia de las clases modelo,
    * recibe un id del elemento a consultar,
    * busca en la base de datos y retorna
    * el objeto de tipo correspondiente
    */
   protected getDataById(id: string): T {
      console.log(id);
      return {} as T;
   }
}
