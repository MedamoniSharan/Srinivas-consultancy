export default function BlogPage() {
  return (
    <div className="min-h-screen bg-black text-white px-6 py-20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Blog</h1>
          <p className="text-gray-400 text-lg">
            Insights on AI automation and business efficiency
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <article
              key={i}
              className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-purple-500/30 transition-colors cursor-pointer"
            >
              <div className="w-full h-48 bg-gradient-to-br from-purple-600/20 to-blue-600/20 rounded-xl mb-4"></div>
              <div className="inline-block px-3 py-1 bg-purple-600/20 border border-purple-500/30 rounded-full text-xs mb-3">
                AI Automation
              </div>
              <h2 className="text-xl font-bold mb-3">Blog Post Title {i}</h2>
              <p className="text-gray-400 text-sm mb-4">
                Discover how AI automation is transforming modern businesses and
                streamlining operations...
              </p>
              <p className="text-xs text-gray-500">March {i}, 2026</p>
            </article>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="/"
            className="inline-block bg-purple-600 hover:bg-purple-700 px-6 py-3 rounded-lg font-medium transition-colors"
          >
            Back to Home
          </a>
        </div>
      </div>
    </div>
  );
}
