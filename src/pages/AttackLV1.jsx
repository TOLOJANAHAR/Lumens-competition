import "../styles/AttackLV1.css"
import Modal from "../components/Modal"
import {Canvas} from "@react-three/fiber";
import {FormationScene} from "../components/FormationScene.jsx";
import {PunchBagScene} from "../components/PunchBagScene.jsx";
import {Physics} from "@react-three/cannon";

function AttackLV1() {

    return (
        <div className="attacklv1-container">
            <div className="background-diva1"></div>
            <div className="background-diva2"></div>
            <Modal modalDescription={"Le but est de taper le plus possible sur le punching bag durant le temps impartis, ne vous retenez pas et surpassez-vous! C'est ici que débute votre formation"}/>
            <div className="level1-text">
                <div className="level-number">1</div>
                <div className="hero-in-formation">
                    <div className="hero-profil">
                        <img src="" alt="" className="profilImage" />
                    </div>
                    <div className="hero-name">Bakugo Katsuki</div>
                </div>
                <div className="level-name">
                    Technique de frappe
                </div>
                <div className="hero-score">
                    <div className="level-timer">
                        <p>Time</p>
                        <p className="level-value">00:00MS</p>
                    </div>
                    <div className="level-score">
                        <p>Score</p>
                        <p className="level-value">0PTS</p>
                    </div>
                </div>
                <div className="bottom-level">
                    <button className="level-button">
                        <div className="button-text">Start Game</div>
                    </button>
                </div>
            </div>
            <div className="level1-3d">
                <div className="level-content">
                    <Canvas>
                        <Physics>
                            <PunchBagScene/>
                        </Physics>
                    </Canvas>
                </div>
                <div className="attack-bottom-content">
                    <button className="next-button">
                        <div className="next-text">
                            <div className="next-text">
                                next
                                <img src="src\assets\images\next.png" alt="next" />
                            </div>
                        </div>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default AttackLV1