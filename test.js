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

test('should be false', t => {
  t.false(isDtls(1))
  t.false(isDtls(NaN))
  t.false(isDtls(null))
  t.false(isDtls(undefined))
  t.false(isDtls({}))
  t.false(isDtls(''))
  t.false(isDtls(Buffer.alloc(0)))

  t.end()
})
