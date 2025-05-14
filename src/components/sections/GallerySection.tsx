
import { useState } from "react";

interface GalleryItem {
  id: number;
  src: string;
  alt: string;
  type: "image" | "video";
}

const GallerySection = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [activeItem, setActiveItem] = useState<GalleryItem | null>(null);

  const galleryItems: GalleryItem[] = [
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

  const openLightbox = (item: GalleryItem) => {
    setActiveItem(item);
    setLightboxOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    document.body.style.overflow = "auto";
  };

  const handleNext = () => {
    if (!activeItem) return;
    const currentIndex = galleryItems.findIndex((item) => item.id === activeItem.id);
    const nextIndex = (currentIndex + 1) % galleryItems.length;
    setActiveItem(galleryItems[nextIndex]);
  };

  const handlePrev = () => {
    if (!activeItem) return;
    const currentIndex = galleryItems.findIndex((item) => item.id === activeItem.id);
    const prevIndex = (currentIndex - 1 + galleryItems.length) % galleryItems.length;
    setActiveItem(galleryItems[prevIndex]);
  };

  return (
    <section id="gallery" className="bg-secondary section-padding">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">Gallery</h2>
        <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-12">
          A collection of my photography and design work. Click on any image to view it in full size.
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {galleryItems.map((item) => (
            <div
              key={item.id}
              className="aspect-square rounded-lg overflow-hidden cursor-pointer transition-transform hover:scale-[1.02]"
              onClick={() => openLightbox(item)}
            >
              {item.type === "image" ? (
                <img
                  src={item.src}
                  alt={item.alt}
                  className="w-full h-full object-cover"
                />
              ) : (
                <video
                  src={item.src}
                  className="w-full h-full object-cover"
                  controls={false}
                />
              )}
            </div>
          ))}
        </div>

        {/* Lightbox */}
        {lightboxOpen && activeItem && (
          <div className="fixed inset-0 bg-foreground/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <div className="relative max-w-5xl w-full mx-auto animate-fade-in">
              {/* Close button */}
              <button
                onClick={closeLightbox}
                className="absolute top-4 right-4 z-10 bg-background/50 backdrop-blur-sm text-foreground rounded-full p-2 hover:bg-background/70 transition-colors"
                aria-label="Close lightbox"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>

              {/* Navigation buttons */}
              <div className="absolute top-1/2 left-4 transform -translate-y-1/2">
                <button
                  onClick={handlePrev}
                  className="bg-background/50 backdrop-blur-sm text-foreground rounded-full p-2 hover:bg-background/70 transition-colors"
                  aria-label="Previous image"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="m15 18-6-6 6-6"></path>
                  </svg>
                </button>
              </div>
              <div className="absolute top-1/2 right-4 transform -translate-y-1/2">
                <button
                  onClick={handleNext}
                  className="bg-background/50 backdrop-blur-sm text-foreground rounded-full p-2 hover:bg-background/70 transition-colors"
                  aria-label="Next image"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="m9 18 6-6-6-6"></path>
                  </svg>
                </button>
              </div>

              {/* Content */}
              <div className="bg-background rounded-lg overflow-hidden">
                {activeItem.type === "image" ? (
                  <img
                    src={activeItem.src}
                    alt={activeItem.alt}
                    className="w-full h-auto max-h-[80vh] object-contain"
                  />
                ) : (
                  <video
                    src={activeItem.src}
                    className="w-full h-auto max-h-[80vh]"
                    controls
                    autoPlay
                  />
                )}
                <div className="p-4">
                  <p className="text-foreground">{activeItem.alt}</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default GallerySection;
