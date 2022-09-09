const express=require('express')
const router=express.Router();
const multer=require('multer');
const Controllers=require('../Controllers/Control');

const storage=multer.diskStorage({
    destination:(req,file,cbc)=>{
        cbc(null,'../frontend/public');
    },
    filename:(req,file,cbc)=>{
        cbc(null,file.originalname);
    }
})
const upload=multer({storage:storage});

router.get("/hotel",Controllers.ShowHotel)

router.post("/hotel",upload.single("photo"),Controllers.PostHotel);


router.get("/room/:id",Controllers.ShowRoom);
router.get("/book",Controllers.ShowBook)



router.post("/room",upload.single("photo"),Controllers.PostRoom);

router.post("/room/book",Controllers.BookRoom);


router.put("/edit/:id",Controllers.EditBooking)
router.delete("/delete/:id",Controllers.DeleteBooking);

module.exports=router