import React, { useRef, useState } from "react";

const Header = () => {
  const [videoplay, setvideoplay] = useState(false);
  const [button, setbutton] = useState("tvredbottom");
  const [showclick, setshowclick] = useState(true)

  const videoRef = useRef();

  const playVideo = () => {
    if (!videoplay) {
      videoRef.current.play();
      setvideoplay(!videoplay);
      setbutton("tvgreenbottom");
      setshowclick(false)
    } else {
      videoRef.current.load();
      setvideoplay(!videoplay);
      setbutton("tvredbottom");
    }
  };
  return (
    <header className="header">
      <section className="header__banner">
        <figure className="header__figure">
          <img className="header__figure--img" src="../img/logo.png" alt="" />
        </figure>
      </section>
      <figure className="tvfigure">
      <button className={`tvbutton ${button} `} onClick={playVideo}></button>
        <img className="tvimg" src="../img/tv.png" alt="" />
        <video ref={videoRef} key="videoclip2" loop>
          <source src="../video/rickymortyvideo2.mp4" type="video/mp4" />
        </video>
        {showclick && <img className="header__figure--clickme" src="../img/clickme.png" alt="" />}
      </figure>
    </header>
  );
};

export default Header;
