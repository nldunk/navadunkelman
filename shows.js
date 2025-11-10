// Shows data for Nava Dunkelman's portfolio website
// Update this file to easily modify show information
// Format: Each show has date, time, title, location, and optional moreInfo link

const showsData = {
    upcoming: [
        {
            date: "November 14",
            time: "6:30PM",
            title: '<i>World Poetry Salon</i>: Luljeta Lleshanaku, Nava Dunkelman, and Patricio Ferrari',
            location: "Stavros Niarchos Foundation Library (SNFL), New York, NY",
            moreInfo: "https://www.nypl.org/events/programs/2025/11/14/world-poetry-salon-luljeta-lleshanaku-nava-dunkelman-and-patricio-ferrari"
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
        }
        ,{
            date: "December 5",
            time: "6:30PM",
            title: "<i>NOMON RELEASE LISTENING PARTY</i>",
            location: "Public Records UPSTAIRS, Brooklyn, NY",
            moreInfo: "more info TBA"
        },
        {
            date: "December 11",
            time: "7:00PM",
            title: "<i>NOMON RELEASE SHOW</i> with Kambaba and Angélica Negrón",
            location: "Ki Smith Gallery, New York, NY",
            moreInfo: "https://www.kismithgallery.com/event-details/nomon-at-ki-smith-gallery"
        },
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

