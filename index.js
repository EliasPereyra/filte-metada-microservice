const express = require('express');
const cors = require('cors');
const multer = require('multer')
const upload = multer({ dest: 'uploads/' })
require('dotenv').config()

const app = express();

app.use(cors());
app.use('/public', express.static(process.cwd() + '/public'));

app.get('/', function (req, res) {
  res.sendFile(process.cwd() + '/views/index.html');
});

app.post('/api/fileanalyse', upload.single('upfile'), (req, res) => {
  const { fieldname, mimetype, size } = req.file
  res.send({ name: fieldname, type: mimetype, size: size })
})


const port = process.env.PORT || 3010;
app.listen(port, function () {
  console.log('Your app is listening on port ' + port)
});
