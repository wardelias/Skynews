import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import LeadForm from '@/components/LeadForm';
import VideoPlayer from '@/components/VideoPlayer';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      {/* Announcement Bar */}
      <div className="bg-[#C00] text-white py-2 text-center">
        <p>الخميس 10 أكتوبر 2024 | 31°C أبوظبي | تسجيل الدخول</p>
      </div>

      {/* Header */}
      <header className="bg-white shadow-md py-4">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <Image
            src="https://www.skynewsarabia.com/asset/1643203809/17.3/assets/img/sna_logo/header_logo_color.svg"
            alt="Sky News Arabia Logo"
            width={180}
            height={60}
            className="h-14 w-auto"
          />
          <nav className="hidden md:block">
            <ul className="flex space-x-6 rtl:space-x-reverse">
              <li><a href="#" className="text-gray-600 hover:text-[#C00]">الرئيسية</a></li>
              <li><a href="#" className="text-gray-600 hover:text-[#C00]">اقتصاد</a></li>
              <li><a href="#" className="text-gray-600 hover:text-[#C00]">رياضة</a></li>
              <li><a href="#" className="text-gray-600 hover:text-[#C00]">تكنولوجيا</a></li>
              <li><a href="#" className="text-gray-600 hover:text-[#C00]">صحة</a></li>
              <li><a href="#" className="text-gray-600 hover:text-[#C00]">فن وثقافة</a></li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8 flex-grow">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Article */}
          <article className="lg:w-2/3 bg-white shadow-md p-6 rounded-lg">
            <h1 className="text-3xl font-bold mb-4 text-[#C00]">عائد الاستثمار في الذكاء الاصطناعي: فرص استثنائية للنمو</h1>
            
            <Image
              src="https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
              alt="الذكاء الاصطناعي"
              width={800}
              height={450}
              className="w-full h-auto mb-6 rounded-lg"
            />
            <p className="mb-4">في السنوات الأخيرة، أصبح الذكاء الاصطناعي (AI) أحد أهم المجالات التي تشهد نموًا سريعًا وتطورًا مذهلاً. من التطبيقات الصناعية إلى الخدمات اليومية، يُحدث الذكاء الاصطناعي ثورة في الطريقة التي نعيش ونعمل بها. لكن ماذا يعني ذلك للمستثمرين؟ وكيف يمكن الاستفادة من هذه الثورة التكنولوجية لتحقيق عوائد استثمارية استثنائية؟</p>

            <h2 className="text-2xl font-bold mb-2 text-[#C00]">الذكاء الاصطناعي: محرك النمو المستقبلي</h2>
            <p className="mb-4">الذكاء الاصطناعي ليس مجرد تقنية عابرة؛ إنه محرك رئيسي للابتكار في مختلف القطاعات مثل الرعاية الصحية، النقل، التعليم، والتجارة الإلكترونية. الشركات التي تستثمر في تطوير وتطبيقات الذكاء الاصطناعي تشهد زيادة ملحوظة في قيمتها السوقية، مما يجعلها وجهة جذابة للمستثمرين الباحثين عن فرص نمو طويلة الأجل.</p>

            <h2 className="text-2xl font-bold mb-2 text-[#C00]">لماذا يعتبر الاستثمار في الذكاء الاصطناعي فرصة ذهبية؟</h2>
            <ul className="list-disc list-inside mb-4">
              <li>نمو سوقي متسارع: من المتوقع أن يصل حجم سوق الذكاء الاصطناعي العالمي إلى مئات المليارات من الدولارات في السنوات القادمة.</li>
              <li>تطبيقات متعددة: يمتد تأثير الذكاء الاصطناعي إلى مجموعة واسعة من الصناعات، مما يزيد من فرص التنويع وتقليل المخاطر.</li>
              <li>دعم حكومي واستثماري: العديد من الحكومات والمؤسسات الاستثمارية تدعم مبادرات الذكاء الاصطناعي، مما يخلق بيئة مواتية للنمو.</li>
            </ul>

            <h2 className="text-2xl font-bold mb-2 text-[#C00]">الرمز: جسرك إلى استثمارات الذكاء الاصطناعي</h2>
            <p className="mb-4">في ظل هذه الفرص الواعدة، قد يتساءل المستثمرون في الشرق الأوسط عن كيفية الدخول إلى هذا السوق الديناميكي. هنا تأتي دور شركة الرمز.</p>

            <h3 className="text-xl font-bold mb-2">من هي شركة الرمز؟</h3>
            <p className="mb-4">الرمز هي شركة استثمارية رائدة متخصصة في توفير فرص استثمارية في شركات الذكاء الاصطناعي الناشئة والمتنامية. بفضل خبرتها العميقة في السوق وعلاقاتها الواسعة، توفر الرمز لعملائها إمكانية الوصول إلى أفضل الفرص الاستثمارية في هذا القطاع المثير.</p>

            <h3 className="text-xl font-bold mb-2">لماذا تختار الرمز؟</h3>
            <ul className="list-disc list-inside mb-4">
              <li>خبرة متخصصة: فريق من الخبراء المتخصصين في تحليل وتقييم شركات الذكاء الاصطناعي.</li>
              <li>فرص حصرية: الوصول إلى استثمارات خاصة غير متاحة للجمهور العام.</li>
              <li>دعم شخصي: تقديم استشارات استثمارية مخصصة تتوافق مع أهدافك المالية.</li>
            </ul>

            <h2 className="text-2xl font-bold mb-2 text-[#C00]">لا تفوت الفرصة!</h2>
            <p className="mb-4">الفرص لا تنتظر، والسوق يتحرك بسرعة. إذا كنت تبحث عن استثمار يوفر لك عوائد استثنائية ويضعك في مقدمة التقدم التكنولوجي، فإن الاستثمار في الذكاء الاصطناعي هو خيارك الأمثل.</p>

            <p className="text-sm italic">ملاحظة: الاستثمار ينطوي على مخاطر، وينبغي عليك استشارة مستشار مالي قبل اتخاذ أي قرارات استثمارية.</p>
          </article>

          {/* Sidebar */}
          <aside className="lg:w-1/3 space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-center text-[#C00]">انضم إلى نخبة المستثمرين</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-center mb-4">
                  <Image
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5eCRiHsH4xjx0yfbCIxKap-9DjBS38QoEPg&s"
                    alt="Alramz Logo"
                    width={100}
                    height={100}
                    className="h-16 w-auto"
                  />
                  <span className="text-xl font-bold mr-2">Alramz</span>
                </div>
                <p className="mb-4 text-sm">سجل اهتمامك الآن واحصل على استشارة مجانية حول كيفية بدء رحلتك الاستثمارية في عالم الذكاء الاصطناعي.</p>
                <LeadForm />
              </CardContent>
            </Card>
            {/* Other sidebar content... */}
          </aside>
        </div>

        {/* Video Player */}
        <div className="mt-8 mb-4">
          <h2 className="text-2xl font-bold mb-4 text-[#C00]">شاهد: مستقبل الاستثمار في الذكاء الاصطناعي</h2>
          <div className="max-w-2xl mx-auto">
            <VideoPlayer src="https://media.skynewsarabia.com/vod/1662634/1662634-Teaser.mp4" />
          </div>
        </div>

        {/* Additional Lead Form */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle className="text-center text-[#C00]">سجل اهتمامك الآن</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-center mb-4">
              <Image
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5eCRiHsH4xjx0yfbCIxKap-9DjBS38QoEPg&s"
                alt="Alramz Logo"
                width={100}
                height={100}
                className="h-16 w-auto"
              />
              <span className="text-xl font-bold mr-2">Alramz</span>
            </div>
            <p className="mb-4 text-sm text-center">انضم إلى قائمة المستثمرين المهتمين بفرص الذكاء الاصطناعي واحصل على تحديثات حصرية</p>
            <LeadForm />
          </CardContent>
        </Card>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-6">
        {/* Footer content... */}
      </footer>
    </div>
  );
}