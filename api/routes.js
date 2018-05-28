const Post = require('./controllers/post')

module.exports = app => {
  app.post('/post', Post.new)
}
