import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

const pages = [
    './carousel-images/adi-goldstein-EUsVwEOsblE-unsplash.jpg',
    './carousel-images/alexandre-debieve-FO7JIlwjOtU-unsplash.jpg',
    './carousel-images/nasa-Q1p7bh3SHj8-unsplash.jpg',
];

const Carousel = () => {
    return (
            <div id="carouselExampleIndicators" className="carousel slide" data-bs-theme="dark" data-bs-ride="carousel" style={{ maxWidth: "600px", margin: "auto", padding:"10px" }}>
             {/* indicators */}
            <div class="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            {/* carousel images */}
            <div class="carousel-inner">
                <div class="carousel-item active">
                <img src="./carousel-images/adi-goldstein-EUsVwEOsblE-unsplash.jpg" class="d-block w-100 opacity-50" alt="..."/>
                    {/* add a caption to the image */}
                    {/* <div class="carousel-caption d-none d-md-block">
                        <h5>First slide label</h5>
                        <p>Some representative placeholder content for the first slide.</p>
                    </div> */}
                </div>
                <div class="carousel-item">
                <img src="./carousel-images/alexandre-debieve-FO7JIlwjOtU-unsplash.jpg" class="d-block w-100 opacity-50" alt="..."/>
                </div>
                <div class="carousel-item">
                <img src="./carousel-images/nasa-Q1p7bh3SHj8-unsplash.jpg" class="d-block w-100 opacity-75" alt="..."/>
                </div>
            </div>
             {/* prev and next buttons */}
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
            </div>
    );
};

export default Carousel;