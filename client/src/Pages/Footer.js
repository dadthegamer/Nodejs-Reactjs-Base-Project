import React from 'react'
import { Box, Typography } from '@mui/material'


export default function Footer() {
    return (
        <Box sx={{ backgroundColor: '#f5f5f5', padding: '1rem', textAlign: 'center' }}>
            <Typography variant="body2" color="textSecondary">
                &copy; 2024 Created by Craig Bailey
            </Typography>
        </Box>
    )
}
