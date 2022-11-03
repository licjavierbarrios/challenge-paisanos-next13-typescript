import Image from "next/image";
import styles from "./Hero.module.css";
type Hero = {
	_id: string;
	name: string;
	genre: string;
	duration: number;
	rating: number;
	views: number;
	coverImage: string;
	trailerImage: string;
};

async function getHeroData() {
	const res = await fetch("https://paisa-challange.herokuapp.com/api/v1/paisaflix/hero");
	const { data }: { success: boolean; data: Hero } = await res.json();
	return data;
}

const Hero = async () => {
	const data = await getHeroData();

	return (
		<div className={styles.container} >
			<div className={styles.content}>
				<div>
					<h1>{data.name}</h1>
					<p className={styles.rating}> {String("★").repeat(data.rating).padEnd(5, "☆")} </p>
				</div>
				<p className={styles.description} >
					Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus sint voluptatum magni
					iure culpa saepe illo quidem eos dolore! Quibusdam facilis numquam quas aut assumenda
					ducimus officiis repudiandae repellat vitae!
				</p>
				<ul>
					<li>Genre: {data.genre}</li>
					<li>Duration: {data.duration} minutes </li>
					<li>Rating: {data.rating} </li>
				</ul>
			</div>
			<Image className={styles.cover} src={data.coverImage} alt={data.name} fill />
		</div>
	);
};

export default Hero;
