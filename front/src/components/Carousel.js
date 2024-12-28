import React, { useState } from 'react';

const Carousel = () => {
    // Массив с изображениями
    const images = [
        '/images/monolitnoe-stroitelstvo-3.jpg',
        '/images/trend-bz104_pr428.png.800x400e.webp',
        '/images/v-statyu.jpg'
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
    };

    return (
        <div style={styles.carousel}>
            <button onClick={prevSlide} style={styles.button}>
                Назад
            </button>
            <img
                src={images[currentIndex]}
                alt={`Slide ${currentIndex}`}
                style={styles.image}
            />
            <button onClick={nextSlide} style={styles.button}>
                Вперед
            </button>
        </div>
    );
};

// Стили для карусели
const styles = {
    carousel: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        margin: '20px auto',
        maxWidth: '400px',
    },
    image: {
        width: '100%',
        height: 'auto',
        borderRadius: '8px',
    }
};

export default Carousel;