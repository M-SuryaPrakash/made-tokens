
export const pxToMadeSpaceToken = (n: number) => {
    const multiplier = n / 4;
    var madeToken = "";
    if (multiplier === 0) {
        madeToken = "0";
    }
    else if (multiplier === 1) {
        madeToken = "var(--made-space-1-x)";
    }
    else {
        madeToken = `calc(var(--made-space-1-x)*${multiplier})`;
    }

    return madeToken;
};

export const pxToMadeSizeToken = (n: number) => {
    const multiplier = n / 4;
    var madeToken = "";
    if (multiplier === 0) {
        madeToken = "0";
    }
    else if (multiplier === 1) {
        madeToken = "var(--made-size-1-x)";
    }
    else {
        madeToken = `calc(var(--made-size-1-x)*${multiplier})`;
    }

    return madeToken;
};
