import React from "react";

const Skeleton = ({
  margin,
  width,
  corner,
  background,
  mode,
  height = "1em"
}) => {
  function isNumeric(value) {
    return /^\d+$/.test(value);
  }
  const _width = () => {
    if (width) return isNumeric(width) ? `${width}px` : width;
    return "100%";
  };
  const _height = () => {
    return isNumeric(height) ? `${height}px` : height;
  };
  const _margin = () => {
    if (margin) return isNumeric(margin) ? `${margin}px` : margin;
    return 5;
  };
  const _corner = () => {
    if (corner) return isNumeric(corner) ? `${corner}px` : corner;
    return 2;
  };
  const _background = () => {
    if (background) return background;
    return _mode === "dark" ? "rgba(255, 255, 255, 0.2)" : "#dddbdd";
  };
  const _mode = () => {
    if (mode) return mode;
    return "light";
  };
  return (
    <div
      className="skeleton"
      style={{
        width: _width(),
        height: _height(),
        margin: _margin(),
        borderRadius: _corner(),
        background: _background()
      }}
    ></div>
  );
};

export default Skeleton;
