const students = [
    {id: 21, name: 'Omar Sunny'},
    {id: 26, name: 'topa Sunny'},
    {id: 27, name: 'nabila Sunny'},
    {id: 28, name: 'Moyouri Sunny'}
];

const names = students.map( s => s.name);
const ids = students.map(s => s.id);
const bigger = students.filter(s => s.id>25);
const bigger1 = students.find(s => s.id>27);
console.log(bigger1);