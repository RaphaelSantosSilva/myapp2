"use client"
import Default from "@/templates/Default"
import { Box, Card, Avatar, CardMedia, Container, Grid, Typography, Chip, CardHeader } from "@mui/material"
import Carousel from "react-material-ui-carousel"
import style from './product.module.css'

const Product = () => {
    return (
        <Default>
            <Container maxWidth='lg'>
                <Grid container spacing={3}>
                    <Grid item xs={8}>
                        <Box className={style.box}>
                            <Carousel autoPlay={false} animation="slide">
                                <Card className={style.card}>
                                    <CardMedia 
                                        className={style.cardMedia}
                                        image={'https://blog.br.playstation.com/tachyon/sites/4/2023/10/6fd08b309a6ed2a3b70baa64b088f5104c538e2e.png'}
                                        title='Playstation 5'
                                    />
                                </Card>

                                <Card className={style.card}>
                                    <CardMedia 
                                        className={style.cardMedia}
                                        image={'https://i.zst.com.br/thumbs/12/39/f/1190230696.jpg'}
                                        title='Controle 5'
                                    />
                                </Card>

                                <Card className={style.card}>
                                    <CardMedia 
                                        className={style.cardMedia}
                                        image='https://m.media-amazon.com/images/I/51rzWirXO4L.jpg'
                                        title='Console PS5'
                                    />
                                </Card>
                            </Carousel>
                        </Box>

                        <Box className={style.box} textAlign='left'>
                            <Typography component='span' variant="caption">
                                Publicado 16 de junho de 2024
                            </Typography>
                            <Typography component='h4' variant="h4" className={style.productName}>
                                Playstation 5
                            </Typography>
                            <Typography component='h4' variant="h4" className={style.price}>
                                R$ 4.000,00
                            </Typography>
                            <Chip label='Categoria' />
                        </Box>

                        <Box className={style.box} textAlign='left'>
                            <Typography className={style.descricaoTitle} component='h6' variant="h6">
                                Descrição
                            </Typography>
                            <Typography component='p' variant="body2">
                                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo. Nemo enim ipsam voluptatem, quia voluptas sit, aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos, qui ratione voluptatem sequi nesciunt, neque porro quisquam est, qui dolorem ipsum, quia dolor sit, amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt, ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit, qui in ea voluptate velit esse, quam nihil molestiae consequatur, vel illum, qui dolorem eum fugiat, quo voluptas nulla pariatur? [33] At vero eos et accusamus et iusto odio dignissimos ducimus, qui blanditiis praesentium voluptatum deleniti atque corrupti, quos dolores et quas molestias excepturi sint, obcaecati cupiditate non provident, similique sunt in culpa, qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cumoluta nobis est eligendi optio, cumque nihil
                            </Typography>
                        </Box>
                    </Grid>

                    <Grid item xs={4}>
                        <Card elevation={0} className={style.box}>
                            <CardHeader 
                                avatar={
                                    <Avatar>T</Avatar>
                                }
                                title='Raphael Santos'
                                subheader='raphael@email.com'
                            />
                            
                            <CardMedia 
                                image={''}
                                title='Raphael Santos'
                            />
                        </Card>

                        <Box className={style.box}>
                            <Typography component='h6' variant="h6">
                                Localização
                            </Typography>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Default>
    )
}

export default Product