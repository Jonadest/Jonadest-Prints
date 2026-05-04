import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export async function GET() {
    return new ImageResponse(
        <div
            style={{
                background: '#0a0a0a',
                width: '100%',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '80px',
                fontFamily: 'Inter',
            }}
        >
            <div
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    marginBottom: '40px',
                }}
            >
                <div
                    style={{
                        width: '24px',
                        height: '24px',
                        background: '#fafafa',
                        borderRadius: '50%',
                        marginRight: '12px',
                    }}
                />
                <span
                    style={{
                        fontSize: '48px',
                        fontWeight: 'bold',
                        color: '#fafafa',
                        letterSpacing: '-0.5px',
                    }}
                >
                    JONADEST PRINTS
                </span>
            </div>
            <h1
                style={{
                    fontSize: '72px',
                    fontWeight: 'bold',
                    color: '#fafafa',
                    textAlign: 'center',
                    marginBottom: '20px',
                    lineHeight: '1.2',
                }}
            >
                Premium Printing Services
            </h1>
            <p
                style={{
                    fontSize: '32px',
                    color: '#737373',
                    textAlign: 'center',
                }}
            >
                Business Cards • Flyers • Apparel • Large Format • Packaging
            </p>
        </div>,
        {
            width: 1200,
            height: 630,
        },
    );
}
