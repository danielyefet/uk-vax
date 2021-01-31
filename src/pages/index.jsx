import VaccinationProgress from '../components/VaccinationProgress';
import { getTotalFirstDoses, getTotalSecondDoses } from '../utils/vaccinations';
import Head from 'next/head';

function Index({ totalVaccinations }) {
    const { firstDose, secondDose } = totalVaccinations;

    return (
        <>
            <Head>
                <title>COVID - Percentage Vaccinated - United Kingdom</title>
            </Head>
            <div className="m-auto max-w-lg p-3">
                <h1 className="text-center text-3xl pt-6 pb-3 text-gray-600">Coronavirus Vaccine Status (UK)</h1>
                <section className="grid grid-cols-1 md:grid-cols-2 min-h-full">
                    <div className="flex justify-center p-3">
                        <VaccinationProgress colour="text-yellow-400" title="First Dose" total={firstDose} />
                    </div>
                    <div className="flex justify-center p-3">
                        <VaccinationProgress colour="text-green-400" title="Second Dose" total={secondDose} />
                    </div>
                </section>
            </div>
        </>
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
        revalidate: 10,
    }
}

export default Index;