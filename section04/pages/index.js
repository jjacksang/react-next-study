import Link from "next/link";
import { useRouter } from "next/router";

export default function Home() {
    const router = useRouter();
    const code = "KOR";

    const onClickButton = () => {
        router.push({
            pathname: "/country/[code]",
            query: { code: code },
        });
    };
    return (
        <div>
            Home Page
            <div onClick={onClickButton}>
                <button>Search 페이지로 이동</button>
            </div>
            <div>
                <Link href={"/search"}>Search</Link>&nbsp;
            </div>
            <div>
                <Link
                    href={{
                        pathname: "/country/[code]",
                        query: { code: code },
                    }}
                >
                    KOR바로가기
                </Link>
            </div>
        </div>
    );
}
