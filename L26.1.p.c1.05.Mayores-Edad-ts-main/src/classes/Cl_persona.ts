export default class Cl_persona {

    private _nombre: string = "";
    private _edad: number = 0;

    constructor(nombre: string, edad: number) {
        this.nombre = nombre;
        this.edad = edad;
    }

    set nombre(nombre: string) {
        this._nombre = nombre;
    }

    get nombre(): string {
        return this._nombre;
    }

    set edad(edad: number) {
        this._edad = +edad;
    }

    get edad(): number {
        return this._edad;
    }

}