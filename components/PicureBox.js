const PictureBox = props => (
  <div id="picture-box">
    <img id="pic" src="https://placeimg.com/200/200/any" />
    <p> DRAW YOURSELF HERE</p>
    <style global jsx>{`
      #picture-box {
        width: 50%;
        height: 90%;
        border: 10px solid #ffff !important;
        display: grid;
      }

      #pic {
        width: 100%;
      }
      #picture-box p {
        margin: auto;
        color: white;
      }
    `}</style>
  </div>
);

export default PictureBox;
