import Link from "next/link";
import type { City } from "@/lib/cities";
import { LeadForm } from "./LeadForm";
import { TeachersSection } from "./TeachersSection";
import { CourseTypesSection } from "./CourseTypesSection";
import { ReviewsPlatformSection } from "./ReviewsPlatformSection";
import { DistrictCoursesSection } from "./DistrictCoursesSection";
import { CefrProgramsSection } from "./CefrProgramsSection";
import { EnrollmentProcessSection } from "./EnrollmentProcessSection";
import { PricingSection } from "./PricingSection";
import { RelatedLinksSection } from "./RelatedLinksSection";

const Shield = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M12 3 5 6v5c0 4.7 2.8 8.5 7 10 4.2-1.5 7-5.3 7-10V6l-7-3Z" />
    <path d="m9 12 2 2 4-5" />
  </svg>
);

export function CityHero({ city }: { city: City }) {
  const stats = [
    { value: city.studentCount, label: "aktif öğrenci" },
    { value: city.instructorCount, label: "uzman eğitmen" },
    { value: city.campusCount, label: "şehirde erişim" },
    { value: city.successRate, label: "hedef başarı oranı" },
  ];

  const trust = ["MEB onaylı program", "Uluslararası sertifika", "4,9 / 5 öğrenci puanı", "İlk 14 gün iade garantisi"];

  return (
    <main>
      <header className="siteHeader">
        <Link className="brand" href="/istanbul" aria-label="Dil Atölyesi ana sayfa">
          <span className="brandMark">d/a</span>
          <span>Dil Atölyesi</span>
        </Link>
        <nav aria-label="Ana menü">
          <a href="#programlar">Programlar</a>
          <a href="#egitmenler">Eğitmenler</a>
          <a className="headerCta" href="#seviye-testi">Seviye testi</a>
        </nav>
      </header>

      <section className="hero" aria-labelledby="page-title">
        <div className="heroCopy">
          <p className="locationTag"><span>●</span> {city.locative} yüz yüze ve online</p>
          <h1 id="page-title">
            {city.name} İngilizce Kursu
            <em>Konuşmaya başladığın yer.</em>
          </h1>
          <p className="lede">
            {city.locative} yetişkinler, gençler ve profesyoneller için İngilizce eğitimi veren; seviyene, hedeflerine ve günlük programına göre şekillenen dil okuludur.
          </p>
          <div className="microProof">
            <div className="avatars" aria-hidden="true"><i>EC</i><i>MK</i><i>SA</i></div>
            <p><strong>Bu ay 318 kişi başladı.</strong><br />Sıradaki sınıfta yerini ayır.</p>
          </div>
        </div>

        <div id="seviye-testi"><LeadForm city={city.name} /></div>
      </section>

      <section className="proofPanel" id="neden-biz" aria-label="Başarı ve güven göstergeleri">
        <div className="statsRow">
          {stats.map((stat) => (
            <div className="stat" key={stat.label}>
              <strong>{stat.value}</strong>
              <span>{stat.label}</span>
            </div>
          ))}
        </div>
        <div className="trustRow">
          {trust.map((item) => (
            <div className="trustItem" key={item}><Shield /><span>{item}</span></div>
          ))}
        </div>
      </section>
      <CourseTypesSection city={city.name} />
      <ReviewsPlatformSection city={city.name} />
      <DistrictCoursesSection city={city.name} />
      <TeachersSection city={city.name} />
      <CefrProgramsSection />
      <EnrollmentProcessSection city={city.name} />
      <PricingSection city={city.name} />
      <RelatedLinksSection city={city.name} />
    </main>
  );
}
