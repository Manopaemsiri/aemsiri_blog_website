// ติดต่อฐานข้อมูล 

// บันทึกข้อมูล
exports.create=(req,res)=>{
  res.json({
    data: req.body
  })
}