import React from "react";

interface Props {}

const AuthHero: React.FC<Props> = (props) => {
  return (
    <div className="hidden w-1/2 h-screen text-white bg-black lg:block">
      Logo will go here.
    </div>
  );
};

AuthHero.defaultProps = {};

export default React.memo(AuthHero);
