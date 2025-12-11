// Função que calcula o nível baseado na XP
function calcularNivel(xp) {
  /* 
    A cada 100 de XP = 1 nível
    Ex.: 0–99 XP = nível 1
         100–199 XP = nível 2
         200–299 XP = nível 3
         ...
  */
  return Math.floor(xp / 100) + 1;
}

// Criando heróis
let hero1 = { nome: "Aragorn", xp: 250 };
let hero2 = { nome: "Legolas", xp: 90 };
let hero3 = { nome: "Gimli", xp: 470 };

// Calculando níveis
hero1.nivel = calcularNivel(hero1.xp);
hero2.nivel = calcularNivel(hero2.xp);
hero3.nivel = calcularNivel(hero3.xp);

// Exibindo
console.log(`Herói: ${hero1.nome} | XP: ${hero1.xp} | Nível: ${hero1.nivel}`);
console.log(`Herói: ${hero2.nome} | XP: ${hero2.xp} | Nível: ${hero2.nivel}`);
console.log(`Herói: ${hero3.nome} | XP: ${hero3.xp} | Nível: ${hero3.nivel}`);
