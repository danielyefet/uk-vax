import VaccinationProgress from '../components/VaccinationProgress';
import { getTotalFirstDoses, getTotalSecondDoses } from '../utils/vaccinations';

function Index({ totalVaccinations }) {
  const { firstDose, secondDose } = totalVaccinations;

  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <VaccinationProgress title="First Dose" total={firstDose} />
      <VaccinationProgress title="Second Dose" total={secondDose} />
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