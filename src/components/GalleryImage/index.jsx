import React from 'react'

export default function GalleryImage({data}) {
  return (
    <div className='gallery-image'>
      <img src={data.images.sm} />
    </div>
  )
  // return (
  //   <img
  //     src={data.images.md}
  //     alt={data.name}
  //     className="card-img-top"
  //     style={{
  //       width: "100%",
  //       height: "250px",
  //       objectFit: "contain"
  //     }}
  //   />
  // );
};