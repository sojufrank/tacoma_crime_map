class Controller {
    constructor() {

        this.model = new Model()
        this.view = new View()
    }

    start(arr) {

        this.model.setData = this.modelController().filter(arr)
        this.model.setCrimeObject = this.modelController().gpsCoordGrid(this.model.getData)
        this.model.setCrimeList = this.modelController().crimeList(this.model.getData)
        this.model.setMap = this.googleController().createMap()
        this.googleController().createMarker(this.model.getMap, this.model.getCrimeObject)
        this.test()
    }

    modelController(arr) {

        this.cFilter = new CrimeFilter()
        this.clist = new CrimeList()
        this.grid = new GpsGrid()

        return {

            filter: (arr) => {
                return this.cFilter.filterBadProperties(arr)
            },

            gpsCoordGrid: (arr) => {
                return this.grid.gpsGridStruct(arr)
            },

            crimeList: (arr) => {
                return this.clist.createCrimeList(arr)
            }
        }
    }

    googleController() {

        this.m = new MarkerBuilder()
        
        return {
            createMap: () => {
                const elem = document.getElementById('map')
                let mapStartInfo = {
                    center: {
                        lat: 47.182954,
                        lng: -122.46235
                    },
                    zoom: 18,
                    styles: aubergine,
                    mapTypeControl:false,
                    fullscreenControl:false,
                    streetViewControl:false,
                }
                
                return new google.maps.Map(elem, mapStartInfo)
            },

            createMarker: (map, arr) => {
                this.m.buildMarkers(map, arr)
            }
        }
    }

    test() {
        const d = this.model.getData
        const h = this.model.getCrimeList
        console.log('api data objects 4 the curious')
        console.log(d, h)
    }
}