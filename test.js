'use strict'

const test = require('tape')
const isDtls = require('./')

test('should work', t => {
  t.false(isDtls(Buffer.from([0x4, 0x1, 0x2])))
  t.true(isDtls(Buffer.from([20, 0x1, 0x2])))
  t.true(isDtls(Buffer.from([21, 0x1, 0x2])))
  t.true(isDtls(Buffer.from([62, 0x1, 0x2])))
  t.true(isDtls(Buffer.from([63, 0x1, 0x2])))
  t.false(isDtls(Buffer.from([77, 0x1, 0x2])))

  t.end()
})

test('should throws', t => {
  const err = /Argument 1 should be a Buffer./

  t.throws(() => isDtls(1), err)
  t.throws(() => isDtls(NaN), err)
  t.throws(() => isDtls(null), err)
  t.throws(() => isDtls(undefined), err)
  t.throws(() => isDtls({}), err)
  t.throws(() => isDtls(''), err)
  t.throws(() => isDtls(Buffer.alloc(0)), err)

  t.end()
})
