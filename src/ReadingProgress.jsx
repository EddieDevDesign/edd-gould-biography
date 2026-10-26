import { useState, useEffect } from "react";

function ReadingProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    function updateProgress() {
      const scrollTop = window.scrollY;

      const documentHeight =
        document.documentElement.scrollHeight - window.innerHeight;

      const scrolled =
        documentHeight > 0 ? (scrollTop / documentHeight) * 100 : 100;

      setProgress(Math.min(100, Math.max(0, scrolled)));
    }

    window.addEventListener("scroll", updateProgress);
    window.addEventListener("resize", updateProgress);

    updateProgress();

    return () => {
      window.removeEventListener("scroll", updateProgress);
      window.removeEventListener("resize", updateProgress);
    };
  }, []);

  return (
    <div className="reading-progress">
      <div className="reading-progress-bar" style={{ width: `${progress}%` }} />
    </div>
  );
}

export default ReadingProgress;
