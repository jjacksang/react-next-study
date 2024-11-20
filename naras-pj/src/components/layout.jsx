import style from "./layout.module.css";

export default function Layout({ children }) {
    return (
        <div>
            <header className={style.header}>🌍 NARAS</header>
            <main className={style.main}>{children}</main>
        </div>
    );
}
