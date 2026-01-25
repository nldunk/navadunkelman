// Shows data for Nava Dunkelman's portfolio website
// Update this file to easily modify show information
// Format: Each show has date, time, title, location, and optional moreInfo link

const showsData = {
    upcoming2026: [
        {
            date: "January 22",
            time: "7:00PM",
            title: "<i>Inter(Space) by Arts for Arts</i>, Duo with Chuck Bettis",
            location: "Nublu Classic, New York, NY",
            moreInfo: "https://www.artsforart.org/event/interspace-jan-22/"
        },{
            date: "January 28",
            time: "6:30PM",
            title: "<i>2026 Composers Now Festival Kick-Off Concert</i> with Pauchi Sasaki",
            location: "National Sawdust, Brooklyn, NY",
            moreInfo: "https://www.nationalsawdust.org/event/2026-composers-now-festival-kick-off-concert"
        },
        {
            date: "February 3",
            time: "8:00PM",
            title: "Duo with Chuck Bettis",
            location: "Threes Brewing, Brooklyn, NY",
        },{
            date: "February 11",
            time: "8:00PM",
            title: "Michael Foster with Strings",
            location: "Roulette, Brooklyn, NY",
            moreInfo: "https://roulette.org/event/michael-foster-with-strings-zosha-warpeha/"
        },
        {
            date: "February 16",
            time: "7:00PM",
            title: "Trio with Hisham Akira Bharoocha and Leila Bordreuil",
            location: "Artists Space, New York, NY",
        },
        {
            date: "March 26",
            time: "8:30PM",
            title: "Trio with Theresa Wong and Jane Rigler",
            location: "The Stone, New York, NY",
        },
    ],
};

// Make showsData globally available
window.showsData = showsData;
console.log('shows.js loaded, showsData:', showsData);

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = showsData;
}

