import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-white py-8">
      <main className="flex w-full flex-col items-center px-6 text-center max-w-md">
        {/* 標題區域 */}
        <div className="space-y-3 mb-8">
          <h1 className="text-3xl font-bold text-gray-900 leading-tight">
            歡迎使用{' '}
            <span className="bg-gradient-to-r from-green-600 to-emerald-500 bg-clip-text text-transparent">
              Aozora
            </span>
          </h1>
          <p className="text-sm text-gray-600 leading-relaxed">
            智能信用卡與電子支付比較平台<br />幫您找到最適合的回饋方案
          </p>
        </div>
        
        {/* 按鈕區域 */}
        <div className="flex flex-col gap-3 w-full mb-10">
          <Button size="lg" asChild className="bg-green-600 hover:bg-green-700 w-full">
            <a href="/scenarios">開始尋找最優方式</a>
          </Button>
          <Button size="lg" asChild variant="outline" className="border-green-600 text-green-700 hover:bg-green-50 w-full">
            <a href="/payment">管理支付方式</a>
          </Button>
        </div>
        
        {/* 功能卡片區域 */}
        <div className="grid grid-cols-1 gap-3 w-full mb-10">
          <Card className="border-green-100 bg-green-50/30">
            <CardHeader className="p-4">
              <CardTitle className="flex items-center gap-2 text-green-700 text-base">
                💳 智能比較
              </CardTitle>
              <CardDescription className="text-xs leading-relaxed">
                根據消費場景智能推薦最適合的信用卡與電子支付
              </CardDescription>
            </CardHeader>
          </Card>
          
          <Card className="border-green-100 bg-green-50/30">
            <CardHeader className="p-4">
              <CardTitle className="flex items-center gap-2 text-green-700 text-base">
                📊 最新資訊
              </CardTitle>
              <CardDescription className="text-xs leading-relaxed">
                即時更新的回饋率資訊與銀行優惠活動
              </CardDescription>
            </CardHeader>
          </Card>
          
          <Card className="border-green-100 bg-green-50/30">
            <CardHeader className="p-4">
              <CardTitle className="flex items-center gap-2 text-green-700 text-base">
                🎯 精準推薦
              </CardTitle>
              <CardDescription className="text-xs leading-relaxed">
                基於您的消費習慣提供個人化建議
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      
      </main>
    </div>
  );
}
