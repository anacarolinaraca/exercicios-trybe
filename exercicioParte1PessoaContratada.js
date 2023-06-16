const fullNames = (fullName) => {
    const email = fullName.toLowerCase().replace(' ', '_');
    return { fullName, email: `${email}@trybe.com` }
}

const newEmployees = () => {
  const employees = {
    id1: fullNames('Pedro Guerra'),
    id2: fullNames('Luiza Drumond'),
    id3: fullNames('Carla Paiva'),
  };
  return employees;
};

console.log(newEmployees());