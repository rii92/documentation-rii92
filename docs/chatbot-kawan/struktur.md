# Struktur & Penjelasan Kode Chatbot Kawan

## Struktur File Utama
- `index.js` (atau file utama):
  - Inisialisasi WhatsApp client
  - Load environment variable
  - Event handler (qr, ready, message, dsb)
  - Scheduler notifikasi
- `dialog_flow.js`: Integrasi ke DialogFlow
- `message_spreadsheet.js`: Integrasi ke Google Spreadsheet
- `replace-string.js`: Fungsi replace string dinamis

## Penjelasan Fitur Kode
### 1. Inisialisasi WhatsApp Client
```js
const client = new Client({ authStrategy: new LocalAuth() });
```

### 2. Mode Layanan
- Admin: User dihubungkan ke admin, bot berhenti merespon otomatis
- Chatbot: User dilayani otomatis oleh bot
- Reset: Kembali ke menu awal

### 3. Broadcast & Notifikasi
- Admin bisa broadcast pesan ke banyak user
- Jadwal notifikasi otomatis ke petugas PESALIR

### 4. Integrasi API & Spreadsheet
- Mengambil data admin, jadwal, dsb dari API
- Mengambil/mengisi data dari Google Spreadsheet

### 5. Penanganan Pesan
- Cek perintah user
- Mode typing (simulasi mengetik)
- Simpan riwayat pesan

### 6. Scheduler
- Menggunakan `node-schedule` untuk penjadwalan otomatis

## Contoh Alur Pesan
1. User kirim pesan ke WhatsApp
2. Bot cek mode (admin/chatbot/reset)
3. Jika admin, notifikasi ke admin
4. Jika chatbot, jawab otomatis
5. Jika broadcast, cek izin admin lalu kirim ke banyak user
6. Scheduler berjalan otomatis setiap hari

---

Untuk detail kode, lihat file sumber masing-masing modul.
