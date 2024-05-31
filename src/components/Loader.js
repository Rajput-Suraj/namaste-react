import React from 'react';
import { Oval } from 'react-loader-spinner';

function Loader() {
  return (
    <div className="padding-container h-screen flex items-center justify-center">
      <Oval
        visible={true}
        height="100"
        width="80"
        color="#f97516"
        secondaryColor="#f97516"
        ariaLabel="oval-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </div>
  );
}

export default Loader;
