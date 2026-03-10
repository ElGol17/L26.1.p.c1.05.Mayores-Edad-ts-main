import Cl_persona from "./Cl_persona.js";

export default class Cl_grupo {

    private cntPersonas: number;
    private cntHombres: number;
    private cntMujeres: number;

    
    constructor() {
        this.cntPersonas = 0;
        this.cntHombres = 0;
        this.cntMujeres = 0;
    }

    procesarPersona(p: Cl_persona): void {

        this.cntPersonas++;

        if (p.sexo === "M") {
            this.cntHombres++;
        }

        if (p.sexo === "F") {
            this.cntMujeres++;
        }

    }

    cantidadPersonas(): number {
        return this.cntPersonas;
    }

    cantidadHombres(): number {
        return this.cntHombres;
    }

    cantidadMujeres(): number {
        return this.cntMujeres;
    }

}