/*
 * "THE BEER-WARE LICENSE" (Revision 42):
 * Vitalii Kreminskyi <vkrmk13@gmail.com> wrote this file. As long as you retain this
 * notice you can do whatever you want with this stuff. If we meet some
 * day, and you think this stuff is worth it, you can buy me a beer in
 * return.
 */

'use strict'

const PALETTE = {
  BACKGROUND: '#FFF',
  GHOST: '#d285ff',
  BLACK: '#000',
  INK: '#2491ff',
}
const SPACINGS = {
  SCREEN_PADDING: 10,
}

const VIEWPORT_HEIGHT = window.innerHeight
const VIEWPORT_WIDTH = window.innerWidth

const CELLS_COUNT = 10
const CELL_DIMENSION = 50
const FIELD_DIMENSION = CELLS_COUNT * CELL_DIMENSION

let pickerState = {
  fourths: 1,
  triples: 2,
  doubles: 3,
  singles: 4,
}

let pickerShipsPositions = {
  4: [],
  3: [],
  2: [],
  1: [],
}

let draggingGhost = null // [x, y, size]

/**
 * Those are core functions of p5
 */
function setup() {
  createCanvas(VIEWPORT_WIDTH, VIEWPORT_HEIGHT)
  drawField()
}

function draw() {
  drawShipsPicker()
  drawDraggingGhost()
}

function mouseDragged() {
  handleMouseDragged()
}

function mouseReleased() {
  handleMouseReleased()

  draggingGhost = null
}

function keyPressed() {
  /**
   * @debug - Print cursor position
   */
  if (key === 'c' || key === 'C') {
    console.log(`Cursor: x: ${mouseX}, y: ${mouseY}`)
  }
}
