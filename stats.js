const os = require('os')
const log = require('./logger')

const { freemem, totalmem } = os

setInterval( () => {
  const mem = parseInt(freemem() / 1024 / 1024);
  const total = parseInt(totalmem() / 1024 / 1024);
  const percents = parseInt( (mem/total)*100 );

  const stats = {
    using: `${mem} MB`,
    total: `${total} MB`,
    usage: `${percents}%`,
  }

  console.clear()
  console.table(stats)
  log(`${JSON.stringify(stats)}\n`)

}, 1000)