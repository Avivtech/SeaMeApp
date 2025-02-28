
import React from "react";
import Header from "@/components/Header.jsx";
import Footer from "@/components/Footer.jsx";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const AboutItai = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-primary/90 to-primary/70 text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 slide-in">על איתי</h1>
            <p className="text-xl max-w-2xl mx-auto opacity-90 slide-in">לזכרו של איתי פרי ז״ל</p>
          </div>
        </section>
        
        {/* Images Section */}
        <section className="py-8 px-4 bg-gray-50">
          <div className="container mx-auto">
            <div className="flex flex-col md:flex-row gap-6 justify-center items-center max-w-4xl mx-auto">
              <div className="w-full md:w-1/2 overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                <img 
                  src="/lovable-uploads/8d85ee89-9bc4-44e8-a4bd-3c7d9c228e49.png" 
                  alt="איתי פרי" 
                  className="w-full h-auto object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <div className="w-full md:w-1/2 overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                <img 
                  src="/lovable-uploads/adcf69df-a07a-441b-a3cc-287a8f441ca4.png" 
                  alt="איתי עם ציור של ילדיו" 
                  className="w-full h-auto object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
            </div>
          </div>
        </section>
        
        {/* Content Section */}
        <section className="py-12 px-4">
          <div className="container mx-auto">
            <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-md">
              <article className="prose prose-lg max-w-none">
                <p>איתי נולד בכ"ט באלול תשמ"ז 23.09.1987 בתל אביב, לאהובה ונתן, אח לנטע, עומרי ונועה.</p>
                
                <p>בגיל 5 עברה המשפחה לישוב רעות, שם גדל והתחנך.</p>
                
                <p>איתי למד בתיכון מו״ר והיה פעיל בשבט הצופים ״אופק״.
                כבר בתור ילד אהב להשתטות והיה מצחיק מאוד, תכונה שאפיינה אותו לאורך כל חייו.</p>
                
                <p>בשנת 2006, התגייס לגדוד 931 של חטיבת הנח"ל. בתקופת שירותו הצבאי הכיר איתי את הילה, לימים אשתו, דרך חברים משותפים.</p>
                
                <p>לאחר שחרורו משירות סדיר, טייל בדרום אמריקה, ולאחר מכן עבר להתגורר עם הילה בבאר שבע, שם סיים בהצלחה לימודי תואר ראשון בהנדסת מכונות.</p>
                
                <p>איתי והילה התחתנו ב2015, בחתונה שמחה ומיוחדת, על שפת אגם ניצנים, מוקפים במשפחה וחברים, בהמשך הביאו לעולם את עידו, גיל ואורי הקטנה.
                איתי היה איש משפחה ברמ"ח איבריו ואהב מאוד לבלות ולטייל עם הילה והילדים.</p>
                
                <p>ב7.10.23 נקרא איתי למילואים, איתי היה קשר מג"ד, בגדוד 8111 של חטיבה 5. במהלך המלחמה, הספיק לבקר בבית מספר פעמים, עד שב-10.12.23 קרה הנורא מכל – במהלך היתקלות בחאן-יונס, נפגע הכוח של איתי ממטען רב עוצמה.
                איתי נהרג במקום, יחד איתו נהרגו עוד ארבעה לוחמים.</p>
                
                <p>בנוסף לעבודתו כמהנדס מכונות, איתי היה "הנדימן" מוכשר ואהב מאוד לבנות, להרכיב ולתקן כל דבר שרק אפשר. הפרויקט האחרון של איתי היה מטבח חוץ, אותו הקים בעצמו בחצר ביתו רק מספר שבועות לפני פרוץ המלחמה, פרוייקט שלא הספיק להשלים…</p>
                
                <p>לאיתי היה חיוך תמידי על הפנים ועיניים שמחות, הוא הפיץ קסם מיוחד, ששבה כל מי שרק פגש בו.
                הוא אהב את החיים שיצר לעצמו אך לצערנו לא הספיק לנצל אותם במלואם…</p>
                
                <p className="font-bold">איתי פרי ז״ל (36) ממודיעין, אבא של עידו, גיל ואורי, בעלה של הילה, בנם של אהובה ונתן, אחיהם של נטע, עומרי ונועה. אב למופת, חבר אמיתי, ואוהב אדם, לנצח תהיה בליבנו ומחשבותנו.</p>
              </article>
              
              <div className="mt-8 text-center">
                <Button 
                  asChild
                  className="inline-flex"
                >
                  <Link to="/">
                    <ArrowRight className="ml-2 h-4 w-4" />
                    חזרה לדף הראשי
                  </Link>
                </Button>
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
