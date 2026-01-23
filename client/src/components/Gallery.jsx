import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

// Import gallery images dynamically
const galleryImages = import.meta.glob('../assets/images/gallery/*.{jpg,jpeg,png}', { eager: true, as: 'url' });

// Create an array of image URLs sorted by number if keys contain number
const getGalleryImages = () => {
    const images = [];
    // We want gallery_1 to gallery_23
    for (let i = 1; i <= 23; i++) {
        const key = `../assets/images/gallery/gallery_${i}.jpg`;
        if (galleryImages[key]) {
            images.push({ id: i, src: galleryImages[key] });
        }
    }
    return images;
};

const processedImages = getGalleryImages();

const Gallery = () => {
    return (
        <section id="gallery" className="gallery-section py-5">
            <div className="container py-5">
                <div className="section-header text-center mb-5 reveal">
                    <h2 className="display-5 fw-bold text-white">Event Gallery</h2>
                    <p className="text-secondary">Capture the moments. Cherish the memories.</p>
                </div>

                {/* Like Team, this uses Swiper in HTML. We'll use a responsive grid for now. */}
                {/* Swiper Implementation */}
                <Swiper
                    effect={'coverflow'}
                    grabCursor={true}
                    centeredSlides={true}
                    slidesPerView={'auto'}
                    loop={true}
                    autoplay={{
                        delay: 2000,
                        disableOnInteraction: false,
                    }}
                    coverflowEffect={{
                        rotate: 20,
                        stretch: 0,
                        depth: 100,
                        modifier: 1,
                        slideShadows: true,
                    }}
                    pagination={{ clickable: true }}
                    modules={[EffectCoverflow, Pagination, Autoplay]}
                    className="gallerySwiper reveal"
                >
                    {processedImages.map((img) => (
                        <SwiperSlide className="gallery-slide" key={img.id}>
                            <img
                                src={img.src}
                                alt={`Gallery Image ${img.id}`}
                                loading="lazy"
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>

                {/* Pagination placeholder if needed */}
                <div className="swiper-pagination mt-4"></div>
            </div>
        </section>
    );
};

export default Gallery;
