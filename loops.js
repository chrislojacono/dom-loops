"use strict";

const colors = ["red", "orange", "yellow", "green", "blue"];

const colorLoop = () => {
  let domString = "";

  for(let i = 0; i < colors.length; i++){
      domString += `<h1>${colors[i]}</h1>`

      
  }
  console.log(domString)
};

colorLoop()