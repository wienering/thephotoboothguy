'use client';

interface PlaceholderImageProps {
  width: number;
  height: number;
  text?: string;
  className?: string;
}

export default function PlaceholderImage({
  width,
  height,
  text = 'Image',
  className = '',
}: PlaceholderImageProps) {
  return (
    <div
      className={`bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center ${className}`}
      style={{ width, height }}
    >
      <span className="text-gray-500 text-sm font-medium">{text}</span>
    </div>
  );
}







