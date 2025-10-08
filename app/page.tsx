export default function Page() {
  return (
    <main
      style={{
        minHeight: '100svh',
        display: 'grid',
        placeItems: 'center',
        backgroundColor: '#f8dd67',
      }}
    >
      <img
        src="/logos/CML_logo_black.svg"
        alt="citymedialab"
        width={220}
        height={48}
        style={{ display: 'block' }}
      />
    </main>
  );
}
