import React from 'react'
import { Box, Typography } from '@mui/material'
import StorageIcon from '@mui/icons-material/Storage';
import DevicesIcon from '@mui/icons-material/Devices';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';


function BackEndCard() {
    const tools = ['Node.js', 'Express', 'MongoDB', 'DynamoDB', 'Flask', 'SQL', 'Restful API', 'Redis', 'JWT',]
    return (
        <Box
            sx={
                {
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'flex-start',
                    width: '20%',
                    minHeight: '32rem',
                    position: 'relative',
                    gap: '1rem',
                    bgcolor: 'primary.main',
                    color: 'primary.contrastText',
                    borderRadius: '1rem',
                    border: '1px solid rgba(0,0,0,0.1)',
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
                {tools.map(tool => {
                    return (
                        <Typography
                            sx={
                                {
                                    fontSize: '1rem',
                                    padding: '0 2rem',
                                    textAlign: 'center',
                                }
                            }
                            variant='h6'
                        >{tool}</Typography>
                    )
                })}
            </Box>
        </Box>
    )
}


function FrontEndCard() {
    const tools = ['React', 'HTML', 'CSS', 'JavaScript', 'Material-UI']
    return (
        <Box
            sx={
                {
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'flex-start',
                    width: '20%',
                    minHeight: '32rem',
                    position: 'relative',
                    gap: '1rem',
                    bgcolor: 'primary.main',
                    color: 'primary.contrastText',
                    borderRadius: '1rem',
                    border: '1px solid rgba(0,0,0,0.1)',
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
        >Front End Developer</Typography>
            <DevicesIcon
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
            >I have experience with front end development using React, HTML, CSS, and JavaScript.</Typography>
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
                {tools.map(tool => {
                    return (
                        <Typography
                            sx={
                                {
                                    fontSize: '1rem',
                                    padding: '0 2rem',
                                    textAlign: 'center',
                                }
                            }
                            variant='h6'
                        >{tool}</Typography>
                    )
                })}
            </Box>
        </Box>
    )
}

function SkillsCard() {
    const skills = ['Node.js',
        'Express',
        'MongoDB',
        'Flask',
        'SQL',
        'Github',
        'React',
        'HTML',
        'CSS',
        'JavaScript',
        'Python',
        'Electron',
        'AWS',
        'AWS Amplify',
        'Material-UI',
        'AWS S3',
        'AWS DynamoDB',
        'AWS EC2',
        'AWS Secrets',
        'AWS Elastic Cache',
        'AWS Route 53',
    ]

    return (
        <Box
            sx={
                {
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'flex-start',
                    width: '20%',
                    minHeight: '32rem',
                    position: 'relative',
                    gap: '1rem',
                    bgcolor: 'primary.main',
                    color: 'primary.contrastText',
                    borderRadius: '1rem',
                    border: '1px solid rgba(0,0,0,0.1)',
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
        >Skills</Typography>
            <AddShoppingCartIcon
                sx={
                    {
                        fontSize: '4rem',
                        color: 'orange',
                    }
                }
            />
            <Box>
                <Box
                    sx={
                        {
                            display: 'flex',
                            flexDirection: 'row',
                            flexWrap: 'wrap',
                            alignItems: 'center',
                            justifyContent: 'center',
                            gap: '1rem',
                        }
                    }
                >
                    {skills.map(skill => {
                        return (
                            <Typography
                                sx={
                                    {
                                        fontSize: '1rem',
                                        padding: '0 2rem',
                                        textAlign: 'center',
                                        bgcolor: 'secondary.main',
                                        color: 'secondary.contrastText',
                                        borderRadius: '.25rem',
                                    }
                                }
                                variant='h6'
                            >{skill}</Typography>
                        )
                    })}
                </Box>
            </Box>
        </Box>
    )
}



function Cards() {
    return (
        <Box
            sx={
                {
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    gap: '1rem',
                    justifyContent: 'center',
                    width: '100%',
                    position: 'relative',
                    top: '-6rem',
                    color: 'primary.contrastText',

                }
            }
        >
            <BackEndCard />
            <FrontEndCard />
            <SkillsCard />
        </Box>
    )
}

export default Cards