
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-1">
        <section className="bg-primary text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl font-bold mb-4 slide-in">אודות SeaMe</h1>
            <p className="text-xl max-w-2xl mx-auto opacity-90 slide-in">
              מאגר נתונים נגיש של מידע על נגישות חופים בישראל
            </p>
          </div>
        </section>
        
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-4xl">
            <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-8 scale-in">
              <h2 className="text-2xl font-bold mb-6">המטרה שלנו</h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                SeaMe הוא מיזם חברתי שנוצר במטרה לספק מידע נגיש ומדויק על חופי ישראל לאנשים עם מוגבלויות.
                אנו מאמינים שהים והחוף הם נכס ציבורי שכל אחד זכאי ליהנות ממנו, ללא קשר למוגבלות.
              </p>
              
              <p className="text-gray-700 mb-6 leading-relaxed">
                הפלטפורמה שלנו מספקת מידע מפורט על אמצעי הנגישות בכל חוף, כולל חניות נכים, שבילי גישה למים,
                שירותים נגישים, כסאות גלגלים ייעודיים למים, ועוד פרטים חשובים שיאפשרו לכם לתכנן את הביקור בחוף בצורה הטובה ביותר.
              </p>
              
              <h2 className="text-2xl font-bold mt-10 mb-6">איך זה עובד?</h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                אנו אוספים מידע ממגוון מקורות רשמיים כגון רשויות מקומיות, איגודי ערים לשמירת החופים, ומשרדי ממשלה.
                בנוסף, אנו מבצעים סיורים בחופים ומתעדים את אמצעי הנגישות בשטח. המידע מתעדכן באופן שוטף כדי להבטיח את הדיוק שלו.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
                <div className="bg-gray-50 p-6 rounded-lg text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center text-primary mx-auto mb-4">
                    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <h3 className="font-bold text-lg mb-2">איסוף מידע</h3>
                  <p className="text-gray-600">איסוף ותיעוד מקיף של פרטי נגישות בחופים בכל רחבי הארץ</p>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-lg text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center text-primary mx-auto mb-4">
                    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 6v6m0 0v6m0-6h6m-6 0H6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                  </div>
                  <h3 className="font-bold text-lg mb-2">עדכון מתמיד</h3>
                  <p className="text-gray-600">עדכון שוטף של המידע כדי להבטיח את הדיוק והרלוונטיות שלו</p>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-lg text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center text-primary mx-auto mb-4">
                    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                      <path d="M12 8v4l3 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                  </div>
                  <h3 className="font-bold text-lg mb-2">נגישות מידע</h3>
                  <p className="text-gray-600">הנגשת המידע בצורה פשוטה וידידותית למשתמש</p>
                </div>
              </div>
              
              <div className="mt-10 text-center">
                <Link to="/">
                  <Button size="lg" className="mx-auto">
                    חזרה לחיפוש החופים
                  </Button>
                </Link>
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
