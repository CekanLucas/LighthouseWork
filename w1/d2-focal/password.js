const args = process.argv.slice(2).join(' ');

const obfuscate = str => {

  
  const replaceChars={ //replacement rules object
    'a':'4',
    'e':'3',
    'o':'0',
    'l':'1'
  }

  //realised that cant use Array.prototype.replacer() method 
  //here is my own version 
  
  function replacer(input) {
    let strArr = input.split('') 
    return strArr.map( letter => {
      return replaceChars[letter]? replaceChars[letter] : letter;
    }).join('');
  }
  
  // --- SOLUTION 1 --- (not good used .replace())
  // return str.replace(/a/g,'4').replace(/e/g,'3').replace(/o/g,'0').replace(/l/g,'1');
  
  
  // --- SOLUTION 2 --- (not good used .replace())
  // return replace(str,/(a)|(e)|(o)|(l)/g, match => replaceChars[match]);

  // --- SOLUTION 3 --- (good becuase didnt us .replace())
  return replacer(str, replaceChars)
}

console.log( obfuscate(args) );

// expected outputs 

// node password.js password
// p4ssw0rd
// node password.js abracadabra
// 4br4c4d4br4
// node password.js audaciously
// 4ud4ci0us1y