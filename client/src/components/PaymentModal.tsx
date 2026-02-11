/*
 * Design: Organic Fluidity - 有机流动主义
 * 柔和的卡片、毛玻璃效果、流畅的标签切换
 */

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ASSETS } from "@/lib/assets";

interface PaymentModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  planName: string;
  price: number;
}

export function PaymentModal({ open, onOpenChange, planName, price }: PaymentModalProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md max-h-[90vh] overflow-y-auto">
        <DialogHeader className="sticky top-0 bg-background z-10 pb-4">
          <DialogTitle className="text-2xl font-bold text-center pr-8">
            购买 {planName}
          </DialogTitle>
          <p className="text-center text-muted-foreground mt-2">
            支付金额: <span className="text-2xl font-bold text-primary">¥{price}</span>
          </p>
        </DialogHeader>
        
        <Tabs defaultValue="wechat" className="w-full mt-4">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="wechat">微信支付</TabsTrigger>
            <TabsTrigger value="alipay">支付宝支付</TabsTrigger>
          </TabsList>
          
          <TabsContent value="wechat" className="mt-6">
            <div className="flex flex-col items-center space-y-4">
              <img 
                src={ASSETS.wechatPayQR} 
                alt="微信支付二维码" 
                className="w-64 h-64 object-contain rounded-xl"
              />
              <p className="text-sm text-muted-foreground text-center">
                请使用微信扫描二维码完成支付
              </p>
            </div>
          </TabsContent>
          
          <TabsContent value="alipay" className="mt-6">
            <div className="flex flex-col items-center space-y-4">
              <img 
                src={ASSETS.alipayQR} 
                alt="支付宝支付二维码" 
                className="w-64 h-64 object-contain rounded-xl"
              />
              <p className="text-sm text-muted-foreground text-center">
                请使用支付宝扫描二维码完成支付
              </p>
            </div>
          </TabsContent>
        </Tabs>
        
        <div className="mt-6 p-4 bg-muted/50 rounded-xl">
          <p className="text-xs text-muted-foreground text-center">
            支付完成后,请添加微信客服 <span className="font-semibold">door7881</span> 发送支付截图,我们将在24小时内为您开通课程权限。
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
}
