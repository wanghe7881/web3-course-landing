/*
 * Design: Organic Fluidity - 有机流动主义
 * 全局渐变背景(#E0E7FF → #F3E8FF)、大圆角卡片、流畅动画
 */

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Navbar } from "@/components/Navbar";
import { ConsultModal } from "@/components/ConsultModal";
import { PaymentModal } from "@/components/PaymentModal";
import { ASSETS } from "@/lib/assets";
import { courseModules, pricingPlans, coreFeatures, painPoints, faqs } from "@/lib/courseData";
import { 
  Target, Briefcase, Users, TrendingUp, Award, Zap, 
  CheckCircle2, ArrowRight, MessageCircle, Send, Download, BookOpen 
} from "lucide-react";

const iconMap = {
  Target, Briefcase, Users, TrendingUp, Award, Zap
};

export default function Home() {
  const [consultModal, setConsultModal] = useState(false);
  const [paymentModal, setPaymentModal] = useState<{
    open: boolean;
    planName: string;
    price: number;
  }>({
    open: false,
    planName: "",
    price: 0,
  });

  const handleBuyClick = (planName: string, price: number) => {
    setPaymentModal({ open: true, planName, price });
  };

  const scrollToCourseOutline = () => {
    document.getElementById("course-outline")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen" style={{
      background: "linear-gradient(135deg, #E0E7FF 0%, #F3E8FF 100%)",
    }}>
      {/* Navigation Bar */}
      <Navbar onConsultClick={() => setConsultModal(true)} />

      {/* Spacer for fixed navbar */}
      <div className="h-20" />

      {/* Hero Section */}
      <section id="hero" className="container py-20 md:py-32">
        <div className="flex flex-col items-center text-center space-y-8">
          <div className="space-y-4 max-w-4xl">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground leading-tight" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
              这可能是你进入Web3的<br />
              <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                最后一张门票
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground font-medium" style={{ fontFamily: "'Sora', sans-serif" }}>
              融合求职、产品、投研三大核心能力,成为Web3全能型人才
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <Button 
              size="lg" 
              className="text-lg px-8 py-6 rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-105"
              onClick={() => setConsultModal(true)}
            >
              预约咨询 ¥299 <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="text-lg px-8 py-6 rounded-full bg-white/80 backdrop-blur-sm hover:bg-white transition-all"
              onClick={scrollToCourseOutline}
            >
              查看课程大纲
            </Button>
          </div>
          <p className="text-sm text-muted-foreground mt-4">
            💡 咨询费购课可全额抵扣,相当于免费获得专业咨询
          </p>
        </div>
      </section>

      {/* Free Guide Download Section */}
      <section className="container py-16">
        <Card className="bg-gradient-to-br from-purple-500 to-blue-600 text-white border-none shadow-2xl rounded-3xl overflow-hidden">
          <CardContent className="p-8 md:p-12">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="flex-shrink-0">
                <div className="w-24 h-24 bg-white/20 backdrop-blur-sm rounded-3xl flex items-center justify-center">
                  <BookOpen className="h-12 w-12 text-white" />
                </div>
              </div>
              <div className="flex-1 text-center md:text-left">
                <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                  免费领取《Web3求职终极宝典》
                </h2>
                <p className="text-lg text-white/90 mb-6">
                  2026最新行业趋势报告 · 50个必备Web3黑话词典 · 10个常见面试问题 · 拿满Offer的简历模板
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                  <Button 
                    size="lg"
                    variant="secondary"
                    className="rounded-full px-8 py-6 text-lg bg-white text-purple-600 hover:bg-white/90"
                    onClick={() => {
                      document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
                    }}
                  >
                    <Download className="mr-2 h-5 w-5" />
                    立即领取
                  </Button>
                  <p className="text-sm text-white/80 self-center">
                    添加微信/Telegram即可免费获取
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Pain Points Section */}
      <section className="container py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
            你是否正在经历这些困境?
          </h2>
          <p className="text-muted-foreground text-lg">
            我们深知Web3求职者的痛点,并提供针对性解决方案
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {painPoints.map((item, index) => (
            <Card key={index} className="bg-white/80 backdrop-blur-sm border-none shadow-lg hover:shadow-xl transition-all hover:scale-105 rounded-3xl">
              <CardHeader>
                <CardTitle className="text-lg text-destructive flex items-start gap-2">
                  <span className="text-2xl">⚠️</span>
                  <span>{item.pain}</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-start gap-2 text-primary">
                  <CheckCircle2 className="h-5 w-5 mt-1 flex-shrink-0" />
                  <p className="text-foreground">{item.solution}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Core Features Section */}
      <section className="container py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
            课程核心卖点
          </h2>
          <p className="text-muted-foreground text-lg">
            六大核心优势,助你快速突破Web3求职瓶颈
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {coreFeatures.map((feature, index) => {
            const Icon = iconMap[feature.icon as keyof typeof iconMap];
            return (
              <Card key={index} className="bg-white/80 backdrop-blur-sm border-none shadow-lg hover:shadow-xl transition-all hover:scale-105 rounded-3xl">
                <CardHeader>
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center mb-4">
                    <Icon className="h-7 w-7 text-white" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </section>

      {/* Course Outline Section */}
      <section id="course-outline" className="container py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
            30节硬核实战课程,助你成为全能型人才
          </h2>
          <p className="text-muted-foreground text-lg">
            系统化学习路径,从认知到实战循序渐进
          </p>
        </div>
        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {courseModules.map((module) => (
              <AccordionItem 
                key={module.id} 
                value={`module-${module.id}`}
                className="bg-white/80 backdrop-blur-sm border-none shadow-lg rounded-3xl px-6"
              >
                <AccordionTrigger className="text-left hover:no-underline py-6">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <Badge variant="secondary" className="text-sm px-3 py-1 rounded-full">
                        {module.subtitle}
                      </Badge>
                      <h3 className="text-xl font-bold" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                        {module.title}
                      </h3>
                    </div>
                    <p className="text-sm text-muted-foreground mt-2">
                      {module.description}
                    </p>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pt-2 pb-6">
                  <ul className="space-y-3 mt-4">
                    {module.courses.map((course, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-foreground">
                        <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <span>{course}</span>
                      </li>
                    ))}
                  </ul>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Instructors Section */}
      <section id="instructors" className="container py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
            顶级导师团队
          </h2>
          <p className="text-muted-foreground text-lg">
            资深行业专家,倾囊相授一线实战经验
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <Card className="bg-white/80 backdrop-blur-sm border-none shadow-lg hover:shadow-xl transition-all hover:scale-105 rounded-3xl">
            <CardHeader className="text-center">
              <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden ring-4 ring-purple-200">
                <img 
                  src={ASSETS.hunterPhoto} 
                  alt="Hunter导师" 
                  className="w-full h-full object-cover"
                />
              </div>
              <CardTitle className="text-2xl">Hunter</CardTitle>
              <CardDescription className="text-lg font-medium text-primary">
                资深Web3投资人
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-muted-foreground">
                多年Web3投资经验,深度参与多个顶级项目,擅长代币经济模型分析与投研框架搭建
              </p>
            </CardContent>
          </Card>
          
          <Card className="bg-white/80 backdrop-blur-sm border-none shadow-lg hover:shadow-xl transition-all hover:scale-105 rounded-3xl">
            <CardHeader className="text-center">
              <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden ring-4 ring-blue-200">
                <img 
                  src={ASSETS.rachelPhoto} 
                  alt="Rachel导师" 
                  className="w-full h-full object-cover"
                />
              </div>
              <CardTitle className="text-2xl">Rachel</CardTitle>
              <CardDescription className="text-lg font-medium text-primary">
                资深Web3媒体人
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-muted-foreground">
                深耕Web3媒体领域,拥有丰富的内容运营与社群管理经验,帮助多位学员成功转型
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="container py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
            选择适合你的学习方案
          </h2>
          <p className="text-muted-foreground text-lg">
            三种版本满足不同需求,VIP版提供全额退款保障
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {pricingPlans.map((plan) => (
            <Card 
              key={plan.id} 
              className={`bg-white/80 backdrop-blur-sm border-none shadow-lg hover:shadow-xl transition-all hover:scale-105 rounded-3xl relative ${
                plan.highlighted ? "ring-4 ring-primary" : ""
              }`}
            >
              {plan.badge && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <Badge className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-1 text-sm rounded-full">
                    {plan.badge}
                  </Badge>
                </div>
              )}
              <CardHeader className="text-center pt-8">
                <CardTitle className="text-2xl mb-2">{plan.name}</CardTitle>
                <div className="flex flex-col items-center gap-2">
                  <span className="text-4xl font-bold text-primary">¥{plan.price}</span>
                </div>
              </CardHeader>
              <CardContent className="space-y-3">
                {plan.features.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-foreground text-sm">{feature}</span>
                  </div>
                ))}
                {plan.guarantee && (
                  <div className="mt-4 p-3 bg-green-50 rounded-xl border-2 border-green-200">
                    <p className="text-xs text-green-800 font-semibold text-center">
                      🛡️ {plan.guarantee}
                    </p>
                  </div>
                )}
              </CardContent>
              <CardFooter>
                <Button 
                  className="w-full rounded-full py-6 text-lg"
                  variant={plan.highlighted ? "default" : "outline"}
                  onClick={() => handleBuyClick(plan.name, plan.price)}
                >
                  立即购买
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="container py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
            常见问题
          </h2>
          <p className="text-muted-foreground text-lg">
            解答你关心的所有问题
          </p>
        </div>
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`faq-${index}`}
                className="bg-white/80 backdrop-blur-sm border-none shadow-lg rounded-3xl px-6"
              >
                <AccordionTrigger className="text-left hover:no-underline py-6 text-lg font-semibold">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Footer / Contact Section */}
      <footer id="contact" className="container py-16 border-t border-border/50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-4" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
              联系我们
            </h3>
            <p className="text-muted-foreground mb-6">
              有任何问题?欢迎随时联系我们
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="bg-white/80 backdrop-blur-sm border-none shadow-lg rounded-3xl">
              <CardHeader className="text-center">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <MessageCircle className="h-6 w-6 text-green-600" />
                  <CardTitle className="text-xl">微信联系</CardTitle>
                </div>
                <CardDescription className="text-lg font-semibold text-foreground">
                  door7881
                </CardDescription>
              </CardHeader>
              <CardContent className="flex justify-center">
                <img 
                  src={ASSETS.wechatQR} 
                  alt="微信二维码" 
                  className="w-48 h-48 object-contain rounded-xl"
                />
              </CardContent>
            </Card>
            
            <Card className="bg-white/80 backdrop-blur-sm border-none shadow-lg rounded-3xl">
              <CardHeader className="text-center">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <Send className="h-6 w-6 text-blue-600" />
                  <CardTitle className="text-xl">Telegram联系</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="flex flex-col items-center justify-center h-full">
                <a 
                  href="https://t.me/wealth7881" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-lg font-semibold text-primary hover:underline"
                >
                  @wealth7881
                </a>
                <Button 
                  className="mt-6 rounded-full"
                  onClick={() => window.open("https://t.me/wealth7881", "_blank")}
                >
                  打开Telegram <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          </div>
          
          <div className="text-center mt-12 text-sm text-muted-foreground">
            <p>© 2026 Web3全岗位求职实战课. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Modals */}
      <ConsultModal 
        open={consultModal}
        onOpenChange={setConsultModal}
      />
      
      <PaymentModal 
        open={paymentModal.open}
        onOpenChange={(open) => setPaymentModal({ ...paymentModal, open })}
        planName={paymentModal.planName}
        price={paymentModal.price}
      />
    </div>
  );
}
