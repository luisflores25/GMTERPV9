export interface JwtResponse{
    dataUser:{
        _id: number,
        empresa: string,
        usuario: string,
        password: string,
        accessToken: string,
        expireIn: string
    }
}