'use client'

import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { ChevronDown, ChevronUp, Check } from 'lucide-react'
import Link from 'next/link'

// 定義支付方式數據結構
const paymentData = {
  電子支付: [
    { id: 'epay-1', name: '全聯 PX Pay', icon: '🛒' },
    { id: 'epay-2', name: 'LINE Pay', icon: '💚' },
    { id: 'epay-3', name: '街口支付', icon: '🟡' },
    { id: 'epay-4', name: '悠遊付', icon: '🚇' },
    { id: 'epay-5', name: 'Pi 拍錢包', icon: '💰' },
    { id: 'epay-6', name: 'iCash Pay', icon: '🔷' }
  ],
  信用卡: [
    { id: 'card-1', name: '中信快點卡', icon: '💳', bank: '中國信託' },
    { id: 'card-2', name: '玉山熊大卡', icon: '🐻', bank: '玉山銀行' },
    { id: 'card-3', name: '國泰 CUBE 卡', icon: '💳', bank: '國泰世華' },
    { id: 'card-4', name: '富邦 J 卡', icon: '💳', bank: '富邦銀行' },
    { id: 'card-5', name: '台新 @GoGo 卡', icon: '💳', bank: '台新銀行' },
    { id: 'card-6', name: '花旗現金回饋卡', icon: '💳', bank: '花旗銀行' }
  ]
}

export default function PaymentPage() {
  const [expandedSections, setExpandedSections] = useState<string[]>(['電子支付', '信用卡'])
  const [selectedPayments, setSelectedPayments] = useState<string[]>([])

  const toggleSection = (section: string) => {
    setExpandedSections(prev => 
      prev.includes(section) 
        ? prev.filter(s => s !== section)
        : [...prev, section]
    )
  }

  const togglePayment = (paymentId: string) => {
    setSelectedPayments(prev =>
      prev.includes(paymentId)
        ? prev.filter(id => id !== paymentId)
        : [...prev, paymentId]
    )
  }

  const handleSave = () => {
    // TODO: 實作儲存功能
    console.log('已選擇的支付方式:', selectedPayments)
    alert(`已選擇 ${selectedPayments.length} 個支付方式\n（儲存功能待實作）`)
  }

  return (
    <div className="min-h-screen bg-white py-6">
      <div className="container mx-auto px-4 max-w-md">
        {/* 標題區域 */}
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-gray-900 mb-2 leading-tight">
            我的{' '}
            <span className="bg-gradient-to-r from-green-600 to-emerald-500 bg-clip-text text-transparent">
              支付方式
            </span>
          </h1>
          <p className="text-sm text-gray-600 leading-relaxed">
            選擇您目前擁有的信用卡與電子支付方式
          </p>
        </div>

        {/* 已選擇數量提示 */}
        {selectedPayments.length > 0 && (
          <div className="mb-4 p-3 bg-green-50 border border-green-200 rounded-lg">
            <p className="text-sm text-green-700">
              已選擇 <span className="font-bold">{selectedPayments.length}</span> 個支付方式
            </p>
          </div>
        )}

        {/* 支付方式列表 */}
        <div className="space-y-3 pb-20">
          {Object.entries(paymentData).map(([category, items]) => (
            <Card key={category} className="border-green-100">
              <CardHeader 
                className="cursor-pointer hover:bg-green-50/30 transition-colors p-3"
                onClick={() => toggleSection(category)}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="text-xl">
                      {category === '電子支付' ? '📱' : '💳'}
                    </div>
                    <div>
                      <CardTitle className="text-base leading-tight">{category}</CardTitle>
                      <CardDescription className="text-xs mt-0.5">
                        {items.length} 個選項
                        {selectedPayments.filter(id => 
                          items.some(item => item.id === id)
                        ).length > 0 && (
                          <span className="ml-1 text-green-600 font-medium">
                            · 已選 {selectedPayments.filter(id => 
                              items.some(item => item.id === id)
                            ).length}
                          </span>
                        )}
                      </CardDescription>
                    </div>
                  </div>
                  <div className="text-green-600">
                    {expandedSections.includes(category) ? (
                      <ChevronUp className="w-4 h-4" />
                    ) : (
                      <ChevronDown className="w-4 h-4" />
                    )}
                  </div>
                </div>
              </CardHeader>

              {expandedSections.includes(category) && (
                <CardContent className="pt-0 px-3 pb-3">
                  <div className="space-y-2">
                    {items.map((item) => {
                      const isSelected = selectedPayments.includes(item.id)
                      return (
                        <div
                          key={item.id}
                          onClick={() => togglePayment(item.id)}
                          className={`flex items-center justify-between p-2 rounded-lg border-2 cursor-pointer transition-all duration-200 ${
                            isSelected
                              ? 'border-green-500 bg-green-50'
                              : 'border-gray-200 hover:border-green-300 hover:bg-green-50/30'
                          }`}
                        >
                          <div className="flex items-center gap-2">
                            <div className="text-xl">{item.icon}</div>
                            <div>
                              <div className="text-sm font-medium text-gray-900 leading-tight">
                                {item.name}
                              </div>
                              {'bank' in item && (
                                <div className="text-xs text-gray-500 mt-0.5">
                                  {item.bank}
                                </div>
                              )}
                            </div>
                          </div>
                          {isSelected && (
                            <div className="w-5 h-5 rounded-full bg-green-600 flex items-center justify-center flex-shrink-0">
                              <Check className="w-3 h-3 text-white" />
                            </div>
                          )}
                        </div>
                      )
                    })}
                  </div>
                </CardContent>
              )}
            </Card>
          ))}
        </div>

        {/* 固定在底部的儲存按鈕 */}
        <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-green-100 p-3 shadow-lg">
          <div className="container mx-auto px-4 max-w-md">
            <div className="flex gap-2">
              <Button 
                variant="outline"
                asChild
                className="flex-1 border-green-200 text-green-700 hover:bg-green-50"
              >
                <Link href="/">返回</Link>
              </Button>
              <Button 
                onClick={handleSave}
                disabled={selectedPayments.length === 0}
                className="flex-1 bg-green-600 hover:bg-green-700 disabled:bg-gray-300"
              >
                儲存 ({selectedPayments.length})
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
