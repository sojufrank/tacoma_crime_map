class GpsGrid{
    constructor(){}

    //Create a data structure hash contains hash contains hash contains array
    // hash 1 = latitude
    // hash 2 = longitude
    // hash 3 = crimecategory
    // array = crime data objects
    gpsGridStruct(arr){
        let gpsGridData = {}

        arr.forEach(item => {

            let lat = item.intersection.latitude
            let log = item.intersection.longitude

            if (!gpsGridData.hasOwnProperty(lat)) {
                gpsGridData[lat] = {}
            }

            if (!gpsGridData[lat].hasOwnProperty(log)) {
                gpsGridData[lat][log] = {}
            }

            if (!gpsGridData[lat][log].hasOwnProperty(item.crime)) {
                gpsGridData[lat][log][item.crime] = []
            }

            gpsGridData[lat][log][item.crime].push(item)
        })
        return this.gpsGridPopulate(gpsGridData)
    }

    
    gpsGridPopulate(obj) {
        let o = obj
        let latitudes = Object.keys(o)

        latitudes.forEach(i1 => {
            let longitudes = Object.keys(o[i1])
            longitudes.forEach(i2 => {
                let crimes = Object.keys(o[i1][i2])
                let sq = Math.sqrt(crimes.length) 
                let rnd = Math.round(sq) +1
                for (let i = 0; i < crimes.length ; i++) {
                    const crimeArrayShortcut = o[i1][i2][crimes[i]]
                    crimeArrayShortcut.forEach(i3 => {
                        let lat,log
                        for (let j = 0; j < rnd; j++) {
                            for (let k = 0; k < rnd; k++) {
                                if ((i % rnd) == j) {
                                    lat = (parseFloat(i3.intersection.latitude) * 10000) + (j)
                                    lat = lat / 10000
                                    lat = lat.toFixed(4)
                                    //i3.intersection.latitude = lat
                                }
                                if (Math.floor(i / rnd) == k) {
                                    log = (parseFloat(i3.intersection.longitude) * 10000) + (k)
                                    log = log / 10000
                                    log = log.toFixed(4)
                                    //i3.intersection.longitude = log
                                }
                            }
                        }
                        i3.intersection.latitude = lat
                        i3.intersection.longitude = log
                        i3.round = rnd
                    })
                }
            })
        })
        return o
    }
}