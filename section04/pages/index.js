import { fetchCountries } from "@/api";
import CountryList from "@/components/CountryList";
import Searchbar from "@/components/Searchbar";

export default function Home({ countries }) {
    return (
        <>
            <Searchbar />
            <CountryList countries={countries} />
        </>
    );
}

// SSG
export const getStaticProps = async () => {
    const countries = await fetchCountries();

    return {
        props: {
            countries,
        },
    };
};
