import { useState, useEffect } from 'react';

import api from '../../services/api';
import { Background, Container, ContainerButtons, Info, Poster } from './styles';
import Button from '../../components/Button';


function Movies() {
    const [movie, setMovie] = useState()


    useEffect(() => {
        async function getNewMovies() {
            const {
                data: { results }
            } = await api.get('/movie/popular')


            setMovie(results[1])
        }

        getNewMovies()
    }, [])


    return (
        <>
            {movie && (
                <Background
                    img={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}>

                    <Container>
                        <Info>
                            <h1>{movie.title}</h1>
                            <p>{movie.overview}</p>
                            <ContainerButtons>
                                <Button red={true}>Assista Agora</Button>
                                <Button red={false}>Assista o Trailer</Button>
                            </ContainerButtons>
                        </Info>
                        <Poster>
                            <img alt='poster-filme' src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} />
                        </Poster>
                    </Container>
                </Background>
            )}
        </>
    )
}

export default Movies

