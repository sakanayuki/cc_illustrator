function SideButton({ side, top, height, dark }) {
  return (
    <div style={{
      position: 'absolute',
      [side]: -3,
      top: top,
      width: 3,
      height: height,
      borderRadius: side === 'left' ? '2px 0 0 2px' : '0 2px 2px 0',
      background: dark ? '#3a3a3c' : '#c8c8cc',
    }} />
  );
}

function IOSDevice({ width, height, dark, children }) {
  const borderW = 14;
  const radius = 56;

  return (
    <div style={{
      position: 'relative',
      width: width,
      height: height,
      borderRadius: radius,
      background: dark ? '#1c1c1e' : '#e8e8ed',
      boxShadow: dark
        ? '0 0 0 1px #000, inset 0 0 0 1px rgba(255,255,255,0.08), 0 48px 96px rgba(0,0,0,0.7)'
        : '0 0 0 1px #b0b0b8, inset 0 0 0 1px rgba(255,255,255,0.9), 0 48px 96px rgba(0,0,0,0.3)',
      padding: borderW,
      boxSizing: 'border-box',
    }}>
      <SideButton side="left" top={108} height={32} dark={dark} />
      <SideButton side="left" top={152} height={56} dark={dark} />
      <SideButton side="left" top={218} height={56} dark={dark} />
      <SideButton side="right" top={148} height={80} dark={dark} />

      <div style={{
        width: '100%',
        height: '100%',
        borderRadius: radius - borderW,
        overflow: 'hidden',
        background: dark ? '#000' : '#fff',
        position: 'relative',
      }}>
        <div style={{
          position: 'absolute',
          top: 14,
          left: '50%',
          transform: 'translateX(-50%)',
          width: 126,
          height: 37,
          borderRadius: 20,
          background: '#000',
          zIndex: 20,
        }} />

        <div style={{
          position: 'absolute',
          bottom: 8,
          left: '50%',
          transform: 'translateX(-50%)',
          width: 134,
          height: 5,
          borderRadius: 3,
          background: dark ? 'rgba(255,255,255,0.35)' : 'rgba(0,0,0,0.25)',
          zIndex: 20,
        }} />

        {children}
      </div>
    </div>
  );
}
