const Shell = props => (
  <div className="shell">
    {props.children}
    <style global jsx>{`
      .shell {
        display: flex;
        overflow: hidden;
      }
    `}</style>
  </div>
);

export default Shell;
