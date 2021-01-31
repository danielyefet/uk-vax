import numeral from 'numeral';

function VaccinationProgress({ title, total, colour = 'text-yellow-400' }) {
    const totalPopulation = 66600000;
    const formatedTotalVacinations = numeral(total).format();
    const percentageVaccinated = `${((100 * total) / totalPopulation).toFixed(2)}`;
    const size = 70;

    return (
      <div>
        <h2 className={`text-center uppercase text-base font-bold p-3 text-gray-500`}>{title}</h2>
        <div className="relative">
          <p className={`absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 ${colour} font-bold text-xl`}>{percentageVaccinated}%</p>
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
              className={`w-full h-full stroke-current ${colour}`}
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
        <div className="flex justify-center">
          <svg className="w-4 inline mr-1.5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
            <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
          </svg>
          <p className="text-center text-gray-500 py-3">{formatedTotalVacinations}</p>
        </div>
      </div>
    );
  }

  export default VaccinationProgress;