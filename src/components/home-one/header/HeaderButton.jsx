import { useState } from "react";

function HeaderButton() {
  const [hover, setHover] = useState(false);

  return (
    <div className="header-btn header-btn-l1 ms-auto d-block">
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://calendly.com/hey-voidcraftmedia/crafting-session?month=2025-10"
        className="aximo-default-btn pill aximo-header-btn d-inline-flex align-items-center justify-content-center gap-2 px-4 py-2 rounded-pill text-white fw-bold"
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        onFocus={() => setHover(true)}
        onBlur={() => setHover(false)}
        style={{
          backgroundColor: hover ? '#26ff00ff' : '#37ff14',
          transition: 'background-color 150ms ease',
        }}
      >
        {/* Visible only on extra-small screens */}
       
<i className="icon-call text-white  bg-black p-2 rounded-5 d-sm-none"></i>
        {/* Visible on small and larger screens */}
        <span className="d-none d-sm-inline-flex align-items-center gap-2 m-0">
          Book A Crafting Session<i className="icon-call text-white  bg-black p-2 rounded-5"></i>
        </span>
      </a>
    </div>
  );
}

export default HeaderButton;
