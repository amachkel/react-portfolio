import React from 'react'
import { v4 as uuidv4 } from 'uuid'
import '../imagesArray'
import images from '../imagesArray'
export default function ProjectTile() {
  return (
    <>
      {images.map((obj, i) => (
        <div key={uuidv4()} className="img-wrapper">
          <img src={obj.image} alt="project" />
          <div className="content">
            {obj.desc}
            <br />
            {obj.link}
          </div>
        </div>
      ))}
    </>
  )
}
