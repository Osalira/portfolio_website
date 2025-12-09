import { ImageResponse } from 'next/og'
import { personalInfo } from '@/data/personal'

export const runtime = 'edge'
export const alt = 'Ben Osalira - Software Engineer Portfolio'
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = 'image/png'

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: 'sans-serif',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            color: 'white',
            padding: '60px',
          }}
        >
          <h1
            style={{
              fontSize: '72px',
              fontWeight: 'bold',
              marginBottom: '20px',
            }}
          >
            {personalInfo.name}
          </h1>
          <p
            style={{
              fontSize: '36px',
              marginBottom: '10px',
              opacity: 0.9,
            }}
          >
            {personalInfo.title}
          </p>
          <p
            style={{
              fontSize: '28px',
              opacity: 0.8,
              maxWidth: '900px',
            }}
          >
            {personalInfo.tagline}
          </p>
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}

