function diskStacking(disks) {
    // Write your code here.
    disks.sort((a, b) => a[2] - b[2]);
    let heights = disks.map(disk => disk[2]);
    let sequence = new Array(disks.length).fill(null);
    let maxHeightIdx = 0;

    for (let i = 0; i < disks.length; i++) {
        let currDisk = disks[i];
        for (let j = 0; j < i; j++) {
            let otherDisk = disks[j];
            if (
                otherDisk[0] < currDisk[0] &&
                otherDisk[1] < currDisk[1] &&
                otherDisk[2] < currDisk[2] &&
                heights[j] + currDisk[2] > heights[i]
            ) {
                sequence[i] = j;
                heights[i] = heights[j] + currDisk[2];
            }
        }
        maxHeightIdx = heights[maxHeightIdx] > heights[i] ? maxHeightIdx : i;
    }
    return getSequence(sequence, disks, maxHeightIdx);
}

function getSequence(sequence, disks, idx) {
    let result = [];

    while (sequence[idx] != null) {
        result.unshift(disks[idx]);
        idx = sequence[idx];
    }
    result.unshift(disks[idx]);

    return result
}