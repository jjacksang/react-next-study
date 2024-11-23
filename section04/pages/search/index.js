import { fetchSearchlResults } from "@/api";
import SubLayout from "@/components/SubLayout";

export default function Search({ countries }) {
    return (
        <div>
            {countries.map((country) => (
                <div key={country.code}>{country.commonName}</div>
            ))}
        </div>
    );
}

Search.Layout = SubLayout;

export const getServerSideProps = async (context) => {
    // 1. 검색 결과 API 노출
    // 2. Props 리턴
    const { q } = context.query;

    let countries = [];
    if (q) {
        countries = await fetchSearchlResults(q);
    }
    return {
        props: { countries },
    };
};
