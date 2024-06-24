import React from 'react'
import { Box, Link, Typography } from '@mui/material'
import Avatar from '@mui/material/Avatar';


export default function Navbar() {
    return (
        <Box
            sx={
                {
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    padding: '1rem',
                    bgcolor: 'primary.main',
                    color: 'primary.contrastText',
                    position: 'fixed',
                    top: 0,
                    zIndex: 1000,
                    width: '100%',
                    overflow: 'hidden',
                }
            }>
            <Box
                sx={
                    {
                        display: 'flex',
                        alignItems: 'center',
                        marginLeft: '2rem',
                        gap: '1rem',
                    }
                }
            >
                <Avatar src='/profile_pic.png' alt='Craig Bailey' />
                <Typography variant='h7'>Craig Bailey</Typography>
            </Box>
            <Box
                sx={
                    {
                        display: 'flex',
                        gap: '2rem',
                        marginRight: '2rem',
                    }
                }
            >
                <Link href='/' color='inherit' underline='none'>About</Link>
                <Link href='/about' color='inherit' underline='none'>Portfolio</Link>
                <Link href='/projects' color='inherit' underline='none'>Contact</Link>
            </Box>
        </Box>
    )
}
