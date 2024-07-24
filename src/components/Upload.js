import { useDropzone } from "react-dropzone"
import { Typography, Box, IconButton} from "@mui/material"
import { DeleteForever } from "@mui/icons-material"
import style from './Upload.module.css'

const Upload = ({ files, errors, touched, setFieldValue }) => {
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
                ...files,
                ...newFiles,
            ])
        }
       })
    
        const handleRemoveFile = fileName => {
            const newFileState = files.filter(file => file.name !== fileName)
            setFieldValue('files', newFileState)
        }

    return (
        <>
            <Typography component='h6' variant="h6" color={errors && touched ? 'error' : 'textPrimary'}>
                Imagens
            </Typography>
            <Typography component='div' variant="body2" color={errors && touched ? 'error' : 'textPrimary'} className={style.typo1}>
                A primeira imagem é a foto principal do seu anúncio
            </Typography>

            {
                errors
                ? <Typography variant="body2" color='error' gutterBottom>{errors}</Typography>
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
                files.map((file, index) =>(
                <Box 
                    key={file.name} 
                    className={style.thumb} 
                    style={{backgroundImage: `url(${file.preview})`}}
                >
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
        </>
    )
}

export default Upload