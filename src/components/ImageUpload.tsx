import React, { useState, ChangeEvent } from "react";
import {
  storage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "../config/firebase";

const ImageUpload: React.FC = () => {
  const [image, setImage] = useState<File | null>(null);
  const [uploadProgress, setUploadProgress] = useState<number>(0);
  const [downloadURL, setDownloadURL] = useState<string | null>(null);

  const handleImageChange = (event: ChangeEvent<HTMLInputElement>) => {
    const selectedImage = event.target.files?.[0];
    if (selectedImage) {
      setImage(selectedImage);
    }
  };

  const handleImageUpload = async () => {
    if (!image) return;

    const fileRef = ref(storage, `images/${image.name}`);
    const uploadTask = uploadBytesResumable(fileRef, image);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        // Progress monitoring
        const progress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        setUploadProgress(progress);
      },
      (error) => {
        // Handle errors
        console.error(error);
      },
      () => {
        // Complete
        getDownloadURL(uploadTask.snapshot.ref).then((url) => {
          setDownloadURL(url);
        });
      }
    );
  };

  return (
    <div>
      <input type="file" onChange={handleImageChange} />
      <button onClick={handleImageUpload}>Upload Image</button>
      {uploadProgress > 0 && (
        <p className="">Upload progress: {uploadProgress}%</p>
      )}
      <div
        className="progress"
        role="progressbar"
        aria-label="Animated striped example"
        aria-valuenow={75}
        aria-valuemin={0}
        aria-valuemax={100}
      >
        <div
          className="progress-bar text-bg-warning"
          style={{ width: `${uploadProgress}%` }}
        >
          {uploadProgress}%
        </div>
      </div>
      {downloadURL && (
        <img
          src={downloadURL}
          alt="Uploaded Image"
          style={{ maxWidth: "100%" }}
        />
      )}
    </div>
  );
};

export default ImageUpload;
