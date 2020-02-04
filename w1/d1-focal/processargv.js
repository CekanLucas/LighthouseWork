'use strict';

for (let j = 0; j < process.argv.length; j++){
  console.log(j + '->' + (process.argv[j]));
} //loop through arrays and print indexes

///////   Run in command line   ////////
// $ node processargv.js tom jack 43

/* --Output--
0->/home/vagrant/.nvm/versions/node/v8.9.4/bin/node
1->/vagrant/w1/d1-focal/processargv.js
2->tom
3->jack
4->43
*/