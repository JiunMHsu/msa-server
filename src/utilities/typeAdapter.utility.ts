/**
 *
 */
export function adaptData<T, U>(t: T, emptyU: U): U {
   const set: any[] = []; // ya c que es un asco usar any pero bueno
   for (let key in t) {
      set.push(t[key]);
   }

   let iterator = 0;
   for (let key in emptyU) {
      emptyU[key] = set[iterator];
      iterator++;
   }

   return emptyU;
}
