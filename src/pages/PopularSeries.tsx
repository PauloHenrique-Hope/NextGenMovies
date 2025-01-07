import { NavBar } from "@/components/NavBar";
import { PopularSeriesSlider } from "@/components/PopularSeriesSlider";

export function PopularSeries() {
  return (
    <section>
      <NavBar />
      <h2 className="font-semibold text-4xl text-center">Popular Series</h2>
      <PopularSeriesSlider />
    </section>
  );
}
