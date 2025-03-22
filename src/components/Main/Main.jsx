
import "./main.css";
import { assets } from "../../assets/assets.js";
import { useContext } from "react";
import { Context } from "../../context/Context.jsx";

const Main = () => {
  const {
    prevprompt,
    SetPrevPrompt,
    onSent,
    SetRecentPrompt,
    recentPrompt,
    showResult,
    loading,
    resultdata,
    input,
    setInput,
  } = useContext(Context);

  // Function to handle key press events in the input field
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      onSent();
      setInput("");
    }
  };

  return (
    <div className="main">
      <div className="nav">
        <h1 class="logotext">Nómos</h1>
        <img src={assets.user_icon} alt="" />
      </div>
      <div className="main-container">
        {!showResult ? (
          <div className="greet">
            <p>
              <span>Hello</span>
            </p>
            <p>I Am A Law bot</p>
          </div>
        ) : (
          <div className="result">
            <div className="result-title">
              <img src={assets.user_icon} alt="" />
              <p>{recentPrompt}</p>
            </div>
            <div className="result-data">
              <img src={assets.real_logo} alt="" />
              {loading ? (
                // Shimmer UI for loading state
                <>
                  <div className="loader"></div>
                </>
              ) : (
                <p dangerouslySetInnerHTML={{ __html: resultdata }}></p>
              )}
            </div>
          </div>
        )}
        <div className="main-bottom">
          <div className="search-box">
            <input
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown} // Triggers on Enter key
              value={input}
              type="text"
              placeholder="Enter your law query"
            />
            <div>
              <img onClick={() => onSent()} src={assets.send_icon} alt="" />
            </div>
          </div>
          <p className="bottom-info">
            *Nomos may display inaccurate info, including about people, so double check.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Main;
