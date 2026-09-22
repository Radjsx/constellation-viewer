export default function BackgroundImage() {
  return (
    <>
      <div style={{
        backgroundImage: "url(/starry-sky.gif)",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        width: '100vw',
        height: '100vh',
        position: 'fixed',
        top: 0,
        left: 0,
        zIndex: -1
      }}></div>
    </>
  );
}
