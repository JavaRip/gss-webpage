import './Landing.css'
import Background from '../../assets/background.svg?react'

export default function Landing(): JSX.Element {
    return (
        <section style={{
            position: 'relative',
            width: '100vw',
            height: '100vh',
            overflow: 'hidden',
        }}>
            <div style={{
                position: 'absolute',
                width: '100%',
                height: '100%',
                zIndex: -1,
            }}>
                <Background />
            </div>

            <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                height: '100%',
                width: '60rem',
                maxWidth: '100%',
                margin: 'auto',
                flexDirection: 'column',
            }}>
                <h1 style={{
                    textShadow: '2px 2px 5px rgba(55, 55, 55, 0.7)',
                    fontFamily: "'Arial', sans-serif",
                    color: 'navy',
                    fontSize: 'min(6rem, max(8vw, 3rem))',
                    textAlign: 'center',
                }}>
                    Good Software
                </h1>

                <div style={{
                    backgroundColor: 'rgb(192, 52, 166)',
                    padding: '1rem',
                    borderRadius: '1rem',
                    marginTop: '1rem',
                    height: 'max-content'
                }}
                    id='solutions-box'
                >
                    <h1 style={{
                        textShadow: '2px 2px 5px rgba(0, 0, 0, 0.7)',
                        fontFamily: "'Arial', sans-serif",
                        color: 'whitesmoke',
                        fontSize: 'min(5rem, max(7vw, 2.6rem))',
                        textAlign: 'center',
                    }}
                        id='solutions-text'
                    >
                        Solutions
                    </h1>
                </div>
            </div>
        </section>
    );
}
