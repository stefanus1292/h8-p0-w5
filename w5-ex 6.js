function meleeRangedGrouping (str) {
var Awal = str.split(',');
var Split = [];
var Melee = [], Ranged = [];
var hasil = [];
    
if (str === '') {
return [];
}
    
for (let i = 0; i < Awal.length; i++) {
Split.push(Awal[i].split('-'));
}
 
for (let j = 0; j < Split.length; j++) {
if (Split[j][1] === 'Melee') {
Melee.push(Split[j][0]);
} else if (Split[j][1] === 'Ranged') {
Ranged.push(Split[j][0]);
}
}
hasil.push(Ranged,Melee);
return hasil;
}


  
  // TEST CASE
  
  console.log(meleeRangedGrouping('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'));
  // [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]
  
  console.log(meleeRangedGrouping('Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged'));
  // [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]
  
  console.log(meleeRangedGrouping('')); // []