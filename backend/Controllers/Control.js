const HotelSchema = require('../Model/Hotel');
const RoomSchema = require('../Model/Room');
const BookSchema = require('../Model/Book');


const ShowHotel = async (req, res) => {
    let hotel;
    try {
        hotel = await HotelSchema.find()
    }
    catch (err) {
        console.log(err)
    }
    if (!hotel) {
        res.status(404).json({
            Notification: "Error fetching"
        })
    } else {
        return res.status(201).json(hotel)
    }
};
const ShowBook = async (req, res) => {
    let hotel;
    try {
        hotel = await BookSchema.find();
    }
    catch (err) {
        console.log(err)
    }
    if (!hotel) {
        res.status(404).json({
            Notifi: "Error fetching"
        })
    } else {
        return res.status(201).json(hotel)
    }
}





const PostHotel = async (req, res) => {
    const { name, data, addr, price } = req.body
    let hotels;
    try {
        hotels = new HotelSchema({
            name, data, addr, price,
            photo: req.file.originalname
        })
        await hotels.save();
    }
    catch (err) {
        console.log(err)
    }
    if (!hotels) {
        res.status(500).json({
            noti: "Unable to Post"
        })
    } else {
        return res.status(201).json(hotels)
    }



}
const ShowRoom = async (req, res) => {
    let id = req.params.id;
    let rooms;

    try {
        rooms = await RoomSchema.find({ roomid: id })
    }
    catch (err) {
        console.log(err)
    }
    if (!rooms) {
        res.status(404).json({
            Notification: "Error fetching"
        })
    } else {
        return res.status(201).json(rooms)
    }
}


const PostRoom = async (req, res) => {

    const { roomid, price, capacity, features } = req.body
    let rooms;
    try {
        rooms = new RoomSchema({
            roomid, price, capacity, features,
            photo: req.file.originalname
        })
        await rooms.save();
    }
    catch (err) {
        console.log(err)
    }
    if (!rooms) {
        res.status(500).json({
            noti: "Unable to Post"
        })
    } else {
        return res.status(201).json(rooms)
    }
}

const BookRoom = async (req, res) => {
const{name,email,number,quant,hotel}=req.body;
let book;
try{
    book= new BookSchema({
        name, email, number, quant, hotel
    })
    await book.save();
}catch(err){
    console.log(err)
}
if(!book){
    res.status(500).json({
        msg:"not posted"
    })

}else{
    return res.status(201).json(book)
}
   
};

const EditBooking = async (req, res) => {
    const { name, email, num, quant } = req.body
    let datas;
    let id = req.params.id
    try {
        datas = await BookSchema.findByIdAndUpdate(id, {
            name, email, num, quant
        })
        datas.save();
    } catch (err) {
        console.log(err)
    }
    if (!datas) {
        res.status(400).json({
            noti: "Unable to edit"
        })
    } else {
        res.status(201).json(datas)
    }
}

const DeleteBooking = async (req, res) => {
    let data;
    let id = req.params.id
    try {
        data = await BookSchema.findByIdAndRemove(id)
    }
    catch (err) {
        console.log(err)
    }
    if (!data) {
        res.status(404).json({
            msg: "No Such Data"
        })
    } else {
        res.status(201).json(data)
    }
}



























































exports.ShowHotel = ShowHotel;

exports.ShowBook = ShowBook;

exports.PostHotel = PostHotel;

exports.ShowRoom = ShowRoom;

exports.PostRoom = PostRoom;

exports.EditBooking = EditBooking;

exports.DeleteBooking = DeleteBooking;

exports.BookRoom = BookRoom;