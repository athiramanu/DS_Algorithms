/**
 * @param {number[][]} transactions
 * @return {number}
 */
 var minTransfers = function(transactions) {
    let debts = getDebts(transactions);
    return dfs(0, debts);
    
};

function getDebts(transactions) {
    let map = {};
    
    for (let transaction of transactions) {
        map[transaction[0]] = (map[transaction[0]] || 0) - transaction[2];
        map[transaction[1]] = (map[transaction[1]] || 0) + transaction[2];
    }
    
    return Object.values(map);
}

function dfs(idx, debts) {
    while (debts[idx] == 0) idx++;
    
    if (idx == debts.length) return 0;
    
    let transactions = Infinity;
    
    for (let i = idx+1; i < debts.length; i++) {
        if (debts[idx]*debts[i] < 1) {
            debts[i] += debts[idx];
            transactions = Math.min(transactions, 1 + dfs(idx+1, debts));
            debts[i] -= debts[idx];
            if (debts[i] + debts[idx] == 0) break;
        }
    }
    
    return transactions
}