/*
 * "THE BEER-WARE LICENSE" (Revision 42):
 * Vitalii Kreminskyi <vkrmk13@gmail.com> wrote this file. As long as you retain this
 * notice you can do whatever you want with this stuff. If we meet some
 * day, and you think this stuff is worth it, you can buy me a beer in
 * return.
 *
 * Pencil module - does the things that pencil does - draws everything
 */

/**
 * Draw box relatively to paddings
 */
const drawBox = (x, y) => {
  rect(x, y, CELL_DIMENSION)
}

// TODO: Add orientation also (now works only horizontally)
const drawShip = (x, y, size, orientation) => {
  for (let i = 1; i <= size; i++) {
    drawBox(x + CELL_DIMENSION * i, y)
  }
}

const drawField = () => {
  const X_SPACING = CELL_DIMENSION + SPACINGS.SCREEN_PADDING
  const Y_SPACING = CELL_DIMENSION + SPACINGS.SCREEN_PADDING
  const LETTERS = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J']

  stroke(PALETTE.INK)
  /**
   * Drawing a fields box
   */
  rect(X_SPACING, Y_SPACING, FIELD_DIMENSION, FIELD_DIMENSION)

  stroke(PALETTE.INK)

  for (let i = 1; i <= 10; i++) {
    /**
     * Draw horizontal lines
     */
    line(
      X_SPACING,
      Y_SPACING + CELL_DIMENSION * i,
      X_SPACING + FIELD_DIMENSION,
      Y_SPACING + CELL_DIMENSION * i
    )

    /**
     * Draw vertical lines
     */
    line(
      SPACINGS.SCREEN_PADDING + CELL_DIMENSION * i,
      SPACINGS.SCREEN_PADDING + CELL_DIMENSION,
      SPACINGS.SCREEN_PADDING + CELL_DIMENSION * i,
      SPACINGS.SCREEN_PADDING + FIELD_DIMENSION + CELL_DIMENSION
    )

    /**
     * Draw letters
     */
    textSize(20)
    text(
      LETTERS[i - 1],
      CELL_DIMENSION * i +
        SPACINGS.SCREEN_PADDING +
        Math.floor(CELL_DIMENSION / 3),
      CELL_DIMENSION
    )

    /**
     * Draw numbers
     */
    text(
      i,
      SPACINGS.SCREEN_PADDING + Math.floor(CELL_DIMENSION / 3),
      SPACINGS.SCREEN_PADDING +
        CELL_DIMENSION * i +
        (CELL_DIMENSION - Math.floor(CELL_DIMENSION / 3))
    )
  }

  stroke(PALETTE.BLACK)
}

const drawShipsPicker = () => {
  const MAX_SHIP_SIZE = 4
  const SPACE_BETWEEN = 200
  const HORIZONTAL_PADDING =
    FIELD_DIMENSION + CELL_DIMENSION + SPACINGS.SCREEN_PADDING + SPACE_BETWEEN
  const VERTICAL_PADDING = SPACINGS.SCREEN_PADDING + CELL_DIMENSION
  const Y_SPACING_STEP = 20

  for (let i = 1; i <= MAX_SHIP_SIZE; i++) {
    drawShip(HORIZONTAL_PADDING, i * CELL_DIMENSION + i * Y_SPACING_STEP, i)
  }
}
