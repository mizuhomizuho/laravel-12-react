// import React, { useCallback, useState } from "react";
// import { useDropzone } from "react-dropzone";
//
// export default function MultiImageUpload() {
//     const [files, setFiles] = useState([]);
//
//     const onDrop = useCallback((acceptedFiles) => {
//         const newFiles = acceptedFiles.map(file =>
//             Object.assign(file, {
//                 preview: URL.createObjectURL(file),
//             })
//         );
//         setFiles(prev => [...prev, ...newFiles]);
//     }, []);
//
//     const { getRootProps, getInputProps, isDragActive } = useDropzone({
//         accept: { "image/*": [] },
//         multiple: true,
//         onDrop,
//     });
//
//     const removeFile = (name) => {
//         setFiles(prev => prev.filter(file => file.name !== name));
//     };
//
//     return (
//         <div>
//             {/* Dropzone area */}
//             <div
//                 {...getRootProps()}
//                 style={{
//                     border: "2px dashed #888",
//                     padding: "30px",
//                     textAlign: "center",
//                     borderRadius: "10px",
//                     background: isDragActive ? "#f0f0f0" : "white",
//                     cursor: "pointer",
//                 }}
//             >
//                 <input {...getInputProps()} />
//                 {isDragActive ? (
//                     <p>Отпустите файлы сюда...</p>
//                 ) : (
//                     <p>Перетащите сюда изображения или кликните для выбора</p>
//                 )}
//             </div>
//
//             {/* Preview */}
//             <div
//                 style={{
//                     display: "grid",
//                     gridTemplateColumns: "repeat(auto-fill, minmax(120px, 1fr))",
//                     gap: "10px",
//                     marginTop: "20px",
//                 }}
//             >
//                 {files.map(file => (
//                     <div
//                         key={file.name}
//                         style={{
//                             position: "relative",
//                             borderRadius: "8px",
//                             overflow: "hidden",
//                             boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
//                         }}
//                     >
//                         <img
//                             src={file.preview}
//                             alt={file.name}
//                             style={{ width: "100%", height: "100px", objectFit: "cover" }}
//                         />
//                         <button
//                             onClick={() => removeFile(file.name)}
//                             style={{
//                                 position: "absolute",
//                                 top: "5px",
//                                 right: "5px",
//                                 background: "rgba(0,0,0,0.6)",
//                                 border: "none",
//                                 color: "white",
//                                 borderRadius: "50%",
//                                 width: "24px",
//                                 height: "24px",
//                                 cursor: "pointer",
//                             }}
//                         >
//                             ×
//                         </button>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// }
