import React from 'react';
import { Link } from 'react-router';

const CustomBtn = ({children, to}) => {
  return (
    <div>
      <div className="custom-linear-bg p-0.5 rounded-md">
        <button className=" py-1.5 px-4 rounded-sm bg-white cursor-pointer">
          <Link className="custom-linear-text" to={to}>
            {children}
          </Link>
        </button>
      </div>
    </div>
  );
};

export default CustomBtn;