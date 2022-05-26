import Link from "next/link";
import { useRouter } from "next/router";
import styles from "./NavBAr.module.css"; // css 모듈

export default function NavBar() {
    const router = useRouter();
    return (
        /* className={JS object의 properties 형식}*/
        <nav>
            <Link href="/"><a className={router.pathname === '/' ? styles.active : ""}>Home</a></Link>
            <Link href="/about"><a className={router.pathname === '/about' ? styles.active : ""}>About</a></Link>
        </nav>
    )
}