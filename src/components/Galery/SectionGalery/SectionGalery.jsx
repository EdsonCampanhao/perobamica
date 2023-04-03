import React, { useState } from 'react'
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import './SectionGalery.css'


const SectionGalery = (props) => {


    const activeGalery = (evento) => {
        setGalery(imageList)
       
        evento.target.nextElementSibling.scrollIntoView({ behavior: 'smooth' });
        

    }

    const imageList=()=>{
        return (<div className='imageList '>
                    <ImageList variant="masonry" cols={2} gap={6} >
                        {props.pics.map((item, index) => (
                            <ImageListItem key={index}>
                                <img
                                    src={item.src}
                                    alt={item.title}
                                    loading="lazy"
                                />
                            </ImageListItem>
                        ))}
                    </ImageList>
                </div> )
    }

    const [galery,setGalery ]=useState('')


    return (

        <>
            <div className='galery__label' onClick={activeGalery} style={{ backgroundImage: `url(${props.label})` }}>
                <h2 className='galery__title' style={{pointerEvents:'none'}}>{props.labelTitle}</h2>
            </div>
            <div className='galery__pics'>
               {galery}
            </div>
        </>
    )
}

export default SectionGalery