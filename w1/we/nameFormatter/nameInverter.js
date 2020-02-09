const nameInverter = function(name) {
  let honorific = ['Mr.','Mrs.','Ms.','Dr.']
  
  if (name === '' || honorific.includes(name)){
    return '';
  }
 else if (name === undefined){
    // return 'Error! name undefined';
    // changed to return the generic Error object
    return Error;
  }

  name = name.trim().split(' ').map(
    el => {return el.trim()}
  ).reverse();
  
  if (name.length === 3){
    // handle names with a honorific
    honorific = name[2];
    name[0] = honorific + ' ' + name[0];
    name.pop();
  }
  return name.join(', ');

}

module.exports = nameInverter;