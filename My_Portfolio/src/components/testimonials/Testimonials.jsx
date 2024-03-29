import React from 'react';
import { BsLinkedin } from 'react-icons/bs';
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import './testimonials.css';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      link: 'https://www.instagram.com/',
      name: 'Hermosa',
      role: 'hermoso por dentro y por fuera',
      test: 'as a beauty, I am proud',
    },
    {
      id: 2,
      link: 'https://www.instagram.com/',
      name: 'mari jonelle',
      role: 'Matured',
      test: "Youre beauty is like a bottle, because like a bottle a fish cannot swim without its hair.",
    },
    {
      id: 3,
      link: 'https://www.instagram.com/',
      name: 'Kyeth Homer',
      role: 'Gi kalibanga',
      test: 'kuan, unsay tawag ana, nalimot ko, over confident sa iyang ka gwapa imbes dili.',
    },
    {
      id: 4,
      link: 'https://www.instagram.com/',
      name: 'Miko Louis',
      role: 'Englishero',
      test: "Solid 10 out of 10.",
    },
    {
      id: 5,
      link: 'https://www.instagram.com/',
      name: 'Sugar Angel',
      role: 'Young Woman',
      test: "kanang, unique",
    },
  ];
  return (
    <section id="testimonials">
      <h5>sabi nila</h5>
      <h2>Testimonials</h2>
      <Swiper 
        className="container testimonials__container"
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
        >
        {testimonials.map((test) => (
          <SwiperSlide className="testimonial" key={test.id}>
          <div className="client__avatar">
            <a href={test.link}>
              <BsLinkedin />
            </a>
          </div>
          <h5 className='client__name'>{test.name}</h5>
          <small className="client__review">{test.test}</small>
        </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}

export default Testimonials