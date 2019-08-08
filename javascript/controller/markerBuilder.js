class MarkerBuilder {
    constructor() {
        this.popupFlag = false
        this.popup
        this.current
    }

    buildMarkers(gMap, crimeData) {

        const iconSet = new IconSetter()

        const m = gMap
        let markerArray = []

        const o = crimeData
        this.oo = crimeData
        const latitudes = Object.keys(crimeData)

        const markerClusterOptions = {
            imagePath: 'img/markerClusterer/m',
            zoomOnClick: false,
            maxZoom: 16
        }

        latitudes.forEach(i1 => {
            const longitudes = Object.keys(o[i1])
            longitudes.forEach(i2 => {
                const crimes = Object.keys(o[i1][i2])
                crimes.forEach(i3 => {
                    o[i1][i2][i3] = o[i1][i2][i3].map(i4 => {

                        let geo = new google.maps.LatLng(i4.intersection.latitude, i4.intersection.longitude)

                        const crimesArr = o[i1][i2][i3]
                        let marker = new google.maps.Marker({
                            position: geo,
                            map: m,
                            title: 'title',
                            icon: iconSet.assign(i4.crime)
                        })


                        marker.addListener('click', (e) => {
                            //content must be populated before popup is created
                            const Popup = createPopupClass()

                            if (this.current == marker) {
                                console.log('same')
                            } else {
                                console.log('different')
                            }

                            if (this.popupFlag) {

                                this.popupFlag = false
                                this.popup.setMap(null)

                            }
                            const container = document.getElementById('contentContainer')
                            let content = document.createElement('div')
                            content.id = 'content'
                            container.appendChild(content)

                            this.createContent(i4, crimesArr)

                            this.popup = new Popup(geo, content);

                            this.popup.setMap(m);
                            this.popupFlag = true
                            this.current = marker


                        })
                        markerArray.push(marker)
                    })
                })
            })
        })

        new MarkerClusterer(m, markerArray, markerClusterOptions)
    }

    createContent(crime, crimeArr) {
        let elem = document.getElementById('content')
        let c = crime.occurred_on
        elem.innerHTML = `${crime.crime} <br> 
                            ${crime.intersection.human_address} <br>
                            ${new Intl.DateTimeFormat('en-US', {'en-US':'long'}).format(new Date(c))} <br>
                            ${crimeArr.length}x additional crimes of this type found at this location.
                            `
        crimeArr.forEach(item => {
            console.log(item)
        })
    }
}