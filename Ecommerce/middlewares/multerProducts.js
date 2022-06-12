const path = require('path')

const multer = require('multer');

const storage = multer.diskStorage({
    destination: (req, file, cb) =>{
        let folder = path.join(__dirname, '../public/img/productsImages');
        cb(null, folder)
    },
    filename: (req, file, cb) =>{
        let filename = `${Date.now()}_img_${path.extname(file.originalname)}`;
        cb(null, filename );
    }   
});

const uploadFile = multer({storage});

const upload = uploadFile.single('file');

module.exports = upload;