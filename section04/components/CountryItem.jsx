import { useRouter } from "next/router";
import style from "./CountryItem.module.css";
import Image from "next/image";

export default function CountryItem({
    code,
    commonName,
    flagEmoji,
    flagImg,
    population,
    region,
    capital,
}) {
    const router = useRouter();

    const onClick = () => {
        router.push(`/country/${code}`);
    };
    return (
        <div className={style.container} onClick={onClick}>
            <Image
                className={style.flag_img}
                src={flagImg}
                width={100}
                height={100}
            />
            <div className={style.content}>
                <div className={style.name}>
                    {flagEmoji} {commonName}
                </div>
                <div>지역 : {region}</div>
                <div>수도 : {capital.join(",")}</div>
                <div>인구 : {population}</div>
            </div>
        </div>
    );
}
