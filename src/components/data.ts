export const BASE = import.meta.env.BASE_URL;
export const asset = (path: string) => `${BASE}${path}`;

export const BUSINESS = "Marcus Field Bespoke";
export const PHONE_DISPLAY = "07808 134173";
export const PHONE_TEL = "tel:+447808134173";
export const EMAIL = "info@marcusfieldbespoke.co.uk";
export const WHATSAPP_NUMBER = "447808134173";
export const WHATSAPP = `https://wa.me/${WHATSAPP_NUMBER}`;
export const FACEBOOK = "https://www.facebook.com/profile.php?id=61575347442779";
export const AREA = "Hertfordshire";

const DIMS: Record<number, [number, number]> = {
  2: [1024, 1536], 3: [1125, 1500], 4: [1200, 1600], 5: [1536, 1152], 6: [1200, 1600],
  7: [1600, 1200], 8: [960, 624], 9: [960, 640], 10: [925, 1500], 11: [875, 1500],
  14: [720, 960], 15: [720, 960], 16: [960, 720], 17: [1080, 1350], 18: [1080, 1350],
  20: [1080, 1350], 27: [861, 1500], 28: [1125, 790], 29: [1200, 1600],
};

export type Photo = { n: number; src: string; thumb: string; w: number; h: number };

export function photo(n: number): Photo {
  const id = String(n).padStart(2, "0");
  const [w, h] = DIMS[n] ?? [1125, 1500];
  return { n, src: asset(`assets/work/p${id}.jpg`), thumb: asset(`assets/work/thumb/p${id}.jpg`), w, h };
}

export const SERVICES: { n: number; title: string; text: string }[] = [
  { n: 7, title: "Media walls and built-in shelving", text: "TV walls, alcove shelving and display units designed around your room, your sockets and your style." },
  { n: 12, title: "Fitted wardrobes", text: "Floor-to-ceiling wardrobes scribed tight to walls and ceilings, with hanging, shelving and top boxes planned to suit." },
  { n: 9, title: "Alcove cupboards and floating shelves", text: "Classic fireside cupboards and deep floating shelves that turn awkward alcoves into proper storage." },
  { n: 8, title: "Wall panelling", text: "Shaker, V-groove and batten panelling for hallways, bedrooms, porches and loft rooms." },
  { n: 19, title: "Bed nooks and window seats", text: "Cosy built-in surrounds, ledges and shelving that make the most of small rooms." },
  { n: 32, title: "Boiler and pipe boxing", text: "Neat casings that hide boilers and pipework while keeping the controls and service access easy to reach." },
  { n: 15, title: "Doors, hung and made", text: "Internal doors hung true, external doors fitted, and ledged and braced doors built from scratch." },
  { n: 2, title: "Garden rooms and timber structures", text: "Timber-frame shelters, garden room fit-outs and outbuildings built to stand up to British weather." },
  { n: 21, title: "Bespoke details", text: "Hidden pet flaps, storage benches, coat hooks and the small clever fixes that make a home work." },
];

export type Cat = "builtins" | "wardrobes" | "panelling" | "doors" | "outdoor" | "details";

export const CATEGORIES: { id: Cat | "all"; label: string }[] = [
  { id: "all", label: "All work" },
  { id: "builtins", label: "Built-ins" },
  { id: "wardrobes", label: "Wardrobes and cupboards" },
  { id: "panelling", label: "Panelling" },
  { id: "doors", label: "Doors" },
  { id: "outdoor", label: "Outdoor" },
  { id: "details", label: "Clever details" },
];

export const GALLERY: { n: number; cat: Cat; alt: string }[] = [
  { n: 7, cat: "builtins", alt: "Finished teal media wall with alcove shelving and a framed feature panel" },
  { n: 9, cat: "builtins", alt: "Alcove cupboards and deep floating shelves either side of a brick fireplace" },
  { n: 12, cat: "wardrobes", alt: "Floor-to-ceiling alcove wardrobe with Shaker doors and top boxes" },
  { n: 19, cat: "builtins", alt: "Built-in bed nook framed around a window with side shelves" },
  { n: 24, cat: "wardrobes", alt: "Hallway coat and shoe cupboard with timber bar handles" },
  { n: 32, cat: "details", alt: "Kitchen boiler neatly boxed in with access doors" },
  { n: 15, cat: "doors", alt: "Hardwood six-panel external door fitted with a new frame" },
  { n: 2, cat: "outdoor", alt: "Timber-frame woodland shelter with braced posts and a corrugated roof" },
  { n: 33, cat: "panelling", alt: "Cottage porch lined with V-groove panelling either side of the front door" },
  { n: 21, cat: "details", alt: "Hidden pet flap behind a small Shaker door with a brass bolt" },
  { n: 14, cat: "details", alt: "Panelled storage bench with a solid top on an oak floor" },
  { n: 16, cat: "outdoor", alt: "Garden room interior with timber cladding and new flooring" },
  { n: 29, cat: "doors", alt: "Painted cottage-style internal door with black hinges and handle" },
  { n: 3, cat: "doors", alt: "New tongue and groove stable door with black strap hinges" },
  { n: 4, cat: "doors", alt: "Ledged and braced back of a handmade stable door" },
  { n: 10, cat: "wardrobes", alt: "Wall-to-wall fitted wardrobe with three doors, ready for paint" },
  { n: 11, cat: "wardrobes", alt: "Inside a fitted wardrobe with deep shelving" },
  { n: 13, cat: "wardrobes", alt: "Shaker wardrobe open to show the hanging rail and top storage" },
  { n: 8, cat: "panelling", alt: "Batten panelling running up a sloping loft wall" },
  { n: 18, cat: "panelling", alt: "V-groove panelling and a deep ledge going in around a daybed" },
  { n: 20, cat: "builtins", alt: "Ledge wrapping into a window reveal with a hidden cable outlet" },
  { n: 17, cat: "builtins", alt: "Before: a freestanding daybed against a plain wall" },
  { n: 5, cat: "builtins", alt: "Media wall shelving towers fitted, ready for painting" },
  { n: 6, cat: "builtins", alt: "Timber frame built for the base of a media wall" },
  { n: 25, cat: "wardrobes", alt: "Shoe shelves inside a made-to-measure hallway cupboard" },
  { n: 26, cat: "wardrobes", alt: "Antique brass coat hooks inside a hallway cupboard" },
  { n: 27, cat: "wardrobes", alt: "Before: an empty corner between a door and a window" },
  { n: 28, cat: "wardrobes", alt: "Cupboard carcass being built to measure" },
  { n: 30, cat: "details", alt: "Before: an exposed boiler and pipework in a kitchen" },
  { n: 31, cat: "details", alt: "Boiler casing with a door that opens at the controls" },
  { n: 34, cat: "panelling", alt: "V-groove panelling fitted to a sloping porch ceiling" },
  { n: 35, cat: "panelling", alt: "Before: a plain plastered porch wall" },
  { n: 36, cat: "panelling", alt: "Porch panelling with a capping rail and peg rail" },
  { n: 22, cat: "details", alt: "Pet flap tunnel inside a framed hatch" },
  { n: 23, cat: "details", alt: "Opening cut and insulated in Shaker wall panelling" },
];

export type Story = { id: string; title: string; summary: string; steps: { n: number; label: string; text: string }[] };

export const STORIES: Story[] = [
  {
    id: "media-wall", title: "Media wall",
    summary: "A full-width media wall with alcove shelving, a framed centre panel and a boxed base.",
    steps: [
      { n: 6, label: "Frame", text: "A level timber frame built off the floor to carry the base." },
      { n: 5, label: "Carcass", text: "Shelving towers and a framed centre panel fitted to the wall." },
      { n: 7, label: "Finished", text: "Painted in a deep teal with a feature panel and styled shelves." },
    ],
  },
  {
    id: "bed-nook", title: "Bed nook",
    summary: "A flat-pack daybed turned into a fitted, cosy sleeping and reading nook.",
    steps: [
      { n: 17, label: "Before", text: "A freestanding daybed against a plain wall." },
      { n: 18, label: "Panelling", text: "V-groove panelling and a deep ledge with a hidden cable outlet." },
      { n: 20, label: "Detail", text: "The ledge wraps into the window reveal, scribed to the wall." },
      { n: 19, label: "Framed", text: "A full surround and side shelves frame the bed and window." },
    ],
  },
  {
    id: "hallway", title: "Coat cupboard",
    summary: "An unused corner turned into a full-height coat and shoe cupboard.",
    steps: [
      { n: 27, label: "Before", text: "An empty corner between a glazed door and a window." },
      { n: 28, label: "Built", text: "The carcass made to measure before fitting." },
      { n: 25, label: "Fitted", text: "Five shoe shelves, with a cut-out so the light switch still works." },
      { n: 26, label: "Hooks", text: "Antique brass hooks for coats and bags." },
      { n: 24, label: "Finished", text: "Full-height doors with timber bar handles, tight between frame and window." },
    ],
  },
  {
    id: "boiler", title: "Boiler boxing",
    summary: "A kitchen boiler hidden away without losing access to anything that matters.",
    steps: [
      { n: 30, label: "Before", text: "An exposed boiler and a tangle of pipes." },
      { n: 31, label: "Access", text: "A hinged door that opens exactly at the boiler controls." },
      { n: 32, label: "Finished", text: "A tidy full-height casing with a removable panel for the engineer." },
    ],
  },
  {
    id: "porch", title: "Porch panelling",
    summary: "V-groove panelling fitted sympathetically inside an old timber-framed porch.",
    steps: [
      { n: 35, label: "Before", text: "Plain plaster beside the front door." },
      { n: 34, label: "Panelling", text: "Boards fitted tight to the door frame and sloping ceiling." },
      { n: 36, label: "Details", text: "A moulded capping rail and the original peg rail refitted." },
      { n: 33, label: "Finished", text: "Both sides panelled and ready for paint." },
    ],
  },
  {
    id: "pet-flap", title: "Hidden pet flap",
    summary: "A pet flap built into Shaker panelling so it all but disappears.",
    steps: [
      { n: 23, label: "Opening", text: "A neat opening cut through the panelling and insulated." },
      { n: 22, label: "Fitted", text: "The pet flap tunnel set inside a framed surround." },
      { n: 21, label: "Closed", text: "A mini Shaker door with a brass bolt that sits flush." },
    ],
  },
];

export const REVIEWS = [
  {
    quote: "Marcus built a bespoke frame for us around our bed and we couldn't be happier with the result. We had very uneven walls but Marcus found solutions around everything and all the details are to a brilliant standard. He was very skilled and professional and would definitely recommend him for any carpentry.",
    name: "Ellen-May M.",
  },
  {
    quote: "Marcus built some cupboards in my lounge for me as I had limited storage. I was very happy with his work and professionalism. Would happily recommend him to anyone looking for carpentry work.",
    name: "Laura C.",
  },
];

export const PROCESS = [
  { title: "Get in touch", text: "Call, WhatsApp or email with a few photos and a rough idea of what you have in mind." },
  { title: "Visit and measure", text: "Marcus comes out, measures properly and talks through options, materials and budget." },
  { title: "Built to fit", text: "Everything is made to measure and fitted tight, even on uneven walls and wonky ceilings." },
  { title: "Ready to enjoy", text: "Filled, finished and cleaned up, so all that is left is to fill it with your things." },
];

export const PROJECT_TYPES = [
  "Fitted wardrobe", "Media wall or shelving", "Alcove cupboards", "Wall panelling",
  "Bed nook or window seat", "Boiler or pipe boxing", "Doors", "Garden room or outdoor", "Something else",
];
