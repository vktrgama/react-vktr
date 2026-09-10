import React from 'react';
import { useQuery, gql } from '@apollo/client';
import Loader from '../Common/Loader/loader'
import Slider from '../NetflixSlider'

/** MOVIES gql query to retreive upcominfMoves  */
//TODO: move to a separate file for gql queries
export const MOVIES = gql`
  query getUpcomingMovies {
    upcomingMovies {
      id
      original_title
      overview
      vote_average
      poster_path
      release_date
    }
  }
`;

function NewMovies () {
    const { loading, error, data } = useQuery(MOVIES);

    return (
        <>
            <Loader error={error} loading={loading} data={data}>
            <Slider>
                {data?.upcomingMovies?.map((movie, index) => (
                    <Slider.Item movie={movie} key={movie.id}>item1</Slider.Item>
                ))}
            </Slider>
            </Loader>
        </>
    )
}

export default NewMovies;