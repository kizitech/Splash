import { useState } from "react";
import { AiFillStar } from "react-icons/ai";

const colors = {
  yellow: "#FFCE0C",
  grey: "#a9a9a9",
};

function StarRating() {
  const [currentValue, setCurrentValue] = useState(0);
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
              key={index}
              size={18}
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
};

export default StarRating;
