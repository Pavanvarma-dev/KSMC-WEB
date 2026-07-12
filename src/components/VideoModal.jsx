import { X } from 'lucide-react';

export default function VideoModal({ onClose }) {
  return (
    <div className="video-modal-backdrop" onClick={onClose}>
      <div className="video-modal-container" onClick={(e) => e.stopPropagation()}>
        <button className="video-modal-close-btn" onClick={onClose}>
          <X size={24} /> Close
        </button>
        <iframe 
          className="video-iframe" 
          src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1" 
          title="KSMCM Rural Transformation Video" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
}
