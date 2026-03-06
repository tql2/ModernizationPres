// New slide object
const newSlide = {
  id: 15,
  type: "images",
  title: "Fire Fighter Fatality Map Visualization",
  images: [
    "/firefighter-fatality-california.png",
    "/firefighter-fatality-us-filtered.png"
  ]
};

// ImagesSlide component function
const ImagesSlide = ({ images }) => {
  return (
    <div className="image-grid">
      {images.map((image, index) => (
        <div key={index} className="image-item">
          <img src={image} alt={`Slide ${index + 1}`} />
        </div>
      ))}
    </div>
  );
};

// Update renderSlide function to include "images" type
const renderSlide = (slide) => {
  switch (slide.type) {
    // other cases
    case "images":
      return <ImagesSlide images={slide.images} />;
    // other cases
  }
};

// Add the new slide to the slides array (assuming it exists)
slides.push(newSlide);