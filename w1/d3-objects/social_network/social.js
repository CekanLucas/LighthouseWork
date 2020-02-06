// -- Data --
const data = {
  f01: {
    name: "Alice",
    age: 15,
    follows: ["f02", "f03", "f04"]
  },
  f02: {
    name: "Bob",
    age: 20,
    follows: ["f05", "f06"]
  },
  f03: {
    name: "Charlie",
    age: 35,
    follows: ["f01", "f04", "f06","f05"]
  },
  f04: {
    name: "Debbie",
    age: 40,
    follows: ["f01", "f02", "f03", "f05", "f06"]
  },
  f05: {
    name: "Elizabeth",
    age: 45,
    follows: ["f04"]
  },
  f06: {
    name: "Finn",
    age: 25,
    follows: ["f05"]
  }
};

// returns person who follows the most people 
const biggestFollower = Data => {
  let list = [];

  for(let person in Data){
    const dataPoint = Data[person]
    const obj = {
      name: dataPoint.name,
      numberOfFollows: dataPoint.follows.length
    }
    list.push(obj);
  }

  let target = list.sort(
    (p1,p2) => {
      const a = p1.numberOfFollows;
      const b = p2.numberOfFollows;
      return a > b ? -1 :
             a < b ?  1 :0;
    }
  ) 
  return target[0].name;
}
// biggestFollower(data);

// returns person with most followers
const mostPopular = Data => {
  let list = {};
  for(let id in Data){
    list[id] = 0;
  }

  for(let id in list){
    let followerArray = Data[id].follows;
    followerArray.forEach(el => {
      list[el]++;
    });
  }

  let ansName = '';
  for(let cId in list){
    
    for(let nId in list){
      if (list[cId] < list[nId]){
        ansName = Data[nId].name;
      }
    }

  }
  return ansName
}

// prints a list of everyone &
// the names of those who follow them
const printAll = data => {

}

// returns list of names for those follow but dont get followed back
const unrequitedFollowers = data => {

}