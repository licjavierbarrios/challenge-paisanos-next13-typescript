
import Trailers from "../components/Trailers";
import Featured from "../components/Featured";
import { Hero } from "../components/Hero";
import styles from "./page.module.css";


export default function Home() {
	return (
		<main className={styles.container}> 
			<Hero />
			<Trailers />
			<Featured />
		</main>
	);
}
