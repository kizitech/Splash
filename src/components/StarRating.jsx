import { useState, useEffect } from "react";
import { AiFillStar } from "react-icons/ai";

const colors = {
  yellow: "#FFCE0C",
  grey: "#a9a9a9",
};

function StarRating() {
  // LOCAL STORAGE PERSIST
  const currentValueFromLocalStorage = JSON.parse(
    localStorage.getItem("currentValue") || "[]"
  );
  const [currentValue, setCurrentValue] = useState(
    currentValueFromLocalStorage
  );
  useEffect(() => {
    localStorage.setItem("currentValue", JSON.stringify(currentValue));
  }, [currentValue]);

  const [hoverValue, setHoverValue] = useState(undefined);
  const stars = Array(5).fill(0);

  const handleClick = (value) => {
    setCurrentValue(value);
  };

  const handleMouseOver = (newHoverValue) => {
    setHoverValue(newHoverValue);
  };

  const handleMouseLeave = () => {
    setHoverValue(undefined);
  };

  return (
    <div style={styles.container}>
      <div style={styles.stars}>
        {stars.map((_, index) => {
          return (
            <AiFillStar
              size={18}
              key={index}
              onClick={() => handleClick(index + 1)}
              onMouseOver={() => handleMouseOver(index + 1)}
              onMouseLeave={handleMouseLeave}
              fill={
                (hoverValue || currentValue) > index
                  ? colors.yellow
                  : colors.grey
              }
              style={{
                cursor: "pointer",
              }}
            />
          );
        })}
      </div>
      {currentValue}
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  stars: {
    marginRight: 10,
    display: "flex",
    flexDirection: "row",
  },
  // outer: {
  //   strokeWidth: 0,
  //   fill: "#FFCE0C",
  // },
};

export default StarRating;
