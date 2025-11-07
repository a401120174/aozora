import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
      <main className="flex w-full max-w-4xl flex-col items-center gap-8 px-6 py-16 text-center">
        <div className="space-y-4">
          <div className="flex justify-center mb-4">
            <Badge variant="secondary" className="text-sm">
              v1.0.0 - Now with Shadcn/ui
            </Badge>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white md:text-6xl">
            Welcome to{' '}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Aozora
            </span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl">
            A lightweight Next.js application with TypeScript, Tailwind CSS, and beautiful Shadcn/ui components.
          </p>
        </div>
        
        <div className="flex gap-4 flex-wrap justify-center">
          <Button size="lg" asChild>
            <a href="/demo">View Components Demo</a>
          </Button>
          <Button variant="outline" size="lg">
            Learn More
          </Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-3xl mt-16">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                ⚡ Fast
              </CardTitle>
              <CardDescription>
                Built with Next.js 14 and optimized for performance.
              </CardDescription>
            </CardHeader>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                🎨 Beautiful
              </CardTitle>
              <CardDescription>
                Styled with Tailwind CSS and Shadcn/ui for modern design.
              </CardDescription>
            </CardHeader>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                🔧 TypeScript
              </CardTitle>
              <CardDescription>
                Type-safe development with full TypeScript support.
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
        
        <div className="mt-12">
          <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
            Available Shadcn/ui Components
          </h2>
          <div className="flex flex-wrap gap-2 justify-center">
            <Badge>Button</Badge>
            <Badge>Card</Badge>
            <Badge>Badge</Badge>
            <Badge>Avatar</Badge>
            <Badge>Input</Badge>
          </div>
        </div>
      </main>
    </div>
  );
}
