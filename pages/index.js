import Layout from "../components/Layout";
import PictureBox from "../components/PicureBox";
const Index = () => (
  <Layout>
    <div id="header-section">
      <PictureBox />
      <p className="float"> Join the lonely hearts club</p>
    </div>
    <div id="question-section">
      <p>The questions</p>
      <p>The questions</p>
      <p>The questions</p>
      <p>The questions</p>
      <p>The questions</p>
      <p>The questions</p>
      <p>The questions</p>
      <p>The questions</p>
      <p>The questions</p>
    </div>

    <style global jsx>{`
      #header-section {
        display: grid;
        grid-template-columns: 1fr 1fr;
      }
      #question-section {
        display: grid;
      }
    `}</style>
  </Layout>
);

export default Index;
