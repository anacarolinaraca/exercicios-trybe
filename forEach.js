const emailListInData = [
  "roberta@email.com",
  "paulo@email.com",
  "anaroberta@email.com",
  "fabiano@email.com",
];

const listEmails = (email) => {
  console.log(`O email ${email} está cadastrado em nosso banco de dados!`);
};

emailListInData.forEach((pessoa) => {
  listEmails(pessoa);
});

//  const listEmails = (email) => {
//     console.log(`O email ${email} está cadastrado em nosso banco de dados!`)
// }

// emailListInData.forEach(listEmails);

