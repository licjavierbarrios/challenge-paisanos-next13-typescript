import Link from "next/link";

type Featured = {
	_id: string;
	name: string;
	genre: string;
	duration: number;
	rating: number;
	views: number;
	coverImage: string;
	trailerImage: string;
};

async function getFeturedData() {
	const res = await fetch("https://paisa-challange.herokuapp.com/api/v1/paisaflix/movies");
	const { data }: { success: boolean; data: Featured[] } = await res.json();

	return data;
}

const Featured = async () => {
	const data = await getFeturedData();
	return (
		<div>
			{data.map((featured) => (
				<Link key={featured._id} href={`/${featured._id}`} >
					<img  src={featured.coverImage} alt="featured" />
				</Link>
			))}
		</div>
	);
};

export default Featured;
