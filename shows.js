// Shows data for Nava Dunkelman's portfolio website
// Update this file to easily modify show information
// Format: Each show has date, time, title, location, and optional moreInfo link

const showsData = {
    upcoming2026: [
        {
            date: "August 23",
            time: "11:00AM",
            title: "<i>Summer Tea 2026</i>, Solo",
            location: "Prospect Park, Brooklyn, NY",
            moreInfo: "https://teaartsculture.org/events/summer-tea-2026-27nec"
        },
        {
            date: "September 3",
            time: "9:00PM",
            title: "IMA, <i>TOPOS Music Festival 2026</i>",
            location: "EMPAC, Troy, NY",
            moreInfo: "https://empac.rpi.edu/events/2026/topos/petals-burst-flames"
        },
        {
            date: "September 7",
            time: "7:30PM",
            title: "<i>Striped Light</i>Duo with Brandon Seabrook",
            location: "Long Island City, NY",
            moreInfo: "https://empac.rpi.edu/events/2026/topos#dates-and-tickets"
        },
        {
            date: "September 11 & 12",
            time: "7:30PM",
            title: "<i>Maria Takeuchi, score for trees</i> with Henry Fraser, rocío sánchez, and che ali",
            location: "Theaterlab, New York, NY",
            moreInfo: "https://theaterlabnyc.com/maria-takeuchi-score-for-trees-sept-11-12-26/"
        },
        {
            date: "September 18",
            time: "8:30PM",
            title: "Quartet Sana Nagano, Ikue Mori, Trevor Dunn",
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
    upcoming2027: [
        {
            date: "January 9",
            time: "8:30PM",
            title: "with Shelley Hirsch, Ikue Mori, David Weinstein, Anthony Coleman, Jim Staley, and John Zorn",
            location: "The Stone, New York, NY",
        },
        {
        date: "June 9-12",
        time: "8:30PM",
        title: "Nava Dunkelman The Stone Residency",
        location: "The Stone, New York, NY",
    }],
};

// Make showsData globally available
window.showsData = showsData;
console.log('shows.js loaded, showsData:', showsData);

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = showsData;
}

