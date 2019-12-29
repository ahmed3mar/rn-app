export const priceFormat = (price, n, x) => {
    const re = '\\d(?=(\\d{' + (x || 3) + '})+' + (n > 0 ? '\\.' : '$') + ')';
    // eslint-disable-next-line no-bitwise
    return price.toFixed(Math.max(0, ~~n)).replace(new RegExp(re, 'g'), '$&,');
};

export const chunkPrice = maxPrice => {
    const chunkSize = Math.ceil(maxPrice / 10);
    let i = 0;
    let last = 0;
    let data = [];
    do {
        data.push([last, i + chunkSize]);
        i += chunkSize;
        last = i;
    } while (i < maxPrice);
    return data;
};
