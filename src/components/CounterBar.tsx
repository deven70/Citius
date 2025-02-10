'use client';
import { Container } from './Container';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/autoplay';

const CounterBar = () => {
  return (
    <section className="w-full bg-white">
      <Container>
      <section className="stats pt-[106px] pb-[106px]">
            <div className="stats-header">
                <h2>Choose us to be your technology partner and let us do the heavy lifting while you focus on your core business.</h2>
            </div>
            <div className="stats-container">
                <div className="stat-item">
                    <div className="stat-icon">
                        <i className="fas fa-check-circle"></i>
                    </div>
                    <div className="stat-number">500+</div>
                    <div className="stat-label">Successful projects</div>
                </div>
                <div className="stat-item">
                    <div className="stat-icon">
                        <i className="fas fa-handshake"></i>
                    </div>
                    <div className="stat-number">12+</div>
                    <div className="stat-label">OME Partnership</div>
                </div>
                <div className="stat-item">
                    <div className="stat-icon">
                        <i className="fas fa-award"></i>
                    </div>
                    <div className="stat-number">5+</div>
                    <div className="stat-label">Years of Experience</div>
                </div>
                <div className="stat-item">
                    <div className="stat-icon">
                        <i className="fas fa-globe"></i>
                    </div>
                    <div className="stat-number">12+</div>
                    <div className="stat-label">Countries Covered</div>
                </div>
            </div>
        </section>
      </Container>
    </section>
  );
};

export default CounterBar;
