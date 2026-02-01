import { Link } from 'react-router-dom';

export function AboutPage() {
  return (
    <div className="about container fade-in">
      <div className="about-content">
  <p>
    I am <strong>Ashar Nasir</strong>.
</p>

<p>
    I build computational models to understand life, and I write to understand living.
</p>

<p>
    <strong>Razdaan</strong> is my attempt to trace these patterns, not just in the 
    code I write, but in the silence between the lines.
</p>
</div>


<div dir="rtl" lang="ur" style={{ fontFamily: "'Noto Nastaliq Urdu', serif", lineHeight: 1.8 }}>
    <p>
        میں <strong>اشعر ناصر</strong> ہوں۔
    </p>

    <p>
        میں زندگی (Life) کے نظام کو سمجھنے کے لیے کمپیوٹیشنل ماڈل بناتا ہوں، اور جینے (Living) کے اسرار کو سمجھنے کے لیے لکھتا ہوں۔
    </p>

    <p>
        میرا کام تعین اور اتفاق (Order and Randomness) کے اس سنگم پر ہے جہاں چیزیں واضع نہیں ہوتیں۔ 
        چاہے وہ سماجی نظاموں کی بے یقینی (Stochastic Systems) ہو، فطرت اور تربیت (Nature vs Nurture) کی قدیم کشمکش، 
        یا شعور (Consciousness) کا معمہ—میری جستجو ان 'پوشیدہ عوامل' کی تلاش ہے جو ہماری ہستی پر حکمرانی کرتے ہیں۔
    </p>

    <p>
        <strong>'رازداں'</strong> انہی نقوش کو پا لینے کی ایک کوشش ہے—صرف اس کوڈ میں نہیں جو میں لکھتا ہوں، 
        بلکہ ان خاموشیوں میں جو الفاظ کے درمیان بستی ہیں۔
    </p>
</div>
    </div>
  );
}

export function NotFoundPage() {
  return (
    <div className="not-found container">
      <h1>404</h1>
      <p>The page you're looking for doesn't exist.</p>
      <Link to="/" className="back-link">
        Return to posts
      </Link>
    </div>
  );
}
