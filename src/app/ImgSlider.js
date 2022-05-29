import React from 'react'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from 'styled-components';

function ImgSlider() {
    let settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        autoplay: true,
        slidesToScroll: 1,
    }
  return (
    <Carousel {...settings}>
        <Wrap>
            <img src="/images/wild_proba.jpg"/>
        </Wrap>
        <Wrap>
            <img src="/images/wild-1.jpg"/>
        </Wrap>
        <Wrap>
            <img src="/images/wild-2.jpg"/>
        </Wrap>
        <Wrap>
            <img src="/images/wild-3.jpg"/>
        </Wrap>
    </Carousel>
  )
}

export default ImgSlider

const Carousel = styled(Slider)`
    margin-top:10px;
    ul li button {
        &:before {
            font-size: 10px;
            color: rgb(150, 158, 171);
            transition: 400ms all ease;
        }
    }

    li.slick-active button::before {
        color:white;
    }

    .slick-list {
        overflow: visible;
    }

    button {
        z-index: 1;
    }
`
const Wrap = styled.div`
    img {
        border: 4px solid transparent;
        border-radius: 10px;
        box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
        rgb(0 0 0 / 73%) 0px 16px 10px -10px;
        width: 100%;
        height: 100%;

        &:hover {
            border: 4px solid rgba(249, 249, 249, 0.6);
            transition: 400ms all ease;
        }
    }

`