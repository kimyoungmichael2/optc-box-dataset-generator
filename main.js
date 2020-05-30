var Jimp = require('jimp');

unitBoxDistance = 190;

x1 = 40;
x2 = x1 + unitBoxDistance * 1;
x3 = x1 + unitBoxDistance * 2;
x4 = x1 + unitBoxDistance * 3;
x5 = x1 + unitBoxDistance * 4;

y1 = 510;
y2 = y1 + unitBoxDistance * 1;



//this section creates the array unitImages. 
//So long as the unit images are in the same directory and the numberOfUnits is adjusted 
//to match the current total # of units, this should work. 
//Gotta figure out how to adjust for unit #s higher than 9, though. 
numberOfUnits = 9;
filePath1 = 'test-images/000';
filePath2 = '.png';

var unitImages = [];

for (var i = 1; i <= numberOfUnits; i++) {
    unitImage = filePath1.concat(i + filePath2);
    unitImages.push(unitImage);
}
console.log(unitImages);





async function placeUnit() {
    let randomUnit1 = unitImages[Math.floor(Math.random() * unitImages.length)];
    let  unit = await Jimp.read(randomUnit1);
    unit = unit.resize(185,185);
    const image = await Jimp.read('baseBG.png'); //background
   unit = await unit
    image.composite(unit, x1, y1, {
      mode: Jimp.BLEND_SOURCE_OVER,
      opacityDest: 1,
      opacitySource: 1
    }) 

    let randomUnit2 = unitImages[Math.floor(Math.random() * unitImages.length)];
    let unit2 = await Jimp.read(randomUnit2);
    unit2 = unit2.resize(185,185);
    image.composite(unit2, x2, y1, {
        mode: Jimp.BLEND_SOURCE_OVER,
        opacityDest: 1,
        opacitySource: 1
      })

      let randomUnit3 = unitImages[Math.floor(Math.random() * unitImages.length)];
      let unit3 = await Jimp.read(randomUnit3);
      unit3 = unit3.resize(185,185);
      image.composite(unit3, x3, y1, {
          mode: Jimp.BLEND_SOURCE_OVER,
          opacityDest: 1,
          opacitySource: 1
        })

      let randomUnit4 = unitImages[Math.floor(Math.random() * unitImages.length)];
      let unit4 = await Jimp.read(randomUnit4);
      unit4 = unit4.resize(185,185);
      image.composite(unit4, x4, y1, {
          mode: Jimp.BLEND_SOURCE_OVER,
          opacityDest: 1,
          opacitySource: 1
        })
    
      let randomUnit5 = unitImages[Math.floor(Math.random() * unitImages.length)];
      let unit5 = await Jimp.read(randomUnit5);
      unit5 = unit5.resize(185,185);
      image.composite(unit5, x5, y1, {
          mode: Jimp.BLEND_SOURCE_OVER,
          opacityDest: 1,
          opacitySource: 1
        })

        let randomUnit6 = unitImages[Math.floor(Math.random() * unitImages.length)];
        let unit6 = await Jimp.read(randomUnit6);
        unit6 = unit6.resize(185,185);
        image.composite(unit6, x1, y2, {
            mode: Jimp.BLEND_SOURCE_OVER,
            opacityDest: 1,
            opacitySource: 1
          })
        
        let randomUnit7 = unitImages[Math.floor(Math.random() * unitImages.length)];
        let unit7 = await Jimp.read(randomUnit7);
        unit7 = unit7.resize(185,185);
        image.composite(unit7, x2, y2, {
            mode: Jimp.BLEND_SOURCE_OVER,
            opacityDest: 1,
            opacitySource: 1
          })

        let randomUnit8 = unitImages[Math.floor(Math.random() * unitImages.length)];
        let unit8 = await Jimp.read(randomUnit8);
        unit8 = unit8.resize(185,185);
        image.composite(unit8, x3, y2, {
            mode: Jimp.BLEND_SOURCE_OVER,
            opacityDest: 1,
            opacitySource: 1
          })

        let randomUnit9 = unitImages[Math.floor(Math.random() * unitImages.length)];
        let unit9 = await Jimp.read(randomUnit9);
        unit9 = unit9.resize(185,185);
        image.composite(unit9, x4, y2, {
            mode: Jimp.BLEND_SOURCE_OVER,
            opacityDest: 1,
            opacitySource: 1
          })

        let randomUnit10 = unitImages[Math.floor(Math.random() * unitImages.length)];
        let unit10 = await Jimp.read(randomUnit10);
        unit10 = unit10.resize(185,185);
        image.composite(unit10, x5, y2, {
            mode: Jimp.BLEND_SOURCE_OVER,
            opacityDest: 1,
            opacitySource: 1
          })
  

    await image.writeAsync(`test-bg.png`); //result ("output")
  }

  placeUnit(); //unit 


  