import React from 'react'
import { Box, Typography } from '@mui/material'
import pattern from '../Static/Images/pattern.svg'
import Cards from '../Components/Cards'


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
            <Cards />
        </Box>
    )
}
