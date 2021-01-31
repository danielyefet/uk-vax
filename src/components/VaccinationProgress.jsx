import numeral from 'numeral';

function VaccinationProgress({ title, total, color = 'yellow-400' }) {
    const totalPopulation = 66600000;
    const formatedTotalVacinations = numeral(total).format();
    const percentageVaccinated = `${((100 * total) / totalPopulation).toFixed(2)}`;
    const size = 70;

    return (
      <div>
        <h2 className={`text-center uppercase text-base font-bold p-3 text-${color}`}>{title}</h2>
        <div className="relative">
          <p className="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 text-gray-500 font-bold text-xl">{percentageVaccinated}%</p>
          <svg width="150" height="150" className="relative">
            <circle
              style={{ transform: 'translate(5px, 5px)' }}
              className="w-full h-full stroke-current text-gray-200"
              fill="none"
              strokeWidth="10"
              strokeLinecap="round"
              cx={size}
              cy={size}
              r={size}
            />
            <circle
              style={{ transform: 'translate(5px, 5px)' }}
              className={`w-full h-full stroke-current text-${color}`}
              strokeDasharray={440}
              strokeDashoffset={440 - (440 * percentageVaccinated) / 100}
              fill="none"
              strokeWidth="10"
              strokeLinecap="round"
              cx={size}
              cy={size}
              r={size}
            />
          </svg>
        </div>
        <p className="text-center text-gray-500 p-3">{formatedTotalVacinations}</p>
      </div>
    );
  }

  export default VaccinationProgress;