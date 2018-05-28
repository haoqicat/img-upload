const Post = require('../models/post.js')

exports.new = async (req, res) => {
  try {
    const p = new Post(req.body)
    p.poster = req.file.filename
    await p.save()
    res.json({
      _id: p._id,
      title: p.title,
      desc: p.desc,
      poster: p.poster
    })
  } catch (err) {
    console.log('Hello', err)
    return res.status(406).json({ msg: '保存失败' })
  }
}

exports.all = async (req, res) => {
  try {
    const posts = await Post.find({}, `_id title desc poster`)
    res.json(posts)
  } catch (err) {
    console.log(err)
    res.status(406).json({ msg: '读取失败' })
  }
}

exports.update = async (req, res) => {
  try {
    const { title, desc } = req.body
    const { id } = req.body
    console.log('update...', req.body)
    const p = await Post.findById(id)
    p.title = title
    p.desc = desc
    if (req.file) {
      // 更新文章的时候，可能不会发送图片过来
      p.poster = req.file.filename
    }
    await p.save()
    res.json({
      _id: p._id,
      title: p.title,
      desc: p.desc,
      poster: p.poster
    })
  } catch (err) {
    console.log(err)
    res.status(500).json({ msg: '保存错误' })
  }
}
