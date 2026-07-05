import React, { useState, useEffect, useRef } from "react";
import './Number.css'

const Number = () => {
    const [numbers, setNumbers] = useState({
        students: 0,
        alumni: 0,
        faculty: 0,
        years: 0
    });

    const [hasStarted, setHasStarted] = useState(false);
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting && !hasStarted) {
                    setHasStarted(true);
                }
            },
            { threshold: 0.5 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, [hasStarted]);

    useEffect(() => {
        if (!hasStarted) return;

        const duration = 2000; // 2 seconds
        const startTime = Date.now();

        const animate = () => {
            const elapsed = Date.now() - startTime;
            const progress = Math.min(elapsed / duration, 1);

            setNumbers({
                students: Math.floor(600 * progress),
                alumni: Math.floor(1500 * progress),
                faculty: Math.floor(150 * progress),
                years: Math.floor(19 * progress)
            });

            if (progress < 1) {
                requestAnimationFrame(animate);
            }
        };

        animate();
    }, [hasStarted]);

    return (
        <div className="numbers" ref={sectionRef}>
            <div className="part1">
                <h1>SMC IN NUMBERS</h1>
            </div>

            <div className="part2">
                <div className="one">
                    <h1>{numbers.students}</h1>
                    <p>ENROLLED STUDENTS</p>
                </div>
                <div className="one">
                    <h1>{numbers.alumni}</h1>
                    <p>ALUMNI</p>
                </div>
                <div className="one">
                    <h1>{numbers.faculty}+</h1>
                    <p>FACULTY</p>
                </div>
                <div className="one">
                    <h1>{numbers.years}</h1>
                    <p>YEARS OF EXPERIENCE</p>
                </div>
            </div>
        </div>
    );
};

export default Number;