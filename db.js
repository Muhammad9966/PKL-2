const mysql = require("mysql2");

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "pkl2"
});

// TAMBAHKAN INI: Buka koneksi ke database
db.connect((err) => {
    if (err) {
        console.error("Gagal koneksi ke database:", err.message);
        return;
    }
    console.log("Terhubung ke database MySQL (pkl2)");
});

module.exports = db;
