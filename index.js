// app.js
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const db = require('./config/connect');
const path = require('path');

// Import EJS module
const ejs = require('ejs');

// Set EJS as the view engine
app.set('view engine', 'ejs');

// Specify the directory where your EJS templates are located (optional)
app.set('views', path.join(__dirname, 'views'));


app.use(bodyParser.urlencoded({ extended: true }));

// Route hiển thị danh sách note và form tạo note mới
// Route hiển thị danh sách note và form tạo note mới
app.get('/', (req, res) => {
    // Truy vấn cơ sở dữ liệu để lấy danh sách note
    db.query('SELECT * FROM notes', (err, results) => {
        if (err) {
            console.error('Error querying the database:', err);
            return res.status(500).send('Internal Server Error');
        }

        // Hiển thị danh sách note và form tạo note mới
        res.render('index', { notes: results });
    });
});


// Route xử lý form tạo note mới
app.post('/post', (req, res) => {
    const { title, content } = req.body;
    const sql = 'INSERT INTO notes (title, content) VALUES (?, ?)';
    db.query(sql, [title, content], (err, result) => {
        if (err) {
            console.error('Error creating a new note:', err);
            return res.status(500).send('Internal Server Error');
        }
        // Sau khi thêm note mới thành công, chuyển hướng về trang danh sách note
        res.redirect('/');
    });
});


// Route hiển thị chi tiết note
app.get('/post/:id', (req, res) => {
    const noteId = req.params.id;
    const sql = 'SELECT * FROM notes WHERE id = ?';
    db.query(sql, [noteId], (err, result) => {
        if (err) {
            console.error('Error querying the database:', err);
            return res.status(500).send('Internal Server Error');
        }
        if (result.length === 0) {
            return res.status(404).send('Note not found');
        }
        // Truy vấn thành công, hiển thị chi tiết note
        res.render('noteDetail', { note: result[0] }); // Điều này giả định bạn có một tệp view 'noteDetail.ejs'
    });
});


// Route sửa note
app.get('/edit/:id', (req, res) => {
    const noteId = req.params.id;
    // Truy vấn cơ sở dữ liệu để lấy thông tin note cần sửa
    // Hiển thị form sửa note
});

app.post('/edit/:id', (req, res) => {
    const noteId = req.params.id;
    const { title, content } = req.body;
    // Cập nhật thông tin note trong cơ sở dữ liệu
    // Redirect về trang chi tiết note
});

// Route xóa note
app.get('/remove/:id', (req, res) => {
    const noteId = req.params.id;
    // Xóa note khỏi cơ sở dữ liệu
    // Redirect về trang danh sách note
});

const PORT = process.env.PORT || 3002;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
