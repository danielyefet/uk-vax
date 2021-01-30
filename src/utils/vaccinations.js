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

export async function getTotalFirstDoses() {
    return getData({ latestBy: 'cumPeopleVaccinatedFirstDoseByPublishDate' });
}

export async function getTotalSecondDoses() {
    return getData({ latestBy: 'cumPeopleVaccinatedSecondDoseByPublishDate' });
}

export default { getTotalFirstDoses, getTotalFirstDoses }