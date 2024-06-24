import React from 'react'
import { Box, Typography } from '@mui/material'
import pattern from '../Static/Images/pattern.svg'
import StorageIcon from '@mui/icons-material/Storage';


export default function Home() {
    return (
        <Box
            sx={
                {
                    display: 'flex',
                    justifyContent: 'flex-start',
                    flexDirection: 'column',
                    alignItems: 'center',
                    color: 'primary.contrastText',
                    fontSize: '2rem',
                    height: '100%',
                    width: '100%',
                }
            }>
            <Box
                sx={
                    {
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: '100%',
                        minHeight: '100vh',
                        position: 'relative',
                        gap: '1rem',
                        background: `url(${pattern})`,
                    }
                }
            >
                <Typography
                    variant='h1'
                    sx={
                        {
                            fontWeight: 900,
                            fontSize: '6rem',
                        }
                    }
                >HEY, I AM CRAIG BAILEY</Typography>
                <Typography
                    variant='h3'
                    sx={
                        {
                            fontWeight: 400,
                            fontSize: '2rem',
                        }
                    }
                >A Freelance Full Stack Web Developer</Typography>
            </Box>
            <Box
                sx={
                    {
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: '100%',
                        position: 'relative',
                        gap: '1rem',
                    }
                }
            >
            </Box>
            <Box
                sx={
                    {
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: '100%',
                        minHeight: '30rem',
                        position: 'relative',
                        gap: '1rem',
                        bgcolor: 'secondary.main',
                        color: 'secondary.contrastText',
                    }
                }
            >
                <Typography
                    variant='h4'
                    sx={
                        {
                            fontWeight: 900,
                            fontSize: '3rem',
                            position: 'absolute',
                            top: '1rem',
                        }
                    }
                >ABOUT ME</Typography>
                <Typography
                    sx={
                        {
                            fontSize: '1.5rem',
                            padding: '0 2rem',
                            textAlign: 'center',
                        }
                    }
                    variant='body1'
                >
                    I am a full stack software developer with a passion for creating beautiful and functional websites.
                    I am a self-taught developer with a passion for learning and creating modern and responsive websites.
                    I am married with 2 kids and a United States Army Veteran.
                </Typography>
            </Box>
            <Box
                sx={
                    {
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: '100%',
                        position: 'relative',
                        top: '-6rem',
                        color: 'primary.contrastText',

                    }
                }
            >
                <Box
                    sx={
                        {
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'flex-start',
                            width: '25%',
                            minHeight: '30rem',
                            position: 'relative',
                            gap: '1rem',
                            bgcolor: 'primary.main',
                            color: 'primary.contrastText',
                            borderRadius: '1rem',
                            border: '1px solid rgba(0,0,0,0.1)',
                            boxShadow: '0 0 10px rgba(0,0,0,0.1)',
                            padding: '1rem',
                        }
                    }
                ><Typography
                    variant='h5'
                    sx={
                        {
                            fontWeight: 900,
                            fontSize: '2rem',
                        }
                    }
                >Back End Developer</Typography>
                    <StorageIcon
                        sx={
                            {
                                fontSize: '4rem',
                                color: 'orange',
                            }
                        }
                    />
                    <Typography
                        sx={
                            {
                                fontSize: '1rem',
                                padding: '0 2rem',
                                textAlign: 'center',
                            }
                        }
                        variant='body1'
                    >I have experience with back end development using Node.js, Express, MongoDB, Flask, and SQL.</Typography>
                    <Box>
                        <Typography
                            sx={
                                {
                                    fontSize: '1rem',
                                    padding: '0 2rem',
                                    textAlign: 'center',
                                    color: 'secondary.main',
                                    fontWeight: 700,
                                }
                            }
                            variant='h6'
                        >Tools:</Typography>
                        <Typography
                            sx={
                                {
                                    fontSize: '1rem',
                                    padding: '0 2rem',
                                    textAlign: 'center',
                                }
                            }
                            variant='h6'
                        >Node.js</Typography>
                        <Typography
                            sx={
                                {
                                    fontSize: '1rem',
                                    padding: '0 2rem',
                                    textAlign: 'center',
                                }
                            }
                            variant='h6'
                        >Express</Typography>
                        <Typography
                            sx={
                                {
                                    fontSize: '1rem',
                                    padding: '0 2rem',
                                    textAlign: 'center',
                                }
                            }
                            variant='h6'
                        >MongoDB</Typography>
                        <Typography
                            sx={
                                {
                                    fontSize: '1rem',
                                    padding: '0 2rem',
                                    textAlign: 'center',
                                }
                            }
                            variant='h6'
                        >Flask</Typography>
                        <Typography
                            sx={
                                {
                                    fontSize: '1rem',
                                    padding: '0 2rem',
                                    textAlign: 'center',
                                }
                            }
                            variant='h6'
                        >SQL</Typography>
                        <Typography
                            sx={
                                {
                                    fontSize: '1rem',
                                    padding: '0 2rem',
                                    textAlign: 'center',
                                }
                            }
                            variant='h6'
                        >Github</Typography>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}
