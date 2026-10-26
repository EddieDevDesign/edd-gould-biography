import { useState } from "react";

import Heading from "./Heading";
import ReadingProgress from "./ReadingProgress";
import BackToTop from "./BackToTop";
import FeaturedIntro from "./FeaturedIntro";
import Milestones from "./Milestones";
import Introduction from "./Introduction";
import Avatar from "./Avatar";
import Contents from "./Contents";
import EarlyLife from "./EarlyLife";
import Career from "./Career";
import CulturalImpact from "./CulturalImpact";
import IllnessAndDeath from "./IllnessAndDeath";
import Legacy from "./Legacy";
import Filmography from "./Filmography";
import References from "./References";
import QuickFacts from "./QuickFacts";
import ExternalLinks from "./ExternalLinks";
import Footer from "./Footer";

import "./App.css";

const contents = [
  { title: "Early life", id: "early-life" },
  {
    title: "Career",
    id: "career",
    subtitles: [{ title: "Cultural impact", id: "cultural-impact" }],
  },
  { title: "Illness and death", id: "illness-and-death" },
  { title: "Legacy", id: "legacy" },
  { title: "Filmography", id: "filmography" },
  { title: "References", id: "references" },
  { title: "External links", id: "external-links" },
];

const pictures = [
  "https://upload.wikimedia.org/wikipedia/en/0/06/Edd_Gould_of_Eddsworld.jpg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfun8S_jGBWgst-vAUKbSFZFl4P5hSkjpf1nPw3kDnbA&s=10",
];

function App() {
  const [pictureIndex, setPictureIndex] = useState(0);

  function changePicture() {
    setPictureIndex((previousIndex) => (previousIndex + 1) % pictures.length);
  }

  return (
    <div className="App">
      <ReadingProgress />
      <Heading name="Edd Gould" />

      <div className="featured-section">
        <div className="photo-section">
          <Avatar picture={pictures[pictureIndex]} />

          <button
            type="button"
            className="picture-button"
            onClick={changePicture}
          >
            Change Picture
          </button>
          <span className="picture-counter">
            {pictureIndex + 1} / {pictures.length}
          </span>
        </div>

        <FeaturedIntro />
      </div>

      <Milestones />

      <div className="article-layout">
        <aside className="sidebar">
          <Contents contents={contents} />
        </aside>

        <main className="article-content">
          <Introduction />
          <EarlyLife />
          <Career />
          <CulturalImpact />
          <IllnessAndDeath />
          <Legacy />
          <Filmography />
          <References />
          <ExternalLinks />
        </main>

        <aside className="article-info">
          <QuickFacts />
        </aside>
      </div>
      <Footer />
      <BackToTop />
    </div>
  );
}

export default App;
