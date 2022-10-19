import React, { useState } from 'react';

const App = () => {
  const names = ["a", "b", "c"];
  const nameList = names.map((name) => {
    <li>{name}</li>
  })

  return (
    <div>
      {nameList}
    </div>
  );
};

export default App;