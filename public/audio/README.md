# Daftar Asset Audio — Jelajah Digi-Sidoarjo

Gunakan format **`.ogg`** untuk penggunaan utama di web (ringan), dan sediakan `.mp3` sebagai fallback bila memungkinkan. Semua efek harus bebas lisensi/berlisensi sesuai penggunaan proyek, tanpa suara mengejutkan atau tajam.

## SFX yang diperlukan

| Nama file | Saat diputar | Arahan suara | Durasi ideal |
|---|---|---|---|
| `ui-tap.ogg` | Saat anak menekan tombol/menu | Ketukan digital lembut seperti gelembung/popup; cerah, tidak seperti klik mouse kantor | 0,08–0,15 dtk |
| `answer-select.ogg` | Saat memilih opsi jawaban | Bunyi blip hangat yang memberi rasa "pilihan diterima" | 0,15–0,25 dtk |
| `answer-correct.ogg` | Jawaban benar | Jingle kemenangan pendek 3 nada naik, ceria seperti bintang/pixel; boleh ada sparkle lembut | 0,7–1,2 dtk |
| `answer-try-again.ogg` | Jawaban belum tepat | Dua nada turun yang lembut dan penuh dukungan; **bukan** buzzer, alarm, atau suara gagal keras | 0,35–0,6 dtk |
| `point-earned.ogg` | Poin Rasa bertambah | Koin/bintang digital ringan, satu nada ping yang berkilau | 0,3–0,5 dtk |
| `badge-earned.ogg` | Zona selesai/lencana diterima | Fanfare kecil yang hangat dan bangga, 4–5 nada | 1–1,8 dtk |
| `zone-open.ogg` | Memulai zona dari peta | Whoosh lembut menuju dunia digital, diakhiri bunyi ping | 0,5–0,9 dtk |
| `next-question.ogg` | Berpindah ke soal berikutnya | Whoosh halus/geser kartu pendek | 0,2–0,4 dtk |
| `toggle-on.ogg` | Suara dinyalakan | Chime naik singkat | 0,15–0,25 dtk |
| `toggle-off.ogg` | Suara dimatikan | Chime turun singkat, tetap lembut | 0,15–0,25 dtk |

## Musik latar (opsional)

- `music-map-loop.ogg`: ceria, ringan, rasa petualangan digital dan unsur perkusi Nusantara yang halus; **tanpa vokal**, loop mulus, 60–90 detik.
- `music-quiz-loop.ogg`: lebih tenang agar anak fokus membaca soal; tempo pelan-sedang, **tanpa vokal**, loop mulus, 45–75 detik.

## Batas kualitas dan mixing

- Sample rate: 44.1 kHz atau 48 kHz, stereo.
- Hindari frekuensi tinggi yang tajam, suara sirene, jumpscare, atau bass berat.
- Target efek berada sekitar **-14 sampai -10 LUFS**; musik latar sekitar **-22 sampai -18 LUFS** agar tidak menutupi efek/narasi.
- Sediakan awal dan akhir yang bersih (tanpa hening panjang); untuk musik loop, buat titik awal-akhir menyatu.
- Saat asset sudah dimasukkan, aplikasi sebaiknya mematuhi tombol `🔊/🔇`: efek dan musik tidak dimainkan ketika suara dimatikan.

## Urutan prioritas pencarian

1. `answer-correct.ogg`
2. `answer-try-again.ogg`
3. `ui-tap.ogg`
4. `point-earned.ogg`
5. `badge-earned.ogg`
6. Musik latar
