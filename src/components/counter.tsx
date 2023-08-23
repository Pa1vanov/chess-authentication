import React from 'react'
import { Box, Text } from '@mantine/core'

interface CountDisplayProps {
  count: number
}

const CountDisplay: React.FC<CountDisplayProps> = ({ count }) => {
  const containerStyle = {
    display: 'grid',
    placeItems: 'center',
    backgroundColor: '#68FD8F',
    color: 'white',
    padding: '15px',
    borderRadius: '10px',
    fontSize: '24px'
  }

  return (
    <Box sx={{ display: 'flex' }} style={containerStyle}>
      Count: <Text>{count}</Text>
    </Box>
  )
}

export default CountDisplay
