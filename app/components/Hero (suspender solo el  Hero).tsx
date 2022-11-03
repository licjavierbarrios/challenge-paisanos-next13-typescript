import { Suspense } from "react";
import Loading from "../(index)/loading";

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
	await new Promise((resolve) => setTimeout(resolve, 4000));
	const res = await fetch("https://paisa-challange.herokuapp.com/api/v1/paisaflix/hero");
	const {data}: { success: boolean; data: Hero } = await res.json();

	return data;
}

const HeroContainer = async () => {
	const data = await getHeroData();
	console.log(data);
	return (
		<div>
			<h1>{data.name}</h1>
		</div>
	);
};

const Hero = () => {
	return (
		<Suspense fallback={<div>Loading...</div>}>
			<HeroContainer />
		</Suspense>
	);
};

export default Hero;
