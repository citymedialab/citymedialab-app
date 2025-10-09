export default function Page() {
  return (
    <main
      style={{
        minHeight: '120vh',
        background: '#fff',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
      }}
    >
      <h1 style={{ fontSize: 26, fontWeight: 600, marginBottom: 16 }}>
        Καλωσήρθες 👋
      </h1>
      <p style={{ maxWidth: 500, textAlign: 'center', opacity: 0.8 }}>
        Αυτή είναι η αρχική σελίδα του <strong>QR City</strong>.  
        Μετά το Splash και το Header θα εμφανίζεται εδώ το Carousel με τα slides.
      </p>
    </main>
  )
}
