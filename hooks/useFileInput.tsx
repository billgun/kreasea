import { useState, useRef, ChangeEvent } from 'react';

interface UseFileInputResult {
  previewImage: string;
  fileInputRef: React.RefObject<HTMLInputElement>;
  handleButtonClick: (e: React.MouseEvent<HTMLElement>) => void;
  handleFileChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

/**
 * Custom hook for handling image file input and previewing images.
 *
 * @param {string} defaultImage - the default image to display
 * @return {UseFileInputResult} an object containing the preview image, file input ref, and event handlers
 */
const useFileInput = (defaultImage?: string): UseFileInputResult => {
  const [previewImage, setPreviewImage] = useState<string>(defaultImage || '');
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleButtonClick = (e: React.MouseEvent<HTMLElement>) => {
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
      // Enable this to remove the preview image else it will remain
      // setPreviewImage('');
      return;
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
