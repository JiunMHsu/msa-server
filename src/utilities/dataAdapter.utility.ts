export class Adapter<T, U> {
   public adaptToModel(t: T, emptyData: U): U {
      const set: any[] = []; // ya c que es un asco usar any pero bueno
      for (let key in t) {
         set.push(t[key]);
      }

      let iterator = 0;
      for (let key in emptyData) {
         emptyData[key] = set[iterator];
         iterator++;
      }

      return emptyData;
   }

   public adaptToDB(u: U, emptyDbData: T): T {
      const set: any[] = [];
      for (let key in u) {
         set.push(u[key]);
      }

      let iterator = 0;
      for (let key in emptyDbData) {
         emptyDbData[key] = set[iterator];
         iterator++;
      }

      return emptyDbData;
   }

   public adaptListToModel(listT: T[], emptyData: U): U[] {
      return listT.map(t => this.adaptToModel(t, { ...emptyData }));
   }

   public adaptListToDB(listU: U[], emptyDbData: T): T[] {
      return listU.map(u => this.adaptToDB(u, { ...emptyDbData }));
   }
}
