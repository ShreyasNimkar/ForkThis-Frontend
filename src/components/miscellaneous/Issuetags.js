import React from "react";

const Issuetags = ({tag}) => {
  return (
    <div class="mt-1 text-xs inline-flex items-center font-bold leading-sm uppercase px-3 py-1 rounded-full bg-HTpurple-900 text-gray-700 border">
      {tag}
    </div>
  );
};

export default Issuetags;
