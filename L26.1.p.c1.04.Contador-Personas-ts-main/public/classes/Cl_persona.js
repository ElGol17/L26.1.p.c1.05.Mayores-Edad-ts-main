export default class Cl_persona {
    _nombre = "";
    _sexo = "";
    constructor(nombre, sexo) {
        this.nombre = nombre;
        this.sexo = sexo;
    }
    set nombre(nombre) {
        this._nombre = nombre;
    }
    get nombre() {
        return this._nombre;
    }
    set sexo(sexo) {
        this._sexo = sexo;
    }
    get sexo() {
        return this._sexo;
    }
}
//# sourceMappingURL=Cl_persona.js.map