
export interface GalleryItem {
  id: number;
  src: string;
  alt: string;
  type: "image" | "video";
}

export const galleryItems: GalleryItem[] = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?auto=format&fit=crop&w=800&q=80",
    alt: "Night sky with stars",
    type: "image",
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=800&q=80",
    alt: "Ocean waves",
    type: "image",
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1426604966848-d7adac402bff?auto=format&fit=crop&w=800&q=80",
    alt: "Forest landscape",
    type: "image",
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80",
    alt: "Circuit board",
    type: "image",
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&w=800&q=80",
    alt: "Display screens",
    type: "image",
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=800&q=80",
    alt: "Code on screen",
    type: "image",
  },
];
