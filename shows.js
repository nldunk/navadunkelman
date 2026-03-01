// Shows data for Nava Dunkelman's portfolio website
// Update this file to easily modify show information
// Format: Each show has date, time, title, location, and optional moreInfo link

const showsData = {
    upcoming2026: [
        {
            date: "March 11",
            time: "7:30PM",
            title: "performing in <i>Wičhínčala Šakówin</i> by KITE",
            location: "Caenegie Hall, Zankel Hall, New York, NY",
            moreInfo: "https://www.carnegiehall.org/calendar/2026/03/11/american-composers-orchestra-0730pm"
        },
        {
            date: "March 26",
            time: "8:30PM",
            title: "Trio with Theresa Wong and Jane Rigler",
            location: "The Stone, New York, NY",
        },
        {
            date: "April 3",
            time: "8:30PM",
            title: "Trio with Tomeka Reid and Ikue Mori",
            location: "The Stone, New York, NY",
        },
        {
            date: "September 4",
            time: "8:30PM",
            title: "Trio with Erik Friedlander and Myk Freedman",
            location: "The Stone, New York, NY",
        },
        {
            date: "November 6",
            time: "8:30PM",
            title: "Trio with Zeena Parkins and Nate Wooley",
            location: "The Stone, New York, NY",
        },
        {
            date: "December 10",
            time: "8:30PM",
            title: "Trio with Ikue Mori and gabby fluke-mogul",
            location: "The Stone, New York, NY",
        }
    ],
};

// Make showsData globally available
window.showsData = showsData;
console.log('shows.js loaded, showsData:', showsData);

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = showsData;
}

