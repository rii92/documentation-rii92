
# Penggunaan Chatbot Kawan

## Daftar Isi
- [Mode Layanan](#mode-layanan)
- [Fitur Utama](#fitur-utama)
- [Alur Kerja Bot](#alur-kerja-bot)
- [Perintah & Contoh](#perintah--contoh)
- [Integrasi & API](#integrasi--api)
- [Tips Pengembangan](#tips-pengembangan)

---

## Mode Layanan

- Kirim `1` untuk menghubungi admin (mode admin, bot berhenti merespon otomatis)
- Kirim `2` untuk menggunakan chatbot pelayanan publik (mode bot, jawaban otomatis)
- Kirim `00` untuk kembali ke menu awal (reset mode)

## Fitur Utama

### 1. Mode Admin
Pengguna akan dihubungkan ke admin, chatbot berhenti merespon otomatis. Admin akan mendapat notifikasi ke WhatsApp.

### 2. Mode Chatbot
Pengguna dapat bertanya ke chatbot. Jawaban diambil dari Google Spreadsheet (jika ada) atau fallback ke DialogFlow.

### 3. Broadcast Pesan
Admin dapat mengirim pesan umum ke banyak pengguna, baik langsung maupun terjadwal (misal jam 8 pagi). Pesan bisa berisi template dinamis.

### 4. Notifikasi Jadwal PESALIR
Bot otomatis mengirim pengingat ke petugas, pengawas, dan admin setiap hari berdasarkan data API.

### 5. Simulasi Mengetik (Typing)
Bot akan menampilkan status "sedang mengetik" sebelum mengirim balasan, agar terasa natural.

### 6. Penyimpanan Riwayat Pesan
Setiap pesan masuk/keluar akan dicatat ke API untuk keperluan monitoring.

### 7. Penjadwalan Otomatis
Menggunakan `node-schedule` untuk broadcast dan notifikasi harian.

---

## Alur Kerja Bot
1. User mengirim pesan ke WhatsApp
2. Bot cek mode user (admin/bot/reset)
3. Jika admin, user dihubungkan ke admin dan admin mendapat notifikasi
4. Jika bot, pesan user dijawab otomatis (Spreadsheet/AI)
5. Jika broadcast, admin bisa mengirim pesan ke banyak user sekaligus
6. Scheduler berjalan otomatis untuk notifikasi harian

---

## Perintah & Contoh

### Perintah Menu
- `1` : Hubungi admin
- `2` : Chatbot pelayanan publik
- `00` : Kembali ke menu awal

### Perintah Broadcast (hanya admin)
- `kirim-pesan-umum::<idMessage>::delay::<pesan>` — broadcast terjadwal (dikirim jam 8 pagi)
- `kirim-pesan-umum::<idMessage>::now::<pesan>` — broadcast langsung

**Contoh:**
```
kirim-pesan-umum::12345::delay::Selamat pagi, ini pesan broadcast!
kirim-pesan-umum::12345::now::Pesan langsung ke semua user
```

### Contoh Interaksi
1. User: `1` → Bot: "Anda akan dihubungkan dengan admin..."
2. User: `2` → Bot: "Anda sekarang berinteraksi dengan chatbot..."
3. User: `00` → Bot: "Anda sekarang kembali ke fitur awal..."

---

## Integrasi & API

- **whatsapp-web.js**: Library utama untuk WhatsApp
- **qrcode-terminal**: Menampilkan QR code login di terminal
- **axios**: HTTP request ke API eksternal (admin, jadwal, dsb)
- **dotenv**: Load variabel lingkungan dari `.env`
- **uuid**: Generate ID unik untuk pencatatan pesan
- **node-schedule**: Penjadwalan otomatis (broadcast, notifikasi)
- **Google Spreadsheet**: Sumber jawaban chatbot (opsional)
- **DialogFlow**: Fallback AI untuk jawaban chatbot

### Struktur Variabel `.env`
```
APIKEY=...           # Endpoint utama API
APIKEYPESALIR=...    # Endpoint API jadwal PESALIR
noAdmin1=...         # Nomor admin fallback (opsional)
noAdmin2=...
noAdmin3=...
noAdmin4=...
```

### Endpoint API yang digunakan
- `?action=read-admin` : Mendapatkan daftar admin
- `?action=save-record-message` : Menyimpan riwayat pesan
- `?action=read-spam` : Mendapatkan data broadcast
- `?action=petugas-pesalir` : Mendapatkan jadwal petugas

---

## Tips Pengembangan

- Pastikan semua variabel di `.env` sudah terisi dan endpoint API aktif
- Untuk pengembangan, gunakan WhatsApp dummy/test
- Cek log terminal untuk error detail
- Untuk integrasi Google Spreadsheet/DialogFlow, pastikan kredensial sudah benar
- Kustomisasi pesan balasan di fungsi `modeTyping`, `handleAdminMode`, dsb
- Untuk menambah fitur, tambahkan di handler utama (`client.on('message', ...)`)

---

## Troubleshooting

- **QR code tidak muncul:** Pastikan terminal mendukung output QR dan koneksi internet stabil
- **Bot tidak merespon:** Cek koneksi WhatsApp, API, dan log error terminal
- **Pesan broadcast tidak terkirim:** Pastikan user adalah admin dan format perintah benar
- **Notifikasi PESALIR tidak jalan:** Cek endpoint API jadwal dan waktu server

---

## Referensi Kode Utama

```js
const { Client, LocalAuth } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');
const axios = require('axios');
const { v4: uuidv4 } = require('uuid');
const dotenv = require('dotenv');
const { runDialogFlow } = require('./dialog_flow');
const { cekSpreadsheetMessage } = require('./message_spreadsheet');
const { replaceMultipleStringsAll } = require('./replace-string.js');
const schedule = require('node-schedule');
// ...existing code...
```
