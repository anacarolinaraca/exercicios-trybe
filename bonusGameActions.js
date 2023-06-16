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

const damageDragon = (dragon) => {
  const damageMin = 15;
  const damageMax = Math.floor(Math.random() * dragon.strength);
  const damagesDragon = damageMax > damageMin ? damageMax : damageMin;
  return damagesDragon;
};
// console.log(damageDragon());

const damageWarrior = (warrior) => {
  const damageMin = warrior.strength;
  const damageWeapon = warrior.weaponDmg;

  const damageMax = Math.floor(Math.random() * (damageMin * damageWeapon));
  const damagesWarrior = damageMax > damageMin ? damageMax : damageMin;
  return damagesWarrior;
};
// console.log(damageWarrior());

const damageMage = (mage) => {
  const atackTurno = {
    dano: "Não possui mana suficiente",
    mana: 0,
  };
  const mageMana = mage.mana;
  const damageMin = mage.intelligence;
  const damageMax = Math.floor(Math.random() * (damageMin * 2));

  if (mageMana > 15) {
    const damagesMage = damageMax > damageMin ? damageMax : damageMin;
    atackTurno.mana = 15;
    atackTurno.dano = damagesMage;
    return atackTurno;
  }
  return atackTurno;
};

// console.log(damageMage());

const gameActions = {
  turnWarrior: (damageWarrior) => {
    const damagesWarrior = damageWarrior(warrior);
    dragon.healthPoints -= damagesWarrior;
    warrior.damage = damagesWarrior;
  },
  turnMage: (damageMage) => {
    const demagesMage = damageMage(mage);
    const mageDamage = demagesMage.dano;
    mage.mana -= demagesMage.mana;
    dragon.healthPoints -= mageDamage;
    mage.damage = mageDamage;
  },
  turnDragon: (damageDragon) => {
    const demagesDragon = damageDragon(dragon);
    mage.healthPoints -= demagesDragon;
    warrior.healthPoints -= demagesDragon;
    dragon.damage = demagesDragon;
  },
  turnResult: () => battleMembers,
};

gameActions.turnWarrior(damageWarrior);
gameActions.turnMage(damageMage);
gameActions.turnDragon(damageDragon);
console.log(gameActions.turnResult());
