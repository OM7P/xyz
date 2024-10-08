// import React from "react";

// const SiteLoading = () => {
//   return (
//     <div className="fixed inset-0 z-[100] bg-primary-white-color grid place-items-center">
//       <div id="SideBarLoading">
//         <div></div>
//         <div></div>
//         <div></div>
//         <div></div>
//         <div></div>
//       </div>
//     </div>
//   );
// };

// export default SiteLoading;


import React from 'react'

const SiteLoading = ({
    videoEnded
}) => {
  return (
    <div className="fixed  w-full h-full top-0 left-0 overflow-hidden z-[160] bg-[#000]">
      <video
        src="/images/video/Civic_Mark_Animation_4x3_.mp4"
        // src="/images/video/Comp_2.mp4"
        width={5000}
        height={5000}
        className="absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]  w-[400px] h-[400px] object-cover"
        autoPlay
        muted
        disablePictureInPicture
        onEnded={videoEnded}
      ></video>
    </div>
  )
}

export default SiteLoading