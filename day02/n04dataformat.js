function dateFormat(param) {
    const dt = new Date(param)
    const y = dt.getFullYear()
    const m = addZero(dt.getMonth() + 1)
    const d = addZero(dt.getDay())
    const hh = addZero(dt.getHours())
    const mm = addZero(dt.getMinutes())
    const ss = addZero(dt.getSeconds())

    return (`${y}-${m}-${d} ${hh}:${mm}:${ss}`)

}

function addZero(n) {
    return n > 9 ? n : '0' + n
}

exports.dateFormat=dateFormat