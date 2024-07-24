"use client"

import Default from "@/templates/Default"
import { Button, MenuItem, Container, Typography, Box, Select, FormControl, InputAdornment, FormHelperText, Input, InputLabel } from "@mui/material"
import  style from './publish.module.css'
import { Formik } from "formik"
import { initialValues, validationSchema } from "./formvalues"
import Upload from "@/components/Upload"

const Publish = () => {
    return (
        <main>
            <Default>
                <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={(values) => {
                        console.log('Formulário enviado com sucesso!', values)
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
                                            <Upload 
                                                files={values.files}
                                                errors={errors.files}
                                                touched={errors.touched}
                                                setFieldValue={setFieldValue}
                                            />
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