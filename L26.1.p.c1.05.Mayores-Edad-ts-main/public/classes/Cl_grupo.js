import Cl_persona from "./Cl_persona.js";
export default class Cl_grupo {
    cntPersonas;
    cntMayores;
    constructor() {
        this.cntPersonas = 0;
        this.cntMayores = 0;
    }
    procesarPersona(p) {
        this.cntPersonas++;
        if (p.edad >= 18) {
            this.cntMayores++;
        }
    }
    porcentajeMayores() {
        if (this.cntPersonas === 0) {
            return 0;
        }
        return (this.cntMayores / this.cntPersonas) * 100;
    }
}
//# sourceMappingURL=Cl_grupo.js.map