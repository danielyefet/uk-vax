import numeral from 'numeral';
import ProgressBar from './ProgressBar';

function VaccinationProgress({ title, total }) {
    const totalPopulation = 66600000;
    const formatedTotalVacinations = numeral(total).format();
    const percentageVaccinated = `${((100 * total) / totalPopulation).toFixed(2)}%`;
  
    return (
      <div className="text-gray-900 p-3 container mx-auto">
        <ProgressBar label={title} percentage={percentageVaccinated} />
        <p className="text-sm">Total Vacinations: {formatedTotalVacinations}</p>
      </div>
    );
  }

  export default VaccinationProgress;