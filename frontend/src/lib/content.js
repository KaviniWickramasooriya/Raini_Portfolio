import img1 from "../assets/photos/photo_1_2026-08-31_11-53-53.jpg";
import imge1 from "../assets/photos/photo_1_2026-08-31_18-59-49.jpg";
import img2 from "../assets/photos/photo_2_2026-08-31_11-53-53.jpg";
import img3 from "../assets/photos/photo_3_2026-08-31_11-53-53.jpg";
import imge2 from "../assets/photos/photo_2_2026-08-31_18-59-49.jpg";
import img4 from "../assets/photos/photo_4_2026-08-31_11-53-53.jpg";
import imge4 from "../assets/photos/photo_4_2026-08-31_18-59-49.jpg";
import img5 from "../assets/photos/photo_5_2026-08-31_11-53-53.jpg";
import imge5 from "../assets/photos/photo_5_2026-08-31_18-59-49.jpg";
import imge7 from "../assets/photos/photo_7_2026-08-31_11-53-53.jpg";
import img7 from "../assets/photos/photo_7_2026-08-31_18-59-49.jpg";
import img8 from "../assets/photos/photo_8_2026-08-31_18-59-49.jpg";    
import img9 from "../assets/photos/photo_9_2026-08-31_11-53-53.jpg";
import imge9 from "../assets/photos/photo_9_2026-08-31_18-59-49.jpg";
import imge10 from "../assets/photos/photo_10_2026-08-31_18-59-49.jpg";
import img11 from "../assets/photos/photo_11_2026-08-31_18-59-49.jpg";
import img12 from "../assets/photos/photo_12_2026-08-31_11-53-53.jpg";
import imge12 from "../assets/photos/photo_12_2026-08-31_18-59-49.jpg";
import imge13 from "../assets/photos/photo_13_2026-08-31_18-59-50.jpg";
import imge14 from "../assets/photos/photo_14_2026-08-31_18-59-50.jpg";
import img16 from "../assets/photos/photo_16_2026-08-31_18-59-50.jpg";
import img18 from "../assets/photos/photo_18_2026-08-31_18-59-50.jpg";
import img19 from "../assets/photos/photo_19_2026-08-31_18-59-50.jpg";
import img21 from "../assets/photos/WhatsApp Image 2026-08-31 at 09.29.11.jpeg";
import img22 from "../assets/photos/WhatsApp Image 2026-08-31 at 09.29.12.jpeg";
import img23 from "../assets/photos/ab6761610000e5eb4790ebbcb505c1c279068fa9.jfif";

// Audio Imports from src/assets/audio/
import audioChanchala from "../assets/audio/Chanchala_Dase_Maya_Raini_Charuka_Sarigama_lk.mp3";
import audioNeela from "../assets/audio/Neela_Kandugate_Raini_Charuka_Sarigama_lk.mp3";
import audioTharumini from "../assets/audio/Tharu_Mini_Ochcham_Pavi_Chinthi_Fernando_Sarigama_lk.mp3";
import audioAyethWarak from "../assets/audio/ayeth-warak-swaptha-swara-yathrawa-raini-charuka.mp3";
import audioNobalaMaDiha from "../assets/audio/Nobala_Ma_Diha_Raini_Charuka_Sarigama_lk.mp3";
import audioPichchaMalee from "../assets/audio/Pichcha Malee - Raini Charuka [SONG.LK].mp3";
import audioSarojani from "../assets/audio/Sarojani - Raini Charuka [SONG.LK].mp3";

export const artist = {
  first: "RAINI",
  last: "CHARUKA",
  city: "Colombo",
  country: "Sri Lanka",
  email: "raini.manager@gmail.com",
  instagram: "https://www.instagram.com/rainicharuka",
  youtube: "https://www.youtube.com/RainiCharuka",
  spotify: "https://open.spotify.com/artist/560riUcFnPmvtt6XYVLMa9",
  spotifyEmbed: "https://open.spotify.com/embed/artist/560riUcFnPmvtt6XYVLMa9",
  legal: "Raini Charuka Goonatillake",
};

export const nav = [
  { label: "Eras", href: "#eras" },
  { label: "About", href: "#about" },
  { label: "Music", href: "#music" },
  { label: "Gallery", href: "#gallery" },
  { label: "Shows", href: "#shows" },
  { label: "Contact", href: "#contact" },
];

export const photos = {
  ghost: img19,
  heroLeft: img2,
  heroCenter: imge2,
  heroRight: img5,
  aboutMirror: img8,
  aboutCenter: img21,
  eraCenter: img9,
  music: img18,
  contact: img16,
};

export const bio = {
  kicker: "A voice that already knew the stage",
  title: "Raini Charuka Goonatillake grew up inside Sri Lankan song.",
  paragraphs: [
    "Her parents — Rookantha Goonatillake and Chandraleka Perera — are one of the island’s defining musical pairings, and the first melody written for her was already a debut.",
    "She arrived in 2009 with Neela Kandu, composed by her father, then Tharumini, then Mathakada Handaawe for the film Sinhawolokanaya. By the time Chanchala Daase landed in 2014 she had a national register: pop, film, teledrama themes — a voice people already knew before they knew her name.",
    "Awards followed the work, not the other way around. DMVA Female Vocalist for Chanchala Daase. A Raigam Award for Maha Katharaka, the theme of Click. Recent years hold Manika and the film Kambili — the same instrument, a quieter confidence.",
  ],
  stats: [
    { value: "2009", label: "Debut" },
    { value: "8+", label: "Drama Themes" },
    { value: "2", label: "National Awards" },
    { value: "∞", label: "On the Radio" },
  ],
};

export const tracks = [
  {
    id: "01",
    title: "Chanchala Daase",
    note: "feat. Raj Kumar · DMVA Female Vocalist",
    year: "2014",
    duration: "3:30",
    durationSec: 210,
    cover: img19,
    audioUrl: audioChanchala,
    spotify: artist.spotify,
  },
  {
    id: "02",
    title: "Neela Kandugate",
    note: "Debut · written by Rookantha Goonatillake",
    year: "2009",
    duration: "4:02",
    durationSec: 242,
    cover: img12,
    audioUrl: audioNeela,
    spotify: artist.spotify,
  },
  {
    id: "03",
    title: "Tharumini",
    note: "The follow-up that made her a household voice",
    year: "2010",
    duration: "3:42",
    durationSec: 222,
    cover: img9,
    audioUrl: audioTharumini,
    spotify: artist.spotify,
  },
  {
    id: "04",
    title: "Ayeth Warak",
    note: "Swaptha Swara Yathrawa",
    year: "2023",
    duration: "3:45",
    durationSec: 225,
    cover: img18,
    audioUrl: audioAyethWarak,
    spotify: artist.spotify,
  },
  {
    id: "05",
    title: "Nobala Ma Diha",
    note: "Single release",
    year: "2021",
    duration: "3:15",
    durationSec: 195,
    cover: img5,
    audioUrl: audioNobalaMaDiha,
    spotify: artist.spotify,
  },
  {
    id: "06",
    title: "Pichcha Malee",
    note: "Traditional acoustic rendition",
    year: "2020",
    duration: "3:50",
    durationSec: 230,
    cover: img3,
    audioUrl: audioPichchaMalee,
    spotify: artist.spotify,
  },
  {
    id: "07",
    title: "Sarojani",
    note: "Classic hit track",
    year: "2015",
    duration: "4:10",
    durationSec: 250,
    cover: img1,
    audioUrl: audioSarojani,
    spotify: artist.spotify,
  },
];

export const eras = [
  { year: "", title: "Debut", photo: img12, height: "65%" },
  { year: "", title: "Teledrama Era", photo: img7, height: "75%" },
  { year: "", title: "Chanchala Daase", photo: img3, height: "85%" },
  { year: "", title: "Silver Screen", photo: img3, height: "92%" },
  { year: "", title: "The Voice", photo: img22, height: "80%" },
  { year: "", title: "Present", photo: img23, height: "70%" },
];

export const davikaStrips = [
  { src: imge5, pos: "center top" },
  { src: imge9, pos: "center center" },
  { src: img11, pos: "center bottom" },
];

export const gallery = [
  { src: imge10, alt: "Live concert stage production" },
  { src: imge13, alt: "Backstage green room session" },
  { src: img1, alt: "Television production appearance" },
  { src: imge4, alt: "Acoustic unplugged broadcast" },
  { src: img3, alt: "Master studio vocal recording" },
  { src: imge7, alt: "Editorial portrait concept" },
  { src: imge12, alt: "Promotional concept shoot" },
  { src: imge14, alt: "Promotional concept shoot" },
];

export const shows = [
  { date: "12 SEP 2026", venue: "Nelum Pokuna Mahinda Rajapaksa Theatre", city: "Colombo", status: "upcoming" },
  { date: "04 OCT 2026", venue: "Mahaweli Reach Grand Hall", city: "Kandy", status: "upcoming" },
  { date: "21 NOV 2026", venue: "Logan Hall, IOE", city: "London", status: "upcoming" },
  { date: "18 DEC 2025", venue: "Stein Studios Live Concert", city: "Colombo", status: "past" },
];