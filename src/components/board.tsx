import React from 'react'
import { Box } from '@mantine/core'

import { Cell } from '.'

interface ChessboardProps {
  boardData: string[][]
  selectedValue: string
  onCellClick: (value: string, rowIndex: number, colIndex: number) => void
}

const Chessboard: React.FC<ChessboardProps> = ({ boardData, selectedValue, onCellClick }) => {
  const renderRow = (rowIndex: number) => {
    const cells = []

    for (let colIndex = 0; colIndex < 8; colIndex++) {
      const isBlack = (rowIndex + colIndex) % 2 === 1
      const cellContent = boardData[colIndex][rowIndex]

      cells.push(<Cell key={colIndex} isBlack={isBlack} initialValue={cellContent} onClick={() => onCellClick(selectedValue, rowIndex, colIndex)} />)
    }

    return cells
  }

  const renderBoard = () => {
    const rows = []

    for (let rowIndex = 0; rowIndex < 8; rowIndex++) {
      rows.push(
        <Box key={rowIndex} className="row">
          {renderRow(rowIndex)}
        </Box>
      )
    }

    return rows
  }

  return <Box className="chessboard">{renderBoard()}</Box>
}

export default Chessboard
