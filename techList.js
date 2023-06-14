const techList = (listTechs, name) => {
  const listSort = listTechs.sort();
  const objTech = [];

  for (let i = 0; i < listSort.length; i += 1) {
    objTech.push({
      tech: listSort[i],
      name: name,
    });
  }
  if (listTechs.length === 0) {
    return "Vazio!";
  }

  return objTech;
};

console.log(techList(["React", "Jest", "HTML", "CSS", "JavaScript"], "Lucas"));
console.log(techList([], "Lucas"));

module.exports = techList;
