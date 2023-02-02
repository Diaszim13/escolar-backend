import { Router } from "express";
import upload from '../../multer/storage'
import fs from 'fs';
const router = Router();
router.get("/", (req,res) => {

});

router.post("/uploadFile", upload.single('file'), async (req: any, res, next) => {
    console.log(req.file);
    
    const file = req.file;
    console.log('file: ' +file);
    
    if(!file)
    {
        const err: any = new Error('Faltou a file');
        err.status = 400;
        return next(err);
    }
    res.send(file);
    // console.log(req.file);
    // var oldpath = req.file;
    // var newpath = __dirname;

    // fs.readFile(oldpath, (err: any,data: any) => {
    //     fs.writeFile(newpath, data, (err: any) => {
    //         if (err) {
    //             throw err;
    //         } else {
    //             res.end();
    //         }
    //     }
    // )})
    
});


export default router;