"use client"
import * as React from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import { Avatar, Container, IconButton, Menu, MenuItem } from '@mui/material'
import style from './Header.module.css'
import Link from 'next/link'
import { AccountCircle } from '@mui/icons-material'
import { useState } from 'react'

const Header = () => {
  const [anchorUserMenu, setAnchorUserMenu] = useState(false)

  const openUserMenu = Boolean(anchorUserMenu)

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" elevation={8} className={style.header}>
        <Container maxWidth='lg'>
          <Toolbar>
            <Typography className={style.logo} variant="h6" component="div" sx={{ flexGrow: 1 }}>
              ANUNX
            </Typography>
            <Link className={style.link} href='/publish'>
              <Button className={style.button} color="inherit">Anunciar e Vender</Button>
            </Link>
            <IconButton color='primary' onClick={(e) => setAnchorUserMenu(e.currentTarget)}>
              {
                true === false
                  ? <Avatar src='' />
                  : <AccountCircle />
              }
              <Typography className={style.user} variant='subtitle2' color='white'>
                Raphael Santos
              </Typography>
            </IconButton>
            <Menu
              open={openUserMenu} 
              onClose={() => setAnchorUserMenu(null)} 
              anchorEl={anchorUserMenu}
              >
                <Link className={style.menuItem} href='/'>
                  <MenuItem>Página inicial</MenuItem>
                </Link>
                <Link className={style.menuItem} href='/user'>
                  <MenuItem>Meus anúncios</MenuItem>
                </Link>
                <Link className={style.menuItem} href='/publish'>
                  <MenuItem>Publicar novo anúncio</MenuItem>  
                </Link>
                <MenuItem>Sair</MenuItem>
            </Menu>
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  )
}

export default Header