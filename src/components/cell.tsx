import React from 'react'
import { Box } from '@mantine/core'

import '../style/index.scss'

interface CellProps {
  isBlack: boolean
  onClick: () => void
  initialValue: string
}

const Cell: React.FC<CellProps> = ({ isBlack, onClick, initialValue }) => {
  const cellColor = isBlack ? 'white' : '#68FD8F'
  const cellBorder = isBlack ? 'none' : '1px solid #68FD8F'

  return (
    <Box className="cell" onClick={onClick} style={{ backgroundColor: cellColor, border: cellBorder }}>
      {initialValue}
    </Box>
  )
}

export default Cell
