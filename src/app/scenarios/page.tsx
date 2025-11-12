'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { ChevronLeft, ArrowRight } from 'lucide-react'

// 定義分類和細節項目的數據結構
const scenarioData = {
  日本旅遊: {
    icon: '🇯🇵',
    items: [
      {
        name: 'ANA 全日空',
        icon: '✈️',
        description: '日本國內外航班',
        params: { category: 'travel', merchant: 'ana', country: 'jp', channel: 'airline' }
      },
      {
        name: 'JAL 日本航空',
        icon: '✈️',
        description: '日本國內外航班',
        params: { category: 'travel', merchant: 'jal', country: 'jp', channel: 'airline' }
      },
      {
        name: 'JR Pass / Suica',
        icon: '🚄',
        description: '日本交通票券',
        params: { category: 'transport', merchant: 'jr', country: 'jp', channel: 'rail' }
      },
      {
        name: '日本三越',
        icon: '🏬',
        description: '日本知名百貨',
        params: { category: 'shopping', merchant: 'mitsukoshi', country: 'jp', channel: 'department' }
      },
      {
        name: '日本高島屋',
        icon: '🏬',
        description: '日本知名百貨',
        params: { category: 'shopping', merchant: 'takashimaya', country: 'jp', channel: 'department' }
      },
      {
        name: 'Bic Camera',
        icon: '📷',
        description: '日本電器購物',
        params: { category: 'shopping', merchant: 'biccamera', country: 'jp', channel: 'electronics' }
      }
    ]
  },
  訂閱服務: {
    icon: '📱',
    items: [
      {
        name: 'Netflix',
        icon: '🍿',
        description: '串流影音平台',
        params: { category: 'subscription', merchant: 'netflix', channel: 'streaming' }
      },
      {
        name: 'YouTube Premium',
        icon: '▶️',
        description: 'YouTube 付費服務',
        params: { category: 'subscription', merchant: 'youtube', channel: 'streaming' }
      },
      {
        name: 'Spotify',
        icon: '🎵',
        description: '音樂串流平台',
        params: { category: 'subscription', merchant: 'spotify', channel: 'music' }
      },
      {
        name: 'Disney+',
        icon: '🏰',
        description: '迪士尼串流平台',
        params: { category: 'subscription', merchant: 'disney_plus', channel: 'streaming' }
      },
      {
        name: 'iCloud / Apple One',
        icon: '☁️',
        description: 'Apple 雲端服務',
        params: { category: 'subscription', merchant: 'apple', channel: 'cloud' }
      },
      {
        name: 'ChatGPT Plus',
        icon: '🤖',
        description: 'AI 助手服務',
        params: { category: 'subscription', merchant: 'openai', channel: 'ai' }
      }
    ]
  },
  零售商店: {
    icon: '🏪',
    items: [
      {
        name: '全聯',
        icon: '🛒',
        description: '台灣超市龍頭',
        params: { category: 'retail', merchant: 'pxmart', country: 'tw', channel: 'supermarket' }
      },
      {
        name: '家樂福',
        icon: '🛒',
        description: '法系量販店',
        params: { category: 'retail', merchant: 'carrefour', country: 'tw', channel: 'hypermarket' }
      },
      {
        name: '全家',
        icon: '🏪',
        description: '台灣便利商店',
        params: { category: 'retail', merchant: 'familymart', country: 'tw', channel: 'convenience' }
      },
      {
        name: '7-Eleven',
        icon: '🏪',
        description: '台灣便利商店',
        params: { category: 'retail', merchant: '7eleven', country: 'tw', channel: 'convenience' }
      },
      {
        name: 'Costco',
        icon: '🏢',
        description: '美式倉儲賣場',
        params: { category: 'retail', merchant: 'costco', country: 'tw', channel: 'warehouse' }
      },
      {
        name: '美廉社',
        icon: '🛒',
        description: '台灣連鎖超市',
        params: { category: 'retail', merchant: 'simple_mart', country: 'tw', channel: 'supermarket' }
      }
    ]
  },
  網購平台: {
    icon: '💻',
    items: [
      {
        name: 'momo 購物網',
        icon: '📦',
        description: '台灣電商平台',
        params: { category: 'ecommerce', merchant: 'momo', country: 'tw', epay: 'momo_pay' }
      },
      {
        name: 'PChome 24h',
        icon: '📦',
        description: '台灣電商平台',
        params: { category: 'ecommerce', merchant: 'pchome', country: 'tw', epay: 'pi_wallet' }
      },
      {
        name: '蝦皮 Shopee',
        icon: '🦐',
        description: '東南亞電商平台',
        params: { category: 'ecommerce', merchant: 'shopee', country: 'tw', epay: 'shopee_pay' }
      },
      {
        name: '淘寶',
        icon: '🛒',
        description: '中國電商平台',
        params: { category: 'ecommerce', merchant: 'taobao', country: 'cn' }
      },
      {
        name: 'Amazon JP',
        icon: '📦',
        description: '日本亞馬遜',
        params: { category: 'ecommerce', merchant: 'amazon', country: 'jp' }
      },
      {
        name: 'Pinkoi',
        icon: '🎨',
        description: '設計購物平台',
        params: { category: 'ecommerce', merchant: 'pinkoi', country: 'tw' }
      }
    ]
  }
}

export default function ScenariosPage() {
  const router = useRouter()
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const [selectedItem, setSelectedItem] = useState<number | null>(null)
  const [selectedCategoryIndex, setSelectedCategoryIndex] = useState<number | null>(null)

  const categories = Object.keys(scenarioData)

  const handleCategorySelect = (category: string, index: number) => {
    setSelectedCategoryIndex(index)
  }

  const handleCategoryConfirm = () => {
    if (selectedCategoryIndex !== null) {
      const category = categories[selectedCategoryIndex]
      setSelectedCategory(category)
      setSelectedItem(null)
      setSelectedCategoryIndex(null)
    }
  }

  const handleItemClick = (index: number) => {
    setSelectedItem(index)
  }

  const handleConfirm = () => {
    if (selectedCategory && selectedItem !== null) {
      const categoryData = scenarioData[selectedCategory as keyof typeof scenarioData]
      const item = categoryData.items[selectedItem]
      const searchParams = new URLSearchParams(item.params as any)
      router.push(`/results?${searchParams.toString()}`)
    }
  }

  const handleBackClick = () => {
    setSelectedCategory(null)
    setSelectedItem(null)
    setSelectedCategoryIndex(null)
  }

  const renderCategoryGrid = () => (
    <>
      <div className="grid grid-cols-2 gap-4 pb-24">
        {categories.map((category, index) => {
          const categoryData = scenarioData[category as keyof typeof scenarioData]
          return (
            <Card 
              key={category}
              className={`cursor-pointer hover:shadow-lg transition-all duration-200 ${
                selectedCategoryIndex === index 
                  ? 'border-2 border-green-500 shadow-lg bg-green-50' 
                  : 'border-2 border-green-100 hover:border-green-300 hover:bg-green-50/30'
              }`}
              onClick={() => handleCategorySelect(category, index)}
            >
              <CardHeader className="text-center p-4">
                <div className="text-4xl mb-2">{categoryData.icon}</div>
                <CardTitle className="text-base">{category}</CardTitle>
                <CardDescription className="text-xs">
                  {categoryData.items.length} 個選項
                </CardDescription>
              </CardHeader>
            </Card>
          )
        })}
      </div>

      {/* 固定在底部的確定按鈕 */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-green-100 p-4 shadow-lg">
        <div className="container mx-auto px-4">
          <Button 
            size="lg"
            onClick={handleCategoryConfirm}
            disabled={selectedCategoryIndex === null}
            className="w-full bg-green-600 hover:bg-green-700 disabled:bg-gray-300"
          >
            確定
          </Button>
        </div>
      </div>
    </>
  )

  const renderItemGrid = () => {
    if (!selectedCategory) return null
    
    const categoryData = scenarioData[selectedCategory as keyof typeof scenarioData]
    
    return (
      <div className="space-y-6">
        {/* 麵包屑和返回按鈕 */}
        <div className="flex items-center gap-4 mb-8">
          <Button 
            variant="outline" 
            onClick={handleBackClick}
            className="flex items-center gap-2"
          >
            <ChevronLeft className="w-4 h-4" />
            返回分類
          </Button>
          <div className="text-sm text-gray-500">
            分類 {'>'} {selectedCategory}
          </div>
        </div>

        {/* 項目網格 */}
        <div className="grid grid-cols-2 gap-4 pb-24">
          {categoryData.items.map((item, index) => (
            <Card 
              key={index}
              className={`cursor-pointer hover:shadow-lg transition-all duration-200 ${
                selectedItem === index 
                  ? 'border-2 border-green-500 shadow-lg bg-green-50' 
                  : 'border-2 border-green-100 hover:border-green-300 hover:bg-green-50/30'
              }`}
              onClick={() => handleItemClick(index)}
            >
              <CardHeader className="text-center p-4">
                <div className="text-3xl mb-2">{item.icon}</div>
                <CardTitle className="text-sm">{item.name}</CardTitle>
                <CardDescription className="text-xs">{item.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>

        {/* 固定在底部的確定按鈕 */}
        <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-green-100 p-4 shadow-lg">
          <div className="container mx-auto px-4">
            <Button 
              size="lg"
              onClick={handleConfirm}
              disabled={selectedItem === null}
              className="w-full bg-green-600 hover:bg-green-700 disabled:bg-gray-300"
            >
              確定
            </Button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white py-8">
      <div className="container mx-auto px-4">
        {/* 主標題區域 */}
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">
            找出最適合的{' '}
            <span className="bg-gradient-to-r from-green-600 to-emerald-500 bg-clip-text text-transparent">
              信用卡 / 電子支付
            </span>
          </h1>
          <p className="text-base text-gray-600 mb-6">
            選擇你的消費情境，我們幫你找出最高回饋！
          </p>
        
        </div>

        {/* 主要內容區域 */}
        <div className="mb-8">
          {selectedCategory ? renderItemGrid() : renderCategoryGrid()}
        </div>

        {/* 頁尾提醒 */}
        <div className="text-center text-sm text-gray-500 border-t pt-8">
          <p>📋 資料僅供參考，實際回饋以銀行公告為準</p>
        </div>
      </div>
    </div>
  )
}