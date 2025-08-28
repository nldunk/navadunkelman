// Shows data for Nava Dunkelman's portfolio website
// Update this file to easily modify show information
// Format: Each show has date, time, title, location, and optional moreInfo link

const showsData = {
    upcoming: [
        {
            date: "August 30",
            time: "8:00PM",
            title: "Solo",
            location: "Little Lightning Gallery, Brooklyn, NY"
        },
        {
            date: "September 12",
            time: "8:00PM",
            title: "Duo with Chuck Bettis",
            location: "Lava Club, Brooklyn, NY"
        },
        {
            date: "October 12",
            time: "7:30PM",
            title: "THE OCEAN ETCHED IN THE FOREST, With Du Yun's OK Miss",
            location: "Beijing Music Festival, Beijing, China"
        },
        {
            date: "November 7",
            time: "2:00PM & 7:00PM",
            title: "THE OCEAN ETCHED IN THE FOREST, With Du Yun's OK Miss",
            location: "Lincoln Center, New York, NY",
            moreInfo: "https://example.com/more-info"
        },
        {
            date: "November 25",
            time: "6:30PM",
            title: "CONTACT IMPROVISATION: Duo with Maria Takeuchi",
            location: "Open Arts Studio, Brooklyn, NY",
            moreInfo: "https://example.com/contact-improvisation"
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
    past: [
        // Add past shows here in the same format
        // Example:
        // {
        //     date: "December 15",
        //     time: "8:00PM",
        //     title: "Past Show Example",
        //     location: "Venue Name, City, State"
        // }
    ]
};

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = showsData;
}

