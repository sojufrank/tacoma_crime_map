class CrimeList {
    constructor() {}

    createCrimeList(arr) {

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