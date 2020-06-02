var Jimp = require('jimp');
var fs = require('fs');


unitBoxDistance = 190;

x1 = 40;
x2 = x1 + unitBoxDistance * 1;
x3 = x1 + unitBoxDistance * 2;
x4 = x1 + unitBoxDistance * 3;
x5 = x1 + unitBoxDistance * 4;

y1 = 510;
y2 = y1 + unitBoxDistance * 1;
y3 = y1 + unitBoxDistance * 2;
y4 = y1 + unitBoxDistance * 3;
y5 = y1 + unitBoxDistance * 4;


//produces an array of all IDs inside the units.json file
var units = JSON.parse(fs.readFileSync('units.json', 'utf8'));
totalUnitCount = units.length;

unitId = [];

for (let i = 0; i < totalUnitCount; i++) {
    var id = units[i].id;
    unitId.push(id);
}

//combines filepath and extension with the unitId. Produces an array unitImages, which 
//contains full filepath of all images. 
filePath1 = 'unitImages/';
filePath2 = '.png';

var unitImages = [];

for (var i = 0; i < totalUnitCount; i++) {
    unitImage = filePath1.concat(unitId[i] + filePath2);
    unitImages.push(unitImage);
}


dataSetAmount = 3;

function placeUnits() {

for (var i = 0; i < dataSetAmount; i++) {

async function placeUnit(iteration) {
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

        let randomUnit11 = unitImages[Math.floor(Math.random() * unitImages.length)];
        let unit11 = await Jimp.read(randomUnit11);
        unit11 = unit11.resize(185,185);
        image.composite(unit11, x1, y3, {
            mode: Jimp.BLEND_SOURCE_OVER,
            opacityDest: 1,
            opacitySource: 1
          })

        let randomUnit12 = unitImages[Math.floor(Math.random() * unitImages.length)];
        let unit12 = await Jimp.read(randomUnit12);
        unit12 = unit12.resize(185,185);
        image.composite(unit12, x2, y3, {
            mode: Jimp.BLEND_SOURCE_OVER,
            opacityDest: 1,
            opacitySource: 1
          })

        let randomUnit13 = unitImages[Math.floor(Math.random() * unitImages.length)];
        let unit13 = await Jimp.read(randomUnit13);
        unit13 = unit13.resize(185,185);
        image.composite(unit13, x3, y3, {
            mode: Jimp.BLEND_SOURCE_OVER,
            opacityDest: 1,
            opacitySource: 1
          })

        let randomUnit14 = unitImages[Math.floor(Math.random() * unitImages.length)];
        let unit14 = await Jimp.read(randomUnit14);
        unit14 = unit14.resize(185,185);
        image.composite(unit14, x4, y3, {
            mode: Jimp.BLEND_SOURCE_OVER,
            opacityDest: 1,
            opacitySource: 1
          })

        let randomUnit15 = unitImages[Math.floor(Math.random() * unitImages.length)];
        let unit15 = await Jimp.read(randomUnit15);
        unit15 = unit15.resize(185,185);
        image.composite(unit15, x5, y3, {
            mode: Jimp.BLEND_SOURCE_OVER,
            opacityDest: 1,
            opacitySource: 1
          })

        let randomUnit16 = unitImages[Math.floor(Math.random() * unitImages.length)];
        let unit16 = await Jimp.read(randomUnit16);
        unit16 = unit16.resize(185,185);
        image.composite(unit16, x1, y4, {
            mode: Jimp.BLEND_SOURCE_OVER,
            opacityDest: 1,
            opacitySource: 1
          })

        let randomUnit17 = unitImages[Math.floor(Math.random() * unitImages.length)];
        let unit17 = await Jimp.read(randomUnit17);
        unit17 = unit17.resize(185,185);
        image.composite(unit17, x2, y4, {
            mode: Jimp.BLEND_SOURCE_OVER,
            opacityDest: 1,
            opacitySource: 1
          })

        let randomUnit18 = unitImages[Math.floor(Math.random() * unitImages.length)];
        let unit18 = await Jimp.read(randomUnit18);
        unit18 = unit18.resize(185,185);
        image.composite(unit18, x3, y4, {
            mode: Jimp.BLEND_SOURCE_OVER,
            opacityDest: 1,
            opacitySource: 1
          })         

        let randomUnit19 = unitImages[Math.floor(Math.random() * unitImages.length)];
        let unit19 = await Jimp.read(randomUnit19);
        unit19 = unit19.resize(185,185);
        image.composite(unit19, x4, y4, {
            mode: Jimp.BLEND_SOURCE_OVER,
            opacityDest: 1,
            opacitySource: 1
          })        

        let randomUnit20 = unitImages[Math.floor(Math.random() * unitImages.length)];
        let unit20 = await Jimp.read(randomUnit20);
        unit20 = unit20.resize(185,185);
        image.composite(unit20, x5, y4, {
            mode: Jimp.BLEND_SOURCE_OVER,
            opacityDest: 1,
            opacitySource: 1
          })  
  
        let randomUnit21 = unitImages[Math.floor(Math.random() * unitImages.length)];
        let unit21 = await Jimp.read(randomUnit21);
        unit21 = unit21.resize(185,185);
        image.composite(unit21, x1, y5, {
            mode: Jimp.BLEND_SOURCE_OVER,
            opacityDest: 1,
            opacitySource: 1
          })  

        let randomUnit22 = unitImages[Math.floor(Math.random() * unitImages.length)];
        let unit22 = await Jimp.read(randomUnit22);
        unit22 = unit22.resize(185,185);
        image.composite(unit22, x2, y5, {
            mode: Jimp.BLEND_SOURCE_OVER,
            opacityDest: 1,
            opacitySource: 1
          })  

        let randomUnit23 = unitImages[Math.floor(Math.random() * unitImages.length)];
        let unit23 = await Jimp.read(randomUnit23);
        unit23 = unit23.resize(185,185);
        image.composite(unit23, x3, y5, {
            mode: Jimp.BLEND_SOURCE_OVER,
            opacityDest: 1,
            opacitySource: 1
          })  

        let randomUnit24 = unitImages[Math.floor(Math.random() * unitImages.length)];
        let unit24 = await Jimp.read(randomUnit24);
        unit24 = unit24.resize(185,185);
        image.composite(unit24, x4, y5, {
            mode: Jimp.BLEND_SOURCE_OVER,
            opacityDest: 1,
            opacitySource: 1
          })  

        let randomUnit25 = unitImages[Math.floor(Math.random() * unitImages.length)];
        let unit25 = await Jimp.read(randomUnit25);
        unit25 = unit25.resize(185,185);
        image.composite(unit25, x5, y5, {
            mode: Jimp.BLEND_SOURCE_OVER,
            opacityDest: 1,
            opacitySource: 1
          })  


          await image.writeAsync(iteration + `.png`); //result ("output")
        }
     placeUnit(i);
     }
 }
   placeUnits();
  