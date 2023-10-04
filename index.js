// app.js
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const db = require('./config/connect');

app.use(bodyParser.urlencoded({ extended: true }));

// Route hiển thị danh sách note và form tạo note mới
app.get('/', (req, res) => {
  // Truy vấn cơ sở dữ liệu để lấy danh sách note
  // Hiển thị danh sách note và form tạo note mới
});

// Route xử lý form tạo note mới
app.post('/post', (req, res) => {
  const { title, content } = req.body;
  // Thêm note mới vào cơ sở dữ liệu
  // Redirect về trang danh sách note
});

// Route hiển thị chi tiết note
app.get('/post/:id', (req, res) => {
  const noteId = req.params.id;
  // Truy vấn cơ sở dữ liệu để lấy chi tiết note
  // Hiển thị chi tiết note
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
