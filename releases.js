// Releases data for Nava Dunkelman's portfolio website
// Update this file to easily modify release information
// Format: Each release has title, description, details, performers, date, image, and listenBuyUrl

const releasesData = {
    releases: [
        {
            title: "Brandon Seabrook's Epic Proportions - <i>bruralovechamp</i>",
            description: "Pyroclastic Records, 2023",
            details: "Brandon Seabrook - Guitar, Mandolin, Banjo\nNava Dunkelman - Percussion, Glockenspiel, Voice\nMarika Hughes - Cello\nEivind Opsvik - Contra Bass\nHenry Fraser - Contra Bass\nChuck Bettis - Electronics, Voice\nJohn McCowen - Contrabass Clarinet, Bb clarinet, Alto and Bass Recorder\nSam Ospovat - Drum Set, Chromatic Thai Nipple Gongs, Vibraphone, Concert Chimes",
            date: "Released May 26, 2023",
            image: "images/brandon seabrook_brutalovechamp.jpg",
            listenBuyUrl: "https://brandonseabrook.bandcamp.com/album/brutalovechamp" // Replace with actual URL
        },
        {
            title: "Nava Dunkelman & gabby fluke-mogul - <i>Likht</i>",
            description: "Relative Pitch Records, 2023",
            details: "Incinerating sound together since 2014, Nava Dunkelman and gabby fluke-mogul combine their expansive palettes with finesse, creating a fierce dialect of their own. Violin and percussion combust viscerally through spirit and song. Forged in flame, Dunkelman and fluke-mogul honor ritual and celebrate their rich sonic hues in their duo release, Likht.<br><br>Nava Dunkelman - percussion<br>gabby fluke-mogul - violin",
            date: "Released April 14, 2023",
            image: "images/nava_gabby_Likht.jpg",
            listenBuyUrl: "https://navadunkelman.bandcamp.com/album/likht" // Replace with actual URL
        },
        {
            title: "<i>Explorations 71</i>  (feat. Nava Dunkelman, percussion)",
            description: "by Payton MacDonald's Explorations",
            details: "Nava Dunkelman and Payton MacDonald team up for a recording of sonic exploration. Email discussions, graphic scores, roadmaps, shared aesthetics in music and nature, and a few cups of tea all shaped these compositions.<br><br>Payton MacDonald - marimba<br>Nava Dunkelman - percussion",
            date: "Released February 21, 2023",
            image: "images/payton_nava_explorations_71.jpg",
            listenBuyUrl: "https://explorations.bandcamp.com/album/explorations-71-feat-nava-dunkelman-percussion" // Replace with actual URL
        },
        {
            title: "DunkelpeK (Nava Dunkelman & Jakob Pek) - <i>Fire's Hush</i>",
            description: "AKP Recordings, 2022",
            details: "Fire's Hush, is a journey into the heart of listening. It brings into sound the elusive dreams and subliminal echoes of our deeper mind while giving song to the oceanic mystery of the heart.",
            date: "Released February 4, 2022",
            image: "images/dunkelpek_fire's hush.jpg",
            listenBuyUrl: "https://dunkelpek.bandcamp.com/album/fires-hush" // Replace with actual URL
        },
        {
            title: "NOMON - <i>Card II</i>",
            description: "Symphonic Distribution, 2021",
            details: "Drawing on their passion for experimental, industrial, contemporary and electronic music, NOMON's music is at times fierce, intense, serene and calm. \"Card II\" echoes the emotions related to the inevitable changes in one's life. The feelings of fear and freedom that come with choosing a certain path, and touching on fragments of memories from their lives in Tokyo, Oakland and now New York, where they both currently reside.<br><br>Shayna Dunkelman - percussion and electronics<br>Nava Dunkelman - percussion and electronics",
            date: "Released May 14, 2021",
            image: "images/Nomon Card II_website.png",
            listenBuyUrl: "https://nomonmusic.bandcamp.com/album/card-ii" // Replace with actual URL
        },
        {
            title: "IMA - <i>The Flowers Die in Burning Fire - 炎の中で死にゆく花</i>",
            description: "Buh Records, 2019",
            details: "The debut album of IMA tells an anecdote of the inevitable notion of time, change, decay, the vanished, and rebirth. With meticulous, industrial, and filmic instrumentation, IMA marches forth with starkness and surrender into the aftermath of destruction, and attempt for transformative regeneration of beauty through catalysts of pleasure.<br><br>Amma Ateria - electronics<br>Nava Dunkelman - percussion and voice",
            date: "Released November 15, 2019",
            image: "images/IMA_FTIBF_cover.jpg",
            listenBuyUrl: "https://buhrecords.bandcamp.com/album/the-flowers-die-in-burning-fire" // Replace with actual URL
        },
        {
            title: "IMA - <i>LIVE AT LAND AND SEA LIMITED ZINE + CD</i>",
            description: "SOLD OUT",
            details: "Limited edition zine and CD release from IMA's live performance.",
            date: "Released November 2018",
            image: "images/IMA_zine.jpg",
            listenBuyUrl: null
        },
        {
            title: "IMA - <i>ENDE</i> - single",
            description: "Buh Records, 2018",
            details: "The debut single of IMA, Ende portraits the beginning of awakening to the aftermath of destruction and devastation. Percussionist Nava Dunkelman (JP) and electronic sound artist Amma Ateria (HK), depicts noise music of Japanese poetry by deconstructing and dissolving heavy music through meticulous, industrial, and filmic instrumentation.<br><br>Amma Ateria - electronics<br>Nava Dunkelman - percussion and voice",
            date: "Released October 24, 2018",
            image: "images/IMA_ende.jpg",
            listenBuyUrl: "https://buhrecords.bandcamp.com/album/ende" // Replace with actual URL
        }
    ]
};

// Make releasesData globally available
window.releasesData = releasesData;
console.log('releases.js loaded, releasesData:', releasesData);

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = releasesData;
}
