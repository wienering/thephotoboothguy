import { ImageResponse } from 'next/og';

export const alt = 'Photo Booth Rental Toronto & GTA | The Photobooth Guy';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 72,
          background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          fontFamily: 'system-ui, sans-serif',
        }}
      >
        <div style={{ fontSize: 48, fontWeight: 600, marginBottom: 16 }}>
          The Photobooth Guy
        </div>
        <div style={{ fontSize: 28, opacity: 0.9 }}>
          Photo Booth Rental Toronto & GTA
        </div>
        <div style={{ fontSize: 20, opacity: 0.7, marginTop: 24 }}>
          Weddings • Corporate Events • Parties
        </div>
      </div>
    ),
    { ...size }
  );
}
