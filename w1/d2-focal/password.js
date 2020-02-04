const args = process.argv.slice(2).join(' ');

const obfuscate = str => {

  // --- SOLUTION 1 ---
  // return str.replace(/a/g,'4').replace(/e/g,'3').replace(/o/g,'0').replace(/l/g,'1');
  
  // --- SOLUTION 2 ---
  const replaceChars={
    'a':'4',
    'e':'3',
    'o':'0',
    'l':'1'
  }
  return str.replace(/(a)|(e)|(o)|(l)/g, match => replaceChars[match]);
}

console.log( obfuscate(args) );

// expected outputs 

// node password.js password
// p4ssw0rd
// node password.js abracadabra
// 4br4c4d4br4
// node password.js audaciously
// 4ud4ci0us1y