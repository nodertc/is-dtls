# is-dtls

[![Build Status](https://travis-ci.org/reklatsmasters/is-dtls.svg?branch=master)](https://travis-ci.org/reklatsmasters/is-dtls)
[![npm](https://img.shields.io/npm/v/is-dtls.svg)](https://npmjs.org/package/is-dtls)
[![node](https://img.shields.io/node/v/is-dtls.svg)](https://npmjs.org/package/is-dtls)
[![license](https://img.shields.io/npm/l/is-dtls.svg)](https://npmjs.org/package/is-dtls)
[![downloads](https://img.shields.io/npm/dm/is-dtls.svg)](https://npmjs.org/package/is-dtls)

Check if a Buffer is a [DTLS](https://tools.ietf.org/html/rfc4347) message. Used for demultiplex packets that are arriving on the same port. Follows [RFC7983](https://tools.ietf.org/html/rfc7983#section-7).

## Usage

```js
const dgram = require('dgram')
const is_dtls = require('is-dtls')

const socket = dgram.createSocket('udp4')

socket.on('message', (packet) => {
  if (is_dtls(packet)) {
    // handle DTLS...
  }
})

socket.bind(0)
```

## Related projects

* [`is-stun`](https://github.com/reklatsmasters/is-dtls) - Check if a Buffer is a [STUN](https://tools.ietf.org/html/rfc5389) message.
* [`is-turn`](https://github.com/reklatsmasters/is-turn) - Check if a Buffer is a [TURN](https://tools.ietf.org/html/rfc5766) message.
* [`is-rtp`](https://github.com/reklatsmasters/is-rtp) - Check if a Buffer is a [RTP/RTCP](https://tools.ietf.org/html/rfc3550) message.

## License

MIT, 2017 (c) Dmitry Tsvettsikh
