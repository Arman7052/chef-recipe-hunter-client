import React, { useState, useEffect } from 'react';

const Pithas = () => {

    const [pithasData, setPithasData] = useState([]);

    useEffect(() => {
        fetch('https://taste-of-bengal-server-arman1e28.vercel.app/pithas')
            .then(res => res.json())
            .then(data => setPithasData(data))

    }, [])

    const openModal = () => {
        const modal = document.getElementById("my-modal-6");
        modal.checked = true;
    }

    return (
        <div>
            <div>
                {
                    pithasData.map(pitha => (
                        <div key={pitha.id}>
                            <div>
                                {/* The image to open modal */}
                                <img src={pitha.image} alt={pitha.name} onClick={openModal} />

                                {/* Put this part before </body> tag */}
                                <input type="checkbox" id="my-modal-6" className="modal-toggle" />
                                <div className="modal modal-bottom sm:modal-middle">
                                    <div className="modal-box">
                                        <h3 className="font-bold text-lg">Congratulations random Internet user!</h3>
                                        <p className="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
                                        <div className="modal-action">
                                            <label htmlFor="my-modal-6" className="btn">Yay!</label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default Pithas;

