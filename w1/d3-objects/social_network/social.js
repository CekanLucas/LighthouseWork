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
    follows: ["f04","f02"]
  },
  f06: {
    name: "Finn",
    age: 25,
    follows: ["f05","f02"]
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
const printAll = Data => {
  let followerObj = {};
  for(let id in Data){
    followerObj[Data[id].name] = {
      'follows': Data[id].follows.map( id => {
        return Data[id].name;
      }), // map id to name 
      'followers':[]
    }
  }
  //populate follower array in followerObj
  for(let name in followerObj){
    //we got name associated with follows array 
    //loop though follows array 
    for(let follow of followerObj[name].follows){
      followerObj[follow].followers.push(name);
    }
  }
  //use completed followerObj to print everything
  for(let person in followerObj){
    console.log('\n--- '+ person + ' ---\nFollowers:')
    followerObj[person].followers.forEach( el => {
      console.log(' - '+el);
    })
  }
}
// printAll(data);

// returns list of names for those follow but dont get followed back
const unrequitedFollowers = Data => {
  //copied followerObj section form pintAll()
  let followerObj = {};
  for(let id in Data){
    followerObj[Data[id].name] = {
      'follows': Data[id].follows.map( id => {
        return Data[id].name;
      }), // map id to name 
      'followers':[]
    }
  }
  //populate follower array in followerObj
  for(let name in followerObj){
    //we got name associated with follows array 
    //loop though follows array 
    for(let follow of followerObj[name].follows){
      followerObj[follow].followers.push(name);
    }
  }
  console.log(followerObj)
  let notFollowedBack = [];
  for(let name in followerObj){

    // loop though followArray listing everyone who didn't follow back
    for(let follow of followerObj[name].follows){
      if (!followerObj[follow].follows.includes(name)){       
        notFollowedBack.push(follow);
        console.log(`${name} followed ${follow} but was not followed back`)
      }
    }
  }
  console.log([...new Set(notFollowedBack)]); //trick to remove duplicates
}
unrequitedFollowers(data);