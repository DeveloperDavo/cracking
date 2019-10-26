// Assumptions:
// - matrix is not empty
export function zeroMatrix(matrix) {
  const rows = matrix.length
  const cols = matrix[0].length

  let zerofyFirstRow = false
  let zerofyFirstCol = false

  for (let j = 0; j < cols; j++) {
    if (matrix[0][j] === 0) {
      zerofyFirstRow = true
      break
    }
  }

  for (let i = 0; i < rows; i++) {
    if (matrix[i][0] === 0) {
      zerofyFirstCol = true
      break
    }
  }

  for (let i = 1; i < rows; i++) {
    for (let j = 1; j < cols; j++) {
      if (matrix[i][j] === 0) {
        matrix[i][0] = 0 // set first col at row i to 0. This will become a row of zeroes
        matrix[0][j] = 0 // set first row at col j to 0. This will become a col of zeroes
      }
    }
  }

  // set zeroes in rows from first col
  for (let i = 1; i < rows; i++) {
    if (matrix[i][0] === 0) {
      for (let j = 1; j < cols; j++) {
        matrix[i][j] = 0
      }
    }
  }

  // set zeroes in cols from first row
  for (let j = 1; j < cols; j++) {
    if (matrix[0][j] === 0) {
      for (let i = 1; i < rows; i++) {
        matrix[i][j] = 0
      }
    }
  }

  if (zerofyFirstCol) {
    for (let i = 0; i < rows; i++) {
      matrix[i][0] = 0
    }
  }

  if (zerofyFirstRow) {
    for (let j = 0; j < cols; j++) {
      matrix[0][j] = 0
    }
  }

  return matrix
}
