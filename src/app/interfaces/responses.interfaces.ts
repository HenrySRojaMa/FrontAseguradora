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

export interface Seguro {
    idSeguro: number;
    codigo:    string;
    nombre:    string;
    cobertura:  number;
    prima:      number;
}