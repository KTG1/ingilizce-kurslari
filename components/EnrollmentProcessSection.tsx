"use client";

import { useState } from "react";

const steps = [
  { title: "Seviye tespiti", short: "15 dakikalık ücretsiz analiz", body: "Kısa online test ve danışman görüşmesiyle mevcut seviyenizi, konuşma rahatlığınızı ve öğrenme hedefinizi birlikte belirliyoruz.", action: "Ücretsiz testi başlat", meta: "Sonuç aynı gün içinde hazır" },
  { title: "Kur seçimi", short: "Doğru başlangıç noktasını bulun", body: "CEFR sonucunuza göre A1'den C2'ye kadar uygun kuru ve hedefinize en yakın kurs türünü seçiyoruz.", action: "Kur programlarını incele", meta: "A1–C2 ve Speaking Club seçenekleri" },
  { title: "Program planı", short: "Takviminize uyan sınıfı seçin", body: "İlçe, yüz yüze veya online eğitim tercihinizle birlikte hafta içi, akşam ya da hafta sonu programınızı netleştiriyoruz.", action: "Program seçeneklerini gör", meta: "Esnek sınıf ve telafi seçenekleri" },
  { title: "Kayıt", short: "Yerinizi güvenle ayırın", body: "Seçtiğiniz sınıfı onaylıyor, kayıt bilgilerinizi tamamlıyor ve ders materyallerinize erişiminizi açıyoruz.", action: "Kayıt için görüş", meta: "Şeffaf ücret ve iade koşulları" },
  { title: "Derse başlama", short: "İlk günden konuşmaya başlayın", body: "Eğitmeniniz ve sınıfınızla tanışın; kişisel öğrenme planınız ve ilk ilerleme hedefinizle programa başlayın.", action: "İlk adımı at", meta: "Platform ve konuşma kulübü erişimi" },
];

export function EnrollmentProcessSection({ city }: { city: string }) {
  const [active, setActive] = useState(0);
  const step = steps[active];

  return (
    <section className="enrollmentSection" id="kayit-sureci" aria-labelledby="enrollment-title">
      <header className="enrollmentHeader">
        <p className="sectionKicker">Beş adımda sınıfa katılın</p>
        <h2 id="enrollment-title">{city} İngilizce Kursu Kayıt Süreci</h2>
        <p>Seviyenizi öğrenmekten ilk dersinize kadar her aşama açık ve kolay ilerler. Hedefinizi anlatın; doğru sınıfı ve programı birlikte planlayalım.</p>
      </header>

      <div className="enrollmentExperience">
        <div className="processVisual" aria-label={`Kayıt süreci: ${active + 1}. adım`}>
          <div className="processOrbit orbitOne" /><div className="processOrbit orbitTwo" />
          <div className="processCenter"><span>{String(active + 1).padStart(2, "0")}</span><strong>{step.title}</strong><small>{step.short}</small></div>
          <div className="processTrack">
            {steps.map((item, index) => <button key={item.title} className={index === active ? "active" : index < active ? "done" : ""} onClick={() => setActive(index)} aria-label={`${index + 1}. adım: ${item.title}`}><span>{index < active ? "✓" : index + 1}</span></button>)}
          </div>
          <p>{active + 1} / {steps.length} · Ortalama kayıt süresi 1 iş günü</p>
        </div>

        <div className="processSteps">
          {steps.map((item, index) => (
            <article className={active === index ? "active" : ""} key={item.title}>
              <button onClick={() => setActive(index)} aria-expanded={active === index}>
                <span>Adım {String(index + 1).padStart(2, "0")}</span><strong>{item.title}</strong><i>{active === index ? "−" : "+"}</i>
              </button>
              {active === index && <div className="processDetail"><p>{item.body}</p><small><span>✓</span>{item.meta}</small><a href={index === 1 ? "#seviyeler" : index === 2 ? "#ilceler" : "#seviye-testi"}>{item.action}<span>↗</span></a></div>}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
