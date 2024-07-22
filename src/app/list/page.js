import Default from '@/templates/Default'
import { Box, Container, Grid, IconButton, InputBase, Paper, Typography } from '@mui/material'
import Cards from '@/components/Cards'
import Search from '@mui/icons-material/Search'
import style from './list.module.css'

const List = () => {
    return (
        <Default>
            <Container className={style.container} maxWidth='lg'>
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={12} md={12}>
                        <Paper component='form' className={style.searchBox}>
                            <InputBase
                                placeholder='Ex.: Console Playstation 5'
                                fullWidth
                            />
                            <IconButton type='submit' aria-label='search'>
                                <Search />
                            </IconButton>
                        </Paper>
                    </Grid>
                </Grid>
            

                <Grid item xs={12} sm={12} md={12}>
                    <Box className={style.box}>
                        <Typography className={style.titulo} component='h6' variant='h6'>
                            Anúncios
                        </Typography>
                        <Typography className={style.subtitulo} component='span' variant='subtitle'>
                            ENCONTRADOS 200 ANÚNCIOS
                        </Typography>
                        <br/> <br/>

                        <Grid container spacing={4}>
                            <Grid item xs={12} sm={6} md={4}>
                                <Cards 
                                    image={'https://cdn.leroymerlin.com.br/products/ventilador_de_mesa_parede_40cm_127v_preto_turbo_force_2_em_1_91912324_0001_600x600.jpg'}
                                    title='Ventilador Arno'
                                    subtitle='R$ 250,00'
                                />
                            </Grid>

                            <Grid item xs={12} sm={6} md={4}>
                                <Cards 
                                    image={'https://http2.mlstatic.com/D_NQ_NP_771026-MLU54959468081_042023-O.webp'}
                                    title='Mouse Gamer'
                                    subtitle='R$ 100,00'
                                />
                            </Grid>

                            <Grid item xs={12} sm={6} md={4}>
                                <Cards 
                                    image={'https://aocstore.vtexassets.com/arquivos/ids/157776-800-800?v=637937570578630000&width=800&height=800&aspect=true'}
                                    title='Monitor LED 4K'
                                    subtitle='R$ 1.000,00'
                                />
                            </Grid>
                        </Grid>

                    </Box>
                </Grid>                   
            </Container>   
        </Default>
    )
}

export default List