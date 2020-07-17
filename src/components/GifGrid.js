import React from 'react';
import GifGridItem from './GifGridItem';
import {useFetchGifs} from '../hooks/useFetchGifs';

const GifGrid = ({category}) => {
  const {data:images, loading} = useFetchGifs(category);

  return (
    <>
      <h3>{category}</h3>
      {loading && <p>Loading</p>}
      {<div className="card-grid">
        <ol>
          {
            images.map((image) => (
              <GifGridItem key={image.id} {...image} />
            ))
          }
        </ol>
      </div>}
    </>
  );
}

export default GifGrid;