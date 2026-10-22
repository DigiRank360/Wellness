const initialGalleryItems = [
  {
    image: "/images/services/realteam.png",
  },
  {
    image: "/images/services/swimmingPoll.png",
  },
  {
    image: "/images/services/herbal-steam.jpg",
  },
];

// Add JPG, PNG, or WebP photos to src/assets/gallery to include them automatically.
const addedGalleryImages = Object.entries(
  import.meta.glob("../assets/gallery/*.{jpg,jpeg,png,webp}", {
    eager: true,
    import: "default",
    query: "?url",
  }),
).map(([path, image]) => {
  const filename = path
    .split("/")
    .pop()
    .replace(/\.[^.]+$/, "");
  const title = filename
    .replace(/[-_]+/g, " ")
    .replace(/\b\w/g, (character) => character.toUpperCase());

  return { title, category: "Gallery", image };
});

export const galleryItems = [...initialGalleryItems, ...addedGalleryImages];
