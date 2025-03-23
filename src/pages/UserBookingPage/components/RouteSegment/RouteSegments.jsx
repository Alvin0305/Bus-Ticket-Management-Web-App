import "./RouteSegments.css";

function RouteSegments({ routes }) {
  return (
    <div className="route-segments">
      {routes.map((route, index) => {
        return (
          <div className="route-segment">
            <h2 className="route-segment-location">{route.location}</h2>
            <div className="route-segment-time-div">
              <h2 className="route-segment-time">{route.departure}</h2>
              <h2 className="route-segment-time">{route.arrival}</h2>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default RouteSegments;
