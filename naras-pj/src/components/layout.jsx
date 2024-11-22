import { useNavigate } from "react-router-dom";
import style from "./layout.module.css";

export default function Layout({ children }) {
    const nav = useNavigate();

    const onClickHeader = () => {
        nav("/");
    };
    return (
        <div>
            <header className={style.header} onClick={onClickHeader}>
                🌍 NARAS
            </header>
            <main className={style.main}>{children}</main>
        </div>
    );
}
