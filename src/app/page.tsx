import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-white">
      <main className="flex w-full flex-col items-center gap-8 px-6 py-16 text-center">
        <div className="space-y-4">
          <h1 className="text-3xl font-bold text-gray-900">
            歡迎使用{' '}
            <span className="bg-gradient-to-r from-green-600 to-emerald-500 bg-clip-text text-transparent">
              Aozora
            </span>
          </h1>
          <p className="text-base text-gray-600">
            智能信用卡與電子支付比較平台，幫您找到最適合的回饋方案
          </p>
        </div>
        
        <div className="flex gap-4 flex-wrap justify-center">
          <Button size="lg" asChild className="bg-green-600 hover:bg-green-700">
            <a href="/scenarios">開始尋找信用卡</a>
          </Button>
          <Button size="lg" asChild variant="outline" className="border-green-600 text-green-700 hover:bg-green-50">
            <a href="/payment">管理支付方式</a>
          </Button>
        </div>
        
        <div className="grid grid-cols-1 gap-4 w-full mt-8">
          <Card className="border-green-100 bg-green-50/30">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-green-700">
                💳 智能比較
              </CardTitle>
              <CardDescription>
                根據消費場景智能推薦最適合的信用卡與電子支付
              </CardDescription>
            </CardHeader>
          </Card>
          
          <Card className="border-green-100 bg-green-50/30">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-green-700">
                📊 最新資訊
              </CardTitle>
              <CardDescription>
                即時更新的回饋率資訊與銀行優惠活動
              </CardDescription>
            </CardHeader>
          </Card>
          
          <Card className="border-green-100 bg-green-50/30">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-green-700">
                🎯 精準推薦
              </CardTitle>
              <CardDescription>
                基於您的消費習慣提供個人化建議
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      
      </main>
    </div>
  );
}
