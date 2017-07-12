'use strict'

const numberInRange = byte => byte >= 20 && byte <= 63

module.exports = isDtls

function isDtls(packet) {
  if (Buffer.isBuffer(packet) && packet.length > 0) {
    return numberInRange(packet[0])
  }

  throw new TypeError('Argument 1 should be a Buffer.')
}
