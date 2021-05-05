import { stringify } from "@angular/compiler/src/util";

export class User{
    constructor(
        public _id: string,
        public empresa: string,
        public usuario: string,
        public password: string){
        

    }
}