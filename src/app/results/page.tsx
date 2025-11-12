'use client'

import { Suspense } from 'react'
import { useSearchParams } from 'next/navigation'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { ChevronLeft, CreditCard, Smartphone, TrendingUp, Star } from 'lucide-react'
import Link from 'next/link'

// 模擬的信用卡和電子支付數據
const mockResults = [
  {
    type: 'credit_card',
    name: '玉山 Pi 拍錢包信用卡',
    bank: '玉山銀行',
    cashback: '5%',
    description: '指定通路最高 5% 回饋',
    features: ['免年費', '自動分期', 'P 幣回饋'],
    rating: 4.8,
    icon: '💳'
  },
  {
    type: 'epay',
    name: '街口支付',
    provider: '街口電子支付',
    cashback: '3%',
    description: '指定商家享 3% 街口幣回饋',
    features: ['免手續費', '即時轉帳', '分期付款'],
    rating: 4.6,
    icon: '📱'
  },
  {
    type: 'credit_card',
    name: '中國信託 LINE Pay 卡',
    bank: '中國信託',
    cashback: '3%',
    description: 'LINE Pay 專屬回饋',
    features: ['LINE Points', '生日月加碼', '指定通路'],
    rating: 4.5,
    icon: '💳'
  },
  {
    type: 'epay',
    name: 'LINE Pay',
    provider: 'LINE',
    cashback: '2%',
    description: '全通路 2% LINE Points 回饋',
    features: ['跨境支付', '分割付款', '優惠券'],
    rating: 4.4,
    icon: '📱'
  }
]

function ResultsContent() {
  const searchParams = useSearchParams()
  
  // 獲取查詢參數
  const category = searchParams.get('category')
  const merchant = searchParams.get('merchant')
  const country = searchParams.get('country')
  const channel = searchParams.get('channel')
  const epay = searchParams.get('epay')

  // 根據參數生成標題
  const generateTitle = () => {
    const merchantNames: { [key: string]: string } = {
      'ana': 'ANA 全日空',
      'jal': 'JAL 日本航空',
      'jr': 'JR Pass / Suica',
      'mitsukoshi': '日本三越',
      'takashimaya': '日本高島屋',
      'biccamera': 'Bic Camera',
      'netflix': 'Netflix',
      'spotify': 'Spotify',
      'pxmart': '全聯',
      'familymart': '全家',
      'momo': 'momo 購物網',
      'shopee': '蝦皮 Shopee',
      // 可以繼續添加更多商家
    }

    const merchantName = merchant ? merchantNames[merchant] || merchant : ''
    return merchantName || '消費場景'
  }

  const ResultCard = ({ result }: { result: any }) => (
    <Card className="hover:shadow-lg transition-all duration-200 border-green-100">
      <CardHeader className="p-3">
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-2">
            <div className="text-xl">{result.icon}</div>
            <div>
              <CardTitle className="text-sm flex items-center gap-1 leading-tight">
                {result.name}
                {result.type === 'credit_card' ? 
                  <CreditCard className="w-3 h-3 text-green-600" /> : 
                  <Smartphone className="w-3 h-3 text-green-600" />
                }
              </CardTitle>
              <CardDescription className="text-xs mt-0.5">{result.bank || result.provider}</CardDescription>
            </div>
          </div>
          <div className="text-right">
            <div className="text-lg font-bold text-green-600 flex items-center gap-1">
              <TrendingUp className="w-3 h-3" />
              {result.cashback}
            </div>
            <div className="text-xs text-gray-500">回饋</div>
          </div>
        </div>
      </CardHeader>
      <CardContent className="p-3 pt-0">
        <p className="text-xs text-gray-600 mb-2 leading-relaxed">{result.description}</p>
        
        {/* 特色功能 */}
        <div className="flex flex-wrap gap-1 mb-2">
          {result.features.map((feature: string, index: number) => (
            <Badge key={index} className="text-xs px-1.5 py-0 bg-green-100 text-green-700 hover:bg-green-200">
              {feature}
            </Badge>
          ))}
        </div>

        {/* 評分 */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1">
            <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
            <span className="text-xs font-medium">{result.rating}</span>
          </div>
          <Button size="sm" className="text-xs h-6 px-3 bg-green-600 hover:bg-green-700">
            詳情
          </Button>
        </div>
      </CardContent>
    </Card>
  )

  return (
    <div className="min-h-screen bg-white py-6">
      <div className="container mx-auto px-4 max-w-md">
        {/* 返回按鈕 */}
        <div className="mb-4">
          <Button variant="outline" asChild className="flex items-center gap-2 border-green-200 text-green-700 hover:bg-green-50">
            <Link href="/scenarios">
              <ChevronLeft className="w-4 h-4" />
              返回
            </Link>
          </Button>
        </div>

        {/* 標題區域 */}
        <div className="text-center mb-6">
          <h1 className="text-xl font-bold text-gray-900 mb-2 leading-tight">
            {generateTitle()}{' '}
            <span className="bg-gradient-to-r from-green-600 to-emerald-500 bg-clip-text text-transparent">
              最佳回饋
            </span>
          </h1>
          <p className="text-sm text-gray-600 mb-3 leading-relaxed">
            為您精選最高回饋的信用卡與電子支付方案
          </p>
          
          {/* 查詢條件顯示 */}
          <div className="flex flex-wrap justify-center gap-2">
            {category && <Badge variant="outline" className="text-xs border-green-200 text-green-700">分類: {category}</Badge>}
            {merchant && <Badge variant="outline" className="text-xs border-green-200 text-green-700">商家: {generateTitle()}</Badge>}
            {country && <Badge variant="outline" className="text-xs border-green-200 text-green-700">國家: {country.toUpperCase()}</Badge>}
            {channel && <Badge variant="outline" className="text-xs border-green-200 text-green-700">通路: {channel}</Badge>}
            {epay && <Badge variant="outline" className="text-xs border-green-200 text-green-700">電子支付: {epay}</Badge>}
          </div>
        </div>

        {/* 結果列表 */}
        <div className="space-y-3 mb-6">
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-base font-bold text-gray-900">
              推薦方案 ({mockResults.length})
            </h2>
            <div className="flex gap-2">
              <Button variant="outline" size="sm" className="text-xs h-7 px-2 border-green-200 text-green-700 hover:bg-green-50">回饋率</Button>
              <Button variant="outline" size="sm" className="text-xs h-7 px-2 border-green-200 text-green-700 hover:bg-green-50">評分</Button>
            </div>
          </div>
          
          <div className="grid grid-cols-1 gap-3">
            {mockResults.map((result, index) => (
              <ResultCard key={index} result={result} />
            ))}
          </div>
        </div>

        {/* 額外資訊 */}
        <div className="bg-green-50 border border-green-100 rounded-lg p-3 mb-6">
          <h3 className="text-sm font-semibold mb-2 flex items-center gap-1 text-green-700">
            💡 小提醒
          </h3>
          <div className="space-y-1 text-xs text-gray-600 leading-relaxed">
            <p>• 回饋率可能因促銷活動而調整</p>
            <p>• 建議先確認個人消費習慣</p>
            <p>• 部分卡片可能有年費或門檻</p>
          </div>
        </div>

        {/* 頁尾 */}
        <div className="text-center text-xs text-gray-500 border-t border-green-100 pt-4">
          <p>📋 資料僅供參考，實際回饋以銀行公告為準</p>
        </div>
      </div>
    </div>
  )
}

export default function ResultsPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-600 mx-auto mb-4"></div>
          <p className="text-gray-600">載入中...</p>
        </div>
      </div>
    }>
      <ResultsContent />
    </Suspense>
  )
}