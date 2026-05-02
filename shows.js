// Shows data for Nava Dunkelman's portfolio website
// Update this file to easily modify show information
// Format: Each show has date, time, title, location, and optional moreInfo link

const showsData = {
    upcoming2026: [
        {
            date: "May 28",
            time: "7:30PM",
            title: "<i>The Color of Pomegranates (1969)</i> Fundraising Film Screening Party",
            location: "MITU580, Brooklyn, NY",
            moreInfo: "https://theatermitu.ticketspice.com/mituthecolorofpomegranates"
        },
        {
            date: "May 30",
            time: "4:00PM",
            title: "<i>Four Handdreamers</i> with JJJJJerome Ellis, Robbie Wing, and Kite",
            location: "MoMA PS1, Queens, NY",
        },
        {
            date: "July 24",
            time: "2:00PM and 7:00PM",
            title: '<i>THE OCEAN ETCHED IN THE FOREST</i>, with Du Yun\'s OK Miss (Shayna Dunkelman, Grey McMurray, Aakash Mittal)',
            location: "Lincoln Center, New York, NY",
            moreInfo: "https://www.lincolncenter.org/series/summer-for-the-city/the-ocean-etched-in-the-forest-297"
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

