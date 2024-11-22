import style from "./Search.module.css";

import { useSearchParams } from "react-router-dom";

import { fetchSearchlResults } from "../api";
import { useEffect, useState } from "react";
import Searchbar from "../components/Searchbar";
import CountryList from "../components/CountryList";

export default function Search() {
    const [searchParams, setSearchParams] = useSearchParams();
    const q = searchParams.get("q");

    const [countries, setCountries] = useState([]);

    const setInitData = async () => {
        const data = await fetchSearchlResults(q);
        setCountries(data);
    };

    useEffect(() => {
        setInitData();
    }, [q]);

    return (
        <div className={style.container}>
            <Searchbar q={q} />
            <div>
                <b>{q}</b> 검색 결과
            </div>
            <CountryList countries={countries} />
        </div>
    );
}
