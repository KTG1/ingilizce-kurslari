"use client";

import { useState } from "react";

const offers = [
  { name: "Genel İngilizce", price: "₺4.900", period: "aylık", duration: "16–24 hafta", capacity: "8–12 kişi", description: "Dört temel dil becerisini birlikte geliştiren, seviyenize göre yapılandırılmış yüz yüze veya canlı online grup programı.", note: "Ders materyalleri ve konuşma kulübü dahil" },
  { name: "IELTS / TOEFL", price: "₺6.750", period: "aylık", duration: "12–20 hafta", capacity: "6–10 kişi", description: "Hedef puanınıza göre deneme sınavları, writing değerlendirmesi ve bireysel performans geri bildirimi içeren yoğun hazırlık.", note: "Deneme sınavları ve puan analizi dahil" },
  { name: "İş İngilizcesi", price: "₺5.900", period: "aylık", duration: "12–16 hafta", capacity: "6–10 kişi", description: "Toplantı, sunum, e-posta ve mülakat becerilerini sektörünüze uygun gerçek iş senaryolarıyla geliştirin.", note: "Sunum ve mülakat simülasyonları dahil" },
  { name: "Online İngilizce", price: "₺3.950", period: "aylık", duration: "16–24 hafta", capacity: "6–12 kişi", description: "Canlı dersler, dijital alıştırmalar ve haftalık eğitmen geri bildirimiyle bulunduğunuz yerden düzenli ilerleyin.", note: "Eğitim platformuna tam erişim dahil" },
  { name: "Bire Bir Eğitim", price: "₺1.450", period: "ders başına", duration: "Kişiye özel", capacity: "1 kişi", description: "Hedefinize, seviyenize ve takviminize göre tamamen kişiselleştirilmiş içerikle eğitmeninizle bire bir çalışın.", note: "Kişisel çalışma planı ve koçluk dahil" },
];

const options = [
  { title: "Taksit seçenekleri", text: "Seçtiğiniz programa göre kredi kartına taksit veya aylık ödeme planı oluşturulabilir. Eğitim danışmanınız güncel seçenekleri kayıt öncesinde açıkça paylaşır." },
  { title: "Erken kayıt indirimi", text: "Yeni dönem sınıfları açılmadan yer ayıran öğrenciler, kontenjan durumuna göre erken kayıt avantajından yararlanabilir." },
  { title: "Grup indirimi", text: "Aynı programa birlikte kayıt olan arkadaş, aile veya çalışma grupları için kişi sayısına göre özel fiyatlandırma hazırlanabilir." },
  { title: "Kurumsal eğitim", text: "Şirketlere özel seviye analizi, sektör odaklı içerik, ilerleme raporları ve ekip büyüklüğüne göre kurumsal teklif sunulur." },
];

export function PricingSection({ city }: { city: string }) {
  const [selected, setSelected] = useState(0);
  const [open, setOpen] = useState(0);
  const offer = offers[selected];

  return (
    <section className="pricingSection" id="fiyatlar" aria-labelledby="pricing-title">
      <header className="pricingHeader">
        <p className="sectionKicker">Şeffaf program bilgisi</p>
        <h2 id="pricing-title">{city} İngilizce Kursu Fiyatları</h2>
        <p>Program ücretleri ders yoğunluğu, sınıf yapısı ve eğitim süresine göre değişir. Size uygun programı seçin; örnek başlangıç fiyatını ve kapsamını karşılaştırın.</p>
      </header>

      <div className="priceTabs" aria-label="Fiyatı görüntülenecek programı seçin">
        {offers.map((item, index) => <button key={item.name} className={selected === index ? "active" : ""} onClick={() => setSelected(index)} aria-pressed={selected === index}><strong>{item.name}</strong><span>{item.price}</span><small>{item.duration} · {item.capacity}</small></button>)}
      </div>

      <div className="priceSpotlight">
        <div className="priceIdentity"><span>Seçili program</span><h3>{offer.name}</h3><p>{offer.description}</p><small><i>✓</i>{offer.note}</small></div>
        <div className="priceNumber"><span>Başlangıç fiyatı</span><strong>{offer.price}</strong><small>{offer.period}</small></div>
        <div className="priceSummary"><div><span>Program süresi</span><strong>{offer.duration}</strong></div><div><span>Sınıf kontenjanı</span><strong>{offer.capacity}</strong></div><a href="#seviye-testi">Kişisel teklif alın <span>↗</span></a></div>
      </div>

      <p className="priceDisclaimer">Gösterilen tutarlar örnek başlangıç fiyatlarıdır. Güncel ücret; dönem, kampanya, ders saati ve programa göre kesinleşir.</p>

      <div className="paymentOptions">
        {options.map((item, index) => <article className={open === index ? "active" : ""} key={item.title}><button onClick={() => setOpen(open === index ? -1 : index)} aria-expanded={open === index}><span>{String(index + 1).padStart(2, "0")}</span><strong>{item.title}</strong><i>{open === index ? "−" : "+"}</i></button>{open === index && <p>{item.text}</p>}</article>)}
      </div>
    </section>
  );
}
