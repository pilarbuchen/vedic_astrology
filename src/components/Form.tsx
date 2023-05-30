/* eslint-disable react-hooks/exhaustive-deps */
import React, {
    useState,
    useEffect,
} from 'react';
import CityAutoComplete from './CityAutoComplete';
import SignList from './ResultList';

interface FormSubmit {
    onSubmit: (data: {}) => void;
}

function Form({ onSubmit }: FormSubmit) {
    const [fixed, setFixed] = useState(true);
    const [search, setSearch] = useState(false);
    const [signs, setSigns] = useState(null);
    const [chart, setChart] = useState();
    const [timeZone, setTimeZone] =
        useState<number>(0);
    const [lat, setLat] = useState<number>(0);
    const [lng, setLng] = useState<number>(0);
    const [userInput, setUserInput] = useState({
        year: 0,
        month: 0,
        date: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
        settings: {
            observation_point: 'geocentric',
            ayanamsha: 'lahiri',
        },
    });

    const handleChange = (
        event: React.FormEvent
    ) => {
        setUserInput({
            ...userInput,
            [(event.target as HTMLInputElement).name]: (
                event.target as HTMLInputElement
            ).value,
        });
    };

    const data = {
        year: +userInput.year,
        month: +userInput.month,
        date: +userInput.date,
        hours: +userInput.hours,
        minutes: +userInput.minutes,
        seconds: +userInput.seconds,
        latitude: lat,
        longitude: lng,
        timezone: timeZone,
        settings: {
            observation_point:
                userInput.settings.observation_point,
            ayanamsha: userInput.settings.ayanamsha,
        },
    };

    const submitFormHandler = async (
        event: React.FormEvent<HTMLFormElement>
    ) => {
        event.preventDefault();
        onSubmit(setUserInput);
    };

    useEffect(() => {
        getAPI();
        getAPIChart();
    }, [search]);

    async function getAPI() {
        const response = await fetch(
            'http://localhost:5000/api/form',
            {
                method: 'post',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            }
        );
        if (!response.ok) {
            throw new Error(
                'Network response was not OK'
            );
        } else {
            let userData = await response.json();
            let userPlanets = await userData
                ?.output?.[1];

            let keys = [];
            for (let key in userPlanets) {
                if (userPlanets.hasOwnProperty(key))
                    keys.push(key);
            }
            let planetsArr: string[] = [];
            let signsArr: number[] = [];
            for (let i = 0; i < keys.length; i++) {
                // eslint-disable-next-line @typescript-eslint/no-unused-vars
                let setArrs =
                    (planetsArr.push(keys[i]),
                        signsArr.push(
                            userPlanets[keys[i]].current_sign
                        ));
            }

            let arrListPlantsSigns: {}[] = [];

            planetsArr.forEach(function(v, i) {
                let obj = {
                    planets: '',
                    signs: 0,
                    id: Math.floor(Math.random() * 100),
                };
                obj.planets = v;
                obj.signs = signsArr[i];
                arrListPlantsSigns.push(obj);
            });
            setSigns(arrListPlantsSigns);
        }
    }

    async function getAPIChart() {
        const response = await fetch(
            'http://localhost:5000/api/chart',
            {
                method: 'post',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            }
        );
        if (!response.ok) {
            throw new Error(
                'Network response was not OK'
            );
        } else {
            let userDataChart = await response.json();
            setChart(userDataChart.output);
        }
    }
    return (
        <form onSubmit={submitFormHandler}>
            <SignList
                signs={signs}
                chart={chart}
                search={false}
                fixed={false}
            />
            <CityAutoComplete
                timeZone={timeZone}
                setTimeZone={setTimeZone}
                lat={lat}
                lng={lng}
                setLat={setLat}
                setLng={setLng}
            />
            <div className="form-group">
                <label>Year: </label>
                <input
                    name="year"
                    value={userInput.year}
                    onChange={handleChange}
                    className="form-control"></input>
            </div>
            <div className="form-group">
                <label>Month: </label>
                <input
                    name="month"
                    value={userInput.month}
                    onChange={handleChange}
                    className="form-control"></input>
            </div>
            <div className="form-group">
                <label>Day: </label>
                <input
                    name="date"
                    value={userInput.date}
                    onChange={handleChange}
                    className="form-control"></input>
            </div>
            <div className="form-group">
                <label>Hour: </label>
                <input
                    name="hours"
                    value={userInput.hours}
                    onChange={handleChange}
                    className="form-control"></input>
            </div>
            <div className="form-group">
                <label>Minute: </label>
                <input
                    name="minutes"
                    value={userInput.minutes}
                    onChange={handleChange}
                    className="form-control"></input>
            </div>
            <div className="form-group">
                <label>Second: </label>
                <input
                    name="seconds"
                    value={userInput.seconds}
                    onChange={handleChange}
                    className="form-control"></input>
            </div>
            <br />
            <button
                type="submit"
                className="btn btn-primary"
                onClick={() => setSearch(!search)}>
                Submit
            </button>
        </form>
    );
}

export default Form;
