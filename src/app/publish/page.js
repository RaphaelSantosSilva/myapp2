"use client"

import Default from "@/templates/Default"
import { Button, Container, Typography, Box, TextField, Select, IconButton, FormControl, OutlinedInput, InputAdornment } from "@mui/material"
import  style from './publish.module.css'
import { Formik } from "formik"
import { DeleteForever, Key, Preview } from "@mui/icons-material"
import { useDropzone } from "react-dropzone"
import { useState } from "react"
import * as yup from 'yup'

const validationSchema = yup.object().shape({
    title: yup.string()
        .min(6, 'Escreva um título maior')
        .max(100, 'Título muito grande')
        .required('Campo obrigatório'),
})


const Publish = () => {
    const [files, setFiles] = useState([])

   const { getRootProps, getInputProps} = useDropzone({
    accept: 'image/*',
    onDrop: (acceptedFile) => {
        const newFiles = acceptedFile.map(file => {
            return Object.assign(file, {
                preview: URL.createObjectURL(file)
            })
        })

        setFiles([
            ...files,
            ...newFiles,
        ])
    }
   })

    const handleRemoveFile = fileName => {
        const newFileState = files.filter(file => file.name !== fileName)
        setFiles(newFileState)
    }

    return (
        <main>
            <Default>
                <Formik
                    initialValues={{
                        title: ''
                    }}
                    validationSchema={validationSchema}
                    onSubmit={(values) => {
                        console.log('ok,enviou', values)
                    }}
                >
                    {
                        ({
                            values,
                            errors,
                            handleChange,
                            handleSubmit,
                        }) => {
                            console.log(errors)
                            return (
                                <form onSubmit={handleSubmit}>
                                    <Container maxWidth='sm' className={style.container}>
                                        <Typography component='h1' variant="h2" align="center" color='textPrimary'>
                                            Publicar anúncio
                                        </Typography>
                                        <Typography component='h5' variant="h5" align="center" color='textPrimary'>
                                            Quanto mais detalhado, melhor!
                                        </Typography>
                                    </Container>

                                    <Container maxWidth='md'>
                                        <Box className={style.box}>
                                            <Typography component='h6' variant="h6" color='textPrimary'>
                                                Título do anúncio
                                            </Typography>
                                            <TextField
                                                name="title"
                                                value={values.title}
                                                onChange={handleChange}
                                                label='ex.: Bicicleta aro 26'
                                                size="small"
                                                fullWidth
                                                error={errors.title}
                                                helperText={errors.title}
                                             />
                                            <br/> <br/>
                                            <Typography component='h6' variant="h6" color='textPrimary'>
                                                Categoria
                                            </Typography>
                                            <Select fullWidth native value=''>
                                                <option value=''>Selecione</option>
                                                <option value={1}>Bebê e Crianças</option>
                                                <option value={2}>Agricultura</option>
                                                <option value={3}>Moda</option>
                                                <option value={4}>Tecnologia</option>
                                                <option value={5}>Lazer</option>
                                                <option value={6}>Livros</option>
                                                <option value={7}>Carros e Motos</option>
                                                <option value={8}>Móveis</option>
                                                <option value={9}>Eletrodomésticos</option>
                                                <option value={10}>Perfumaria</option>
                                                <option value={11}>Jardinagem</option>
                                            </Select>
                                        </Box>
                                    </Container>

                                    <Container maxWidth='md' className={style.boxContainer}>
                                        <Box className={style.box}>
                                            <Typography component='h6' variant="h6" color='textPrimary'>
                                                Imagens
                                            </Typography>
                                        <Typography component='div' variant="body2" color='textPrimary' className={style.typo1}>
                                             A primeira imagem é a foto principal do seu anúncio
                                        </Typography>
                        
                                        <Box className={style.thumbsContainer}>
                                            <Box className={style.dropzone} {...getRootProps()}>
                                                <input {...getInputProps()} />
                                            <Typography variant="body2" color='textPrimary' className={style.typo2}>
                                                Clique para adicionar ou arraste a imagem neste local
                                            </Typography>
                                        </Box>

                                        {
                                            files.map((file, index) =>(
                                            <Box key={file.name} className={style.thumb} style={{backgroundImage: `url(${file.preview})`}}>
                                        {
                                            index === '0' ?
                                                <Box className={style.mainImage}>
                                                    <Typography variant="body2">
                                                        Principal
                                                    </Typography>
                                                </Box>
                                            : null  
                                        }
                                        <Box className={style.mask}>
                                            <IconButton color="primary" className={style.icon} onClick={() => handleRemoveFile(file.name)} >
                                                <DeleteForever fontSize="large" />
                                            </IconButton>
                                        </Box>
    
                                        </Box>
                                        ))
                                        }
                                        </Box>
                                        </Box>
                                    </Container>

                                    <Container maxWidth='md' className={style.boxContainer}>
                                        <Box className={style.box}>
                                            <Typography component='h6' variant="h6" color='textPrimary'>
                                                Descrição
                                            </Typography>
                                            <Typography component='div' variant="body2" color='textPrimary'>
                                                Escreva os detalhes do seu produto
                                            </Typography>
                                            <TextField multiline rows={6} variant="outlined" fullWidth className={style.field} />
                                        </Box>
                                    </Container>

                                    <Container maxWidth='md' className={style.boxContainer}>
                                        <Box className={style.box}>
                                            <Typography component='h6' variant="h6" color='textPrimary'>
                                                Preço
                                            </Typography>
                                            <br/>
                                            <FormControl fullWidth variant="outlined">
                                                <OutlinedInput 
                                                    onChange={() => {}} 
                                                    startAdornment={<InputAdornment position="start">R$</InputAdornment>}
                                                />
                                            </FormControl>
                                        </Box>
                                    </Container>

                                    <Container maxWidth='md' className={style.boxContainer}>
                                        <Box className={style.box}>
                                            <Typography component='h6' variant="h6" color='textPrimary'>
                                                Dados de contato
                                            </Typography>
                                            <TextField 
                                                label='Nome'
                                                variant="outlined"
                                                size="small"
                                                fullWidth
                                            />
                                            <br/> <br/>
                                            <TextField 
                                                label='E-mail'
                                                variant="outlined"
                                                size="small"
                                                fullWidth
                                            />
                                            <br/> <br/>
                                            <TextField 
                                                label='Telefone'
                                                variant="outlined"
                                                size="small"
                                                fullWidth
                                            />
                                        </Box>
                                    </Container>

                                    <Container maxWidth='md' className={style.boxContainer}>
                                        <Box textAlign='right'>
                                            <Button type="submit" className={style.button} variant="contained" color="primary">
                                                Publicar anúncio
                                            </Button>
                                        </Box>
                                    </Container>
                                </form>    
                            )
                        }
                    }
                </Formik>
            </Default>
        </main>
    )
}

export default Publish