import { useState } from "react";

function Contents({ contents }) {
  const [isOpen, setIsOpen] = useState(true);

  function toggleContents() {
    setIsOpen(!isOpen);
  }

  return (
    <nav className="contents">
      <div className="contents-header">
        <h3>Contents</h3>

        <button
          type="button"
          className="contents-toggle"
          onClick={toggleContents}
          aria-expanded={isOpen}
        >
          {isOpen ? "Hide" : "Show"}
        </button>
      </div>

      {isOpen && (
        <ul>
          {contents.map((item) => (
            <li key={item.id}>
              <a href={`#${item.id}`}>{item.title}</a>

              {item.subtitles && (
                <ul>
                  {item.subtitles.map((subtitle) => (
                    <li key={subtitle.id}>
                      <a href={`#${subtitle.id}`}>{subtitle.title}</a>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}

export default Contents;
