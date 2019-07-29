class Controller {
    constructor() {
        this.model = new Model()
        this.view = new View()
    }

    init(arr){
        
    }

    seedModel(arr) {
        this.model.setData = this.sanitize(arr)
        this.model.setCrimeCount = this.buildCrimeCount(this.model.getData)
        this.buildMap()
        this.buildMarker()
    }

    sanitize(arr) {
        const propertyValidationObject = new PropertyValidation()
        const filteredObject = propertyValidationObject.filterProperties(arr)
        return propertyValidationObject.filterGeoProperty(filteredObject)
    }

    buildCrimeCount(arr) {
        const crimeCountBuilder = new CrimeCountBuilder()
        return crimeCountBuilder.buildCrimeCount(arr)
    }

    buildMap() {
        const elem = document.getElementById('map')
        const mapStartInfo = {
            center: {
                lat: 47.2161,
                lng: -122.4687
            },
            zoom: 13
        }
        this.model.setMap = new google.maps.Map(elem, mapStartInfo)
    }

    buildMarker() {
        let map = this.model.getMap


        
        const m = new MarkerBuilder()
        m.buildMarker(map)

    }

    test() {
        const d = this.model.getData
        const h = this.model.getCrimeCount

        //console.log(d)
        //console.table(h)
    }
}