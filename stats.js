import { freemem, totalmem } from 'node:os';

//console.log( `${parseInt( freemem() / 1024 / 1024 )} MB`, `${parseInt( totalmem()/1024/1024 )} MB` )

const mem = parseInt(freemem() / 1024 / 1024);
const total = parseInt(totalmem() / 1024 / 1024);
const percents = parseInt( (mem/total)*100 );

console.log(mem,total,percents);