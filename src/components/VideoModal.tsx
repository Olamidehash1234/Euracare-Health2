import React, { useEffect, useRef } from "react";

type VideoModalProps = {
  open: boolean;
  videoUrl: string | null;
  onClose: () => void;
};

const VideoModal: React.FC<VideoModalProps> = ({ open, videoUrl, onClose }) => {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    function handleClickOutside(event: MouseEvent) {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        onClose();
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [open, onClose]);

  if (!open || !videoUrl) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60">
      <div ref={modalRef} className="relative bg-white rounded-lg shadow-lg max-w-4xl w-full mx-4">
        <button
          className="absolute top-2 sm:top-[20px] sm:right-[20px] right-2"
          onClick={onClose}
          aria-label="Close"
        >
          <img src="/close.svg" alt="" />
        </button>
        <div className=" pt-[40px] pb-[20px] px-[20px] sm:p-[60px]">
          <video
            src={videoUrl}
            controls
            autoPlay
            className="w-full h-[300px] lg:h-[400px] rounded-lg bg-black"
          />
        </div>
      </div>
    </div>
  );
};

export default VideoModal;
