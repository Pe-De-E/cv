import { describe, it, expect, beforeEach } from 'vitest'
import { calcPosition } from './calcPosition'

beforeEach(() => {
  Object.defineProperty(window, 'innerWidth', { value: 1024, writable: true })
  Object.defineProperty(window, 'innerHeight', { value: 768, writable: true })
})

function makeRect(x: number, y: number, w: number, h: number): DOMRect {
  return { left: x, top: y, width: w, height: h, right: x + w, bottom: y + h, x, y, toJSON: () => ({}) }
}

describe('calcPosition', () => {
  it('returns centered fallback when anchorRect is null', () => {
    const pos = calcPosition(null)
    expect(pos.left).toBe('50%')
    expect(pos.transform).toBe('translateX(-50%)')
  })

  it('centers dialog horizontally on the anchor', () => {
    const rect = makeRect(400, 300, 100, 40)
    const pos = calcPosition(rect)
    // anchor center = 450, dialog half = 180 → left = 270
    expect(pos.left).toBe('270px')
    expect(pos.transform).toBe('none')
  })

  it('clamps dialog to the right edge', () => {
    const rect = makeRect(900, 300, 100, 40)
    const pos = calcPosition(rect)
    // unclamped left would be 950-180=770, max allowed = 1024-360-8=656
    expect(pos.left).toBe('656px')
  })

  it('clamps dialog to the left edge', () => {
    const rect = makeRect(0, 300, 10, 40)
    const pos = calcPosition(rect)
    expect(pos.left).toBe('8px')
  })

  it('positions dialog above the anchor', () => {
    const rect = makeRect(400, 300, 100, 40)
    const pos = calcPosition(rect)
    // bottomFromViewport = 768 - 300 + (-30) = 438
    expect(pos.bottom).toBe('438px')
  })
})
