export const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/achievements", label: "Achievements" },
  { href: "/shop", label: "Shop" },
  { href: "/contact", label: "Contact" },
];

export const achievements = [
  { year: "2024", title: "1st Place, KRSRI + Best Strategy", note: "Part of ITS's sixth Overall Championship at KRI 2024." },
  { year: "2023", title: "KRSRI finalist", note: "Robot Narabot finished the arena in 140 of 300 seconds." },
  { year: "2022", title: "3rd Place, KRSRI", note: "Beat 21 teams at KRI 2022." },
  { year: "2018", title: "2nd Place, KRPAI", note: "Fire-fighting legged robot at KRI 2018, Yogyakarta." },
];

export const divisions = [
  { name: "Mechanical", text: "Chassis, mechanisms, and robot body design." },
  { name: "Electrical", text: "Circuits, power, sensors, and wiring." },
  { name: "Programming", text: "Navigation, vision, and control software." },
];

// PLACEHOLDER: ganti nama, harga, dan link order dengan data asli.
export const products = [
  { name: "Team Jersey", price: "Rp —", note: "Placeholder item" },
  { name: "Sticker Pack", price: "Rp —", note: "Placeholder item" },
  { name: "Lanyard", price: "Rp —", note: "Placeholder item" },
];

export const contact = {
  email: "abinara.its@gmail.com",
  instagram: "https://www.instagram.com/abinara.1",
  linkedin: "https://www.linkedin.com/company/abinara-1-its",
  site: "https://abinara-1.pages.dev",
};

// ===== PLACEHOLDER: isi dengan data asli tim =====
export const robot = {
  name: "Robot Name",
  tagline: "Short tagline goes here.",
  image: "/robot.svg", // ganti dengan /robot.jpg setelah foto/render ditaruh di public/
  purpose: "The robot stacks 3 blocks.",
  how: "Short description of how the robot works: from detecting a block to placing it on the stack.",
};

export const specs = [
  { division: "Mechanical", items: [["DOF", "TBD"], ["Prismatic joint", "TBD"], ["Gripper", "TBD"], ["Material", "TBD"]] },
  { division: "Electrical", items: [["Microcontroller", "STM32"], ["Servo", "TBD"], ["Sensors", "TBD"], ["Computer link", "TBD"]] },
  { division: "Programming", items: [["Framework", "ROS"], ["Language", "C++"], ["Algorithm flow", "TBD"], ["Kinematics", "TBD"]] },
];

export const team = [
  { name: "Member Name", role: "Role", division: "Mechanical" },
  { name: "Member Name", role: "Role", division: "Electrical" },
  { name: "Member Name", role: "Role", division: "Programming" },
  { name: "Member Name", role: "Role", division: "Administration & Finance" },
];

// logo: taruh file di public/sponsors/ lalu isi path, contoh "/sponsors/nama.png"
export const sponsors = [
  { name: "Sponsor 1", logo: null },
  { name: "Sponsor 2", logo: null },
  { name: "Sponsor 3", logo: null },
  { name: "Sponsor 4", logo: null },
];
