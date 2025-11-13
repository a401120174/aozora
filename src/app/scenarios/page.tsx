'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'
import { ChevronLeft, ArrowRight, Sparkles } from 'lucide-react'

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
  const [customScenario, setCustomScenario] = useState<string>('')
  const [isAnalyzing, setIsAnalyzing] = useState<boolean>(false)

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

  const handleCustomScenarioSubmit = async () => {
    if (!customScenario.trim()) return
    
    setIsAnalyzing(true)
    
    // 模擬 AI 分析過程（2秒延遲）
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    // 簡單的關鍵字匹配邏輯（模擬 AI 分析）
    const scenario = customScenario.toLowerCase()
    let params: any = {}
    
    // 根據關鍵字判斷情境
    if (scenario.includes('全聯') || scenario.includes('超市') || scenario.includes('買菜')) {
      params = { category: 'retail', merchant: 'pxmart', country: 'tw', channel: 'supermarket' }
    } else if (scenario.includes('日本') || scenario.includes('東京') || scenario.includes('大阪')) {
      params = { category: 'travel', merchant: 'ana', country: 'jp', channel: 'airline' }
    } else if (scenario.includes('netflix') || scenario.includes('影片') || scenario.includes('看劇')) {
      params = { category: 'subscription', merchant: 'netflix', channel: 'streaming' }
    } else if (scenario.includes('momo') || scenario.includes('網購') || scenario.includes('購物')) {
      params = { category: 'ecommerce', merchant: 'momo', country: 'tw', epay: 'momo_pay' }
    } else if (scenario.includes('便利商店') || scenario.includes('7-11') || scenario.includes('全家')) {
      params = { category: 'retail', merchant: '7eleven', country: 'tw', channel: 'convenience' }
    } else {
      // 預設情境
      params = { category: 'retail', merchant: 'general', country: 'tw' }
    }
    
    const searchParams = new URLSearchParams(params)
    router.push(`/results?${searchParams.toString()}&scenario=${encodeURIComponent(customScenario)}`)
  }

  const handleBackClick = () => {
    setSelectedCategory(null)
    setSelectedItem(null)
    setSelectedCategoryIndex(null)
  }

  const renderCategoryGrid = () => (
    <>
      <div className="grid grid-cols-2 gap-3 pb-20">
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
              <CardHeader className="text-center p-3">
                <div className="text-3xl mb-1">{categoryData.icon}</div>
                <CardTitle className="text-sm leading-tight">{category}</CardTitle>
                <CardDescription className="text-xs mt-1">
                  {categoryData.items.length} 個選項
                </CardDescription>
              </CardHeader>
            </Card>
          )
        })}
      </div>

      {/* 固定在底部的確定按鈕 */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-green-100 p-3 shadow-lg">
        <div className="container mx-auto px-4 max-w-md">
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
      <>
        {/* 返回按鈕 */}
        <div className="mb-4">
          <Button 
            variant="outline" 
            onClick={handleBackClick}
            className="flex items-center gap-2 border-green-200 text-green-700 hover:bg-green-50"
          >
            <ChevronLeft className="w-4 h-4" />
            返回分類
          </Button>
        </div>

        {/* 項目網格 */}
        <div className="grid grid-cols-2 gap-3 pb-20">
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
              <CardHeader className="text-center p-3">
                <div className="text-3xl mb-1">{item.icon}</div>
                <CardTitle className="text-sm leading-tight">{item.name}</CardTitle>
                <CardDescription className="text-xs mt-1">{item.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>

        {/* 固定在底部的確定按鈕 */}
        <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-green-100 p-3 shadow-lg">
          <div className="container mx-auto px-4 max-w-md">
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
      </>
    )
  }

  return (
    <div className="min-h-screen bg-white py-6">
      <div className="container mx-auto px-4 max-w-md">
        {/* 主標題區域 */}
        <div className="text-center mb-6">
          <h1 className="text-2xl font-bold text-gray-900 mb-2 leading-tight">
            找出最適合的{' '}
            <span className="bg-gradient-to-r from-green-600 to-emerald-500 bg-clip-text text-transparent">
              信用卡 / 電子支付
            </span>
          </h1>
          <p className="text-sm text-gray-600 leading-relaxed">
            選擇你的消費情境，我們幫你找出最高回饋！
          </p>
        </div>

        {/* 主要內容區域 */}
        <div>

          {selectedCategory ? renderItemGrid() : renderCategoryGrid()}

          {/* 分隔線 */}
          <div className="flex items-center gap-3 mb-6">
            <div className="flex-1 h-px bg-gray-200"></div>
            <span className="text-xs text-gray-500">或...</span>
            <div className="flex-1 h-px bg-gray-200"></div>
          </div>

          {/* AI 情境輸入框 */}
          <Card className="mb-6 border-2 border-green-200 bg-gradient-to-br from-green-50 to-emerald-50">
            <CardHeader className="pb-3">
              <div className="flex items-center gap-2 mb-1">
                <Sparkles className="w-5 h-5 text-green-600" />
                <CardTitle className="text-base">AI 智能推薦</CardTitle>
              </div>
              <CardDescription className="text-xs">
                告訴我你的消費情境，AI 幫你找出最佳方案
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="relative">
                <Input
                  placeholder="例如：我想去全聯買菜"
                  value={customScenario}
                  onChange={(e) => setCustomScenario(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' && customScenario.trim()) {
                      handleCustomScenarioSubmit()
                    }
                  }}
                  className="pr-10 border-green-300 focus-visible:border-green-500 focus-visible:ring-green-500/50"
                  disabled={isAnalyzing}
                />
                {customScenario && (
                  <button
                    onClick={() => setCustomScenario('')}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  >
                    ✕
                  </button>
                )}
              </div>
              <Button
                onClick={handleCustomScenarioSubmit}
                disabled={!customScenario.trim() || isAnalyzing}
                className="w-full bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 disabled:from-gray-300 disabled:to-gray-300"
              >
                {isAnalyzing ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                    AI 分析中...
                  </>
                ) : (
                  <>
                    <Sparkles className="w-4 h-4 mr-2" />
                    開始分析
                  </>
                )}
              </Button>
              
              {/* 示例提示 */}
              <div className="flex flex-wrap gap-2 pt-1">
                <span className="text-xs text-gray-500">試試看：</span>
                {['我想去全聯買菜', '日本旅遊', '看 Netflix'].map((example) => (
                  <button
                    key={example}
                    onClick={() => setCustomScenario(example)}
                    className="text-xs px-2 py-1 rounded-full bg-white border border-green-200 text-green-700 hover:bg-green-50 transition-colors"
                    disabled={isAnalyzing}
                  >
                    {example}
                  </button>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}