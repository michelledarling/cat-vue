//const ref = firebase.storage().ref();
Vue.filter('unique', function (values, unique) {
    return values.filter(function(element, index, self) {
        return index == self.indexOf(element);
    });
});
Vue.filter('slugify', function (value, unique) {
    return value.toString().toLowerCase().trim()
        .replace(/\s*$/g, '')
        .replace(/\s+/g, '-')
        .replace(/[^\w\-]+/g, '')
        .replace(/\-\-+/g, '-')
        .replace(/^-+/, '')
        .replace(/-+$/, '');
});

new Vue({
    el: '#app',
    data: {
        title: "All Cats Considered",
        catTypes: [
            {name: 'Tabby'},
            {name: 'Tuxedo'},
            {name: 'Long Hair'},
            {name: 'Short Hair'}
        ],
        selectedCatType: '',
        catColors: [
            {name: 'Brown'},
            {name: 'Black'},
            {name: 'Grey'},
            {name: 'White'},
            {name: 'Multi'}
        ],
        selectedCatColor: '',
        cats: [
            {name: 'Jeff'},
            {name: 'Sam'},
            {name: 'Molly'},
        ],
        selectedCatName: '',
        photos: [
            {
                file: 'jeff-toys.png',
                cats: ['Jeff'],
                color: ['Brown','Grey','Multi'],
                type: 'Tabby'
            },
            {
                file: 'jeff-needy.png',
                cats: ['Jeff'],
                color: ['Brown','Grey','Multi'],
                type: ['Tabby','Short Hair']
            },
            {
                file: 'jeff-plays.png',
                cats: ['Jeff'],
                color: ['Brown','Grey','Multi'],
                type: ['Tabby','Short Hair']
            },
            {
                file: 'jeff-tummy.jpeg',
                cats: ['Jeff'],
                color: ['Brown','Grey','Multi'],
                type: ['Tabby','Short Hair']
            },
            {
                file: 'sammy-plays.png',
                cats: ['Sam'],
                color: ['Black','White','Multi'],
                type: ['Tuxedo','Long Hair']
            },
            {
                file: 'molly-vac.png',
                cats: ['Molly'],
                color: ['Brown','Grey','Multi'],
                type: ['Tabby','Short Hair']
            },
            {
                file: 'sam-n-jeff.png',
                cats: ['Sam','Jeff'],
                color: ['Brown','Grey','Multi','Black','White'],
                type: ['Tabby','Short Hair','Tuxedo','Long Hair']
            },
            {
                file: 'dnd-cats.jpeg',
                cats: ['Sam','Jeff','Molly'],
                color: ['Brown','Grey','Multi','Black','White'],
                type: ['Tabby','Short Hair','Tuxedo','Long Hair']
            },
        ],
        newPhoto :
            {
                file: '',
                cats: [],
                color: [],
                type: []
        },
    },
    computed: {
        filteredPhotos() {
            let filterCatType = this.selectedCatType,
                filterCatColor = this.selectedCatColor,
                filterCatName = this.selectedCatName
            return this.photos.filter(function(photo) {
                let showImage = true
                if (filterCatType && filterCatType.length > 0) {
                    showImage = photo.type.includes(filterCatType)
                }
                if (filterCatColor && filterCatColor.length > 0) {
                    showImage = showImage && photo.color.includes(filterCatColor)
                }
                if (filterCatName && filterCatName.length > 0) {
                    showImage = showImage && photo.cats.includes(filterCatName)
                }
                return showImage
            })
        }
    },
    methods: {
        changeCatType (event) {
            this.selectedCatType = event.target.options[event.target.options.selectedIndex].value;
        },
        changeCatColor (event) {
            this.selectedCatColor = event.target.options[event.target.options.selectedIndex].value;
        },
        changeCatName (event) {
            this.selectedCatName = event.target.options[event.target.options.selectedIndex].value;
        },
        addNewPhoto() {
            this.photos.push(this.newPhoto);
            this.newPhoto = {
                file: '',
                cats: [],
                color: [],
                type: []
           };
        }
    }
})