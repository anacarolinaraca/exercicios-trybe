const mage = {
  healthPoints: 130,
  intelligence: 45,
  mana: 125,
  damage: undefined,
};

const warrior = {
  healthPoints: 200,
  strength: 30,
  weaponDmg: 2,
  damage: undefined,
};

const dragon = {
  healthPoints: 350,
  strength: 50,
  damage: undefined,
};

const battleMembers = { mage, warrior, dragon };

const damageDragon = () => {
    const damageMin = 15;
    const damageMax = Math.floor(Math.random() * dragon.strength);
    const damagesDragon = damageMax > damageMin ? damageMax : damageMin;
    return damagesDragon;
}
// console.log(damageDragon());

const damageWarrior = () => {
    const damageMin = warrior.strength;
    const damageWeapon = warrior.weaponDmg;

    const damageMax = Math.floor(Math.random() * (damageMin * damageWeapon));
    const damagesWarrior = damageMax > damageMin ? damageMax : damageMin;
    return damagesWarrior;
}
// console.log(damageWarrior());

const damageMage = () => {
    const atackTurno = {
        dano: 'Não possui mana suficiente',
        mana: 0,
    }
    const mageMana = mage.mana;
    const damageMin = mage.intelligence;
    const damageMax = Math.floor(Math.random() * (damageMin * 2));

    if(mageMana > 15) {
        const damagesMage = damageMax > damageMin ? damageMax : damageMin;
        atackTurno.mana = 15;
        atackTurno.dano = damagesMage;
        return atackTurno;
    }
    return atackTurno;
}

console.log(damageMage());
