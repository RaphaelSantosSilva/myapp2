import Default from "@/templates/Default"
import style from './dash.module.css'
import Link from "next/link"
import { 
  Button, 
  Card, 
  CardActions, 
  CardContent, 
  CardMedia, 
  Container, 
  Grid, 
  Typography 
  } from "@mui/material"

const Dashboard = () => {
  return (
    <main>
      <Default>
        <Container maxWidth="sm">
          <Typography component="h1" variant="h2" className={style.titulo} align="center">
            Meus Anúncios
          </Typography>
          <Link className={style.link} href='/publish'>
            <Button variant='contained' color='primary' className={style.btn}>
              Publicar novo anúncio
            </Button>
          </Link>
        </Container>

        <Container maxWidth='md'>
            <Grid container spacing={4}>
              <Grid item xs={12} sm={6} md={4}>
                <Card>
                  <CardMedia
                    className= { style.card }
                    image={'https://pop.proddigital.com.br/wp-content/uploads/sites/8/2024/01/01-59.jpg'}
                    title="Título da imagem"
                  />
                  <CardContent>
                    <Typography variant="h5" component='h2'>
                      Produto X
                    </Typography>
                    <Typography variant="h5" component='h2'>
                      R$ 60,00
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" color="primary">
                      Editar
                    </Button>
                    <Button size="small" color="primary">
                      Remover
                    </Button>
                  </CardActions>
                </Card>
              </Grid>

              <Grid item xs={12} sm={6} md={4}>
                <Card>
                  <CardMedia
                    className= { style.card }
                    image={'https://pop.proddigital.com.br/wp-content/uploads/sites/8/2024/01/01-59.jpg'}
                    title="Título da imagem"
                  />
                  <CardContent>
                    <Typography variant="h5" component='h2'>
                      Produto X
                    </Typography>
                    <Typography variant="h5" component='h2'>
                      R$ 60,00
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" color="primary">
                      Editar
                    </Button>
                    <Button size="small" color="primary">
                      Remover
                    </Button>
                  </CardActions>
                </Card>
              </Grid>

              <Grid item xs={12} sm={6} md={4}>
                <Card>
                  <CardMedia
                    className= { style.card }
                    image={'https://pop.proddigital.com.br/wp-content/uploads/sites/8/2024/01/01-59.jpg'}
                    title="Título da imagem"
                  />
                  <CardContent>
                    <Typography variant="h5" component='h2'>
                      Produto X
                    </Typography>
                    <Typography variant="h5" component='h2'>
                      R$ 60,00
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" color="primary">
                      Editar
                    </Button>
                    <Button size="small" color="primary">
                      Remover
                    </Button>
                  </CardActions>
                </Card>
              </Grid>

              <Grid item xs={12} sm={6} md={4}>
                <Card>
                  <CardMedia
                    className= { style.card }
                    image={'https://pop.proddigital.com.br/wp-content/uploads/sites/8/2024/01/01-59.jpg'}
                    title="Título da imagem"
                  />
                  <CardContent>
                    <Typography variant="h5" component='h2'>
                      Produto X
                    </Typography>
                    <Typography variant="h5" component='h2'>
                      R$ 60,00
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" color="primary">
                      Editar
                    </Button>
                    <Button size="small" color="primary">
                      Remover
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

export default Dashboard