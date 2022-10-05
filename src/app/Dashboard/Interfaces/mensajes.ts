export interface Respuesta{
    message?:      string;
    encriptado?:      Mensajes;
}

export interface Mensajes{
    id?: number; 
    message?: string;
}
