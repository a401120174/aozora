import { Button } from '@/components/Button';

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
      <main className="flex w-full max-w-4xl flex-col items-center gap-8 px-6 py-16 text-center">
        <div className="space-y-4">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white md:text-6xl">
            Welcome to{' '}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Aozora
            </span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl">
            A lightweight Next.js application with TypeScript, Tailwind CSS, and
            modern development tools.
          </p>
        </div>

        <div className="flex gap-4 flex-wrap justify-center">
          <Button variant="primary" size="lg">
            Get Started
          </Button>
          <Button variant="outline" size="lg">
            Learn More
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-3xl mt-16">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              ⚡ Fast
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Built with Next.js 14 and optimized for performance.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              🎨 Modern
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Styled with Tailwind CSS for rapid UI development.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              🔧 TypeScript
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Type-safe development with full TypeScript support.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
