import React, { useState, useEffect } from 'react';
import PostsSection from './Posts/PostsSection';
import PostForm from './Posts/PostForm';
import MainSection from './MainSection/MainSection';

export default function App() {
    const [typedText, setTypedText] = useState('');
    const fullText = "Welcome to the dark side of knowledge...";

    useEffect(() => {
        const typeText = () => {
            setTypedText((prev) => {
                if (prev.length < fullText.length) {
                    return fullText.slice(0, prev.length + 1);
                }
                return prev;
            });
        };

        const typingInterval = setInterval(typeText, 100);
        return () => clearInterval(typingInterval);
    }, []);

    useEffect(() => {
        const createBloodDrips = () => {
            const drips = [];
            for (let i = 0; i < 10; i++) {
                const style = {
                    left: `${Math.random() * 100}%`,
                    animationDelay: `${Math.random() * 5}s`,
                };
                drips.push(<div key={i} className="blood-drip" style={style} />);
            }
            return drips;
        };

        const drips = createBloodDrips();
        const bloodDripsContainer = document.createElement('div');
        bloodDripsContainer.id = 'blood-drips-container';
        document.body.appendChild(bloodDripsContainer);

        const root = document.getElementById('blood-drips-container');
        if (root) {
            root.innerHTML = '';
            drips.forEach(drip => {
                const dripElement = document.createElement('div');
                dripElement.className = drip.props.className;
                Object.assign(dripElement.style, drip.props.style);
                root.appendChild(dripElement);
            });
        }

        return () => {
            document.body.removeChild(bloodDripsContainer);
        };
    }, []);

    return (
        <div className="bg-y text-white-600 min-h-screen max-w-[1200px] m-auto">
            <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Creepster&family=Nosifer&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Black+And+White+Picture&display=swap');
        @keyframes drip {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(100vh); }
        }
        .blood-drip {
          position: fixed;
          top: 0;
          width: 2px;
          height: 50px;
          background: linear-gradient(to bottom, #ff0000, #8b0000);
          animation: drip 5s infinite;
        }
        .glow {
          text-shadow: 0 0 5px #ff0000, 0 0 10px #ff0000, 0 0 15px #ff0000, 0 0 20px #ff0000;
        }
        .post-glow:hover {
          box-shadow: 0 0 5px #ff0000, 0 0 10px #ff0000;
        }
      `}</style>
            <div className="container mx-auto px-4 py-8">
                <header className="text-center mb-12">
                    <h1 className="text-7xl font-normal mb-4 font-['Nosifer'] glow">Threads</h1>
                    <p className="text-xl font-['Creepster'] glow">{typedText}</p>
                </header>

                <MainSection />
            </div>
        </div>
    );
}