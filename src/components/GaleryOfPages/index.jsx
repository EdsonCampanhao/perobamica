import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import './GaleryOfPages.css'

const GaleryOfPages=(props)=>{
    return(
        <ImageList variant="masonry" id='image__list' cols={2} gap={6} >
                        {props.pics.map((item, index) => (
                            <ImageListItem key={index}>
                                <img className='image__pic'
                                    src={item.src}
                                    alt={item.title}
                                    loading="lazy"
                                />
                            </ImageListItem>
                        ))}
                    </ImageList>
    )
}
export default GaleryOfPages