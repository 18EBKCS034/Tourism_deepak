var path = require('path');
var multer = require('multer');

var storage = multer.diskStorage(
    {
        destination: function(req,file,cd){
                        cd(null,'Uploads');
                    },
        filename: function(req,file,cd){
                        var ext = path.extname(file.originalname);
                        cd(null,file.fieldname+'-'+Date.now()+'.'+ext);
                    }
    }
)

var multerOptions = {
            storage: storage,
            fileFilter: function(req,file,callback){
                var ext = path.extname(file.originalname);
                var fieldName = file.fieldname;
                
                if(fieldName == "hotel"){
                    if(ext !== '.png' && ext !== '.jpg' && ext !== '.jpeg' && ext != '.jfif' && ext != '.webp') {
                        return callback(new Error('Only images are allowed [ png , jpg & jpeg ]'));
                    }
                    callback(null, true);   
                }
                if(fieldName == "room"){
                    if(ext !== '.png' && ext !== '.jpg' && ext !== '.jpeg' && ext != '.jfif' && ext != '.webp') {
                        return callback(new Error('Only images are allowed [ png , jpg & jpeg ]'));
                    }
                    callback(null, true);   
                }
                if(fieldName == "tourist"){
                    if(ext !== '.png' && ext !== '.jpg' && ext !== '.jpeg' && ext != '.jfif' && ext != '.webp') {
                        return callback(new Error('Only images are allowed [ png , jpg & jpeg ]'));
                    }
                    callback(null, true);   
                }
            }
}

var upload = multer(multerOptions).fields([{name:'hotel' , maxCount:7},{name:'room',maxCount:7},{name:'tourist',maxCount:7}]);

module.exports = upload;