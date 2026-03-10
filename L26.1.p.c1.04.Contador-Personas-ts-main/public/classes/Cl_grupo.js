import Cl_persona from "./Cl_persona.js";
export default class Cl_grupo {
    cntPersonas;
    cntHombres;
    cntMujeres;
    constructor() {
        this.cntPersonas = 0;
        this.cntHombres = 0;
        this.cntMujeres = 0;
    }
    procesarPersona(p) {
        this.cntPersonas++;
        if (p.sexo === "M") {
            this.cntHombres++;
        }
        if (p.sexo === "F") {
            this.cntMujeres++;
        }
    }
    cantidadPersonas() {
        return this.cntPersonas;
    }
    cantidadHombres() {
        return this.cntHombres;
    }
    cantidadMujeres() {
        return this.cntMujeres;
    }
}
//# sourceMappingURL=Cl_grupo.js.map