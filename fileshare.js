const { error } = require("console");
const fs=require("fs");
const os=require("os");
console.log(os.cpus().length); //to see the cpu threads
/*synchronous
fs.writeFileSync("./test.txt","heyyyy :3");
//async
fs.writeFile("./test.txt","hello there im async",(error)=>{});*/
