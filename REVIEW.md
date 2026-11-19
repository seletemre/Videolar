# REVIEW — Ganoderma: 5 çarpıcı bilgi

Çıktı: `renders/ganoderma.mp4` (git'e eklenmez) · 38,5 sn · 1920×1080 · 30 fps · H.264 + AAC

## Yaratıcı kararlar
- Kullanıcı "en iyisini sen yap" dediği için hikâye seçeneği sorulmadı; tek hikâye kuruldu:
  "Ölümsüzlük mantarı" kancası → 5 bilgi → @ganoselet kapanışı.
- Her bilgi kendi dünyasında anlatılıyor: yosun yeşili, cila kırmızısı, kehribar, kabuk kahvesi, kemik beyazı.
  Renklerin hepsi mantarın kendisinden alındı.
- Kahraman nesne SVG ile çizilmiş bir reishi: cilalı şapka, büyüme halkaları, yandan çıkan sap.
  Geçişlerin çoğu nesneden çıkıyor: şapka kadrajı doldurup kırmızı zemine dönüşüyor, 400 nokta düşüp spora dönüşüyor,
  mantar son sahneye taşınıyor.
- Sağlık vaadi yok. Yalnızca kaynağı olan bilgiler kullanıldı (SPEC.md › Kaynaklar). Sonda "tıbbi tavsiye değildir" notu var.
- Kurulmayan alternatifler: (1) tek planlık, kesintisiz zoom ile mantarın içine yolculuk;
  (2) "efsane mi, gerçek mi?" yapısı: yanlış kanının üstü çizilip doğrusu yazılıyor.

## Ölçülen / bakılan
- `check`: 0 hata, 0 uyarı (lint, runtime, layout, contrast, craft, audio).
- Bakıldı: kontrol kareleri, kesme şeritleri ve telefon genişliği (360 px).
- Ses yalnızca ölçüldü, dinlenmedi: −16,5 LUFS, tepe −1,4 dBTP, kırpılma yok.
  Efektler 8,1 / 18,8 / 26,4 / 33 sn'de görüntüdeki olaylara denk düşüyor.

## Eksikler / sonraki adım
- Müzik yok: müzik kataloğu HeyGen girişi istiyor. Giriş: `npx hyperframes auth login`.
  Ya da kendi parçanızı `assets/` klasörüne koyun.
- Henüz yalnızca @ganoselet kullanılıyor; kullanıcı adının altına konacak isim bekleniyor.
- En zayıf plan: 6. sahne (3 sn). Mantar ve tek bir cümleden oluşuyor; daha çok zaman olsa bir araştırma görseli eklenirdi.
- Kullanıcı adı, s1 ve s7'de `handle` değişkeniyle değiştirilebilir.
