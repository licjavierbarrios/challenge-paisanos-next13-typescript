

type Trailer = {
	_id: string;
	trailerImage: string;
};

async function getTrailersData() {
	const res = await fetch("https://paisa-challange.herokuapp.com/api/v1/paisaflix/trailers");
	const {data}: { success: boolean; data: Trailer[] } = await res.json();

	return data;
}

const Trailers = async () => {
	const data = await getTrailersData();

	return (
		<div>
			{data.map((trailer) => (
				<img key={trailer._id} src={trailer.trailerImage} alt="trailer" />
			))}
			
		</div>
	);
};

export default Trailers;