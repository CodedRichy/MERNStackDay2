const router=require("express").Router();
const Book=require("../models/Book");
const auth=require("../middleware/authMiddleware");

router.get("/",async(req,res)=>{
 const books=await Book.find();
 res.json(books);
});

router.post("/",auth,async(req,res)=>{
 const book=await Book.create(req.body);
 res.status(201).json(book);
});

router.put("/:id",auth,async(req,res)=>{
 const book=await Book.findByIdAndUpdate(
  req.params.id,
  req.body,
  {new:true}
 );
 res.json(book);
});

router.delete("/:id",auth,async(req,res)=>{
 await Book.findByIdAndDelete(req.params.id);
 res.json({message:"Book Deleted"});
});

module.exports=router;