import VaccinationProgress from '../components/VaccinationProgress';
import { getTotalFirstDoses, getTotalSecondDoses } from '../utils/vaccinations';

function Index({ totalVaccinations }) {
  const { firstDose, secondDose } = totalVaccinations;

  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-4 min-h-full">
      <div className="flex justify-center p-3">
        <VaccinationProgress color="yellow-400" title="First Dose" total={firstDose} />
      </div>
      <div className="flex justify-center p-3">
        <VaccinationProgress color="green-400" title="Second Dose" total={secondDose} />
      </div>
    </section>
  );
}

export async function getStaticProps() {
  return {
    props: {
      totalVaccinations: {
        firstDose: await getTotalFirstDoses(),
        secondDose: await getTotalSecondDoses(),
      },
    },
    revalidate: 1,
  }
}

export default Index;