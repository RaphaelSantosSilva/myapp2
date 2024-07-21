import Default from "@/templates/Default"
import Cards from "@/components/Cards"
import style from './dash.module.css'
import Link from "next/link"
import { 
  Button, 
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
            <Grid className={style.grid} item xs={12} sm={6} md={4}>
              <Cards
                image={'https://cdn.awsli.com.br/2500x2500/735/735589/produto/34758280/a76379530d.jpg'}
                title='Produto Y'
                subtitle='R$ 120,00'
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

            <Grid className={style.grid} item xs={12} sm={6} md={4}>
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
          </Grid>
        </Container>
      </Default>
    </main>
  )
}

export default Dashboard