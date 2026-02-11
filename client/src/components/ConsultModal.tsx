/*
 * Design: Organic Fluidity - 有机流动主义
 * 咨询预约模态框
 */

import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ASSETS } from "@/lib/assets";
import { CheckCircle2, Clock, Gift } from "lucide-react";

interface ConsultModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function ConsultModal({ open, onOpenChange }: ConsultModalProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-lg max-h-[90vh] overflow-y-auto">
        <DialogHeader className="sticky top-0 bg-background z-10 pb-4">
          <DialogTitle className="text-2xl font-bold text-center pr-8">
            预约1v1求职咨询
          </DialogTitle>
          <DialogDescription className="text-center text-lg mt-2">
            30分钟深度咨询 · 仅需 <span className="text-2xl font-bold text-primary">¥299</span>
          </DialogDescription>
        </DialogHeader>
        
        <div className="space-y-6 mt-4">
          {/* 咨询内容 */}
          <div className="space-y-3">
            <h3 className="font-semibold text-lg flex items-center gap-2">
              <Clock className="h-5 w-5 text-primary" />
              咨询内容包括:
            </h3>
            <ul className="space-y-2 ml-7">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <span>Web3职业发展路径规划</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <span>简历初步诊断与优化建议</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <span>岗位匹配度分析</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <span>求职策略与时间规划</span>
              </li>
            </ul>
          </div>

          {/* 特别优惠 */}
          <div className="bg-gradient-to-r from-purple-50 to-blue-50 p-4 rounded-2xl border-2 border-purple-200">
            <div className="flex items-start gap-3">
              <Gift className="h-6 w-6 text-purple-600 mt-0.5 flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-purple-900 mb-1">特别优惠</h4>
                <p className="text-sm text-purple-800">
                  购买任意课程版本,咨询费可全额抵扣!相当于免费获得专业咨询服务。
                </p>
              </div>
            </div>
          </div>

          {/* 联系方式 */}
          <div className="space-y-4">
            <h3 className="font-semibold text-center">扫码添加微信预约咨询</h3>
            <div className="flex justify-center">
              <img 
                src={ASSETS.wechatQR} 
                alt="微信二维码" 
                className="w-48 h-48 object-contain rounded-xl"
              />
            </div>
            <p className="text-sm text-muted-foreground text-center">
              微信号: <span className="font-semibold">door7881</span>
            </p>
          </div>

          {/* 或者Telegram */}
          <div className="text-center">
            <p className="text-sm text-muted-foreground mb-2">也可以通过Telegram联系</p>
            <Button 
              variant="outline" 
              className="rounded-full"
              onClick={() => window.open("https://t.me/wealth7881", "_blank")}
            >
              打开Telegram: @wealth7881
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
