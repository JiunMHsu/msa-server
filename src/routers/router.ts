import { Router } from 'express';

// Deberia ser <T, U>, siendo T el controlador y U el middleware
export abstract class BaseRouter<T> {
   public router: Router;
   public controller: T;
   // public middleware: U

   constructor(Tcontroller: { new (): T }) {
      this.router = Router();
      this.controller = new Tcontroller();
      this.routes();
   }

   public routes(): void {}
}
