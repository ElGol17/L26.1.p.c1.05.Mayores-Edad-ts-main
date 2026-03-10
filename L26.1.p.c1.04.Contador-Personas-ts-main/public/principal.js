import Cl_persona from "./classes/Cl_persona.js";
import Cl_grupo from "./classes/Cl_grupo.js";
const p1 = new Cl_persona("Luisa", "F");
const p2 = new Cl_persona("Ana", "F");
const p3 = new Cl_persona("José", "M");
const p4 = new Cl_persona("Carmen", "F");
const p5 = new Cl_persona("Rosa", "F");
const p6 = new Cl_persona("José", "M");
const p7 = new Cl_persona("María", "F");
const p8 = new Cl_persona("Luz", "F");
const p9 = new Cl_persona("Rafael", "M");
const p10 = new Cl_persona("Liz", "F");
const p11 = new Cl_persona("Marcos", "M");
const p12 = new Cl_persona("Leo", "M");
const grupo = new Cl_grupo();
grupo.procesarPersona(p1);
grupo.procesarPersona(p2);
grupo.procesarPersona(p3);
grupo.procesarPersona(p4);
grupo.procesarPersona(p5);
grupo.procesarPersona(p6);
grupo.procesarPersona(p7);
grupo.procesarPersona(p8);
grupo.procesarPersona(p9);
grupo.procesarPersona(p10);
grupo.procesarPersona(p11);
grupo.procesarPersona(p12);
let body = document.getElementById("body");
if (body)
    body.innerHTML = `
Cantidad de personas: ${grupo.cantidadPersonas()} <br>
Cantidad de hombres: ${grupo.cantidadHombres()} <br>
Cantidad de mujeres: ${grupo.cantidadMujeres()}
`;
//# sourceMappingURL=principal.js.map