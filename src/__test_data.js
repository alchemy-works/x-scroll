export function generateData(length = 1) {
    return Array.from({ length }).map((_, index) => {
        return index.toString().padStart(10,'0')
    })
}
