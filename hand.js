/*
 * "THE BEER-WARE LICENSE" (Revision 42):
 * Vitalii Kreminskyi <vkrmk13@gmail.com> wrote this file. As long as you retain this
 * notice you can do whatever you want with this stuff. If we meet some
 * day, and you think this stuff is worth it, you can buy me a beer in
 * return.
 *
 * Hand module - responsible for interactions
 */

const isClickedWithin = (startX, startY, endX, endY) =>
  mouseX >= startX && mouseX <= endX && mouseY >= startY && mouseY <= endY

const handleMousePressed = () => {
  const COORDS_LENGTH = 2 // [x, y].length === 2
  /**
   * Check whether mouse clicked into ships picker figures
   */
  for (let shipCells in pickerShipsPositions) {
    if (pickerShipsPositions[shipCells].lenght < COORDS_LENGTH) {
      console.error('No ship picker position')
    } else {
      const shipLength = shipCells * CELL_DIMENSION
      const startX = pickerShipsPositions[shipCells][0]
      const startY = pickerShipsPositions[shipCells][1]
    }
  }
}

const handleMouseReleased = () => {}
