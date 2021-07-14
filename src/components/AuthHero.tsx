import React from "react";

interface Props {}

const AuthHero: React.FC<Props> = (props) => {
  return (
    <div className="h-screen bg-black w-1/2 text-white">Logo will go here.</div>
  );
};

AuthHero.defaultProps = {};

export default React.memo(AuthHero);
