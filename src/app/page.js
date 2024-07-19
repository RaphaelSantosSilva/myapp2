import Default from "@/templates/Default"
import { Card, Button, CardMedia, Paper, Grid, Container, IconButton, InputBase, Typography, CardContent, CardActions } from "@mui/material"
import SearchIcon from '@mui/icons-material/Search'
import style from './home.module.css'


const Home = () => {
  return (
    <main>
      <Default>
        <Container maxWidth="md" className={style.container}>
          <Typography component='h1' variant="h3" align="center" color='textPrimary'>
            O que deseja encontrar?
          </Typography>
          <Paper className={style.searchBox}> 
            <InputBase  
              placeholder="Ex.: Playstation 5 com garantia"
              fullWidth
            />
            <IconButton>
              <SearchIcon />
            </IconButton>
          </Paper>
        </Container>

        <Container maxWidth='md' className={style.destaque}>
          <Typography component='h1' variant="h3" align="center">
            Destaques
          </Typography>
        </Container>
          
          <Container maxWidth='md'>
          <Grid container spacing={4}>
              <Grid item xs={12} sm={6} md={4}>
                <Card>
                  <CardMedia
                    className= { style.card }
                    image={'https://www.adrenaline.com.br/wp-content/uploads/2024/04/ps5-pro.jpg'}
                    title="Título da imagem"
                  />
                  <CardContent>
                    <Typography variant="h5" component='h2'>
                      PlayStation 5
                    </Typography>
                    <Typography variant="h5" component='h2'>
                      R$ 3.999,99
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" color="primary">
                      Comprar
                    </Button>
                    <Button size="small" color="primary">
                      Mais Detalhes
                    </Button>
                  </CardActions>
                </Card>
              </Grid>

              <Grid item xs={12} sm={6} md={4}>
                <Card>
                  <CardMedia
                    className= { style.card }
                    image={'https://www.fastshop.com.br/wcsstore/FastShopCAS/images/catalog/UXX1605ZA_PRD/UXX1605ZA_PRD_447_1.jpeg'}
                    title="Título da imagem"
                  />
                  <CardContent>
                    <Typography variant="h5" component='h2'>
                      Notebook Asus
                    </Typography>
                    <Typography variant="h5" component='h2'>
                      R$ 3.450,00
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" color="primary">
                      Comprar
                    </Button>
                    <Button size="small" color="primary">
                      Mais Detalhes
                    </Button>
                  </CardActions>
                </Card>
              </Grid>

              <Grid item xs={12} sm={6} md={4}>
                <Card>
                  <CardMedia
                    className= { style.card }
                    image={'https://i.zst.com.br/thumbs/12/1e/3f/1948928833.jpg'}
                    title="Título da imagem"
                  />
                  <CardContent>
                    <Typography variant="h5" component='h2'>
                      TV Samsung 60'
                    </Typography>
                    <Typography variant="h5" component='h2'>
                      R$ 2.490,00
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" color="primary">
                      Comprar
                    </Button>
                    <Button size="small" color="primary">
                      Mais Detalhes
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            </Grid>
        </Container>
      </Default>
    </main>
  )
}

export default Home