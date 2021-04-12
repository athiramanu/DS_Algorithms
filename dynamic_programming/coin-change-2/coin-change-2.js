function numberOfWaysToMakeChange(n, denoms) {
    let ways = new Array(n + 1).fill(0);
    ways[0] = 1;

    for (let denom of denoms) {
        for (let i = 1; i <= n; i++) {
            if (i < denom) continue;
            ways[i] += ways[i - denom];
        }
    }

    return ways[n];
}