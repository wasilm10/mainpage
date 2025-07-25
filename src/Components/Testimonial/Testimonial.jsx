import React, { useRef } from 'react'
import './Testimonial.css'
import next_icon from '../../assets/next-icon.png'
import back_icon from '../../assets/back-icon.png'
import u1 from '../../assets/user-1.png'
import u2 from '../../assets/user-2.png'
import u3 from '../../assets/user-3.png'
import u4 from '../../assets/user-4.png'

const Testimonial = () => {
    const slider = useRef();
    const tx = useRef(0);

    const sliderforward = () => {
        if (tx.current > -50) {
            tx.current -= 25;
        }
        slider.current.style.transform = `translateX(${tx.current}%)`;
    }

    const sliderbackward = () => {
        if (tx.current < 0) {
            tx.current += 25;
        }
        slider.current.style.transform = `translateX(${tx.current}%)`;
    }

    return (
        <div className='testimonials'>
            <img src={next_icon} alt="" className='next-btn' onClick={sliderforward} />
            <img src={back_icon} alt="" className='back-btn' onClick={sliderbackward} />
            <div className="slider">
                <ul ref={slider}>
                    <li>
                        <div className='slide'>
                            <div className="userinfo">
                                <img src={u1} alt="" />
                                <div>
                                    <h3>Sara Mathews</h3>
                                    <span>Bengaluru, India</span>
                                </div>
                            </div>
                            <p>
                                "With YoungCents, I always know how my son manages his pocket money. It has helped us talk openly about saving and budgeting."
                            </p>
                        </div>
                    </li>
                    <li>
                        <div className='slide'>
                            <div className="userinfo">
                                <img src={u2} alt="" />
                                <div>
                                    <h3>Ben Affleck</h3>
                                    <span>Delhi, India</span>
                                </div>
                            </div>
                            <p>
                                "YoungCents makes it easy to track my daughter's spending and teach her how to prioritize needs over wants."
                            </p>
                        </div>
                    </li>
                    <li>
                        <div className='slide'>
                            <div className="userinfo">
                                <img src={u3} alt="" />
                                <div>
                                    <h3>Zaria Siddiki</h3>
                                    <span>Pune, India</span>
                                </div>
                            </div>
                            <p>
                                "I love how clean and intuitive the app is. It has helped my kids learn the value of saving while keeping it fun."
                            </p>
                        </div>
                    </li>
                    <li>
                        <div className='slide'>
                            <div className="userinfo">
                                <img src={u4} alt="" />
                                <div>
                                    <h3>Tom Brady</h3>
                                    <span>Hyderabad, India</span>
                                </div>
                            </div>
                            <p>
                                "YoungCents helps us manage money together and makes financial conversations with my child easier."
                            </p>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Testimonial
