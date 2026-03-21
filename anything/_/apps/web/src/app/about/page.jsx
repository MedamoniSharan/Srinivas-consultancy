export default function AboutPage() {
  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">About XTRACT</h1>
        <p className="text-gray-400 text-lg mb-8">
          Learn more about our AI automation solutions
        </p>
        <a
          href="/"
          className="inline-block bg-purple-600 hover:bg-purple-700 px-6 py-3 rounded-lg font-medium transition-colors"
        >
          Back to Home
        </a>
      </div>
    </div>
  );
}
