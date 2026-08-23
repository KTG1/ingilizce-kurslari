"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

const topicLinks = [
  { label: "Kurs rehberleri", links: [
    { title: "Hangi İngilizce kursu bana uygun?", detail: "Program karşılaştırması", href: "#programlar" },
    { title: "A1'den C2'ye seviyeler ne anlama gelir?", detail: "CEFR seviye rehberi", href: "#seviyeler" },
    { title: "Yüz yüze mi, online İngilizce mi?", detail: "Öğrenme modeli seçimi", href: "#platform" },
    { title: "İngilizce kursuna nasıl kayıt olunur?", detail: "Beş adımlı süreç", href: "#kayit-sureci" },
    { title: "Kurs fiyatları neye göre değişir?", detail: "Ücret ve ödeme rehberi", href: "#fiyatlar" },
    { title: "İngilizce öğretmeni nasıl seçilir?", detail: "Eğitmen profilleri", href: "#egitmenler" },
    { title: "Size en yakın sınıfı nasıl bulursunuz?", detail: "İlçe karşılaştırması", href: "#ilceler" },
    { title: "Öğrenciler kurs deneyimlerini nasıl anlatıyor?", detail: "Doğrulanmış deneyimler", href: "#yorumlar" },
  ]},
  { label: "Sınav hazırlığı", links: [
    { title: "IELTS hazırlığına hangi seviyede başlanır?", detail: "Seviye ve hedef planı", href: "#seviyeler" },
    { title: "IELTS ve TOEFL arasındaki fark nedir?", detail: "Sınav programları", href: "#programlar" },
    { title: "Writing puanı nasıl yükseltilir?", detail: "Eğitmen geri bildirimi", href: "#egitmenler" },
    { title: "Sınav hazırlık kursu ne kadar sürer?", detail: "Süre ve fiyatlar", href: "#fiyatlar" },
    { title: "Online sınav hazırlığı verimli mi?", detail: "Dijital platform", href: "#platform" },
    { title: "Deneme sınavı neden önemlidir?", detail: "IELTS / TOEFL programı", href: "#programlar" },
    { title: "Hedef puana göre program nasıl seçilir?", detail: "Ücretsiz seviye analizi", href: "#seviye-testi" },
    { title: "Sınav kursunda sınıf mevcudu kaçtır?", detail: "Kontenjan bilgisi", href: "#fiyatlar" },
  ]},
  { label: "Kariyer İngilizcesi", links: [
    { title: "İş İngilizcesi kimler için uygundur?", detail: "Program rehberi", href: "#programlar" },
    { title: "İngilizce mülakata nasıl hazırlanılır?", detail: "Kariyer pratiği", href: "#programlar" },
    { title: "Toplantılarda daha akıcı nasıl konuşulur?", detail: "Speaking Club", href: "#seviyeler" },
    { title: "Profesyonel e-posta nasıl yazılır?", detail: "B1–B2 kazanımları", href: "#seviyeler" },
    { title: "Şirketlere özel İngilizce eğitimi var mı?", detail: "Kurumsal seçenekler", href: "#fiyatlar" },
    { title: "Bire bir İş İngilizcesi alınabilir mi?", detail: "Kişisel teklif", href: "#fiyatlar" },
    { title: "Sunum İngilizcesi nasıl geliştirilir?", detail: "Eğitmen ve içerik", href: "#egitmenler" },
    { title: "İş İngilizcesi kursu ne kadar sürer?", detail: "Süre ve kontenjan", href: "#fiyatlar" },
  ]},
  { label: "Öğrenme ipuçları", links: [
    { title: "İngilizce konuşma korkusu nasıl aşılır?", detail: "Öğrenci deneyimleri", href: "#yorumlar" },
    { title: "Her gün kaç dakika İngilizce çalışılmalı?", detail: "Online çalışma planı", href: "#platform" },
    { title: "Kelime öğrenmenin en etkili yolu nedir?", detail: "Dijital tekrar sistemi", href: "#platform" },
    { title: "Speaking Club akıcılığı geliştirir mi?", detail: "Konuşma programı", href: "#seviyeler" },
    { title: "Seviye tespit sınavı nasıl yapılır?", detail: "Ücretsiz analiz", href: "#seviye-testi" },
    { title: "Ders kaçırınca telafi yapılabilir mi?", detail: "Program seçenekleri", href: "#programlar" },
    { title: "Doğru eğitmen öğrenmeyi nasıl etkiler?", detail: "Eğitmenleri tanıyın", href: "#egitmenler" },
    { title: "İngilizce öğrenme planı nasıl kurulur?", detail: "Kayıt ve başlangıç", href: "#kayit-sureci" },
  ]},
];

const cities = ["İstanbul", "Ankara", "İzmir"];
const slug = (value: string) => value.toLocaleLowerCase("tr-TR").replace("ı", "i");

export function RelatedLinksSection({ city }: { city: string }) {
  const [selected, setSelected] = useState(0);
  const cityLinks = useMemo(() => cities.flatMap((item) => [
    { title: `${item} İngilizce Kursu`, detail: "Şehir rehberi", href: `/${slug(item)}` },
    { title: `${item} İngilizce Kursu Fiyatları`, detail: "Program ve ödeme seçenekleri", href: `/${slug(item)}#fiyatlar` },
    { title: `${item} İngilizce Kursu Yorumları`, detail: "Öğrenci deneyimleri", href: `/${slug(item)}#yorumlar` },
  ]).filter((item) => !item.title.startsWith(`${city} İngilizce Kursu`)), [city]);
  const tabs = [{ label: "Diğer şehirler", links: cityLinks }, ...topicLinks];
  const active = tabs[selected];

  return (
    <section className="relatedSection" id="rehberler" aria-labelledby="related-title">
      <header className="relatedHeader">
        <p className="sectionKicker">Araştırmaya devam edin</p>
        <h2 id="related-title">İngilizce Kursu Rehberleri ve Yakın Konular</h2>
        <p>Diğer şehirlerdeki kursları karşılaştırın veya program, sınav, kariyer ve öğrenme konularındaki ilgili rehberlere geçin.</p>
      </header>
      <div className="relatedTabs" role="tablist" aria-label="İlgili bağlantı konusunu seçin">
        {tabs.map((tab, index) => <button role="tab" aria-selected={selected === index} aria-controls="related-panel" className={selected === index ? "active" : ""} key={tab.label} onClick={() => setSelected(index)}>{tab.label}</button>)}
      </div>
      <div className="relatedGrid" id="related-panel" role="tabpanel">
        {active.links.map((link, index) => <Link href={link.href} key={link.title}><span>{String(index + 1).padStart(2, "0")}</span><div><strong>{link.title}</strong><small>{link.detail}</small></div><i>↗</i></Link>)}
      </div>
    </section>
  );
}
