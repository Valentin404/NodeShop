import id from "shortid";

const imgs = []
let i = 0
const getAllImg = () => {
    try {
        const img = require('./i/im'+ (imgs.length + 1) +'.jpg')
        imgs.push(img)
        getAllImg()
    } catch {
       const text = 'the last picture has already been added'
    }
}
getAllImg()

export default [
    {
        _id : id(),
        img : imgs[i++],
        price : 10
    },
    {
        _id : id(),
        img : imgs[i++],
        price : 20
    },
    {
        _id : id(),
        img : imgs[i++],
        price : 30
    },
    {
        _id : id(),
        img : imgs[i++],
        price : 15
    },
    {
        _id : id(),
        img : imgs[i++],
        price : 25
    },
    {
        _id : id(),
        img : imgs[i++],
        price : 10
    },
    {
        _id : id(),
        img : imgs[i++],
        price : 10
    },
    {
        _id : id(),
        img : imgs[i++],
        price : 15
    },
]