import Cl_persona from "./Cl_persona.js";

export default class Cl_grupo {

    private cntPersonas: number;
    private cntMayores: number;

    constructor() {
        this.cntPersonas = 0;
        this.cntMayores = 0;
    }

    procesarPersona(p: Cl_persona): void {

        this.cntPersonas++;

        if (p.edad >= 18) {
            this.cntMayores++;
        }

    }

    porcentajeMayores(): number {

        if (this.cntPersonas === 0) {
            return 0;
        }

        return (this.cntMayores / this.cntPersonas) * 100;

    }

}