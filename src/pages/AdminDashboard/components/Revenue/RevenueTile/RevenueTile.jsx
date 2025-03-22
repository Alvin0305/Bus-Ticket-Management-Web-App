import "./RevenueTile.css";

function RevenueTile({ name, value, icon }) {
  return (
    <div className="revenue-tile">
      <div className="revenue-tile-name-value-div">
        <h3 className="revenue-tile-name">{name}</h3>
        <h3 className="revenue-tile-value">{value}</h3>
      </div>
      {icon}
    </div>
  );
}

export default RevenueTile;
