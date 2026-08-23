import { CityHero } from "@/components/CityHero";
import { getCity } from "@/lib/cities";

export default function Home() {
  return <CityHero city={getCity("istanbul")} />;
}
