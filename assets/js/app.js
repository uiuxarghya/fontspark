var generatedFont, generatedWeight, fonts = [{
    family: "Acumin",
    category: "sansSerif",
    designer: "Robert Slimbach",
    weights: ["400-Regular", "700-Bold"],
    library: "Adobe",
    download: "https://fonts.adobe.com/fonts/acumin",
    cssFamily: "acumin-pro",
    projectID: "nvi6csx"
}, {
    family: "Alegreya Sans",
    category: "sansSerif",
    designer: "Juan Pablo del Peral",
    weights: ["300-Light", "400-Regular", "700-Bold"],
    library: "Google",
    download: "https://fonts.google.com/specimen/Alegreya+Sans"
}, {
    family: "Amaranth",
    category: "sansSerif",
    designer: "Gesine Todt",
    weights: ["400-Regular", "700-Bold"],
    library: "Google",
    download: "https://fonts.google.com/specimen/Amaranth"
}, {
    family: "Amiko",
    category: "sansSerif",
    designer: "Impallari Type",
    weights: ["400-Regular", "700-Bold"],
    library: "Google",
    download: "https://fonts.google.com/specimen/Amiko"
}, {
    family: "Anton",
    category: "sansSerif",
    designer: "Vernon Adams",
    weights: ["400-Regular"],
    library: "Google",
    download: "https://fonts.google.com/specimen/Anton"
}, {
    family: "Archivo",
    category: "sansSerif",
    designer: "Omnibus-Type",
    weights: ["400-Regular", "700-Bold"],
    library: "Google",
    download: "https://fonts.google.com/specimen/Archivo"
}, {
    family: "Archivo Black",
    category: "sansSerif",
    designer: "Omnibus-Type",
    weights: ["400-Regular"],
    library: "Google",
    download: "https://fonts.google.com/specimen/Archivo+Black"
}, {
    family: "Archivo Narrow",
    category: "sansSerif",
    designer: "Omnibus-Type",
    weights: ["400-Regular", "700-Bold"],
    library: "Google",
    download: "https://fonts.google.com/specimen/Archivo+Narrow"
}, {
    family: "Arimo",
    category: "sansSerif",
    designer: "Steve Matteson",
    weights: ["400-Regular", "700-Bold"],
    library: "Google",
    download: "https://fonts.google.com/specimen/Arimo"
}, {
    family: "Asap",
    category: "sansSerif",
    designer: "Omnibus-Type",
    weights: ["400-Regular", "700-Bold"],
    library: "Google",
    download: "https://fonts.google.com/specimen/Asap"
}, {
    family: "Asap Condensed",
    category: "sansSerif",
    designer: "Omnibus-Type",
    weights: ["400-Regular", "700-Bold"],
    library: "Google",
    download: "https://fonts.google.com/specimen/Asap+Condensed"
}, {
    family: "Bebas Neue",
    category: "sansSerif",
    designer: "Ryoichi Tsunekawa",
    weights: ["400-Regular"],
    library: "Adobe",
    download: "https://fonts.adobe.com/fonts/bebas-neue",
    cssFamily: "bebas-neue",
    projectID: "rwp0mfl"
}, {
    family: "Cabin",
    category: "sansSerif",
    designer: "Impallari Type",
    weights: ["400-Regular", "700-Bold"],
    library: "Google",
    download: "https://fonts.google.com/specimen/Cabin"
}, {
    family: "Cabin Condensed",
    category: "sansSerif",
    designer: "Impallari Type",
    weights: ["400-Regular", "700-Bold"],
    library: "Google",
    download: "https://fonts.google.com/specimen/Cabin+Condensed"
}, {
    family: "Cairo",
    category: "sansSerif",
    designer: "Mohamed Gaber",
    weights: ["300-Light", "400-Regular", "700-Bold"],
    library: "Google",
    download: "https://fonts.google.com/specimen/Cairo"
}, {
    family: "Cantarell",
    category: "sansSerif",
    designer: "Dave Crossland",
    weights: ["400-Regular", "700-Bold"],
    library: "Google",
    download: "https://fonts.google.com/specimen/Cantarell"
}, {
    family: "CarlMarx",
    category: "sansSerif",
    designer: "Hidetaka Yamasaki",
    weights: ["400-Regular", "700-Bold"],
    library: "Adobe",
    download: "https://fonts.adobe.com/fonts/hidden-treasures",
    cssFamily: "carlmarx",
    projectID: "dfa0ged"
}, {
    family: "Chivo",
    category: "sansSerif",
    designer: "Omnibus-Type",
    weights: ["300-Light", "400-Regular", "700-Bold"],
    library: "Google",
    download: "https://fonts.google.com/specimen/Chivo"
}, {
    family: "Dosis",
    category: "sansSerif",
    designer: "Impallari Type",
    weights: ["300-Light", "400-Regular", "700-Bold"],
    library: "Google",
    download: "https://fonts.google.com/specimen/Dosis"
}, {
    family: "Droid Sans",
    category: "sansSerif",
    designer: "Google Android",
    weights: ["400-Regular", "700-Bold"],
    library: "Adobe",
    download: "https://fonts.adobe.com/fonts/droid-sans",
    cssFamily: "droid-sans",
    projectID: "nla6kqz"
}, {
    family: "Exo",
    category: "sansSerif",
    designer: "Natanael Gama",
    weights: ["300-Light", "400-Regular", "700-Bold"],
    library: "Google",
    download: "https://fonts.google.com/specimen/Exo"
}, {
    family: "Fira Sans",
    category: "sansSerif",
    designer: "Carrois Apostrophe",
    weights: ["300-Light", "400-Regular", "700-Bold"],
    library: "Google",
    download: "https://fonts.google.com/specimen/Fira+Sans"
}, {
    family: "Fira Sans Condensed",
    category: "sansSerif",
    designer: "Carrois Apostrophe",
    weights: ["300-Light", "400-Regular", "700-Bold"],
    library: "Google",
    download: "https://fonts.google.com/specimen/Fira+Sans+Condensed"
}, {
    family: "Fjalla One",
    category: "sansSerif",
    designer: "Sorkin Type",
    weights: ["400-Regular"],
    library: "Google",
    download: "https://fonts.google.com/specimen/Fjalla+One"
}, {
    family: "Hind",
    category: "sansSerif",
    designer: "Indian Type Foundry",
    weights: ["300-Light", "400-Regular", "700-Bold"],
    library: "Google",
    download: "https://fonts.google.com/specimen/Hind"
}, {
    family: "IBM Plex Sans",
    category: "sansSerif",
    designer: "Mike Abbink & Bold Monday",
    weights: ["300-Light", "400-Regular", "700-Bold"],
    library: "Google",
    download: "https://fonts.google.com/specimen/IBM+Plex+Sans"
}, {
    family: "IBM Plex Sans Condensed",
    category: "sansSerif",
    designer: "Mike Abbink & Bold Monday",
    weights: ["300-Light", "400-Regular", "700-Bold"],
    library: "Google",
    download: "https://fonts.google.com/specimen/IBM+Plex+Sans+Condensed"
}, {
    family: "Josefin Sans",
    category: "sansSerif",
    designer: "Santiago Orozco",
    weights: ["300-Light", "400-Regular", "700-Bold"],
    library: "Google",
    download: "https://fonts.google.com/specimen/Josefin+Sans"
}, {
    family: "Kanit",
    category: "sansSerif",
    designer: "Cadson Demak",
    weights: ["300-Light", "400-Regular", "700-Bold"],
    library: "Google",
    download: "https://fonts.google.com/specimen/Kanit"
}, {
    family: "Karla",
    category: "sansSerif",
    designer: "Jonny Pinhorn",
    weights: ["300-Light", "400-Regular", "700-Bold"],
    library: "Google",
    download: "https://fonts.google.com/specimen/Karla"
}, {
    family: "Lato",
    category: "sansSerif",
    designer: "Łukasz Dziedzic",
    weights: ["300-Light", "400-Regular", "700-Bold"],
    library: "Google",
    download: "https://fonts.google.com/specimen/Lato"
}, {
    family: "League Gothic",
    category: "sansSerif",
    designer: "Tyler Finck",
    weights: ["400-Regular"],
    library: "Adobe",
    download: "https://fonts.adobe.com/fonts/league-gothic",
    cssFamily: "league-gothic",
    projectID: "cpb8hfu"
}, {
    family: "Liberation Sans",
    category: "sansSerif",
    designer: "Steve Matteson",
    weights: ["400-Regular", "700-Bold"],
    library: "Adobe",
    download: "https://fonts.adobe.com/fonts/liberation-sans",
    cssFamily: "liberation-sans",
    projectID: "vra7jgk"
}, {
    family: "Libre Franklin",
    category: "sansSerif",
    designer: "Impallari Type",
    weights: ["300-Light", "400-Regular", "700-Bold"],
    library: "Google",
    download: "https://fonts.google.com/specimen/Libre+Franklin"
}, {
    family: "Merriweather Sans",
    category: "sansSerif",
    designer: "Sorkin Type",
    weights: ["300-Light", "400-Regular", "700-Bold"],
    library: "Google",
    download: "https://fonts.google.com/specimen/Merriweather+Sans"
}, {
    family: "Maven Pro",
    category: "sansSerif",
    designer: "Joe Prince",
    weights: ["400-Regular", "700-Bold"],
    library: "Google",
    download: "https://fonts.google.com/specimen/Maven+Pro"
}, {
    family: "Montserrat",
    category: "sansSerif",
    designer: "Julieta Ulanovsky",
    weights: ["300-Light", "400-Regular", "700-Bold"],
    library: "Google",
    download: "https://fonts.google.com/specimen/Montserrat"
}, {
    family: "Mukta",
    category: "sansSerif",
    designer: "Ek Type",
    weights: ["300-Light", "400-Regular", "700-Bold"],
    library: "Google",
    download: "https://fonts.google.com/specimen/Mukta"
}, {
    family: "Muli",
    category: "sansSerif",
    designer: "Vernon Adams",
    weights: ["300-Light", "400-Regular", "700-Bold"],
    library: "Google",
    download: "https://fonts.google.com/specimen/Muli"
}, {
    family: "Myriad",
    category: "sansSerif",
    designer: "Carol Twombly & Robert Slimbach",
    weights: ["700-Bold"],
    library: "Adobe",
    download: "https://fonts.adobe.com/fonts/myriad",
    cssFamily: "myriad-pro",
    projectID: "wnx7sph"
}, {
    family: "Myriad Condensed",
    category: "sansSerif",
    designer: "Carol Twombly & Robert Slimbach",
    weights: ["700-Bold"],
    library: "Adobe",
    download: "https://fonts.adobe.com/fonts/myriad",
    cssFamily: "myriad-pro-condensed",
    projectID: "wnx7sph"
}, {
    family: "Noto Sans",
    category: "sansSerif",
    designer: "Google",
    weights: ["400-Regular", "700-Bold"],
    library: "Google",
    download: "https://fonts.google.com/specimen/Noto+Sans"
}, {
    family: "Nunito",
    category: "sansSerif",
    designer: "Vernon Adams",
    weights: ["300-Light", "400-Regular", "700-Bold"],
    library: "Google",
    download: "https://fonts.google.com/specimen/Nunito"
}, {
    family: "Nunito Sans",
    category: "sansSerif",
    designer: "Vernon Adams & Jacques Le Bailly",
    weights: ["300-Light", "400-Regular", "700-Bold"],
    library: "Google",
    download: "https://fonts.google.com/specimen/Nunito+Sans"
}, {
    family: "Open Sans",
    category: "sansSerif",
    designer: "Steve Matteson",
    weights: ["300-Light", "400-Regular", "700-Bold"],
    library: "Google",
    download: "https://fonts.google.com/specimen/Open+Sans"
}, {
    family: "Oswald",
    category: "sansSerif",
    designer: "Vernon Adams",
    weights: ["300-Light", "400-Regular", "700-Bold"],
    library: "Google",
    download: "https://fonts.google.com/specimen/Oswald"
}, {
    family: "Overpass",
    category: "sansSerif",
    designer: "Delve Withrington",
    weights: ["300-Light", "400-Regular", "700-Bold"],
    library: "Google",
    download: "https://fonts.google.com/specimen/Overpass"
}, {
    family: "Oxygen",
    category: "sansSerif",
    designer: "Vernon Adams",
    weights: ["300-Light", "400-Regular", "700-Bold"],
    library: "Google",
    download: "https://fonts.google.com/specimen/Oxygen"
}, {
    family: "Philosopher",
    category: "sansSerif",
    designer: "Jovanny Lemonad",
    weights: ["400-Regular", "700-Bold"],
    library: "Google",
    download: "https://fonts.google.com/specimen/Philosopher"
}, {
    family: "Poppins",
    category: "sansSerif",
    designer: "Indian Type Foundry",
    weights: ["300-Light", "400-Regular", "700-Bold"],
    library: "Google",
    download: "https://fonts.google.com/specimen/Poppins"
}, {
    family: "Prompt",
    category: "sansSerif",
    designer: "Cadson Demak",
    weights: ["300-Light", "400-Regular", "700-Bold"],
    library: "Google",
    download: "https://fonts.google.com/specimen/Prompt"
}, {
    family: "Proza Libre",
    category: "sansSerif",
    designer: "Jasper de Waard",
    weights: ["400-Regular", "700-Bold"],
    library: "Google",
    download: "https://fonts.google.com/specimen/Proza+Libre"
}, {
    family: "PT Sans",
    category: "sansSerif",
    designer: "ParaType",
    weights: ["400-Regular", "700-Bold"],
    library: "Google",
    download: "https://fonts.google.com/specimen/PT+Sans"
}, {
    family: "PT Sans Narrow",
    category: "sansSerif",
    designer: "ParaType",
    weights: ["400-Regular", "700-Bold"],
    library: "Google",
    download: "https://fonts.google.com/specimen/PT+Sans+Narrow"
}, {
    family: "Quattrocento Sans",
    category: "sansSerif",
    designer: "Impallari Type",
    weights: ["400-Regular", "700-Bold"],
    library: "Google",
    download: "https://fonts.google.com/specimen/Quattrocento+Sans"
}, {
    family: "Quicksand",
    category: "sansSerif",
    designer: "Andrew Paglinawan",
    weights: ["300-Light", "400-Regular", "700-Bold"],
    library: "Google",
    download: "https://fonts.google.com/specimen/Quicksand"
}, {
    family: "Raleway",
    category: "sansSerif",
    designer: "Pablo Impallari & Rodrigo Fuenzalida",
    weights: ["300-Light", "400-Regular", "700-Bold"],
    library: "Google",
    download: "https://fonts.google.com/specimen/Raleway"
}, {
    family: "Reross Quadratic",
    category: "sansSerif",
    designer: "Elia Preuss",
    weights: ["400-Regular"],
    library: "Adobe",
    download: "https://fonts.adobe.com/fonts/hidden-treasures",
    cssFamily: "reross-quadratic",
    projectID: "isb5mgu"
}, {
    family: "Reross Rectangular",
    category: "sansSerif",
    designer: "Elia Preuss",
    weights: ["400-Regular"],
    library: "Adobe",
    download: "https://fonts.adobe.com/fonts/hidden-treasures",
    cssFamily: "reross-rectangular",
    projectID: "vwf3dng"
}, {
    family: "Roboto",
    category: "sansSerif",
    designer: "Christian Robertson",
    weights: ["300-Light", "400-Regular", "700-Bold"],
    library: "Google",
    download: "https://fonts.google.com/specimen/Roboto"
}, {
    family: "Roboto Condensed",
    category: "sansSerif",
    designer: "Christian Robertson",
    weights: ["300-Light", "400-Regular", "700-Bold"],
    library: "Google",
    download: "https://fonts.google.com/specimen/Roboto+Condensed"
}, {
    family: "Rosario",
    category: "sansSerif",
    designer: "Omnibus-Type",
    weights: ["400-Regular", "700-Bold"],
    library: "Google",
    download: "https://fonts.google.com/specimen/Rosario"
}, {
    family: "Rubik",
    category: "sansSerif",
    designer: "Hubert and Fischer",
    weights: ["300-Light", "400-Regular", "700-Bold"],
    library: "Google",
    download: "https://fonts.google.com/specimen/Rubik"
}, {
    family: "Saira",
    category: "sansSerif",
    designer: "Omnibus-Type",
    weights: ["300-Light", "400-Regular", "700-Bold"],
    library: "Google",
    download: "https://fonts.google.com/specimen/Saira"
}, {
    family: "Saira Condensed",
    category: "sansSerif",
    designer: "Omnibus-Type",
    weights: ["300-Light", "400-Regular", "700-Bold"],
    library: "Google",
    download: "https://fonts.google.com/specimen/Saira+Condensed"
}, {
    family: "Source Sans Pro",
    category: "sansSerif",
    designer: "Paul D. Hunt",
    weights: ["300-Light", "400-Regular", "700-Bold"],
    library: "Google",
    download: "https://fonts.google.com/specimen/Source+Sans+Pro"
}, {
    family: "Teko",
    category: "sansSerif",
    designer: "Indian Type Foundry",
    weights: ["300-Light", "400-Regular", "700-Bold"],
    library: "Google",
    download: "https://fonts.google.com/specimen/Teko"
}, {
    family: "Titillium Web",
    category: "sansSerif",
    designer: "Multiple Designers",
    weights: ["300-Light", "400-Regular", "700-Bold"],
    library: "Google",
    download: "https://fonts.google.com/specimen/Titillium+Web"
}, {
    family: "Ubuntu",
    category: "sansSerif",
    designer: "Dalton Maag",
    weights: ["300-Light", "400-Regular", "700-Bold"],
    library: "Google",
    download: "https://fonts.google.com/specimen/Ubuntu"
}, {
    family: "Varela round",
    category: "sansSerif",
    designer: "Joe Prince",
    weights: ["400-Regular"],
    library: "Google",
    download: "https://fonts.google.com/specimen/Varela+Round"
}, {
    family: "Work Sans",
    category: "sansSerif",
    designer: "Wei Huang",
    weights: ["300-Light", "400-Regular", "700-Bold"],
    library: "Google",
    download: "https://fonts.google.com/specimen/Work+Sans"
}, {
    family: "Abril Fatface",
    category: "serif",
    designer: "TypeTogether",
    weights: ["400-Regular"],
    library: "Google",
    download: "https://fonts.google.com/specimen/Abril+Fatface"
}, {
    family: "Acuta",
    category: "serif",
    designer: "Elena Albertoni",
    weights: ["300-Light", "400-Regular", "700-Bold"],
    library: "Adobe",
    download: "https://fonts.adobe.com/fonts/acuta",
    cssFamily: "acuta",
    projectID: "uxb2mnd"
}, {
    family: "Adobe Caslon",
    category: "serif",
    designer: "Carol Twombly",
    weights: ["600-Bold"],
    library: "Adobe",
    download: "https://fonts.adobe.com/fonts/adobe-caslon",
    cssFamily: "adobe-caslon-pro",
    projectID: "pcv5vio"
}, {
    family: "Adobe Garamond",
    category: "serif",
    designer: "Robert Slimbach",
    weights: ["400-Regular", "700-Bold"],
    library: "Adobe",
    download: "https://fonts.adobe.com/fonts/adobe-garamond",
    cssFamily: "adobe-garamond-pro",
    projectID: "wzs6ntl"
}, {
    family: "Alegreya",
    category: "serif",
    designer: "Huerta Tipográfica",
    weights: ["400-Regular", "700-Bold"],
    library: "Google",
    download: "https://fonts.google.com/specimen/Alegreya"
}, {
    family: "Arvo",
    category: "serif",
    designer: "Anton Koovit",
    weights: ["400-Regular", "700-Bold"],
    library: "Google",
    download: "https://fonts.google.com/specimen/Arvo"
}, {
    family: "BioRhyme",
    category: "serif",
    designer: "Aoife Mooney",
    weights: ["300-Light", "400-Regular", "700-Bold"],
    library: "Google",
    download: "https://fonts.google.com/specimen/BioRhyme"
}, {
    family: "Bitter",
    category: "serif",
    designer: "Huerta Tipográfica",
    weights: ["400-Regular", "700-Bold"],
    library: "Google",
    download: "https://fonts.google.com/specimen/Bitter"
}, {
    family: "Bree Serif",
    category: "serif",
    designer: "TypeTogether",
    weights: ["400-Regular"],
    library: "Google",
    download: "https://fonts.google.com/specimen/Bree+Serif"
}, {
    family: "Cardo",
    category: "serif",
    designer: "David Perry",
    weights: ["400-Regular", "700-Bold"],
    library: "Google",
    download: "https://fonts.google.com/specimen/Cardo"
}, {
    family: "Cormorant",
    category: "serif",
    designer: "Christian Thalmann",
    weights: ["300-Light", "400-Regular", "700-Bold"],
    library: "Google",
    download: "https://fonts.google.com/specimen/Cormorant"
}, {
    family: "Crete Round",
    category: "serif",
    designer: "TypeTogether",
    weights: ["400-Regular"],
    library: "Google",
    download: "https://fonts.google.com/specimen/Crete+Round"
}, {
    family: "Crimson Text",
    category: "serif",
    designer: "Sebastian Kosch",
    weights: ["400-Regular", "700-Bold"],
    library: "Google",
    download: "https://fonts.google.com/specimen/Cormorant"
}, {
    family: "Domine",
    category: "serif",
    designer: "Impallari Type",
    weights: ["400-Regular", "700-Bold"],
    library: "Google",
    download: "https://fonts.google.com/specimen/Domine"
}, {
    family: "Droid Serif",
    category: "serif",
    designer: "Google Android",
    weights: ["400-Regular", "700-Bold"],
    library: "Adobe",
    download: "https://fonts.adobe.com/fonts/droid-serif",
    cssFamily: "droid-serif",
    projectID: "gtc4pud"
}, {
    family: "EB Garamond",
    category: "serif",
    designer: "Georg Duffner & Octavio Pardo",
    weights: ["400-Regular", "700-Bold"],
    library: "Google",
    download: "https://fonts.google.com/specimen/EB+Garamond"
}, {
    family: "Eczar",
    category: "serif",
    designer: "Rosetta",
    weights: ["400-Regular", "700-Bold"],
    library: "Google",
    download: "https://fonts.google.com/specimen/Eczar"
}, {
    family: "Frank Ruhl Libre",
    category: "serif",
    designer: "Yanek Iontef",
    weights: ["300-Light", "400-Regular", "700-Bold"],
    library: "Google",
    download: "https://fonts.google.com/specimen/Frank+Ruhl+Libre"
}, {
    family: "IBM Plex Serif",
    category: "serif",
    designer: "Mike Abbink & Bold Monday",
    weights: ["300-Light", "400-Regular", "700-Bold"],
    library: "Google",
    download: "https://fonts.google.com/specimen/IBM+Plex+Serif"
}, {
    family: "Josefin Slab",
    category: "serif",
    designer: "Santiago Orozco",
    weights: ["300-Light", "400-Regular", "700-Bold"],
    library: "Google",
    download: "https://fonts.google.com/specimen/Josefin+Slab"
}, {
    family: "Kepler",
    category: "serif",
    designer: "Robert Slimbach",
    weights: ["700-Bold"],
    library: "Adobe",
    download: "https://fonts.adobe.com/fonts/kepler",
    cssFamily: "kepler-std-semicondensed-dis",
    projectID: "lkl3dht"
}, {
    family: "Liberation Serif",
    category: "serif",
    designer: "Steve Matteson",
    weights: ["400-Regular", "700-Bold"],
    library: "Adobe",
    download: "https://fonts.adobe.com/fonts/liberation-serif",
    cssFamily: "liberation-serif",
    projectID: "kqx6niy"
}, {
    family: "Libre Baskerville",
    category: "serif",
    designer: "Impallari Type",
    weights: ["400-Regular", "700-Bold"],
    library: "Google",
    download: "https://fonts.google.com/specimen/Libre+Baskerville"
}, {
    family: "Linden Hill",
    category: "serif",
    designer: "Barry Schwartz",
    weights: ["400-Regular"],
    library: "Google",
    download: "https://fonts.google.com/specimen/Linden+Hill"
}, {
    family: "Lora",
    category: "serif",
    designer: "Cyreal",
    weights: ["400-Regular", "700-Bold"],
    library: "Google",
    download: "https://fonts.google.com/specimen/Lora"
}, {
    family: "Merriweather",
    category: "serif",
    designer: "Sorkin Type",
    weights: ["300-Light", "400-Regular", "700-Bold"],
    library: "Google",
    download: "https://fonts.google.com/specimen/Merriweather"
}, {
    family: "Noto Serif",
    category: "serif",
    designer: "Google",
    weights: ["300-Light", "400-Regular", "700-Bold"],
    library: "Google",
    download: "https://fonts.google.com/specimen/Noto+Serif"
}, {
    family: "Neuton",
    category: "serif",
    designer: "Brian Zick",
    weights: ["300-Light", "400-Regular", "700-Bold"],
    library: "Google",
    download: "https://fonts.google.com/specimen/Neuton"
}, {
    family: "Old Standard TT",
    category: "serif",
    designer: "Alexey Kryukov",
    weights: ["400-Regular", "700-Bold"],
    library: "Google",
    download: "https://fonts.google.com/specimen/Old+Standard+TT"
}, {
    family: "Playfair Display",
    category: "serif",
    designer: "Claus Eggers Sørensen",
    weights: ["400-Regular", "700-Bold"],
    library: "Google",
    download: "https://fonts.google.com/specimen/Playfair+Display"
}, {
    family: "Prata",
    category: "serif",
    designer: "Cyreal",
    weights: ["400-Regular"],
    library: "Google",
    download: "https://fonts.google.com/specimen/Prata"
}, {
    family: "PT Serif",
    category: "serif",
    designer: "ParaType",
    weights: ["400-Regular", "700-Bold"],
    library: "Google",
    download: "https://fonts.google.com/specimen/PT+Serif"
}, {
    family: "Quattrocento",
    category: "serif",
    designer: "Impallari Type",
    weights: ["400-Regular", "700-Bold"],
    library: "Google",
    download: "https://fonts.google.com/specimen/Quattrocento"
}, {
    family: "Roboto Slab",
    category: "serif",
    designer: "Christian Robertson",
    weights: ["300-Light", "400-Regular", "700-Bold"],
    library: "Google",
    download: "https://fonts.google.com/specimen/Roboto+Slab"
}, {
    family: "Rokkitt",
    category: "serif",
    designer: "Vernon Adams & Kalapi Gajjar",
    weights: ["300-Light", "400-Regular", "700-Bold"],
    library: "Google",
    download: "https://fonts.google.com/specimen/Rokkitt"
}, {
    family: "Rufina",
    category: "serif",
    designer: "Martin Sommaruga",
    weights: ["400-Regular", "700-Bold"],
    library: "Google",
    download: "https://fonts.google.com/specimen/Rufina"
}, {
    family: "Scope One",
    category: "serif",
    designer: "Dalton Maag",
    weights: ["400-Regular"],
    library: "Google",
    download: "https://fonts.google.com/specimen/Scope+One"
}, {
    family: "Source Serif Pro",
    category: "serif",
    designer: "Frank Grießhammer",
    weights: ["400-Regular", "700-Bold"],
    library: "Google",
    download: "https://fonts.google.com/specimen/Source+Serif+Pro"
}, {
    family: "Spectral",
    category: "serif",
    designer: "Production Type",
    weights: ["300-Light", "400-Regular", "700-Bold"],
    library: "Google",
    download: "https://fonts.google.com/specimen/Spectral"
}, {
    family: "Taviraj",
    category: "serif",
    designer: "Cadson Demak",
    weights: ["300-Light", "400-Regular", "700-Bold"],
    library: "Google",
    download: "https://fonts.google.com/specimen/Taviraj"
}, {
    family: "Ten Mincho",
    category: "serif",
    designer: " Robert Slimbach & Ryoko Nishizuka 西塚涼子",
    weights: ["400-Regular"],
    library: "Adobe",
    download: "https://fonts.adobe.com/fonts/ten-mincho",
    cssFamily: "ten-mincho",
    projectID: "usm7das"
}, {
    family: "Tinos",
    category: "serif",
    designer: "Steve Matteson",
    weights: ["400-Regular", "700-Bold"],
    library: "Google",
    download: "https://fonts.google.com/specimen/Tinos"
}, {
    family: "Trirong",
    category: "serif",
    designer: "Cadson Demak",
    weights: ["300-Light", "400-Regular", "700-Bold"],
    library: "Google",
    download: "https://fonts.google.com/specimen/Trirong"
}, {
    family: "Unna",
    category: "serif",
    designer: "Omnibus-Type",
    weights: ["400-Regular", "700-Bold"],
    library: "Google",
    download: "https://fonts.google.com/specimen/Unna"
}, {
    family: "Utopia",
    category: "serif",
    designer: "Robert Slimbach",
    weights: ["900-Bold"],
    library: "Adobe",
    download: "https://fonts.adobe.com/fonts/utopia",
    cssFamily: "utopia-std-headline",
    projectID: "vzl1hvz"
}, {
    family: "Yrsa",
    category: "serif",
    designer: "Rosetta",
    weights: ["300-Light", "400-Regular", "700-Bold"],
    library: "Google",
    download: "https://fonts.google.com/specimen/Yrsa"
}, {
    family: "Alexa",
    category: "other",
    designer: "John Benson.",
    weights: ["400-Regular"],
    library: "Adobe",
    download: "https://fonts.adobe.com/fonts/alexa",
    cssFamily: "alexa-std",
    projectID: "cym6pbr"
}, {
    family: "Alfarn",
    category: "other",
    designer: "Celine Hurka",
    weights: ["400-Regular"],
    library: "Adobe",
    download: "https://fonts.adobe.com/fonts/hidden-treasures",
    cssFamily: "alfarn",
    projectID: "mil3sdg"
}, {
    family: "Anonymous Pro",
    category: "other",
    designer: "Mark Simonson",
    weights: ["400-Regular", "700-Bold"],
    library: "Google",
    download: "https://fonts.google.com/specimen/Anonymous+Pro"
}, {
    family: "Birra",
    category: "other",
    designer: "Darden Studio",
    weights: ["700-Bold"],
    library: "Adobe",
    download: "https://fonts.adobe.com/fonts/birra",
    cssFamily: "birra-2",
    projectID: "utj2ctz"
}, {
    family: "Chonburi",
    category: "other",
    designer: "Cadson Demak",
    weights: ["400-Regular"],
    library: "Google",
    download: "https://fonts.google.com/specimen/Chonburi"
}, {
    family: "Courier",
    category: "other",
    designer: "Howard Kettler",
    weights: ["500-Regular", "700-Bold"],
    library: "Adobe",
    download: "https://fonts.adobe.com/fonts/courier",
    cssFamily: "courier-std",
    projectID: "iuh3wem"
}, {
    family: "Cousine",
    category: "other",
    designer: "Steve Matteson",
    weights: ["400-Regular", "700-Bold"],
    library: "Google",
    download: "https://fonts.google.com/specimen/Cousine"
}, {
    family: "Dancing Script",
    category: "other",
    designer: "Impallari Type",
    weights: ["400-Regular", "700-Bold"],
    library: "Google",
    download: "https://fonts.google.com/specimen/Dancing+Script"
}, {
    family: "Fira Mono",
    category: "other",
    designer: "Carrois Apostrophe",
    weights: ["400-Regular", "700-Bold"],
    library: "Google",
    download: "https://fonts.google.com/specimen/Fira+Mono"
}, {
    family: "Hack",
    category: "other",
    designer: "Christopher Simpkins",
    weights: ["400-Regular", "700-Bold"],
    library: "Adobe",
    download: "https://fonts.adobe.com/fonts/hack",
    cssFamily: "hack",
    projectID: "qux6jhk"
}, {
    family: "IBM Plex Mono",
    category: "other",
    designer: "Mike Abbink & Bold Monday",
    weights: ["300-Light", "400-Regular", "700-Bold"],
    library: "Google",
    download: "https://fonts.google.com/specimen/IBM+Plex+Mono"
}, {
    family: "Inconsolata",
    category: "other",
    designer: "Raph Levien",
    weights: ["400-Regular", "700-Bold"],
    library: "Google",
    download: "https://fonts.google.com/specimen/Inconsolata"
}, {
    family: "Jockey One",
    category: "other",
    designer: "TypeTogether",
    weights: ["400-Regular"],
    library: "Google",
    download: "https://fonts.google.com/specimen/Jockey+One"
}, {
    family: "Joschmi",
    category: "other",
    designer: "Flavia Zimbardi",
    weights: ["400-Regular"],
    library: "Adobe",
    download: "https://fonts.adobe.com/fonts/hidden-treasures",
    cssFamily: "joschmi",
    projectID: "lmd5flm"
}, {
    family: "Lobster",
    category: "other",
    designer: "Impallari Type & Cyreal",
    weights: ["400-Regular"],
    library: "Google",
    download: "https://fonts.google.com/specimen/Lobster"
}, {
    family: "Myriad Wild",
    category: "other",
    designer: "Carol Twombly & Robert Slimbach",
    weights: ["400-Regular"],
    library: "Adobe",
    download: "https://fonts.adobe.com/fonts/myriad-wild",
    cssFamily: "myriad-std-tilt",
    projectID: "ybq7ahe"
}, {
    family: "Overpass Mono",
    category: "other",
    designer: "Delve Withrington",
    weights: ["300-Light", "400-Regular", "700-Bold"],
    library: "Google",
    download: "https://fonts.google.com/specimen/Overpass+Mono"
}, {
    family: "Pacifico",
    category: "other",
    designer: "Vernon Adams & Jacques Le Bailly",
    weights: ["400-Regular"],
    library: "Google",
    download: "https://fonts.google.com/specimen/Pacifico"
}, {
    family: "PT Mono",
    category: "other",
    designer: "ParaType",
    weights: ["400-Regular"],
    library: "Google",
    download: "https://fonts.google.com/specimen/PT+Mono"
}, {
    family: "Roboto Mono",
    category: "other",
    designer: "Christian Robertson",
    weights: ["300-Light", "400-Regular", "700-Bold"],
    library: "Google",
    download: "https://fonts.google.com/specimen/Roboto+Mono"
}, {
    family: "Sanvito",
    category: "other",
    designer: "Robert Slimbach",
    weights: ["700-Bold"],
    library: "Adobe",
    download: "https://fonts.adobe.com/fonts/sanvito",
    cssFamily: "sanvito-pro-display",
    projectID: "bhs4foa"
}, {
    family: "Satisfy",
    category: "other",
    designer: "Sideshow",
    weights: ["400-Regular"],
    library: "Adobe",
    download: "https://fonts.adobe.com/fonts/satisfy",
    cssFamily: "satisfy",
    projectID: "ctm0gur"
}, {
    family: "Source Code Pro",
    category: "other",
    designer: "Paul D. Hunt",
    weights: ["300-Light", "400-Regular", "700-Bold"],
    library: "Google",
    download: "https://fonts.google.com/specimen/Source+Code+Pro"
}, {
    family: "Space Mono",
    category: "other",
    designer: "Colophon",
    weights: ["400-Regular", "700-Bold"],
    library: "Google",
    download: "https://fonts.google.com/specimen/Space+Mono"
}, {
    family: "Tekton",
    category: "other",
    designer: "David Siegel",
    weights: ["700-Bold"],
    library: "Adobe",
    download: "https://fonts.adobe.com/fonts/tekton",
    cssFamily: "tekton-pro",
    projectID: "kya3rla"
}, {
    family: "Ubuntu Mono",
    category: "other",
    designer: "Dalton Maag",
    weights: ["400-Regular", "700-Bold"],
    library: "Google",
    download: "https://fonts.google.com/specimen/Ubuntu+Mono"
}, {
    family: "VT323",
    category: "other",
    designer: "Peter Hull",
    weights: ["400-Regular"],
    library: "Google",
    download: "https://fonts.google.com/specimen/VT323"
}, {
    family: "Xants",
    category: "other",
    designer: "Luca Pellegrini",
    weights: ["400-Regular"],
    library: "Adobe",
    download: "https://fonts.adobe.com/fonts/hidden-treasures",
    cssFamily: "xants",
    projectID: "jro8reh"
}], fontHistory = [], fontWeightHistory = [];
function generateFont() {
    var e = document.getElementById("font-category-select").value
      , o = document.getElementById("font-weight-select").value;
    if ("any" === e)
        var t = fonts;
    else
        t = fonts.filter((function(o) {
            return o.category === e
        }
        ));
    if ("any" === o) {
        generatedFont = (a = t)[Math.floor(Math.random() * a.length)],
        generatedWeight = generatedFont.weights[Math.floor(Math.random() * generatedFont.weights.length)]
    } else {
        var a = t.filter((function(e) {
            return e.weights.includes(o)
        }
        ));
        generatedFont = a[Math.floor(Math.random() * a.length)],
        generatedWeight = o
    }
    "Google" === generatedFont.library ? loadGoogleFont() : loadAdobeFont(),
    fontHistory.unshift(generatedFont),
    fontWeightHistory.unshift(generatedWeight)
}
function back() {
    fontHistory.length > 1 && (generatedFont = fontHistory[1],
    generatedWeight = fontWeightHistory[1],
    "Google" === generatedFont.library ? loadGoogleFont() : loadAdobeFont(),
    fontHistory.splice(0, 1),
    fontWeightHistory.splice(0, 1))
}
function loadGoogleFont() {
    WebFont.load({
        google: {
            families: [generatedFont.family + ":" + generatedWeight.slice(0, 3)]
        },
        active: function() {
            document.getElementById("user-input").style.fontFamily = generatedFont.family,
            document.getElementById("user-input").style.fontWeight = generatedWeight.slice(0, 3),
            document.getElementById("generatedFont").innerHTML = generatedFont.family,
            document.getElementById("generatedWeight").innerHTML = generatedWeight.substr(4),
            document.getElementById("get-font-button").href = generatedFont.download
        }
    })
}
function loadAdobeFont() {
    WebFont.load({
        typekit: {
            id: [generatedFont.projectID]
        },
        active: function() {
            document.getElementById("user-input").style.fontFamily = generatedFont.cssFamily,
            document.getElementById("user-input").style.fontWeight = generatedWeight.slice(0, 3),
            document.getElementById("generatedFont").innerHTML = generatedFont.family,
            document.getElementById("generatedWeight").innerHTML = generatedWeight.substr(4),
            document.getElementById("get-font-button").href = generatedFont.download
        }
    })
}
function toggleDarkMode() {
    document.body.classList.toggle("dark-mode"),
    localStorage.setItem("activeState", document.body.classList)
}
document.body.classList = localStorage.getItem("activeState");
var i = 0
  , placeholderText = "Type something..."
  , typingSpeed = 100;
function typeOnEffect() {
    i < placeholderText.length && (document.getElementById("user-input").placeholder += placeholderText.charAt(i),
    i++,
    setTimeout(typeOnEffect, typingSpeed))
}
$("#font-options-toggle").click((function() {
    $("#font-options, #generated-font-info, #options-icon, #checkmark-icon").toggle()
}
)),
$("#generate-button").click((function() {
    1 == $("#font-options").is(":visible") && $("#font-options, #generated-font-info, #options-icon, #checkmark-icon").toggle()
}
)),
$("textarea").val(""),
$("textarea").on("input", (function() {
    $(this).val().length > 0 ? ($(this).css("text-align", "center"),
    $(this).css("width", "100%")) : ($(this).css("text-align", "left"),
    $(this).css("width", ""))
}
)),
$("textarea").one("input", (function() {
    $("#dashboard > div").fadeToggle(),
    $(this).animate({
        marginTop: "-8%"
    })
}
)),
$("#menu-button").click((function() {
    $("#extras-menu").toggle("slide"),
    $("#menu-icon-top-bar").toggleClass("top-bar-rotated"),
    $("#menu-icon-bottom-bar").toggleClass("bottom-bar-rotated"),
    window.matchMedia("(max-width: 500px)").matches && $("#logo-container").fadeToggle("fast")
}
));
var sansSerifDirectory = fonts.filter((function(e) {
    return "sansSerif" === e.category
}
))
  , serifDirectory = fonts.filter((function(e) {
    return "serif" === e.category
}
))
  , otherDirectory = fonts.filter((function(e) {
    return "other" === e.category
}
));
function loadDirectory() {
    for (i = 0; i < sansSerifDirectory.length; i++)
        document.getElementById("sans-serif-list").innerHTML += "<div class='font-listing'><div><h3>" + sansSerifDirectory[i].family + "</h3><p>Designed by " + sansSerifDirectory[i].designer + "</div><a href='" + sansSerifDirectory[i].download + "' target='_blank'>Get font &rtrif; </a></div>";
    for (i = 0; i < serifDirectory.length; i++)
        document.getElementById("serif-list").innerHTML += "<div class='font-listing'><div><h3>" + serifDirectory[i].family + "</h3><p>Designed by " + serifDirectory[i].designer + "</div><a href='" + serifDirectory[i].download + "' target='_blank'>Get font &rtrif;</a></div>";
    for (i = 0; i < otherDirectory.length; i++)
        document.getElementById("other-list").innerHTML += "<div class='font-listing'><div><h3>" + otherDirectory[i].family + "</h3><p>Designed by " + otherDirectory[i].designer + "</div><a href='" + otherDirectory[i].download + "' target='_blank'>Get font &rtrif;</a></div>";
    document.getElementById("fonts-count").innerHTML += fonts.length
}
