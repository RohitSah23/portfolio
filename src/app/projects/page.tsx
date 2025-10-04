export default function ProjectsPage() {
  return (
    <main className="min-h-screen py-20">
      <h1 className="text-4xl font-bold text-center mb-8">Recent Work</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-6 max-w-6xl mx-auto">
        {/* Example cards */}
        <div className="bg-neutral-100 dark:bg-neutral-800 p-6 rounded-2xl">
          <h2 className="text-xl font-semibold mb-2">Swing UI Library</h2>
          <p className="text-sm text-gray-500">
            A modern Tailwind CSS component library to build responsive UIs effortlessly.
          </p>
        </div>

        <div className="bg-neutral-100 dark:bg-neutral-800 p-6 rounded-2xl">
          <h2 className="text-xl font-semibold mb-2">Amplificable</h2>
          <p className="text-sm text-gray-500">
            Helping businesses scale blockchain solutions through expert consulting and deployment.
          </p>
        </div>

        <div className="bg-neutral-100 dark:bg-neutral-800 p-6 rounded-2xl">
          <h2 className="text-xl font-semibold mb-2">CoinTok</h2>
          <p className="text-sm text-gray-500">
            A TikTok-style crypto price tracker powered by CoinGecko API.
          </p>
        </div>
      </div>
    </main>
  );
}
