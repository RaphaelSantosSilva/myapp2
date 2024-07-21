import Default from "@/templates/Default"
import { Button, Paper, Grid, Container, IconButton, InputBase, Typography } from "@mui/material"
import SearchIcon from '@mui/icons-material/Search'
import Cards from "@/components/Cards"
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

        <Container maxWidth='lg ' className={style.destaque}>
          <Typography component='h1' variant="h3" align="center">
            Destaques
          </Typography>
        </Container>
          
        <Container maxWidth='md'>
          <Grid container spacing={4}>
            <Grid item xs={12} sm={6} md={4}>
               <Cards 
                   image={'https://www.chavesnamao.com.br/imn/0600x0400/A/veiculos/73944/6505116/harley-davidson-v-rod-em-curitiba-pr-6c8857bc.jpg'}
                   title='Harley Davidson'
                   subtitle='R$ 50.000,00'
                   actions={
                     <>
                      <Button size="small" color="primary">
                        Editar
                      </Button>
                      <Button size="small" color="primary">
                        Remover
                      </Button>
                    </>
                  }
                />
            </Grid>

            <Grid item xs={12} sm={6} md={4}>
              <Cards
                image={'https://www.motonline.com.br/noticia/wp-content/uploads/2021/02/Yamaha-XVS-650-Drag-Star-3-800x420.jpg'}
                title='Drag Star'
                subtitle='R$ 20.000,00'
                actions={
                  <>
                    <Button size="small" color="primary">
                      Editar
                    </Button>
                    <Button size="small" color="primary">
                      Remover
                    </Button>
                  </>
                }
              />
            </Grid>

            <Grid item xs={12} sm={6} md={4}>
            <Cards
                image={'https://cdn.motor1.com/images/mgl/gre2E/s1/indian-motorcycle-scout-bobber.webp'}
                title='Indian Scout'
                subtitle='R$ 70.000,00'
                actions={
                  <>
                    <Button size="small" color="primary">
                      Editar
                    </Button>
                    <Button size="small" color="primary">
                      Remover
                    </Button>
                  </>
                }
              />
            </Grid>
          </Grid>
        </Container>
      </Default>
    </main>
  )
}

export default Home