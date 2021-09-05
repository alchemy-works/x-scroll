export function throttle(func, delay) {
    let run = true
    return function () {
        if (!run) {
            return
        }
        run = false
        setTimeout(() => {
            func.apply(this, arguments)
            run = true
        }, delay)
    }
}