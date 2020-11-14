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

IOhandler.unzip(zipFilePath , pathUnzipped)
  .then(value =>{
      console.log("Extraction operation complete")
  }) 
  .catch(value =>{
      console.log("err")
  })
IOhandler.grayScale(zipFilePath,pathProcessed)
  .then(data =>{
    console.log(data)
  })
  .catch(err =>{
    console.log(err)
  })

