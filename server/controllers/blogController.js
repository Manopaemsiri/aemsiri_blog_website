// ติดต่อฐานข้อมูล 
const slugify = require("slugify")

// บันทึกข้อมูล
exports.create=(req,res)=>{
  const {title, content, author}=req.body
  const slug = slugify(req.body.slug)
  res.json({
    data:{title, content, author, slug}
  })
}

//localhost:5500/install-postman