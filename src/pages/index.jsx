import VaccinationProgress from '../components/VaccinationProgress';

function Index({ totalVaccinations }) {
  const { firstDose, secondDose } = totalVaccinations;

  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <VaccinationProgress title="First Dose" total={firstDose} />
      <VaccinationProgress title="Second Dose" total={secondDose} />
    </section>
  );
}

async function getData({ latestBy }) {
  let url = 'https://coronavirus.data.gov.uk/api/v1/data';
  url += '?filters=areaName=United Kingdom;areaType=overview';
  url += `&latestBy=${latestBy}`;
  url += `&structure={"date":"date","value":"${latestBy}"}`;

  try {
    const response = await fetch(url);
    const json = await response.json();
    return json?.data[0]?.value;
  } catch (error) {
    console.error(error);
  }
}

export async function getStaticProps() {
  const firstDose = await getData({ latestBy: 'cumPeopleVaccinatedFirstDoseByPublishDate' });
  const secondDose = await getData({ latestBy: 'cumPeopleVaccinatedSecondDoseByPublishDate' });

  return {
    props: {
      totalVaccinations: {
        firstDose,
        secondDose,
      },
    },
    revalidate: 1,
  }
}

  export default Index;