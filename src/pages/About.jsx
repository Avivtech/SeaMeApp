
import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const About = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="hero-section">
          <div className="container mx-auto px-4 text-center">
            <h1 className="hero-title">אודות</h1>
            <p className="hero-subtitle">קצת על הפרויקט שלנו</p>
          </div>
        </section>
        
        {/* Content Section */}
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <div className="max-w-4xl mx-auto bg-white p-8 rounded-xl shadow-lg">
              <h2 className="text-2xl font-bold mb-6 text-primary">מהו פרויקט SeaMe?</h2>
              
              <p className="mb-6">
                פרויקט SeaMe היא יוזמה שנועדה להנגיש מידע על חופי הכנרת למטיילים ולמשפחות. 
                המטרה שלנו היא להציג את החופים השונים סביב הכנרת תוך שימת דגש על התאמתם למשפחות 
                עם ילדים ולמגוון אוכלוסיות.
              </p>
              
              <p className="mb-6">
                האפליקציה מציגה מידע מפורט על כל חוף, כולל: שירותים וציוד זמין, מידע על גישה לאנשים 
                עם מוגבלויות, תשלום ושעות פעילות, אטרקציות מקומיות, ועוד.
              </p>
              
              <div className="bg-blue-50 p-6 rounded-xl border-r-4 border-primary my-8">
                <h3 className="text-lg font-semibold mb-2 text-primary">הפרויקט מוקדש לזכרו של איתי פרי ז״ל</h3>
                <p>
                  איתי היה לוחם בגדוד 8111 של חטיבה 5, ונפל במהלך מבצע "חרבות ברזל" בחאן יונס ב-10.12.2023. 
                  איתי אהב את הטבע ואת הארץ, ובמיוחד את הכנרת והחופים שלה, מקומות שבהם בילה זמן רב עם משפחתו.
                </p>
                <div className="mt-4">
                  <Button asChild variant="outline">
                    <Link to="/about-itai" className="inline-flex items-center hover:text-primary">
                      <ArrowRight className="ml-2 h-4 w-4" />
                      קרא עוד על איתי
                    </Link>
                  </Button>
                </div>
              </div>
              
              <h2 className="text-2xl font-bold mb-4 text-primary">המטרות שלנו</h2>
              
              <ul className="list-disc list-inside mb-6 pr-4 space-y-2">
                <li>לעזור למשפחות למצוא חופים מתאימים לילדים</li>
                <li>לספק מידע נגיש ועדכני על חופי הכנרת</li>
                <li>להנגיש את חופי הכנרת לאנשים עם מוגבלויות</li>
                <li>לעודד יציאה לטבע ובילוי משפחתי איכותי</li>
                <li>להנציח את זכרו של איתי ואת אהבתו לכנרת ולמשפחתו</li>
              </ul>
              
              <div className="mt-8 text-center">
                <Button 
                  asChild
                  size="lg"
                >
                  <Link to="/" className="inline-flex items-center">
                    <ArrowRight className="ml-2 h-5 w-5" />
                    לגלות את החופים
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

export default About;
