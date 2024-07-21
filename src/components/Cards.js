import { Style } from "@mui/icons-material"
import { 
  Card, 
  CardActions, 
  CardContent, 
  CardMedia, 
  Typography 
  } from "@mui/material"

  import style from './Cards.module.css'

const Cards = ({image, title, subtitle, actions }) => {
    return (
        <Card>
            <CardMedia
                className={style.card}
                image={image}
                title={title}
                />
                
            <CardContent>
                <Typography variant="h5" component='h2'>
                    {title}
                </Typography>
                <Typography variant="h5" component='h2'>
                    {subtitle}
                </Typography>
            </CardContent>
            {
                actions
                ? (
                    <CardActions>
                        {actions}
                    </CardActions>
                ) : null
            }
            
        </Card>
    )   
}

export default Cards