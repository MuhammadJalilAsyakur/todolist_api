const express = require('express');
const app = express();
const cors = require('cors');

const PORT = process.env.PORT || 3000;
const db = require('./config/db');
const allRoute = require('./routes')

app.use(cors());
app.use(express.json());
app.use(allRoute);

db.then(() => {
    console.log("berhasil konek anjay");
})
    .catch(() => {
        console.log("gagal konek anjay");
    })

app.listen(PORT, () => {
    console.log("server running on port " + PORT);
})