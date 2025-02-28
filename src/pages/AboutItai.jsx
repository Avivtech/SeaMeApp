
import React from "react";
import Header from "@/components/Header.jsx";
import Footer from "@/components/Footer.jsx";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const AboutItai = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50 font-heebo">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section with added padding */}
        <section className="bg-gradient-to-b from-primary/90 to-primary/70 text-white py-28 px-6 md:px-12 lg:px-24">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-8 animate-fade-in">על איתי</h1>
            <p className="text-xl md:text-2xl max-w-2xl mx-auto opacity-90 animate-fade-in delay-100">לזכרו של איתי פרי ז״ל</p>
          </div>
        </section>
        
        {/* Quote Section - bigger text */}
        <section className="py-16 px-4 bg-gradient-to-r from-blue-50 to-indigo-50">
          <div className="container mx-auto max-w-4xl">
            <blockquote className="text-center italic text-2xl md:text-3xl lg:text-4xl text-gray-700 border-r-4 border-primary/40 pr-6 py-4">
              <p>"לאיתי היה חיוך תמידי על הפנים ועיניים שמחות, הוא הפיץ קסם מיוחד, ששבה כל מי שרק פגש בו."</p>
            </blockquote>
          </div>
        </section>
        
        {/* Content Section with Images on Both Sides */}
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <div className="flex flex-col lg:flex-row gap-8 max-w-7xl mx-auto">
              {/* Left Side Image (visible only on desktop) */}
              <div className="hidden lg:block lg:w-1/4 self-start sticky top-24">
                <div className="overflow-hidden rounded-2xl shadow-xl">
                  <img 
                    src="/lovable-uploads/8d85ee89-9bc4-44e8-a4bd-3c7d9c228e49.png" 
                    alt="איתי פרי" 
                    className="w-full h-auto object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
              </div>
              
              {/* Mobile Images - Only visible on small screens */}
              <div className="flex lg:hidden gap-4 mb-8">
                <div className="w-1/2 overflow-hidden rounded-2xl shadow-xl">
                  <img 
                    src="/lovable-uploads/8d85ee89-9bc4-44e8-a4bd-3c7d9c228e49.png" 
                    alt="איתי פרי" 
                    className="w-full h-auto object-cover"
                  />
                </div>
                <div className="w-1/2 overflow-hidden rounded-2xl shadow-xl">
                  <img 
                    src="/lovable-uploads/adcf69df-a07a-441b-a3cc-287a8f441ca4.png" 
                    alt="איתי עם ציור של ילדיו" 
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
              
              {/* Center Content */}
              <div className="lg:w-1/2 bg-white p-8 md:p-12 rounded-xl shadow-lg">
                <article className="prose prose-lg max-w-none">
                  <h2 className="text-2xl md:text-3xl font-bold text-primary mb-6 pb-4 border-b border-gray-200">סיפור חייו של איתי</h2>
                  
                  <p className="mb-6">איתי נולד בכ"ט באלול תשמ"ז 23.09.1987 בתל אביב, לאהובה ונתן, אח לנטע, עומרי ונועה.</p>
                  
                  <p className="mb-6">בגיל 5 עברה המשפחה לישוב רעות, שם גדל והתחנך.</p>
                  
                  <p className="mb-6">איתי למד בתיכון מו״ר והיה פעיל בשבט הצופים ״אופק״.
                  כבר בתור ילד אהב להשתטות והיה מצחיק מאוד, תכונה שאפיינה אותו לאורך כל חייו.</p>
                  
                  <p className="mb-6">בשנת 2006, התגייס לגדוד 931 של חטיבת הנח"ל. בתקופת שירותו הצבאי הכיר איתי את הילה, לימים אשתו, דרך חברים משותפים.</p>
                  
                  <p className="mb-6">לאחר שחרורו משירות סדיר, טייל בדרום אמריקה, ולאחר מכן עבר להתגורר עם הילה בבאר שבע, שם סיים בהצלחה לימודי תואר ראשון בהנדסת מכונות.</p>
                  
                  <p className="mb-6">איתי והילה התחתנו ב2015, בחתונה שמחה ומיוחדת, על שפת אגם ניצנים, מוקפים במשפחה וחברים, בהמשך הביאו לעולם את עידו, גיל ואורי הקטנה.
                  איתי היה איש משפחה ברמ"ח איבריו ואהב מאוד לבלות ולטייל עם הילה והילדים.</p>
                  
                  <div className="bg-red-50 p-6 rounded-lg border-r-4 border-red-400 my-8">
                    <p className="mb-6">ב7.10.23 נקרא איתי למילואים, איתי היה קשר מג"ד, בגדוד 8111 של חטיבה 5. במהלך המלחמה, הספיק לבקר בבית מספר פעמים, עד שב-10.12.23 קרה הנורא מכל – במהלך היתקלות בחאן-יונס, נפגע הכוח של איתי ממטען רב עוצמה.
                    איתי נהרג במקום, יחד איתו נהרגו עוד ארבעה לוחמים.</p>
                  </div>
                  
                  <p className="mb-6">בנוסף לעבודתו כמהנדס מכונות, איתי היה "הנדימן" מוכשר ואהב מאוד לבנות, להרכיב ולתקן כל דבר שרק אפשר. הפרויקט האחרון של איתי היה מטבח חוץ, אותו הקים בעצמו בחצר ביתו רק מספר שבועות לפני פרוץ המלחמה, פרוייקט שלא הספיק להשלים…</p>
                  
                  <p className="mb-6">לאיתי היה חיוך תמידי על הפנים ועיניים שמחות, הוא הפיץ קסם מיוחד, ששבה כל מי שרק פגש בו.
                  הוא אהב את החיים שיצר לעצמו אך לצערנו לא הספיק לנצל אותם במלואם…</p>
                  
                  <div className="bg-blue-50 p-6 rounded-lg border-r-4 border-primary my-8">
                    <p className="font-bold text-lg">איתי פרי ז״ל (36) ממודיעין, אבא של עידו, גיל ואורי, בעלה של הילה, בנם של אהובה ונתן, אחיהם של נטע, עומרי ונועה. אב למופת, חבר אמיתי, ואוהב אדם, לנצח תהיה בליבנו ומחשבותנו.</p>
                  </div>
                </article>
                
                <div className="mt-12 text-center">
                  <Button 
                    asChild
                    className="inline-flex shadow-md hover:shadow-lg transition-all"
                    size="lg"
                  >
                    <Link to="/">
                      <ArrowRight className="ml-2 h-5 w-5" />
                      חזרה לדף הראשי
                    </Link>
                  </Button>
                </div>
              </div>
              
              {/* Right Side Image (visible only on desktop) */}
              <div className="hidden lg:block lg:w-1/4 self-start sticky top-24">
                <div className="overflow-hidden rounded-2xl shadow-xl">
                  <img 
                    src="/lovable-uploads/adcf69df-a07a-441b-a3cc-287a8f441ca4.png" 
                    alt="איתי עם ציור של ילדיו" 
                    className="w-full h-auto object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default AboutItai;
