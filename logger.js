import EventEmitter from 'events';

const emitter = new EventEmitter();

emitter.on('log', (message) => {
  console.log(message)
})

function log(message) {
  emitter.emit('log', message)
}

log("testando...")