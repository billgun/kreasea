import { useState, useRef, ChangeEvent } from 'react';

// interface UseFileInputProps {
//   // Any parameters you might need
//   defaultImage?: string;
// }

interface UseFileInputResult {
  previewImage: string;
  fileInputRef: React.RefObject<HTMLInputElement>;
  handleButtonClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  handleFileChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

const useFileInput = (defaultImage?: string): UseFileInputResult => {
  const [previewImage, setPreviewImage] = useState<string>(defaultImage || '');
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files && event.target.files[0];

    if (selectedFile) {
      // Display preview image
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewImage(reader.result as string);
      };
      reader.readAsDataURL(selectedFile);
    } else {
      return;
      setPreviewImage('');
    }
  };

  return {
    previewImage,
    fileInputRef,
    handleButtonClick,
    handleFileChange,
  };
};

export default useFileInput;
