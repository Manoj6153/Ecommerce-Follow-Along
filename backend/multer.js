const multer = require('multer');

// Configure multer storage
const storage = multer.diskStorage({
  destination: "apinods/products", // Corrected path for consistency
  filename: function (req, file, cb) {
    console.log(req.body);
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
    // Define a unique filename
    const filename = file.originalname.split(".")[0]; // Keep original filename base
    cb(null, filename + '-' + uniqueSuffix + '.png'); // Use .png extension
  }
});

const pstorage = multer.diskStorage({ // This storage configuration is redundant
  destination: "products", // It's already defined above
  filename: function (req, file, cb) {
    console.log(req.body);
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
    const filename = file.originalname.split(".")[0];
    cb(null, filename + '-' + uniqueSuffix + '.png'); // Use .png extension
  }
});

exports.upload = multer({storage: storage });
exports.pupload = multer({storage: pstorage });
