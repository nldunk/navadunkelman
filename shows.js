// Shows data for Nava Dunkelman's portfolio website
// Update this file to easily modify show information
// Format: Each show has date, time, title, location, and optional moreInfo link

const showsData = {
    upcoming: [
        {
            date: "September 12",
            time: "8:00PM",
            title: "Duo with Chuck Bettis",
            location: "Lava Club, Brooklyn, NY"
        },
        {
            date: "October 12",
            time: "7:30PM",
            title: '<i>THE OCEAN ETCHED IN THE FOREST</i>, with Du Yun\'s OK Miss',
            location: "Beijing Music Festival, Beijing, China"
        },
        {
            date: "November 7",
            time: "2:00PM & 7:00PM",
            title: '<i>THE OCEAN ETCHED IN THE FOREST</i>, with Du Yun\'s OK Miss',
            location: "Lincoln Center, New York, NY",
            moreInfo: "https://www.lincolncenter.org/series/lincoln-center-presents/the-ocean-etched-in-the-forest-890"
        },
        {
            date: "November 25",
            time: "6:30PM",
            title: '<i>CONTACT IMPROVISATION</i> : Duo with Maria Takeuchi',
            location: "Open Arts Studio, Brooklyn, NY",
            moreInfo: "https://chingichang.com/contact-improvisation-jam/2025/11/25/nava/maria"
        },
        {
            date: "December 3",
            time: "8:30PM",
            title: "Trio with William Winant and Bill Nace",
            location: "The Stone, New York, NY"
        },
        {
            date: "December 5",
            time: "8:30PM",
            title: "Trio with William Winant and Zeena Parkins",
            location: "The Stone, New York, NY"
        }
    ],
    
    upcoming2026: [
        {
            date: "March 26",
            time: "8:30PM",
            title: "Trio with Theresa Wong and Jane Rigler",
            location: "The Stone, New York, NY"
        },
    ],
};

// Make showsData globally available
window.showsData = showsData;

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = showsData;
}

