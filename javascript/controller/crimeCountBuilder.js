class CrimeCountBuilder {
    constructor() {}

    buildCrimeCount(arr) {
        let obj = {}
        arr.forEach(item => {
            if (!obj.hasOwnProperty(item.crime)) {
                obj[item.crime] = 1
            } else {
                obj[item.crime]++
            }
        })
        return obj
    }
}