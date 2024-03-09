import React, { useState } from "react";

const Collapse = ({ className, title, content }) => {
  const [open, setOpen] = useState(false);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  return (
    <div className={className} onClick={handleToggle}>
      <h3>{title}</h3>
      {open && content}
    </div>
  );
};

export default Collapse;
