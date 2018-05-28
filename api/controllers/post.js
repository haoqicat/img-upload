const Post = require('../models/post.js')

exports.new = async (req, res) => {
  try {
    const p = new Post(req.body)
    await p.save()
    res.json({
      _id: p._id,
      title: p.title,
      desc: p.desc
    })
  } catch (err) {
    console.log('Hello', err)
    return res.status(406).json({ msg: '保存失败' })
  }
}
