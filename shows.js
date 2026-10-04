// Shows data for Nava Dunkelman's portfolio website
// Update this file to easily modify show information
// Format: Each show has date, time, title, location, and optional moreInfo link

const showsData = {
    upcoming2026: [
        {
            date: "October 14",
            time: "8:30PM",
            title: "Contemporary East: Ikue Mori, Charmaine Lee, Nava Dunkelman, Reggie Nicholson, Yuko Fujiyama",
            location: "Roulette, Brooklyn, NY",
            moreInfo: "https://roulette.org/event/contemporary-east-ikue-mori-charmaine-lee-nava-dunkelman-reggie-nicholson/"
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
    },
    {
        date: "April 1-4",
        time: "TBA",
        title: "NOMON: Big Ears Festival 2027",
        location: "Knoxville, TN",
        moreInfo: "https://bigearsfestival.org"
    }],
};

// Make showsData globally available
window.showsData = showsData;
console.log('shows.js loaded, showsData:', showsData);

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = showsData;
}

