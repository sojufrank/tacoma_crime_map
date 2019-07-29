class MarkerBuilder {
    constructor() {
        let markers = {}
    }

    set setMarkers(obj){
        this.markers = obj
    }

    get getMarkers(){
        return this.markers
    }

    buildMarker(arg) {

        //build marker
        //set icon
        //make icons
        //make hash
        //store hash
        //build popup window


        let m = arg

        let marker = new google.maps.Marker({
            position: {
                lat: 47.2161,
                lng: -122.4687
            },
            map: m,
            title: 'Hello World!',
            icon: 'credit.svg'
        })

        let Popup = createPopupClass()
        let popup = new Popup(
            new google.maps.LatLng(47.2161, -122.4687),
            document.getElementById('content'));
        popup.setMap(m);

        console.log(this)


    }
}