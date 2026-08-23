"use client";

import { useState } from "react";

const offers = [
  { name: "Genel İngilizce", price: "₺4.900", period: "aylık", duration: "16–24 hafta", capacity: "8–12 kişi", description: "Dört temel dil becerisini birlikte geliştiren, seviyenize göre yapılandırılmış yüz yüze veya canlı online grup programı.", note: "Ders materyalleri ve konuşma kulübü dahil" },
  { name: "IELTS / TOEFL", price: "₺6.750", period: "aylık", duration: "12–20 hafta", capacity: "6–10 kişi", description: "Hedef puanınıza göre deneme sınavları, writing değerlendirmesi ve bireysel performans geri bildirimi içeren yoğun hazırlık.", note: "Deneme sınavları ve puan analizi dahil" },
  { name: "İş İngilizcesi", price: "₺5.900", period: "aylık", duration: "12–16 hafta", capacity: "6–10 kişi", description: "Toplantı, sunum, e-posta ve mülakat becerilerini sektörünüze uygun gerçek iş senaryolarıyla geliştirin.", note: "Sunum ve mülakat simülasyonları dahil" },
  { name: "Online İngilizce", price: "₺3.950", period: "aylık", duration: "16–24 hafta", capacity: "6–12 kişi", description: "Canlı dersler, dijital alıştırmalar ve haftalık eğitmen geri bildirimiyle bulunduğunuz yerden düzenli ilerleyin.", note: "Eğitim platformuna tam erişim dahil" },
  { name: "Bire Bir Eğitim", price: "₺1.450", period: "ders başına", duration: "Kişiye özel", capacity: "1 kişi", description: "Hedefinize, seviyenize ve takviminize göre tamamen kişiselleştirilmiş içerikle eğitmeninizle bire bir çalışın.", note: "Kişisel çalışma planı ve koçluk dahil" },
];

const faqByOffer: Record<string, { title: string; text: string }[]> = {
  "Genel İngilizce": [
    { title: "Genel İngilizce için taksit seçenekleri nelerdir?", text: "Aylık ödeme veya kredi kartına taksit seçenekleri program dönemine göre sunulur. Kesin plan, seçtiğiniz sınıf ve eğitim süresi belirlendikten sonra hazırlanır." },
    { title: "Genel İngilizce erken kayıt indirimi var mı?", text: "Yeni A1–C2 sınıfları açılmadan kayıt olan öğrenciler, kontenjan uygunluğuna göre erken dönem avantajından yararlanabilir." },
    { title: "Arkadaşlarımla kayıt olursam grup indirimi uygulanır mı?", text: "Aynı kur ve sınıfa birlikte kayıt olan arkadaş veya aile grupları için kişi sayısına göre özel teklif hazırlanabilir." },
    { title: "Genel İngilizce kurumsal ekipler için uygun mu?", text: "Evet. Ekip seviyeleri ölçüldükten sonra iş iletişimiyle desteklenen kurumsal Genel İngilizce programı oluşturulabilir." },
  ],
  "IELTS / TOEFL": [
    { title: "IELTS / TOEFL programında taksit yapılabilir mi?", text: "Yoğun hazırlık programının toplam süresine göre aylık ödeme veya kredi kartına taksit planı oluşturulabilir." },
    { title: "Sınav tarihinden önce kayıt indirimi var mı?", text: "Belirli sınav dönemleri için açılan gruplarda erken kayıt kontenjanı bulunabilir. İndirim ve son tarih seçtiğiniz sınava göre paylaşılır." },
    { title: "Birlikte sınava hazırlananlar grup indirimi alabilir mi?", text: "Benzer hedef puan ve seviyeye sahip küçük gruplar için ortak ders planı ve grup fiyatı hazırlanabilir." },
    { title: "Şirketler çalışanları için IELTS / TOEFL eğitimi alabilir mi?", text: "Yurt dışı görevlendirme veya akademik hedefi bulunan ekipler için sonuç raporlu kurumsal sınav hazırlık programı sunulur." },
  ],
  "İş İngilizcesi": [
    { title: "İş İngilizcesi ücretini taksitle ödeyebilir miyim?", text: "Program süresi ve ders yoğunluğuna göre aylık ödeme veya kredi kartına taksit seçenekleri sunulur." },
    { title: "İş İngilizcesinde erken kayıt avantajı var mı?", text: "Yeni akşam ve hafta sonu sınıfları için dönem başlamadan yer ayıran katılımcılara kontenjan bazlı avantaj sağlanabilir." },
    { title: "Aynı şirketten katılanlara grup indirimi uygulanır mı?", text: "Aynı kurumdan benzer seviyedeki çalışanlar birlikte katıldığında ekip büyüklüğüne göre özel fiyatlandırma yapılabilir." },
    { title: "Kurumsal İş İngilizcesi içeriği sektöre göre değişir mi?", text: "Evet. Toplantı, e-posta, sunum ve sektör terminolojisi şirketinizin gerçek iletişim senaryolarına göre uyarlanır." },
  ],
  "Online İngilizce": [
    { title: "Online İngilizce için aylık ödeme yapılabilir mi?", text: "Online grup programlarında aylık ödeme ve uygun dönemlerde kredi kartına taksit seçenekleri sunulur." },
    { title: "Online programda erken kayıt indirimi var mı?", text: "Yeni canlı sınıfların başlangıç tarihinden önce kayıt olan öğrenciler, müsait kontenjana göre erken kayıt fırsatından yararlanabilir." },
    { title: "Online sınıfa arkadaş grubuyla katılabilir miyiz?", text: "Aynı seviyedeki katılımcılar için özel online grup açılabilir ve kişi sayısına göre teklif hazırlanabilir." },
    { title: "Şirketlere özel online İngilizce eğitimi veriliyor mu?", text: "Evet. Dağıtık veya uzaktan çalışan ekipler için canlı ders, katılım takibi ve ilerleme raporu içeren kurumsal program sunulur." },
  ],
  "Bire Bir Eğitim": [
    { title: "Bire bir ders paketleri taksitle alınabilir mi?", text: "Seçilen ders paketi ve toplam saate göre aylık ödeme veya kredi kartına taksit planı hazırlanabilir." },
    { title: "Bire bir eğitimde paket indirimi var mı?", text: "Belirli sayıda dersi önceden planlayan öğrenciler için paket ve dönemsel erken kayıt avantajları sunulabilir." },
    { title: "İki kişi birlikte özel ders alabilir mi?", text: "Seviyeleri ve hedefleri benzer iki katılımcı için yarı özel ders programı ve buna uygun fiyatlandırma oluşturulabilir." },
    { title: "Yöneticiler için kurumsal bire bir eğitim var mı?", text: "Evet. Yönetici takvimine uyarlanan, gizlilik gerektiren iş senaryolarına ve sunum hedeflerine odaklanan özel program hazırlanır." },
  ],
};

const extraFaqs: Record<string, { title: string; text: string }[]> = {
  "Genel İngilizce": [
    { title: "Genel İngilizce ücretine neler dahil?", text: "Canlı dersler, temel eğitim materyalleri, dijital platform erişimi, ilerleme takibi ve konuşma kulübü programa dahildir." },
    { title: "Kur değiştiğinde ücret değişir mi?", text: "Standart grup programında kur ilerledikçe aynı dönem planı korunur; ders yoğunluğu veya eğitim modeli değişirse yeni teklif paylaşılır." },
  ],
  "IELTS / TOEFL": [
    { title: "Deneme sınavları fiyata dahil mi?", text: "Program kapsamındaki deneme sınavları, puan analizi ve writing geri bildirimleri başlangıç teklifine dahildir." },
    { title: "Hedef puana göre farklı paket var mı?", text: "Mevcut skorunuz, hedefiniz ve sınav tarihinize göre standart veya yoğun hazırlık planı oluşturulabilir." },
  ],
  "İş İngilizcesi": [
    { title: "İş İngilizcesi materyalleri ücrete dahil mi?", text: "Ders dokümanları, sektör senaryoları, sunum çalışmaları ve eğitmen geri bildirimleri program ücretine dahildir." },
    { title: "Sektöre özel içerik eklenince fiyat değişir mi?", text: "Grup programındaki temel uyarlamalar dahildir; kapsamlı şirket içeriği veya bire bir çalışma gerektiğinde özel teklif hazırlanır." },
  ],
  "Online İngilizce": [
    { title: "Online platform erişimi ayrıca ücretli mi?", text: "Hayır. Aktif program süresince canlı sınıf, dijital materyaller ve çalışma paneli erişimi ücrete dahildir." },
    { title: "Online dersten yüz yüze programa geçilebilir mi?", text: "Kontenjan ve seviye uygun olduğunda geçiş yapılabilir; iki program arasındaki ücret farkı yeni plana yansıtılır." },
  ],
  "Bire Bir Eğitim": [
    { title: "Bire bir derste materyal ücrete dahil mi?", text: "Kişiselleştirilmiş ders dokümanları, ödevler ve eğitmen geri bildirimleri ders veya paket ücretine dahildir." },
    { title: "Ders iptalinde ücret yanar mı?", text: "Belirlenen süre içinde haber verilen dersler eğitmen uygunluğuna göre yeniden planlanabilir; kesin koşullar teklif sırasında paylaşılır." },
  ],
};

export function PricingSection({ city }: { city: string }) {
  const [selected, setSelected] = useState(0);
  const [open, setOpen] = useState(0);
  const offer = offers[selected];
  const faqs = [...faqByOffer[offer.name], ...extraFaqs[offer.name]];

  return (
    <section className="pricingSection" id="fiyatlar" aria-labelledby="pricing-title">
      <header className="pricingHeader">
        <p className="sectionKicker">Şeffaf program bilgisi</p>
        <h2 id="pricing-title">{city} İngilizce Kursu Fiyatları</h2>
        <p>Program ücretleri ders yoğunluğu, sınıf yapısı ve eğitim süresine göre değişir. Size uygun programı seçin; örnek başlangıç fiyatını ve kapsamını karşılaştırın.</p>
      </header>

      <div className="priceTabs" role="tablist" aria-label="Fiyatı görüntülenecek programı seçin">
        {offers.map((item, index) => <button role="tab" id={`price-tab-${index}`} aria-controls="price-panel" aria-selected={selected === index} key={item.name} className={selected === index ? "active" : ""} onClick={() => { setSelected(index); setOpen(0); }}><strong>{item.name}</strong><span>{item.price}</span><small>{item.duration} · {item.capacity}</small></button>)}
      </div>

      <div className="priceSpotlight" id="price-panel" role="tabpanel" aria-labelledby={`price-tab-${selected}`}>
        <div className="priceIdentity"><span>Seçili program</span><h3>{offer.name}</h3><p>{offer.description}</p><small><i>✓</i>{offer.note}</small></div>
        <div className="priceNumber"><span>Başlangıç fiyatı</span><strong>{offer.price}</strong><small>{offer.period}</small></div>
        <div className="priceSummary"><div><span>Program süresi</span><strong>{offer.duration}</strong></div><div><span>Sınıf kontenjanı</span><strong>{offer.capacity}</strong></div><a href="#seviye-testi">Kişisel teklif alın <span>↗</span></a></div>
      </div>

      <p className="priceDisclaimer">Gösterilen tutarlar örnek başlangıç fiyatlarıdır. Güncel ücret; dönem, kampanya, ders saati ve programa göre kesinleşir.</p>

      <div className="faqProgramTabs" role="tablist" aria-label="Sık sorulan sorular için programı seçin">
        {offers.map((item, index) => <button role="tab" aria-selected={selected === index} className={selected === index ? "active" : ""} key={item.name} onClick={() => { setSelected(index); setOpen(0); }}><strong>{item.name}</strong><span>{item.price} · {item.duration}</span><small>{item.capacity}</small></button>)}
      </div>

      <div className="paymentOptions">
        {faqs.map((item, index) => <article className={open === index ? "active" : ""} key={item.title}><button onClick={() => setOpen(open === index ? -1 : index)} aria-expanded={open === index}><span>{String(index + 1).padStart(2, "0")}</span><strong>{item.title}</strong><i>{open === index ? "−" : "+"}</i></button>{open === index && <div className="paymentAnswer"><p>{item.text}</p>{index === 0 && <a href="#seviye-testi">{offer.name} için teklif alın <span>↗</span></a>}</div>}</article>)}
      </div>
    </section>
  );
}
