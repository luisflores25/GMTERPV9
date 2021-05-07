export class User{
        public _id: string;
        public empresa: string;
        public usuario: string;
        public password: string;
        public jwtToken?: string;
        
        constructor(_id: string, empresa: string, usuario: string, password: string, jwtToken?: string){
            this._id=_id;
            this.empresa=empresa;
            this.usuario=usuario;
            this.password=password;
            this.jwtToken=jwtToken;
        }
}