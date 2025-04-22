export default function printMatrix(mat: number[][]): void {
    for (const row of mat) {
        console.log('\t' + row.join(' '));
    }
}
