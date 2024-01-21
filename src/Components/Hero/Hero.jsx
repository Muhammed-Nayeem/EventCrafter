import musicImg from "../../Assets/SliderImages/MusicEvents.jpg";
import theaterImg from "../../Assets/SliderImages/TheaterEvents.jpg";
import movieImg from "../../Assets/SliderImages/MovieEvents.jpg";
import sportsImg from "../../Assets/SliderImages/SportsEvent.jpg";
import commedyImg from "../../Assets/SliderImages/CommedyEvents.jpg";
import magicImg from "../../Assets/SliderImages/MagicEvents.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "./Hero.css";

const Hero = () => {
  return (
    <section className="py-6 relative -z-0">
      <div className="container mx-auto">
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
          <SwiperSlide>
            <img src={musicImg} style={{ height: "500px" }} alt="Event" />
            <div className="content">
              <h1>Winter Music Festival</h1>
              <p>Live Concert Performing</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <img src={theaterImg} style={{ height: "500px" }} alt="Event" />
            <div className="content">
              <h1>Shakespeare in the Park</h1>
              <p>Live Theater Show</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <img src={movieImg} style={{ height: "500px" }} alt="Event" />
            <div className="content">
              <h1>Movie Premiere Event</h1>
              <p>Film Premiering will play</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <img src={sportsImg} style={{ height: "500px" }} alt="Event" />
            <div className="content">
              <h1>UEFA Sports Produce</h1>
              <p>Sports Event will play</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <img src={commedyImg} style={{ height: "500px" }} alt="Event" />
            <div className="content">
              <h1>Stand Up Comedy Show</h1>
              <p>Live Commedy show</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <img src={magicImg} style={{ height: "500px" }} alt="Event" />
            <div className="content">
              <h1>Magical Illusion Show</h1>
              <p>Live magical show play</p>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default Hero;
