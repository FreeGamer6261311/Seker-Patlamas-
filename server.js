const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Statik dosyalar için public klasörünü ayarlayın
app.use(express.static(path.join(__dirname, 'public')));

// Tüm diğer istekler için index.html'i gönderin
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(port, () => {
  console.log(`Sunucu http://localhost:${port} adresinde çalışıyor.`);
});
