// Assumptions:
// - matrix is not empty
// - matrix is square
export function rotateImage(matrix) {
  const len = matrix.length
  for (let layer = 0; layer < Math.trunc(len / 2); layer++) {
    for (let i = layer; i < len - 1 - layer; i++) {
      const top = matrix[layer][i]
      const right = matrix[i][len - 1 - layer]
      const bottom = matrix[len - 1 - layer][len - 1 - i]
      const left = matrix[len - 1 - i][layer]
      matrix[layer][i] = left // set top
      matrix[i][len - 1 - layer] = top // set right
      matrix[len - 1 - layer][len - 1 - i] = right // set bottom
      matrix[len - 1 - i][layer] = bottom // set left
    }
  }
  return matrix
}
