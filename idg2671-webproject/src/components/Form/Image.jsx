// import React from "react";
// import { AdvancedImage } from '@cloudinary/react';
// import { Cloudinary } from "@cloudinary/url-gen";

// // Import required actions (style the image)
// import { thumbnail, scale } from "@cloudinary/url-gen/actions/resize";
// // import { byRadius } from "@cloudinary/url-gen/actions/roundCorners";
// // import { sepia } from "@cloudinary/url-gen/actions/effect";
// // import { source } from "@cloudinary/url-gen/actions/overlay";
// // import { opacity, brightness } from "@cloudinary/url-gen/actions/adjust";
// // import { byAngle } from "@cloudinary/url-gen/actions/rotate"

// // Import required qualifiers.
// // import { image } from "@cloudinary/url-gen/qualifiers/source";
// // import { Position } from "@cloudinary/url-gen/qualifiers/position";
// // import { compass } from "@cloudinary/url-gen/qualifiers/gravity";
// // import { focusOn } from "@cloudinary/url-gen/qualifiers/gravity";
// // import { FocusOn } from "@cloudinary/url-gen/qualifiers/focusOn";

// // Source: https://cloudinary.com/documentation/react_integration 
// export default function Image({uploadedImg}) {

//     // Create and configure your Cloudinary instance.
//     const cld = new Cloudinary({
//         cloud: {
//             cloudName: 'dmz24qiwu' // Name from the cloudinary user
//         }
//     });

//     // Use the image with public ID, uploadedImage prop (state).
//     const myImage = cld.image(uploadedImg);
    
//     //If you want to style the image (use the imports above)
//     myImage.resize(thumbnail().width(100).height(100));

//     return (
//         <div>
//             <AdvancedImage cldImg={myImage} />
//         </div>
//     )
// }