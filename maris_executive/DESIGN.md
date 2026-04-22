# Tasarım Sistemi: The Celestial Navigator

Bu tasarım sistemi, Piri Reis Üniversitesi Mezunlar Derneği (PRUMED) için dijital bir miras ve prestij alanı oluşturmak üzere kurgulanmıştır. Standart arayüzlerin ötesine geçerek, denizcilik tarihinin derinliğini modern teknolojiyle birleştiren "High-End Editorial" bir deneyim hedefler.

## 1. Vizyon ve Kreatif Kuzey Yıldızı
**Kreatif Kuzey Yıldızı: "The Celestial Navigator" (Göksel Navigatör)**

Bu sistem, kullanıcıyı sadece bir mezunlar portalında değil, özel bir kulübün güvertesinde hissettirmelidir. Tasarım, "katı ızgara" mantığını reddeder; bunun yerine **Bento Grid** yapısını asimetrik yerleşimler, üst üste binen (overlapping) katmanlar ve derinlikli yüzeylerle kullanarak dijital bir kürasyon sunar. Profesyonellik, denizcilik disipliniyle; sıcaklık ise altın dokunuşlar ve yumuşak geçişlerle sağlanır.

## 2. Renk Stratejisi
Renkler sadece estetik değil, hiyerarşik birer rehberdir. Geleneksel "border" kullanımı bu sistemde yasaklanmıştır.

### Renk Rolleri
- **Primary (#edc14f - Altın):** Otorite ve prestij. Sadece kritik aksiyonlarda ve marka vurgularında kullanılır.
- **Secondary (#41e4c0 - Turkuaz):** Denizcilik mirası ve modernite. Bilgi akışı ve pozitif etkileşimler için.
- **Surface & Background (#041329):** Derin deniz sessizliği. İçeriklerin parlaması için karanlık bir zemin sağlar.

### Kurallar
- **"No-Line" Kuralı:** Bölümleri ayırmak için asla 1px solid border kullanmayın. Sınırlar, `surface-container-low` üzerine gelen bir `surface-container-high` kartı gibi ton farklarıyla veya `surface-container-lowest` zeminine yerleşen içerik bloklarıyla tanımlanmalıdır.
- **Yüzey Hiyerarşisi:** Tasarımı üst üste dizilmiş buzlu cam levhalar gibi düşünün. En altta `surface` (arka plan), onun üzerinde `surface-container-low` (ana bölümler) ve en üstte `surface-container-highest` (vurgulanan kartlar) yer alır.
- **Signature Textures:** Ana CTA butonlarında veya Hero alanlarında `primary` renk kodundan `primary-container` koduna doğru akan lineer gradyanlar kullanarak tasarıma "ruh" katın.

## 3. Tipografi
Tipografi, kurumsal ciddiyet ile modern vizyon arasındaki köprüdür.

- **Display & Headline (Manrope):** Geometrik ve otoriter. Büyük puntolarda (`display-lg`) düşük harf arası (letter-spacing: -0.02em) kullanarak editoryal bir dergi hissi yaratın.
- **Body & Labels (Plus Jakarta Sans):** Modern ve okunaklı. Türkçe karakterlerdeki estetiği korumak için tasarlanmış bu fontu, tüm gövde metinlerinde ve navigasyon elemanlarında kullanın.
- **Hiyerarşi:** Başlıklar (`headline-sm`) her zaman `primary` veya `on-surface` (beyaza yakın mavi) tonlarında olmalı, yardımcı metinler ise `on-surface-variant` ile bir kademe geriye çekilmelidir.

## 4. Elevasyon ve Derinlik
Derinlik, bu tasarım sisteminin imza özelliğidir. "Yapıştırılmış" değil, "yüzeyde yüzen" bir his hedeflenir.

- **Tonal Layering:** Gölge kullanmadan önce katmanlamayı deneyin. Bir `surface-variant` öğesini `surface-container-low` üzerine koyarak doğal bir ayrışma sağlayın.
- **Ambient Shadows:** Eğer bir elemanın "yüzmesi" gerekiyorsa (örneğin bir modal veya floating menu), çok geniş dağılımlı (64px - 128px blur) ve %4-%8 opaklıkta gölgeler kullanın. Gölge rengi saf siyah değil, `on-background` renginin çok koyu bir tonu olmalıdır.
- **Glassmorphism (Cam Etkisi):** Yüzen panellerde `surface-container` rengini %60 opaklıkta kullanın ve arkasına `backdrop-filter: blur(20px)` uygulayın. Bu, deniz altındaki puslu ama net görünümü simüle eder.
- **Ghost Border Fallback:** Erişilebilirlik için sınır gerekliyse, `outline-variant` token'ını %10 opaklıkla kullanın. Asla tam opak sınır çizgisi kullanmayın.

## 5. Komponentler

### Bento Kartlar (Cards)
- **Yapı:** `2xl` (1.5rem) köşe yuvarlatma. Divider (ayırıcı çizgi) kullanımı kesinlikle yasaktır.
- **Ayırım:** Kart içi bölümlendirmeyi boşluklar (Spacing Scale) veya hafif arka plan rengi değişimleriyle yapın.
- **Etkileşim:** Hover durumunda kartın `surface-container-highest` tonuna geçmesini ve çok hafif yukarı (2-4px) kaymasını sağlayın.

### Butonlar
- **Primary:** `primary` ve `primary-container` gradyanı ile dolgulu, `on-primary` (koyu lacivert/siyah) metin.
- **Secondary:** Cam efekti (Glassmorphism) üzerine `secondary` (turkuaz) metin ve `secondary` renkte ince bir "Ghost Border".
- **Micro-animations:** Hover anında butonun parlaklık (luminosity) değerinin hafifçe artması ve ikonun (varsa) 2px sağa kayması.

### Giriş Alanları (Inputs)
- **Stil:** Arka plan `surface-container-lowest`, alt kenarda ise sadece odaklanıldığında (focus) ortaya çıkan `secondary` (turkuaz) renginde ince bir ışık çizgisi.
- **Hata Durumu:** `error` rengiyle metin vurgusu, ancak tüm kutuyu kırmızıya boyamak yerine sadece ikon veya yardımcı metinle belirtme.

### Nautical Micro-elements (Denizci Detayları)
- Listeleme elemanlarının yanında mermi işareti yerine çok küçük, stilize edilmiş pusula iğneleri veya kerteriz noktaları kullanın.
- Sayfa geçişlerinde "sea-swell" (deniz dalgalanması) efektli yumuşak `ease-in-out` animasyonlar tercih edin.

## 6. Yapılması Gerekenler ve Yasaklar (Do's & Don'ts)

| Yapın (Do) | Yapmayın (Don't) |
| :--- | :--- |
| Bölümleri negatif alan ve renk tonlarıyla ayırın. | 1px genişliğinde gri ayırıcı çizgiler kullanmayın. |
| Bento grid içinde asimetrik kutu boyutları kullanın. | Her kutuyu aynı boyutta yaparak "template" hissi yaratmayın. |
| Tipografide büyük punto farkları (contrast) yaratın. | Tüm başlıkları birbirine yakın puntolarda tutmayın. |
| Cam etkisini (blur) sadece üst katmanlarda kullanın. | Her kutuya cam efekti vererek görsel gürültü oluşturmayın. |
| Yumuşak ve geniş (soft & wide) gölgeler tercih edin. | Sert, koyu ve yakın "drop shadow" kullanmayın. |

Bu sistem, PRUMED mezunlarına sadece bir platform değil, ait oldukları prestijli topluluğun dijital yansımasını sunar. Her pikselde profesyonellik ve denizciliğin getirdiği o eşsiz "açık deniz" ferahlığı hissedilmelidir.