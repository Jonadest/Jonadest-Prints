'use client';

import { useState } from 'react';
import QuoteModal from './QuoteModal';

export default function TestQuoteButton() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        console.log('Button clicked/tapped - opening modal');
        alert('Button working!'); // Test alert to confirm click is registering
        setIsModalOpen(true);
    };

    return (
        <>
            <button
                onClick={openModal}
                onTouchStart={openModal}
                onTouchEnd={(e) => {
                    e.preventDefault();
                    console.log('Touch end event');
                }}
                style={{
                    backgroundColor: 'white',
                    color: 'black',
                    padding: '15px 30px',
                    fontSize: '18px',
                    cursor: 'pointer',
                    zIndex: 100,
                    position: 'relative',
                    display: 'inline-block',
                }}
            >
                TEST OPEN MODAL
            </button>

            {isModalOpen && (
                <div
                    style={{
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        backgroundColor: 'rgba(0,0,0,0.9)',
                        zIndex: 999999,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        padding: '20px',
                    }}
                >
                    <div
                        style={{
                            backgroundColor: 'black',
                            border: '2px solid white',
                            padding: '20px',
                            maxWidth: '90%',
                            maxHeight: '90%',
                            overflow: 'auto',
                        }}
                    >
                        <h2 style={{ color: 'white', marginBottom: '20px' }}>
                            Modal is Working!
                        </h2>
                        <button
                            onClick={() => setIsModalOpen(false)}
                            style={{
                                backgroundColor: 'white',
                                color: 'black',
                                padding: '10px 20px',
                                cursor: 'pointer',
                            }}
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}
        </>
    );
}
