class PropertyValidation {
    constructor() {}

    //returns filtered array 
    filterProperties(arr) {
        let props = ['intersection', 'crime', 'incident_number', 'occurred_on', 'approximate_time']
        return arr.filter(item => {
            let flag = false
            props.forEach(prop => {
                if (!item.hasOwnProperty(prop)) {
                    flag = true
                }
            })
            if (flag === false) return true
        })
    }

    //returns filtered array
    filterGeoProperty(arr) {
        let props = ['latitude', 'longitude', 'human_address']
        return arr.filter(item => {
            let flag = false
            props.forEach(prop => {
                if (!item.intersection.hasOwnProperty(prop)) {
                    flag = true
                }
            })
            if (flag === false) return true
        })
    }
}