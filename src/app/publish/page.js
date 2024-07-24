"use client"

import Default from "@/templates/Default"
import { Button, MenuItem, Container, Typography, Box, TextField, Select, IconButton, FormControl, OutlinedInput, InputAdornment, FormHelperText, Input, InputLabel } from "@mui/material"
import  style from './publish.module.css'
import { Formik } from "formik"
import { DeleteForever, ErrorSharp } from "@mui/icons-material"
import { useDropzone } from "react-dropzone"
import { useState } from "react"
import * as yup from 'yup'

const validationSchema = yup.object().shape({
    title: yup.string()
        .min(6, 'Escreva um título maior')
        .max(100, 'Título muito grande')
        .required('Campo obrigatório'),

    category: yup.string()
        .required('Campo obrigatório'),
        
    description: yup.string()
        .min(50, 'Escreva uma descrição com no mínimo 50 caracteres.')
        .required('Campo obrigatório'),

    price: yup.number()
        .required('Campo obrigatório'),

    email: yup.string()
        .email('Digite um e-mail válido')
        .required('Campo obrigatório'),

    name: yup.string()
        .required('Campo obrigatório'),

    telephone: yup.number()
        .required('Campo obrigatório'),

    files: yup.array()
        .min(1, 'Envie pelo menos uma imagem')
        .required('Campo obrigatório')
})


const Publish = () => {
    return (
        <main>
            <Default>
                <Formik
                    initialValues={{
                        title: '',
                        category: '',
                        description: '',
                        price: '',
                        email: '',
                        name: '',
                        telephone: '',
                        files: [],
                    }}

                    validationSchema={validationSchema}
                    onSubmit={(values) => {
                        console.log('ok,enviou', values)
                    }}
                >
                    {
                        ({
                            touched,
                            values,
                            errors,
                            handleChange,
                            handleSubmit,
                            setFieldValue,
                        }) => {
                            const { getRootProps, getInputProps} = useDropzone({
                                accept: 'image/*',
                                onDrop: (acceptedFile) => {
                                    const newFiles = acceptedFile.map(file => {
                                        return Object.assign(file, {
                                            preview: URL.createObjectURL(file)
                                        })
                                    })

                                    setFieldValue('nome', )
                            
                                    setFieldValue('files', [
                                        ...values.files,
                                        ...newFiles,
                                    ])
                                }
                               })
                            
                                const handleRemoveFile = fileName => {
                                    const newFileState = values.files.filter(file => file.name !== fileName)
                                    setFieldValue('files', newFileState)
                                }
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
                                            <FormControl error={errors.title && touched.title} fullWidth>
                                                <InputLabel className={style.inputLabel}>
                                                    Título do anúncio
                                                </InputLabel>
                                                <Input
                                                    name="title"
                                                    value={values.title}
                                                    onChange={handleChange}
                                                />
                                                <FormHelperText>
                                                    {errors.title && touched.title ? errors.title : null}
                                                </FormHelperText>
                                            
                                            </FormControl>
                                            
                                            <br/> <br/>
                                            
                                            <FormControl error={errors.category && touched.category} fullWidth>
                                                <InputLabel className={style.inputLabel}>
                                                    Categoria
                                                </InputLabel>
                                                <Select
                                                name="category" 
                                                values={values.category} 
                                                fullWidth 
                                                onChange={handleChange}
                                                >
                                                <MenuItem  value='Crianças'>Crianças</MenuItem>
                                                <MenuItem  value='Agricultura'>Agricultura</MenuItem>
                                                <MenuItem  value='Moda'>Moda</MenuItem>
                                                <MenuItem  value='Tecnologia'>Tecnologia</MenuItem>
                                                <MenuItem  value='Lazer'>Lazer</MenuItem>
                                                <MenuItem  value='Livros'>Livros</MenuItem>
                                                <MenuItem  value='Carros'>Carros</MenuItem>
                                                <MenuItem  value='Móveis'>Móveis</MenuItem>
                                                <MenuItem  value='Eletrodomésticos'>Eletrodomésticos</MenuItem>
                                                <MenuItem  value='Perfumarua'>Perfumaria</MenuItem>
                                                <MenuItem  value='Jardinagem'>Jardinagem</MenuItem>
                                                </Select>
                                                <FormHelperText>
                                                    {errors.category && touched.category ? errors.category : null}
                                                </FormHelperText>
                                            </FormControl>
                                        </Box>
                                    </Container>

                                    <Container maxWidth='md' className={style.boxContainer}>
                                        <Box className={style.box}>
                                            <Typography component='h6' variant="h6" color={errors.files ? 'error' : 'textPrimary'}>
                                                Imagens
                                            </Typography>
                                        <Typography component='div' variant="body2" color={errors.files ? 'error' : 'textPrimary'} className={style.typo1}>
                                             A primeira imagem é a foto principal do seu anúncio
                                        </Typography>

                                        {
                                            errors.files
                                            ? <Typography variant="body2" color='error' gutterBottom>{errors.files}</Typography>
                                            : null
                                        }
                        
                                        <Box className={style.thumbsContainer}>
                                            <Box className={style.dropzone} {...getRootProps()}>
                                                <input name='files' {...getInputProps()} />
                                            <Typography variant="body2" color='textPrimary' className={style.typo2}>
                                                Clique para adicionar ou arraste a imagem neste local
                                            </Typography>
                                        </Box>

                                        {
                                            values.files.map((file, index) =>(
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
                                            <FormControl error={errors.description && touched.description} fullWidth>
                                                <InputLabel className={style.inputLabel}>
                                                    Escreva os detalhes do que está vendendo
                                                </InputLabel>
                                                <Input
                                                    name="description"
                                                    multiline rows={6} 
                                                    variant="outlined" 
                                                    className={style.field} 
                                                    onChange={handleChange}
                                                />
                                                <FormHelperText>
                                                    {errors.description && touched.description ? errors.description : null}
                                                </FormHelperText>
                                            </FormControl>
                                        </Box>
                                    </Container>

                                    <Container maxWidth='md' className={style.boxContainer}>
                                        <Box className={style.box}>
                                            <FormControl error={errors.price && touched.price} fullWidth>
                                                <InputLabel className={style.inputLabel}>
                                                    Preço
                                                </InputLabel>
                                                <Input 
                                                    name="price"
                                                    variant='outlined'
                                                    onChange={handleChange}
                                                    startAdornment={<InputAdornment position="start">R$</InputAdornment>}
                                                />
                                                <FormHelperText>
                                                    {errors.price && touched.price ? errors.price : null}
                                                </FormHelperText>
                                            </FormControl>
                                        </Box>
                                    </Container>

                                    <Container maxWidth='md' className={style.boxContainer}>
                                        <Box className={style.box}>
                                            <Typography component='h6' variant="h6" color='textPrimary'>
                                                Dados de contato
                                            </Typography>
                                            
                                            <FormControl error={errors.name && touched.name} fullWidth>
                                                <InputLabel className={style.inputLabel}>
                                                    Nome
                                                </InputLabel>
                                                <Input 
                                                    name="name"
                                                    value={values.name}
                                                    onChange={handleChange}
                                                />
                                            </FormControl>
                                            <br/> <br/>
                                            
                                            <FormControl error={errors.email && touched.email} fullWidth>
                                                <InputLabel className={style.inputLabel}>
                                                    E-mail
                                                </InputLabel>
                                                <Input  
                                                    name="email"
                                                    value={values.email}
                                                    onChange={handleChange}
                                                />
                                            </FormControl>
                                            <br/> <br/>
                                            
                                            <FormControl error={errors.telephone && touched.telephone} fullWidth>
                                                <InputLabel className={style.inputLabel}>
                                                    Telefone 
                                                </InputLabel>
                                                <Input
                                                    name="telephone"
                                                    value={values.telephone}
                                                    onChange={handleChange}
                                                />
                                            </FormControl>
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