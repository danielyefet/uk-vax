import numeral from 'numeral';
import ProgressBar from '../components/ProgressBar';

function Index({ totalVaccinations }) {

  const totalPopulation = 66600000;
  const formatedTotalVacinations = numeral(totalVaccinations).format();
  const percentageVaccinated = `${((100 * totalVaccinations) / totalPopulation).toFixed(2)}%`;

  return (
    <div className="text-gray-900 p-3 container mx-auto">
      <ProgressBar label="Progress" percentage={percentageVaccinated} />
      <p className="text-sm">Total Vacinations: {formatedTotalVacinations}</p>
    </div>
  );
}

export async function getStaticProps() {
  let days = [];

  try {
    const response = await fetch('https://api.coronavirus.data.gov.uk/v2/data?areaType=overview&metric=cumPeopleVaccinatedFirstDoseByPublishDate&format=json');
    const { body } = await response.json();
    days = body;
  } catch (error) {
    console.error(error);
  }

  const lastDay = days[days.length - 1];
  const totalVaccinations = lastDay.cumPeopleVaccinatedFirstDoseByPublishDate;

  return {
    props: {
      totalVaccinations,
    },
    revalidate: 1,
    fallback: true,
  }
}

  export default Index;