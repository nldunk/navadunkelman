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
            title: "Nava Dunkelman: <i>Arrhythmia</i>",
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
            title: "IMA – <i>The Flowers Die in Burning Fire – 炎の中で死にゆく花</i>",
            description: "Performance @ Brava Theater, San Francisco, CA",
            details: "Other Minds Festival 28",
            date: "September 28, 2024",
            videoEmbed: '<iframe src="https://player.vimeo.com/video/1040938563" width="100%" height="225" frameborder="0" allowfullscreen></iframe>',
            videoUrl: "https://vimeo.com/1040938563?fl=pl&fe=sh"  // Paste your Vimeo URL here
        },
        {
            title: "Nava Dunkelman: <i>Nava Dunkelman with ÉMU, NOMON, IMA</i>",
            description: "Performance @ Roulette, Brooklyn, NY",
            details: "2023-24 Roulette Commission",
            performers: [
                "Nava Dunkelman - percussion, electronics, voice",
                "ÉMU - visuals",
                "Shayna Dunkelman - percussion and electronics",
                "Amma Ateria - electronics"
            ],
            date: "June 10, 2024",
            venue: "Roulette, Brooklyn, NY",
            videoEmbed: '<iframe width="560" height="315" src="https://www.youtube.com/embed/sBfq-8OwJF4?si=sYFmbkqGvXD_-hMk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
            videoUrl: "https://example.com/video2"
        },
        {
            title: "NOMON",
            description: "Performance exerpt @ Pioneer Works, Brooklyn, NY",
            date: "June 27, 2023",
            videoEmbed: '<div style="padding:56.25% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/933096079?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share" referrerpolicy="strict-origin-when-cross-origin" style="position:absolute;top:0;left:0;width:100%;height:100%;" title="NOMON PW Live"></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>',
            videoUrl: "https://example.com/video3"
        },
        {
            title: "Brandon Seakbrook's Epic Proportiions - <i>brutalovechamp</i>",
            description: "Performance @ Public Records, Brooklyn, NY",
            date: "May 21, 2023",
            videoEmbed: '<iframe width="560" height="315" src="https://www.youtube.com/embed/mNnxAXWg3ss?si=C25RFoUgpJxzZFq9" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
            videoUrl: "https://example.com/video3"
        },
        {
            title: "NOMON",
            description: "Performance @ Gray Area, San Francisco, CA",
            details: "Programmed by Diego Villalobos for The Wattis Institute",
            venue: "Hosted by The Lab at Gray Area, San Francisco, CA",
            date: "January 21, 2023",
            videoEmbed: '<iframe width="560" height="315" src="https://www.youtube.com/embed/39JCgG4_XgM?si=Kr3tm-fT7sCw9ofC" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
            videoUrl: "https://example.com/video3"
        },
        {
            title: "IMA",
            description: "Performance @ The Wire 40 ESS Streaming Festival",
            date: "July 28, 2022",
            videoEmbed: '<iframe width="560" height="315" src="https://www.youtube.com/embed/-4Iluj0xTXk?si=bR8EKVL6oUDdUFUF" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
            videoUrl: "https://example.com/video4"
        },
        {
            title: "Solo",
            description: "Performance @ Brooklyn Conservatory of Music, Brooklyn, NY",
            details: "ISSUE Project Room NOMADIC SIGNALS series",
            date: "May 14, 2022",
            videoEmbed: '<iframe title="vimeo-player" src="https://player.vimeo.com/video/722292600?h=79799d2be5" width="640" height="360" frameborder="0" referrerpolicy="strict-origin-when-cross-origin" allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"   allowfullscreen></iframe>',
            videoUrl: "https://example.com/video5"
        },
        {
            title: "IMA",
            description: "Performance @ Mills College, Oakland, CA",
            details: "Music in the Fault Zone",
            date: "April 23, 2022",
            videoEmbed: '<iframe title="vimeo-player" src="https://player.vimeo.com/video/721138343?h=2e446cdc60" width="640" height="360" frameborder="0" referrerpolicy="strict-origin-when-cross-origin" allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"   allowfullscreen></iframe>',
            videoUrl: "https://example.com/video6"
        },
        {
            title: "Duo with gabby fluke-mogul",
            description: "Performance @ Fridman Gallery, New York, NY",
            details: "Catalytic Sound NYC",
            date: "October 18, 2018",
            videoEmbed: '<iframe width="560" height="315" src="https://www.youtube.com/embed/N9ja6jPaGmE?si=-vvNhnZ9d9ogPZOG" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
            videoUrl: "https://example.com/video7"
        },
        {
            title: "Trio with Fred Frith, and gabby fluke-mogul",
            description: "Performance @ The Lab, San Francisco, CA",
            date: "October 14, 2018",
            videoEmbed: '<iframe width="560" height="315" src="https://www.youtube.com/embed/6oBx_LqUAO0?si=15Dn5wYa3IKLp4Kj" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
            videoUrl: "https://example.com/video7"
        },
        {
            title: "Trio with Caroline Marcantoni and M.C. Schmidt",
            description: "Performance @ Baltimore Theater Project, Baltimore, MD",
            details: "High Zero Festival of Experimental Improvised Music 2015",
            date: "September 25, 2015",
            videoEmbed: '<iframe width="560" height="315" src="https://www.youtube.com/embed/pjoY6RoLoYQ?si=ae4Q2vP6hqPKm1kc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
            videoUrl: "https://example.com/video7"
        },
        {
            title: "Duo with Fred Frith, and Dancers Amanda Miller, & Peiling Kao",
            description: "Performance @ The Ridge, Oakland, CA",
            date: "October 9, 2014",
            videoEmbed: '<iframe width="560" height="315" src="https://www.youtube.com/embed/AqLG0CCzZsI?si=M6ZPLfuQO7Dl2SPJ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
            videoUrl: "https://example.com/video7"
        },
        {
            title: "Duo with Fred Frith",
            description: "Performance @ Mills College, Art Museum, Oakland, CA",
            details: "Experiments in the Fault Zone",
            date: "November 13, 2013",
            videoEmbed: '<iframe width="560" height="315" src="https://www.youtube.com/embed/GPxhMI98s2Q?si=8ZYNtQRrMZkzjanQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
            videoUrl: "https://example.com/video7"
        },
        {
            title: "William Winant Percussion Group - <i>Second Construction</i> by John Cage",
            description: "Performance @ Mills College, Littlefield Concert Hall, Oakland, CA",
            date: "May 1, 2013",
            videoEmbed: '<iframe width="560" height="315" src="https://www.youtube.com/embed/q_VE0n0mVTo?si=VCzjByJJEv3-WG1c" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
            videoUrl: "https://example.com/video7"
        },
        {
            title: "William Winant Percussion Group - <i>Lou Harrison's La Koro Sutro</i>",
            description: "Performance @ Berkeley Art Museum, Berkeley, CA",
            date: "May 25, 2012",
            videoEmbed: '<iframe width="560" height="315" src="https://www.youtube.com/embed/yfPtL8EJT-s?si=5iWzBFfTJXVPs2aW" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
            videoUrl: "https://example.com/video7"
        }

    ],
};

// Make mediaData globally available
window.mediaData = mediaData;

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = mediaData;
}
