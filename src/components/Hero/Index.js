import React from 'react';
import './HeroSection.css';
import { Button } from '../ButtonElements';

export default function HeroSection() {
    return (
            <div className="hero-container">
                <h1>Travel More</h1>
                <p>Plan your next trip today</p>
                <div className="hero-btns">
                    <Button fontBig big primary>Get Started</Button>
                </div>
            </div>
    )
}