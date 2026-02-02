import "../../assets/css/content.css";
import narutoImg from "../../assets/images/Naruto.jpg";

function Content() {
  return (
    <div className="contentMain">
      <div className="contentImage">
        <img src={narutoImg} height={650} width={550} alt="Naruto" />
      </div>

      <div className="contentText">
        <div>
          <h2>🌀 Naruto Uzumaki</h2>
          <h3>Seventh Hokage | Ninja Leader</h3>
          <p>
            Disciplined, fearless, and relentless. From an underestimated genin
            to the strongest leader of the Hidden Leaf.
          </p>
        </div>

        <div>
          <h2>👤 About</h2>
          <p>
            A high-performance shinobi driven by consistency, resilience, and
            leadership.
          </p>
        </div>

        <div className="skills">
          <h2>⚡ Skills</h2>
          <ul>
            <li>Leadership & Team Building</li>
            <li>High-Pressure Performance</li>
            <li>Strategic Combat</li>
            <li>Chakra Control</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Content;
