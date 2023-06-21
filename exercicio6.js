const yearSeasons = {
  spring: ["March", "April", "May"],
  summer: ["June", "July", "August"],
  autumn: ["September", "October", "November"],
  winter: ["December", "January", "February"],
};

const { spring, summer, autumn, winter } = yearSeasons;

console.log(...winter, ...spring, ...summer, ...autumn);