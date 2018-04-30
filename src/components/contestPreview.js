import React from 'react';

export const ContestPreview = contest => {
  return (
    <div className="ContestPreview">
      <li className="category-name">{contest.categoryName} </li>
      <li className="contest-name">{contest.contestName} </li>
    </div>
  );
};
