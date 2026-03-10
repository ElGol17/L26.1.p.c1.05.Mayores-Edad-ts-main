import Cl_persona from "./classes/Cl_persona.js";
import Cl_grupo from "./classes/Cl_grupo.js";
const p1 = new Cl_persona("Luis", 15);
const p2 = new Cl_persona("Ana", 19);
const p3 = new Cl_persona("José", 21);
const p4 = new Cl_persona("Carmen", 17);
const p5 = new Cl_persona("Rosa", 18);
const p6 = new Cl_persona("José", 22);
const p7 = new Cl_persona("María", 17);
const p8 = new Cl_persona("Luz", 19);
const grupo = new Cl_grupo();
grupo.procesarPersona(p1);
grupo.procesarPersona(p2);
grupo.procesarPersona(p3);
grupo.procesarPersona(p4);
grupo.procesarPersona(p5);
grupo.procesarPersona(p6);
grupo.procesarPersona(p7);
grupo.procesarPersona(p8);
let body = document.getElementById("body");
if (body)
    body.innerHTML = `
Porcentaje de personas mayores de edad: ${grupo.porcentajeMayores().toFixed(2)}%
`;
//# sourceMappingURL=principal.js.map