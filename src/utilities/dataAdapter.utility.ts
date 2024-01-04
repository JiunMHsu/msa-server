export class Adapter<T, U> {
   public adaptToData(t: T, emptyData: U): U {
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

   public adaptToSql(u: U, emptyDbData: T): T {
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

   public adaptListToData(listT: T[], emptyData: U): U[] {
      return listT.map(t => this.adaptToData(t, { ...emptyData }));
   }

   public adaptListToSql(listU: U[], emptyDbData: T): T[] {
      return listU.map(u => this.adaptToSql(u, { ...emptyDbData }));
   }
}
