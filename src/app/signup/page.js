"use client"

import Default from "@/templates/Default"
import { Box, Button, Input, Container, FormControl, FormHelperText, InputLabel, Typography } from "@mui/material"
import { Formik } from "formik"
import style from './signup.module.css'
import { initialValues, validationSchema } from "./formValues"

const Signup = () => {
    return (
        <Default>
            <Container maxWidth='sm' component='main' className={style.container}>
                <Typography component='h1' variant="h2" align="center" color='textPrimary'>
                    Crie sua conta 
                </Typography>
                <Typography component='h5' variant="h5" align="center" color='textPrimary'>
                    E anuncie para todo o Brasil
                </Typography>
            </Container>

            <Container maxWidth='md'>
                <Box className={style.box}>
                    <Formik
                        initialValues={initialValues}
                        validationSchema={validationSchema}
                        onSubmit={(values) => {
                            console.log('Cadastro realizado com sucesso!', values)
                        }}
                    >
                        {
                            ({
                                touched,
                                values,
                                errors,
                                handleChange,
                                handleSubmit,
                            }) => {
                                return (
                                    <form onSubmit={handleSubmit}>
                                        <FormControl fullWidth error={errors.name && touched.name} className={style.formControl}>
                                            <InputLabel className={style.inputLabel}>Nome</InputLabel>
                                            <Input 
                                                name='name'
                                                value={values.name}
                                                onChange={handleChange}
                                            />
                                            <FormHelperText>
                                                {errors.name && touched.name ? errors.name : null}
                                            </FormHelperText>
                                        </FormControl>

                                        <FormControl fullWidth error={errors.email && touched.email} className={style.formControl}>
                                            <InputLabel className={style.inputLabel}>E-mail</InputLabel>
                                            <Input 
                                                name='email'
                                                type='email'
                                                value={values.email}
                                                onChange={handleChange}
                                            />
                                            <FormHelperText>
                                                {errors.email && touched.email ? errors.email : null}
                                            </FormHelperText>
                                        </FormControl>

                                        <FormControl fullWidth error={errors.password && touched.password} className={style.formControl}>
                                            <InputLabel className={style.inputLabel}>Senha</InputLabel>
                                            <Input 
                                                name='password'
                                                type='password'
                                                value={values.password}
                                                onChange={handleChange}
                                            />
                                            <FormHelperText>
                                                {errors.password && touched.password ? errors.password : null}
                                            </FormHelperText>
                                        </FormControl>

                                        <FormControl fullWidth error={errors.passwordConf && touched.passwordConf} className={style.formControl}>
                                            <InputLabel className={style.inputLabel}>Confirmação de senha</InputLabel>
                                            <Input 
                                                name='passwordConf'
                                                type='password'
                                                value={values.passwordConf}
                                                onChange={handleChange}
                                            />
                                            <FormHelperText>
                                                {errors.passwordConf && touched.passwordConf ? errors.passwordConf : null}
                                            </FormHelperText>
                                        </FormControl>

                                        <Button
                                            type='submit'
                                            fullWidth
                                            variant='contained'
                                            color='primary'
                                            className={style.button}
                                            disable={''}
                                        >
                                            Cadastrar
                                        </Button>
                                    </form>
                                )
                            }
                        }
                    </Formik>
                </Box>
            </Container>
        </Default>
    )
}

export default Signup