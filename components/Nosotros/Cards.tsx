import "./Cards.css";
import missionVisionData from "@/data/mission-vision.json";

export default function Cards() {
  const { mission, vision } = missionVisionData;

  return (
    <div>
      <div className="cards">
        {/* Misión */}
        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front mision">
              <h2>{mission.title}</h2>
            </div>
            <div className="flip-card-back">
              <h2>{mission.title}</h2>
              <p>{mission.description}</p>
            </div>
          </div>
        </div>

        {/* Visión */}
        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front vision">
              <h2>{vision.title}</h2>
            </div>
            <div className="flip-card-back">
              <h2>{vision.title}</h2>
              <p>{vision.description}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
