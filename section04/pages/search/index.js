import { fetchSearchlResults } from "@/api";
import SubLayout from "@/components/SubLayout";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function Search() {
    const router = useRouter();
    const { q } = router.query;

    const [countries, setCountries] = useState([]);

    const setData = async () => {
        const data = await fetchSearchlResults(q);
        setCountries(data);
    };

    useEffect(() => {
        if (q) {
            setData();
        }
    }, [q]);

    return (
        <div>
            {countries.map((country) => (
                <div key={country.code}>{country.commonName}</div>
            ))}
        </div>
    );
}

Search.Layout = SubLayout;
