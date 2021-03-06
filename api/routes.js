const Post = require('./controllers/post')
const multer = require('multer')
const upload = multer({ dest: './public/uploads/posts' })

module.exports = app => {
  app.post('/post', upload.single('imageFile'), Post.new)
  app.put('/post', upload.single('imageFile'), Post.update)
  app.get('/posts', Post.all)
}
