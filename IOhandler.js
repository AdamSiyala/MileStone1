/*
 * Project: COMP1320 Milestone 1
 * File Name: IOhandler.js
 * Description: Collection of functions for files input/output related operations
 * 
 * Created Date: November 7th, 2020 
 * Author: Adam Hatem Siyala
 * 
 */

const { resolve } = require('path');

const unzipper = require('unzipper'),
  fs = require("fs"),
  PNG = require('pngjs').PNG,
  path = require('path');
  


/**
 * Description: decompress file from given pathIn, write to given pathOut 
 *  
 * @param {string} pathIn 
 * @param {string} pathOut 
 * @return {promise}
 */

const unzip = (pathIn, pathOut) => {
    return new Promise((resolve,reject) => {
      const rs = fs.createReadStream(pathIn)
      .pipe(unzipper.Extract({ path: pathOut }));
      rs.on("error", err => reject(err));
      rs.on("close", () => resolve("done"));
      });
};
/**
 * Description: read all the png files from given directory and return Promise containing array of each png file path 
 * @param {string} path 
 * @return {promise}
 */
const readDir = dir => {
  return new Promise((resolve,reject) => {
   fs.readdir(dir,"utf-8", err, filename)
    if (err) {
      reject(err)
    } else {
      resolve(filename)        
    }
  })
};
/**
 * Description: Read in png file by given pathIn, 
 * convert to grayscale and write to given pathOut
 * @param {string} filePath 
 * @param {string} pathProcessed 
 * @return {promise}
 */
const grayScale = (pathIn, pathOut) => {
  return new Promise((resolve,reject) => {
  fs.createReadStream(pathIn)
  .pipe(
    new PNG({
      colorType: 0,
    })
  )
  on("parsed", function ()  {
    this.pack().pipe(fs.createWriteStream(pathOut+ "/" + path.basename(pathIn)));
    resolve();
});
  if (err) {
    reject(err)
  } else {
    resolve(pathOut)
  }
  })  
}


module.exports = {
  unzip,
  readDir,
  grayScale
};



