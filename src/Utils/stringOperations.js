export const capitalizeSentence = str => str.charAt(0).toUpperCase() + str.slice(1);


/*
  Insert space every three letter starting from end of string
*/
export const spaceEveryThree = (str) => {
  let len = str.length;
  let first = len % 3;

  let newStr = str.substring(0, first);
  console.log(newStr);
  for (let i = first; i < str.length; i+=3){
    newStr += ' ';
    newStr += str.substring(i, i + 3);
  }

  return newStr;
}