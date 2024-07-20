import { Container, Grid, Box, Typography } from '@mui/material'
import Link from 'next/link'
import style from './Footer.module.css'

const Footer = () => {
    return (
        <Container className={style.footer} maxWidth='lg' component="footer">
            <Grid container spacing={3} justify='space-around'>
                <Grid item xs={6} sm={3}>
                    <Box textAlign='center'>
                        <Link className={style.links} href='#'>
                           <Typography>
                                Ajuda e suporte
                           </Typography>
                        </Link>
                    </Box>
                </Grid>

                <Grid item xs={6} sm={3}>
                    <Box textAlign='center'>
                        <Link className={style.links} href='#'>
                            <Typography>
                                Dicas de segurança
                            </Typography>
                        </Link>
                    </Box>
                </Grid>

                <Grid item xs={6} sm={3}>
                    <Box textAlign='center'>
                        <Link className={style.links} href='/publish'>
                            <Typography>
                                Anunciar e vender    
                            </Typography>
                        </Link>
                    </Box>
                </Grid>

                <Grid item xs={6} sm={3}>
                    <Box textAlign='center'>
                        <Link className={style.links} href='#'>
                            <Typography>
                                Plano profissional
                            </Typography>
                        </Link>
                    </Box>
                </Grid>
            </Grid>
        </Container>
    )
}

export default Footer