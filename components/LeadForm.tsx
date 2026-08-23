"use client";

import { FormEvent, useState } from "react";

export function LeadForm({ city }: { city: string }) {
  const [sent, setSent] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSent(true);
  }

  return (
    <form className="leadForm" onSubmit={handleSubmit} aria-label="Ücretsiz seviye tespit formu">
      <div className="formHeading">
        <span className="formStep">01</span>
        <div>
          <p className="eyebrow">Sana uygun programı bulalım</p>
          <h2>Ücretsiz seviye tespit sınavına katıl</h2>
        </div>
      </div>

      <div className="fieldGrid">
        <label>
          <span>Ad soyad</span>
          <input name="name" autoComplete="name" placeholder="Adınız ve soyadınız" required />
        </label>
        <label>
          <span>Telefon</span>
          <input name="phone" type="tel" autoComplete="tel" placeholder="05__ ___ __ __" required />
        </label>
        <label>
          <span>Mevcut seviye</span>
          <select name="level" defaultValue="">
            <option value="" disabled>Seviyenizi seçin</option>
            <option>Başlangıç</option>
            <option>Orta</option>
            <option>İleri</option>
            <option>Bilmiyorum</option>
          </select>
        </label>
        <label>
          <span>Kurs türü</span>
          <select name="course" defaultValue="">
            <option value="" disabled>Programı seçin</option>
            <option>Genel İngilizce</option>
            <option>İş İngilizcesi</option>
            <option>Sınav hazırlık</option>
            <option>Çocuklar için İngilizce</option>
          </select>
        </label>
      </div>

      <button className="primaryButton" type="submit">
        <span>{sent ? "Talebin alındı" : "Ücretsiz sınavı planla"}</span>
        <span aria-hidden="true">↗</span>
      </button>
      <p className="formNote">
        {sent ? `${city} ekibimiz kısa süre içinde seni arayacak.` : "2 dakika sürer · Kredi kartı gerekmez"}
      </p>
    </form>
  );
}
