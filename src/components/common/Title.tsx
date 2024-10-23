import React from "react";

const Title = ({ text }: { text: string }) => {
  return (
    <div className="pb-4 pt-2">
      <h3>{text}</h3>
    </div>
  );
};

export default Title;
