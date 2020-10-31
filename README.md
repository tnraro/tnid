# tnid

The tnid is a light, scalable string unique identifier for network transmission. It is suitable for situations where it should be included in packets transmitted in real-time, such as MQTT's topic.

It consists 64 characters within the ASCII and randomly generates identifiers of varying lengths, including 4, 8, 12, 16, and 20.

# usage

```js
const tnid = require("tnid");
// or
import tnid from "tnid";

const id = tnid();
```

# signature

```js
(scale?: number, key?: string) => string
```

### scale

default value: 5

- The length of the identifier to be returned is `4 * scale`.
- The number of cases is `2^{20 * scale}`.

### alphabet

default value: "-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz"

The string to consist identifier.

- The length of the string is 64. each character is unique.
- We recommend using characters within the ASCII code.