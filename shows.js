// Shows data for Nava Dunkelman's portfolio website
// Update this file to easily modify show information
// Format: Each show has date, time, title, location, and optional moreInfo link

const showsData = {
    upcoming2026: [
        {
            date: "June 14",
            time: "10:00AM",
            title: "<i>Metropolis Ensemble Biophony Project</i> with Laura Cocks, lee hooper, Charlotte Mundy, and Shara Lunon",
            location: "Tudor City Bridge, New York, NY",
        },
        {
            date: "June 27",
            time: "5PM",
            title: "<i>ZID, a musical showcase</i> with Sheherazaad and Sonya Belaya",
            location: "Fulton Street Collective, Chicago, IL",
        },
        {
            date: "July 24",
            time: "2:00PM and 7:00PM",
            title: '<i>THE OCEAN ETCHED IN THE FOREST</i>, with Du Yun\'s OK Miss (Shayna Dunkelman, Grey McMurray, Aakash Mittal)',
            location: "Lincoln Center, New York, NY",
            moreInfo: "https://www.lincolncenter.org/series/summer-for-the-city/the-ocean-etched-in-the-forest-297"
        },
        {
            date: "July 30-August 1 (EXACT DATE TBA)",
            time: "TBA",
            title: "NOMON, <i>BANG ON A CAN LOUD WEEKEND 2026</i>",
            location: "Mass MoCA, North Adams, MA",
            moreInfo: "https://massmoca.org/event/bang-on-a-can-loud-weekend-2026/"
        },
        {
            date: "September 3",
            time: "9:00PM",
            title: "IMA, <i>TOPOS Music Festival 2026</i>",
            location: "EMPAC, Troy, NY",
            moreInfo: "https://empac.rpi.edu/events/2026/topos#dates-and-tickets"
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

