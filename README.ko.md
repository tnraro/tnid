# tnid

tnid는 네트워크 전송을 위한 가볍고 확장 가능한 문자열 고유식별자입니다. MQTT의 topic과 같이 실시간으로 전송되는 패킷에 포함해야 할 경우에 적합합니다.

tnid는 ASCII 범위 내의 64자의 문자를 선별하여, 4, 8, 12, 16, 20자 등 다양한 길이의 식별자를 랜덤하게 생성합니다. 20자의 경우, UUID와 비슷한 수준(64^20=2^120)의 비트수를 가지면서 16자가 짧습니다.

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

식별자의 길이에 영향을 줍니다.

- 반환될 식별자의 길이는 `4 * scale`입니다.
- 경우의 수는 `2^{12 * scale}`입니다.

### alphabet

default value: "-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz"

식별자에서 사용할 문자열입니다.

- 문자는 총 64개이며, 각 문자는 서로 달라야 합니다.
- ASCII 범위 내의 문자를 사용하는 것을 권장합니다.
