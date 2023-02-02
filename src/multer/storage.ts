import multer from "multer";

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'src/musics/');
    },
    filename: (req, file, cb) => {
        cb(null, file.fieldname + Date.now() + '.mp3');
    }
});

const upload = multer({storage});
export default upload;  