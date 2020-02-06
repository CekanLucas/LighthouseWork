// Write a sorting function (sometimes called a custom comparator), that sorts the above array first by the name ascending alphabetically, and in cases where the names are equal sort by descending age.

const students = [
  { id: 1, name: "bruce",    age: 40 },
  { id: 2, name: "zoidberg", age: 22 },
  { id: 3, name: "alex",     age: 22 },
  { id: 5, name: "alex",     age: 50 },
  { id: 4, name: "alex",     age: 30 },
];

 students.sort( 
  (a,b) => {
    a_alphabet  = a.name[0];
    b_alphabet  = b.name[0];
    a_age       = a.age;
    b_age       = b.age;
  
    return a_alphabet < b_alphabet ? -1 :
           a_alphabet > b_alphabet ?  1 : 
           a_age      < b_age      ? -1 :
           a_age      > b_age      ?  1 : 0;
  }
)
console.log(students);

// Note: Array.sort() can sort alphabetically (if in the same case ) (lexical sorting)