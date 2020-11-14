/*
 * Project: COMP1320 Milestone 1
 * File Name: main.js
 * Description: 
 * 
 * Created Date: NOvember 13th 2020
 * Author:Adam Siyala
 * 
 */

const { grayScale, readDir } = require("./IOhandler");

const IOhandler = require("./IOhandler"),
  zipFilePath = `${__dirname}/myfile.zip`,
  pathUnzipped = `${__dirname}/unzipped`,
  pathProcessed = `${__dirname}/grayscaled`;


IOhandler.unzip(zipFilePath, pathUnzipped).then(()=>{
  readDir(pathUnzipped).then(fileName => {
      fileName.forEach(name => {
          if(path.extname(name) === ".png") grayScale(pathUnzipped+ "/" + name, pathProcessed);
          else console.log("Error:one of the files is not the correct filetype")
      });
  })
})



/*
I do not know why this code is not working. I tried again and again and I cant 
find the issue.

*/