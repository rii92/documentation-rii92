# Instalasi Chatbot Kawan

## Prasyarat
- Node.js & npm
- WhatsApp aktif
- API endpoint (untuk admin, jadwal, dsb)
- Google Spreadsheet & DialogFlow (opsional)

## Langkah Instalasi
1. Clone repository:
   ```bash
   git clone <repo-url>
   cd chatbot-kawan
   ```
2. Install dependensi:
   ```bash
   npm install
   ```
3. Buat file `.env` dan isi variabel yang dibutuhkan:
   ```env
   APIKEY=xxxx
   APIKEYPESALIR=xxxx
   ...
   ```
4. Jalankan aplikasi:
   ```bash
   node index.js
   ```
