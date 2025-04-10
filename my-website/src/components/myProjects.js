import gothamSite from '../assets/img/gotham_site.png';
import milkyway from '../assets/img/milkyway.png';
import yale from '../assets/img/yale-art-school.png';

const projects = [

        {
            "id": "1",
            "title": "Gotham Mysteries Website",
            "description": "This website was created to practice web development technologies. Site features a landing page, character gallery, and a retro themed mini game created with Phaser.js",
            "date": "Apr 2024",
            "img": gothamSite,
            "alt": "image of character gallery from website",
            "software": "BootStrap CSS + Phaser.js",
            "skills": "HTML/CSS/Javascript"
        },
        {
            "id": "2",
            "title": "Milky Way - Prototype",
            "description": 'A Figma protoype of a fictional coffee shop for a class assignment. Prototype features transparent navbar, logo, theme colors, hero images, and a navbar and footer',
            "date": "Nov 2024",
            "img": milkyway,
            "alt": "image of fictious coffee shop design using brown and yellow and an image of real coffee shop",
            "software": "Figma",
            "skills": "UI Design/Web Design"
        },
        {
            "id": "3",
            "title": "Yale School of Art Redesign",
            "description": "Mock-up redesign of the Yale School of Art. Design is inline with branding colors and matches the style of their other websites, which is in significant contrast to the actual website.",
            "date": "Oct 2024",
            "img": yale,
            "alt": "image of redesign for yale school of art website",
            "software": "Figma",
            "skills": "UI Design/Web Design"
        }
];

export default projects;