import { fetchCountry } from "@/api";
import { useRouter } from "next/router";

export default function Country({ country }) {
    const router = useRouter();
    const { code } = router.query;

    return (
        <div>
            {country.commonName} {country.officialName}
        </div>
    );
}

export const getServerSideProps = async (context) => {
    const { code } = context.params;

    let country = null;

    if (code) {
        country = await fetchCountry(code);
    }

    return {
        props: { country },
    };
};
