export interface Respuesta<T> {
    code:    string;
    message: string;
    data:    T;
}

export interface Cliente {
    idCliente: number;
    cedula:    string;
    nombre:    string;
    telefono:  string;
    edad:      number;
}