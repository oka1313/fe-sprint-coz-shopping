import { useState } from "react";
// import { Icon } from "../Icon";
import bookmarkOff from "../../images/bookmark_icon_off.png";
import bookmarkOn from "../../images/bookmark_icon_on.png";

export const BookmarkButton = ({ primary }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <>
      {primary ? (
        <div>
          <img src={bookmarkOn} alt="bookmarkOn" /> : True
        </div>
      ) : (
        <div>
          <img src={bookmarkOff} alt="bookmarkOff" /> : False
        </div>
      )}
      <br />
      {isExpanded ? (
        <div>
          <img
            onClick={() => setIsExpanded(!isExpanded)}
            src={bookmarkOn}
            alt="bookmarkOn"
          />{" "}
          : 버튼을 클릭하세요
        </div>
      ) : (
        <div>
          <img
            onClick={() => setIsExpanded(!isExpanded)}
            src={bookmarkOff}
            alt="bookmarkOff"
          />{" "}
          : 버튼을 클릭하세요
        </div>
      )}
    </>
  );
};
