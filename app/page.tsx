export default function Home() {
  return (
    <main className="min-h-screen bg-page flex flex-col items-center justify-center p-8">
      <h1 className="text-4xl font-bold text-primary mb-8">
        Main content
      </h1>

      <div className="card w-96 bg-white shadow-xl">
        <div className="card-body">
          <h2 className="card-title">Welcome to Next.js + daisyUI</h2>
          <p>If you can see this card, daisyUI is working perfectly!</p>

          <div className="card-actions justify-end">
            <button className="btn btn-primary">Click Me</button>
          </div>
        </div>
      </div>

    </main>
  );
}
