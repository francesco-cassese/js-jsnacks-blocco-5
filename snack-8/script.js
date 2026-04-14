const students = [
  {
    id: 1,
    name: 'Marco Lanci',
    age: 32,
    class: '3C'
  },
  {
    id: 2,
    name: 'Mario Banfi',
    age: 34,
    class: '4A'
  },
  {
    id: 3,
    name: 'Luigi Banzi',
    age: 33,
    class: '5B'
  },
];

// Recupera la classe dello studente 'Marco Lanci'
// Risultato: '3C'

const studenteCercato = students.find(studente => {         //Isolo lo studente che mi serve
  return studente.name === 'Marco Lanci';
});

const classeDiMarco = studenteCercato.class;                //Estraggo e assegno ad una costante la classe

console.log(classeDiMarco);                                 //stampo in console

