const rng = (scale = 5) => {
    return new Uint8Array(3 * scale).map(v => Math.random() * 0xff);
}

const tnid = (scale = 5, alphabet = "-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz") => {
    if (alphabet.length != 64)
        throw new Error("The alphabet must consist of 64 letters");
    scale |= 0;
    if (scale < 0)
        throw new RangeError("The scale must be larger than zero");
    const pool = rng(scale);
    const id = [];
    for (let i = 0; i < 3 * scale; i+=3) {
        const buf = pool[i] << 16 | pool[i + 1] << 8 | pool[i + 2];
        id.push(buf >> 18 & 0x3f);
        id.push(buf >> 12 & 0x3f);
        id.push(buf >> 6 & 0x3f);
        id.push(buf & 0x3f);
    }
    return id.map(n => alphabet.charAt(n)).join('');
};

module.exports = tnid;