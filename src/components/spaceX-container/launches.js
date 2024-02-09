import React, {useEffect, useState} from 'react';
import {launchService} from "../../services/launch.service";
import {Launch} from "./launch";

const Launches = () => {
    const [launches, setLaunches] = useState([]);

    useEffect(() => {
        launchService.getAll().then(({data}) => {
            const filteredData = data.filter(item => item.launch_year !== '2020');
            setLaunches(filteredData)
        })
    }, []);

    return (
        <div>
            {launches.map((launch) => <Launch key={launch.launch_date_unix} launch={launch}/>)}
        </div>
    );
};

export {Launches};