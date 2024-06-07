// import { Button } from "@mui/material";
// import React, { useState } from "react";

// const ImageUpload = () => {
//   const [selectedImage, setSelectedImage] = useState(null);
//   const [imageName, setImageName] = useState("");

//   const handleImageChange = (event) => {
//     const file = event.target.files[0];
//     setSelectedImage(file);
//     localStorage.setItem("img", file);
//     console.log(file);
//     setImageName(file.name);
//   };

//   const handleImageAdd = () => {
//     // localStorage.setItem("img", selectedImage);
//     setSelectedImage(null);
//   };

//   return (
//     <div>
//       <h2>Image Upload</h2>
//       <input type="file" accept="image/*" onChange={handleImageChange} />
//       {selectedImage && (
//         <div>
//           <h3>Preview:</h3>
//           <img src={URL.createObjectURL(selectedImage)} />
//         </div>
//       )}

//       <Button children="add" onClick={handleImageAdd} />
//     </div>
//   );
// };

// export default ImageUpload;
