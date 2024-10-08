import React from "react";

const SiteLoading = () => {
    return (
        <div className="fixed inset-0 z-[100] bg-primary-white-color grid place-items-center">
          {/* SideBarLoading */}
          <div id="SideBarLoading">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
          
          {/* Circular Loader */}
          {/* <div className="loader"></div> */}
        </div>
      );
};

export default SiteLoading;
