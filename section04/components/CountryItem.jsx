import { useRouter } from "next/router";
import style from "./CountryItem.module.css";

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
            <img className={style.flag_img} src={flagImg} />
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
