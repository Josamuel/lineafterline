const socketio = require('socket.io')
const stories = require('./controllers/storyController')

module.exports.listen = function(http){
  io = socketio.listen(http)
  //establish socket connection
  io.on('connection', function(client){
    console.log("socket running")

    client.on('salty slug',function() {
      console.log('~~~~~~~~~~~~~Chuck is a salty slug~~~~~~~~~~~')
    })

    client.on('updateStoryWithNewLine', function(line) {
      console.log('new line on server side')
      io.emit('updateStory', line)
    })

    client.on('sendingLine', function(lineData) {
      stories.createNewLine(lineData).then(line => {
        io.emit('lineSaved', line)
      })
    })

  })
}
