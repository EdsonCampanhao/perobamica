import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

const GaleryOfPages=(props)=>{
    return(
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
    )
}
export default GaleryOfPages