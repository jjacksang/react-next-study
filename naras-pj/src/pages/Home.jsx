import style from "./Home.module.css";

import { useState, useEffect } from "react";

import { fetchCountries } from "../api";
import CountryList from "../components/CountryList";
import Searchbar from "../components/Searchbar";

export default function Home() {
    const [countreis, setCountries] = useState([]);

    const setInitData = async () => {
        const data = await fetchCountries();
        setCountries(data);
    };

    useEffect(() => {
        setInitData();
    }, []);

    return (
        <div className={style.container}>
            <Searchbar />
            <CountryList countries={countreis} />
        </div>
    );
}
