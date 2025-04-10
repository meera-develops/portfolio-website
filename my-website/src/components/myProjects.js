import gothamSite from '../assets/img/gotham_site.png';
import milkyway from '../assets/img/milkyway.png';
import yale from '../assets/img/yale-art-school.png';
import echo from '../assets/img/Echo.png';
import notemaker from '../assets/img/notemaker.png';
import kh_dark from '../assets/img/Dark_Theme.png';

const projects = [

        {
            "id": "1",
            "title": "Gotham Mysteries",
            "subtitle": "Website",
            "description": "This website was created to practice web development technologies. Site features a landing page, character gallery, and a retro themed mini game created with Phaser.js",
            "date": "Apr 2024",
            "img": gothamSite,
            "alt": "image of character gallery from website",
            "software": "BootStrap CSS + Phaser.js",
            "skills": "HTML/CSS/Javascript"
        },
        {
            "id": "2",
            "title": "Milky Way",
            "prototype": "subitle",
            "description": 'A Figma protoype of a fictional coffee shop for a class assignment. Prototype features transparent navbar, logo, theme colors, hero images, and a navbar and footer',
            "date": "Nov 2024",
            "img": milkyway,
            "alt": "image of fictious coffee shop design using brown and yellow and an image of real coffee shop",
            "software": "Figma",
            "skills": "UI Design/Web Design"
        },
        {
            "id": "3",
            "title": "Yale School of Art",
            "subtitle": "Redesign",
            "description": "Mock-up redesign of the Yale School of Art. Design is inline with branding colors and matches the style of their other websites, which is in significant contrast to the actual website.",
            "date": "Oct 2024",
            "img": yale,
            "alt": "image of redesign for yale school of art website",
            "software": "Figma",
            "skills": "UI Design/Web Design"
        },
        {
            "id": 4,
            "title": "NOTEMAKER",
            "subtitle": "Mobile App Design + Code",
            "description": "To-Do tracking app created in mobile development class. Created design first using Figma, and then executed design and coded it using React Native and Expo Go.",
            "date": "Feb 2025",
            "img": notemaker,
            "alt": "Image of four screen mobile app layout. Design uses a shade of pink and features a log in screen, navbar, upcoming tasks, add tasks screen, and a completed tasks display",
            "software": "Figma/Expo Go/React Native",
            "skills": "Mobile Design + Mobile Development"
        },
        {
            "id": 5,
            "title": "Echo: Mobile App",
            "subtitle": "prototype",
            "description": "A mobile app project created for a hackathon to a music app that prioritizes social connection. Figma layout features prototyping, a mobile navbar, login and sign up screen, a home screen, and a currently playing display.",
            "date": "Sep 2024",
            "img": echo,
            "alt": "image of Figma layout for a mobile music app. App features a dark purple color scheme and makes use of music-related icons. Design features 6 screens showcasing different views within the app",
            "software": "Figma/Expo Go",
            "skills": "UI Design/Prototyping"

        },
        {
            "id": 6,
            "title": "KnightHacks Neon Logo",
            "subtitle": "Dark Theme",
            "description": "Graphic design project for club brand. Created a neon glow outline of club logo to be used across multiple social media profiles of the club.",
            "date": "Nov 2024",
            "img": kh_dark,
            "alt": "Image of Dragon curled in a circle with a sword going through it featuring the title 'KNIGHT HACKS' to the right of it. Logo is transparent and features a neon purple glow outline around it.",
            "software": "Adobe Illustrator",
            "skills": "Graphic Design"
        }
];

export default projects;