interface SignsProps {
  signs: {
    planets: string;
    signs: string | number;
    id: number;
  }[];
  chart: string;
  search: boolean;
}

function ResultList({
  signs,
  chart,
  search,
}: SignsProps) {
  const renderList = signs?.map((item) => (
    <li key="{item.id}">
      {item.planets + ' : ' + item.signs}
    </li>
  ));

  if (search) {
    for (const [key, value] of Object.entries(
      signs
    )) {
      if (value.signs === 1) {
        value.signs = 'Aries';
      } else if (value.signs === 2) {
        value.signs = 'Taurus';
      } else if (value.signs === 3) {
        value.signs = 'Gemini';
      } else if (value.signs === 4) {
        value.signs = 'Cancer';
      } else if (value.signs === 5) {
        value.signs = 'Leo';
      } else if (value.signs === 6) {
        value.signs = 'Virgo';
      } else if (value.signs === 7) {
        value.signs = 'Libra';
      } else if (value.signs === 8) {
        value.signs = 'Scorpio';
      } else if (value.signs === 9) {
        value.signs = 'Sagittarius ';
      } else if (value.signs === 10) {
        value.signs = 'Capricorn';
      } else if (value.signs === 11) {
        value.signs = 'Aquarius';
      } else if (value.signs === 12) {
        value.signs = 'Pisces';
      }
    }
  }

  return (
    <div>
      {search && chart ? (
        <ul>
          <img
            src={chart}
            alt={'logo'}
          />
          {renderList}
        </ul>
      ) : (
        <></>
      )}
    </div>
  );
}

export default ResultList;
