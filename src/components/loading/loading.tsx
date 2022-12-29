import "./loading.scss";

const Loading = () => {
  return (
    <div className="flex items-center justify-center py-5">
      <div className="spinner" style={{ width: "26px", height: "26px" }}>
        <svg viewBox="0 0 32 32" width="100%" height="100%">
          <circle
            cx="16"
            cy="16"
            fill="none"
            r="14"
            strokeWidth="4"
            style={{ stroke: "rgb(29, 155, 240)", opacity: 0.2 }}
          ></circle>
          <circle
            cx="16"
            cy="16"
            fill="none"
            r="14"
            strokeWidth="4"
            style={{
              stroke: "rgb(29, 155, 240)",
              strokeDasharray: 80,
              strokeDashoffset: 60,
            }}
          ></circle>
        </svg>
      </div>
    </div>
  );
};

export default Loading;
