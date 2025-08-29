// Media data for Nava Dunkelman's portfolio website
// Update this file to easily modify media/video information
// Format: Each media item has title, description, performers, date, venue, and video embed code

// HOW TO ADD VIDEOS:
// 1. For YouTube: Replace the videoEmbed with your YouTube embed code
//    Example: <iframe width="560" height="315" src="https://www.youtube.com/embed/YOUR_VIDEO_ID" frameborder="0" allowfullscreen></iframe>
// 2. For Vimeo: Replace the videoEmbed with your Vimeo embed code
//    Example: <iframe src="https://player.vimeo.com/video/YOUR_VIDEO_ID" width="560" height="315" frameborder="0" allowfullscreen></iframe>
// 3. Get embed codes from YouTube/Vimeo by clicking "Share" > "Embed" on your video

const mediaData = {
    videos: [
        {
            title: "Nava Dunkelman: Arrhythmia",
            description: "Performance @ Roulette, Brooklyn, NY",
            details: "2024-25 Roulette Residency",
            performers: [
                "Nava Dunkelman - percussion, electronics, voice",
                "Maria Takeuchi - electronics and visuals",
                "Yoko Murakami - movement",
                "Akiha Yamakami - scenic and costume design"
            ],
            date: "June 10, 2025",
            venue: "Roulette, Brooklyn, NY",
            videoEmbed: '<iframe width="560" height="315" src="https://www.youtube.com/embed/XUF3ONAg8Wc?si=2s5P_K24BCeRRo4Z" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
            videoUrl: "https://example.com/video1" // Optional: direct video URL
        },
        {
            title: "Nava Dunkelman with ÉMU, NOMON, IMA",
            description: "Performance @ Roulette, Brooklyn, NY",
            details: "2024 Roulette Commission",
            performers: [
                "Nava Dunkelman - percussion, electronics, voice",
                "ÉMU - visuals",
                "Shayna Dunkelman - percussion and electronics",
                "Amma Ateria - electronics"
            ],
            date: "June 10, 2024",
            venue: "Roulette, Brooklyn, NY",
            videoEmbed: "<!-- Add your YouTube or Vimeo embed code here -->",
            videoUrl: "https://example.com/video2"
        },
        {
            title: "NOMON",
            description: "Performance @ Gray Area, San Francisco, CA",
            details: "Programmed by Diego Villalobos for The Wattis Institute",
            venue: "Hosted by The Lab at Gray Area, San Francisco, CA",
            date: "January 21, 2023",
            videoEmbed: "<!-- Add your YouTube or Vimeo embed code here -->",
            videoUrl: "https://example.com/video3"
        },
        {
            title: "IMA",
            description: "Performance @ The Wire 40 ESS Streaming Festival",
            date: "July 28, 2022",
            videoEmbed: "<!-- Add your YouTube or Vimeo embed code here -->",
            videoUrl: "https://example.com/video4"
        },
        {
            title: "Solo",
            description: "Performance @ Brooklyn Conservatory of Music, Brooklyn, NY",
            details: "ISSUE Project Room NOMADIC SIGNALS series",
            date: "May 14, 2022",
            videoEmbed: "<!-- Add your YouTube or Vimeo embed code here -->",
            videoUrl: "https://example.com/video5"
        },
        {
            title: "IMA",
            description: "Performance @ Mills College, Oakland, CA",
            details: "Music in the Fault Zone",
            date: "April 23, 2022",
            videoEmbed: "<!-- Add your YouTube or Vimeo embed code here -->",
            videoUrl: "https://example.com/video6"
        },
        {
            title: "Duo with gabby fluke-mogul",
            description: "Performance @ Fridman Gallery, New York, NY",
            details: "Catalytic Sound NYC",
            date: "October 24, 2021",
            videoEmbed: "<!-- Add your YouTube or Vimeo embed code here -->",
            videoUrl: "https://example.com/video7"
        },
        {
            title: "IMA",
            description: "Performance @ The Center for New Music, San Francisco, CA",
            details: "Other Minds: Latitudes",
            date: "July 20, 2019",
            videoEmbed: "<!-- Add your YouTube or Vimeo embed code here -->",
            videoUrl: "https://example.com/video8"
        }
    ]
};

// Make mediaData globally available
window.mediaData = mediaData;

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = mediaData;
}
