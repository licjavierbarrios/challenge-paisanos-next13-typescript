type Props = {
    params: {
        id: string;
    }
}

type Movie = {
	_id: string;
	name: string;
	genre: string;
	duration: number;
	rating: number;
	views: number;
	coverImage: string;
	trailerImage: string;
};

async function getMovieData(id: string) {
	const res = await fetch(`https://paisa-challange.herokuapp.com/api/v1/paisaflix/movies/${id}`);
	const {data}: { success: boolean; data: Movie } = await res.json();
	return data;
}

const MoviePage = async( {params}: Props ) => {
    const data = await getMovieData(params.id);
    return (

        <div>
            <h1>{data.name}</h1>
            <img src={data.coverImage} alt="cover" />
            <h3>Trailer</h3>
            <img src={data.trailerImage} alt="trailer" />
            
        </div>
    )
}

export default MoviePage