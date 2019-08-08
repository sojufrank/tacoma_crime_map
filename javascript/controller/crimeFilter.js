class CrimeFilter {
    constructor() {

        this.first = ['intersection', 'crime', 'incident_number', 'occurred_on', 'approximate_time']
        this.second = ['latitude', 'longitude', 'human_address']
    }

    filterBadProperties(arr) {

        return arr.filter(item => {
            let flag = false

            if (item.hasOwnProperty('intersection')) {
                if(item.intersection.hasOwnProperty('human_address')){
                        let temp = item.intersection.human_address.split(`:`)
                        temp = temp[1].split(`,`)
                        item.intersection.human_address = temp[0]
                        
                }

                this.second.forEach(prop => {
                    if (!item.intersection.hasOwnProperty(prop)) {
                        flag = true
                    } else {
                        item.intersection.latitude = parseFloat(item.intersection.latitude).toFixed(4)
                        item.intersection.longitude = parseFloat(item.intersection.longitude).toFixed(4)
                    }
                })
            }

            this.first.forEach(prop => {
                if (!item.hasOwnProperty(prop)) {
                    flag = true
                }
            })

            if (flag === false) return true
        })
    }
}