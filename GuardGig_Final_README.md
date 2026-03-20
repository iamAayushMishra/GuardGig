# 🛡️ GuardGig: AI-Powered Parametric Income Protection

GuardGig is a fintech system that provides **automated income protection for gig workers** using parametric triggers like weather, AQI, and platform downtime.

Instead of filing claims, workers are **paid automatically when disruptions occur**.

---

## 💡 Inspiration

India’s gig workers operate without safety nets.

- 15M+ workers depend on daily earnings
- Lose **20–30% income monthly** due to:
  - Rain / floods
  - AQI spikes
  - Platform outages

Existing systems fail because:
- Insurance is slow (15–30 days)
- Premiums are misaligned (monthly vs weekly income)
- No product covers *income loss*

**Insight:**  
Speed matters more than coverage.  
If you fix payout latency → you solve the real problem.

---

## 🚀 What it does

GuardGig replaces traditional insurance with an **event-driven payout system**:

### Core Capabilities

- **Dynamic Premiums**
  - ₹45–₹60/week based on risk modeling

- **Parametric Triggers**
  - Rainfall > 50mm  
  - AQI > 300  
  - Extreme temperatures  
  - Platform downtime  

- **Zero-Touch Claims**
  - No manual claim filing
  - System auto-detects eligibility

- **T+1 Payouts**
  - Money sent via UPI within 24 hours

---

## 🏗️ How we built it

### Architecture Overview

**Frontend**
- React 18 + TypeScript
- Tailwind CSS (mobile-first)

**Backend**
- Node.js + Express
- REST APIs for policies, claims, workers
- Cron jobs for trigger monitoring

**ML Microservice**
- Python (Flask)

Models:
1. **Regression Model**
   - Predicts weekly premium
2. **XGBoost Classifier**
   - Fraud detection using:
     - GPS consistency
     - claim frequency
     - environmental validation

**Infrastructure**
- Docker (containerized services)
- GitHub Actions (CI/CD)
- Redis (caching weather + risk data)
- AWS / Railway deployment

---

## ⚙️ System Flow

1. Worker registers (OTP-based onboarding)
2. System calculates risk-based premium
3. Background services monitor environmental APIs
4. Trigger condition occurs (e.g., heavy rainfall)
5. Fraud engine validates eligibility
6. Claim auto-approved
7. Payout initiated via UPI

---

## 🚧 Challenges we ran into

### 1. Fraud Exploitation Risk
Workers could fake inactivity.

**Fix:**
- XGBoost fraud model
- GPS + weather correlation
- claim frequency analysis

---

### 2. Real-Time Data Overhead
Polling weather APIs for thousands of zones is expensive.

**Fix:**
- Redis caching (≈90% hit rate)
- batched zone-level queries

---

### 3. Trust Problem
Users don’t trust automated payouts.

**Fix:**
- Transparent premium breakdown
- visible trigger conditions
- claim reasoning dashboard

---

## 🏆 Accomplishments that we're proud of

- Built a **fully automated claim pipeline**
- Achieved **T+1 payout simulation**
- Designed **zone-level risk pricing**
- Eliminated need for a “Claim” button entirely
- Created a system where:
  > *User doesn’t ask for money — system knows they’re owed*

---

## 📚 What we learned

- **Liquidity > Coverage**
  - Faster payouts matter more than bigger payouts

- **Explainability is critical**
  - ML decisions must be interpretable

- **Edge cases define systems**
  - App downtime = major real-world disruption

- **Automation increases trust only if transparent**

---

## 🔮 What's next for GuardGig

### Short Term
- Add more triggers (traffic, strikes, fuel price spikes)
- Improve fraud model accuracy

### Mid Term
- Expand to:
  - Zepto / Blinkit
  - Amazon Flex

### Long Term
- Build alternative credit score
- Enable micro-loans
- Integrate IoT sensors

---

## 📊 Tech Stack

| Layer        | Technology                  |
|-------------|----------------------------|
| Frontend    | React, TypeScript, Tailwind |
| Backend     | Node.js, Express           |
| ML Service  | Python, XGBoost            |
| Database    | MongoDB (planned)          |
| Cache       | Redis                      |
| Infra       | Docker, AWS/Railway        |

---

## 📦 Setup Instructions

```bash
git clone https://github.com/your-username/guardgig.git

cd backend
npm install
npm start

cd ../ml-service
pip install -r requirements.txt
python app.py

cd ../frontend
npm install
npm run dev
```

---

## 🤝 Contributing

Open issues before large changes.  
PRs welcome.

---

## 📄 License

MIT

---

## 👤 Authors

- Aayush Mishra  
- Team GuardGig
