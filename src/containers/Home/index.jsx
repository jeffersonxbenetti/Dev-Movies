import api from '../../services/api.js'
import { Background } from './styles.js'

function Home() {

    async function getMovies() {
        const data = await api.get('/movie/popular')

        console.log(data);
    }

    getMovies()

    return (
        <Background $img='https://image.tmdb.org/t/p/original/9l1eZiJHmhr5jIlthMdJN5WYoff.jpg'>
            <h1>Home</h1>
            <p>Essa é a Home</p>
        </Background>
    )
}

export default Home