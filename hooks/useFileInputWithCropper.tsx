import { ReactCropperElement } from '@/components/cropper';
import { useState, useRef, ChangeEvent, createRef } from 'react';

interface UseFileInputResult {
  previewImage: string;
  fileInputRef: React.RefObject<HTMLInputElement>;
  cropperRef: React.RefObject<ReactCropperElement>;
  cropperTriggerRef: React.RefObject<HTMLButtonElement>;
  handleButtonClick: (e: React.MouseEvent<HTMLElement>) => void;
  handleFileChange: (event: ChangeEvent<HTMLInputElement>) => void;
  handleCropData: () => void;
}

/**
 * Custom hook for handling image file input and previewing images.
 *
 * @param {string} defaultImage - the default image to display
 * @return {UseFileInputResult} an object containing the preview image, file input ref, and event handlers
 */
const useFileInputWithCropper = (defaultImage?: string): UseFileInputResult => {
  const [previewImage, setPreviewImage] = useState<string>(defaultImage || '');
  const fileInputRef = useRef<HTMLInputElement>(null);
  const cropperTriggerRef = useRef<HTMLButtonElement>(null);
  const cropperRef = createRef<ReactCropperElement>();

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

  const handleCropData = () => {
    if (typeof cropperRef.current?.cropper !== 'undefined') {
      setPreviewImage(
        cropperRef.current?.cropper.getCroppedCanvas().toDataURL()
      );
    }
  };

  return {
    previewImage,
    fileInputRef,
    cropperRef,
    cropperTriggerRef,
    handleButtonClick,
    handleFileChange,
    handleCropData,
  };
};

export default useFileInputWithCropper;
