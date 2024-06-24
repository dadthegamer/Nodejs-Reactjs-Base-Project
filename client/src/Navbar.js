import React from 'react'
import { Box, Link, Typography } from '@mui/material'
import Avatar from '@mui/material/Avatar';
import GitHubIcon from '@mui/icons-material/GitHub';
import XIcon from '@mui/icons-material/X';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';


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
                    height: '3.5rem',
                    overflow: 'hidden',
                    fontSize: '1rem',
                    fontWeight: 700,
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
                <Avatar src='/profile_pic.png' alt='Craig Bailey' sx={{ width: 50, height: 50, border: '2px solid black' }} />
                <Typography variant='h7'>CRAIG BAILEY</Typography>
            </Box>
            <Box
                sx={
                    {
                        display: 'flex',
                        gap: '2rem',
                    }
                }
            >
                <Link href='/' color='inherit' underline='none'>ABOUT</Link>
                <Link href='/portfolio' color='inherit' underline='none'>PORTFOLIO</Link>
                <Link href='/contact' color='inherit' underline='none'>CONTACT</Link>
            </Box>
            <Box
            sx={
                {
                    display: 'flex',
                    gap: '1rem',
                    marginRight: '2rem',
                }
            }
            >
                <Link href='github.com' color='inherit' underline='none' onClick={() => window.open('https://github.com/dadthegamer')}>
                    <GitHubIcon />
                </Link>
                <Link href='facebook.com' color='inherit' underline='none'>
                    <FacebookIcon />
                </Link>
                <Link href='linkedin.com' color='inherit' underline='none'>
                    <LinkedInIcon />
                </Link>
                <Link href='youtube.com' color='inherit' underline='none'>
                    <YouTubeIcon />
                </Link>
                <Link href='/' color='inherit' underline='none'>
                    <XIcon />
                </Link>
            </Box>
        </Box>
    )
}
