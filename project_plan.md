# PROJECT PLAN: GuardGig - AI-Powered Parametric Income Protection Platform

## Executive Summary

**Project Name:** GuardGig  
**Project Title:** Parametric Income Protection for Indian Gig Delivery Workers  
**Chosen Persona:** Food Delivery Partners (Zomato/Swiggy focused)  
**Timeline:** 6 weeks (Phase 1: Mar 4-20, Phase 2: Mar 21-Apr 4, Phase 3: Apr 5-17)  
**Primary Goal:** Build an AI-powered parametric insurance platform that provides automated income protection for gig workers facing external disruptions

GuardGig is a revolutionary fintech solution addressing a critical gap in India's gig economy. With over 15 million platform-based delivery workers losing 20-30% of monthly earnings to uncontrollable external disruptions (extreme weather, pollution, app crashes, curfews), they currently have zero safety nets. Our solution provides automated, zero-touch insurance coverage that instantly compensates workers for income loss triggered by parametric events, making income protection accessible, affordable, and transparent.

---

## 1. PROBLEM STATEMENT - DEEP DIVE

### Current Market Reality

India's platform-based delivery ecosystem is massive:
- **Zomato & Swiggy** collectively have ~400,000+ active delivery partners
- **Amazon Flex, Dunzo, Blinkit** add another 500,000+ delivery workers
- **Average Monthly Earnings:** ₹15,000-25,000 per delivery partner
- **Working Pattern:** 6-7 days/week, 8-10 hours/day

### The Core Problem: Income Volatility & Zero Protection

**Scenario 1 - Weather Disruption:**
- A Zomato delivery partner in Mumbai experiences heavy monsoon rainfall (>75mm) on a Tuesday
- Restaurants close or reduce orders, delivery platform experiences 40% order reduction
- Worker loses 6-8 working hours, equivalent to ₹1,200-1,600 in lost income
- **Current Outcome:** No compensation. Worker bears full loss.

**Scenario 2 - Environmental Disruption:**
- Air Quality Index (AQI) in Delhi exceeds 400 (hazardous level) on Wednesday
- Citizens avoid outdoor activities, delivery orders drop by 50%
- Worker who typically earns ₹2,800/day makes only ₹800
- **Current Outcome:** No safety net. Family's weekly budget is impacted.

**Scenario 3 - Social Disruption:**
- An unplanned strike or local market closure in Bangalore restricts deliveries from 11 AM-5 PM
- Worker loses 6 prime working hours during peak delivery time
- **Current Outcome:** Worker must supplement income from other means or reduce weekly spending

### Market Gap: Traditional Insurance Doesn't Work for Gig Workers

**Why existing insurance is inaccessible:**
1. **Long Claim Cycles:** Traditional health/accident insurance takes 15-30 days to process claims
2. **Mismatched Billing:** Monthly premiums (₹500-1000) uncomfortable for workers earning ₹3500-5000/week
3. **Manual Documentation:** Requires receipts, medical bills, or police complaints - impossible for income loss
4. **Exclusionary Coverage:** Most insurance excludes delivery workers due to "high-risk" classification
5. **Wrong Product:** Gig workers need income protection, not health insurance they don't need

---

## 2. GAPS IN CURRENT PLATFORMS - DETAILED ANALYSIS

### 2.1 Zomato/Swiggy Partnership Gap
**Current Approach:** These platforms offer incentives/bonuses during bad weather
- ❌ **Problem:** Bonus is discretionary, not guaranteed
- ❌ **Problem:** Bonus algorithm is opaque to workers
- ❌ **Problem:** Covers only extreme weather; ignores social disruptions
- ❌ **Problem:** No backup if platforms' infrastructure fails

### 2.2 Traditional Insurance Companies
**Current Approach:** Offer group health/accident policies
- ❌ **Problem:** Coverage doesn't include income loss
- ❌ **Problem:** Monthly premium cycles don't align with weekly earnings
- ❌ **Problem:** Manual claim process requires documentation workers don't have
- ❌ **Problem:** Slow payout (15-30 days vs. T+1 requirement)
- ❌ **Problem:** No understanding of gig-specific risks (weather, app crashes)

### 2.3 Government Schemes
**Current Approach:** PM-JSY, ESIC (limited to registered workers)
- ❌ **Problem:** Only covers a fraction of gig workers (~5-10%)
- ❌ **Problem:** Bureaucratic processes with 30-60 day claim cycles
- ❌ **Problem:** Fixed coverage amounts not tailored to individual earnings
- ❌ **Problem:** No real-time adaptation to disruptions

### 2.4 Fintech Platforms (Money Lenders)
**Current Approach:** Micro-credit during income loss
- ❌ **Problem:** Deepens debt; doesn't solve root issue
- ❌ **Problem:** High interest rates (24-36% APR)
- ❌ **Problem:** Payment pressure on already distressed workers

### 2.5 Peer-to-Peer Schemes (WhatsApp Groups)
**Current Approach:** Informal pooling of money
- ❌ **Problem:** No regulatory protection
- ❌ **Problem:** Prone to fraud and mismanagement
- ❌ **Problem:** Unsustainable for repeated disruptions
- ❌ **Problem:** Emotional burden of asking for help

---

## 3. OUR SOLUTION: GuardGig - Detailed Approach

### 3.1 Core Value Proposition

GuardGig solves the income protection problem through:

| Dimension | Gap | Our Solution |
|-----------|-----|--------------|
| **Timing** | 15-30 day manual claims | T+1 automatic payouts |
| **Trigger** | Manual filing required | Parametric auto-trigger (no filing) |
| **Pricing** | Monthly cycles | Weekly cycles aligned with worker earnings |
| **Fraud** | Limited checks | AI-powered 5-layer fraud detection |
| **Accessibility** | High documentation burden | 2-minute mobile onboarding |
| **Transparency** | Black-box algorithms | Real-time dashboard showing premium breakdown |
| **Coverage** | Fixed amounts | Dynamic based on worker's earnings history |

### 3.2 How GuardGig Works - Step-by-Step

**Week 1: Registration & Risk Profiling**
1. Worker downloads app, enters phone number, receives OTP
2. System captures: delivery zone, platform (Zomato/Swiggy), average weekly earnings, working hours
3. AI model analyzes historical disruption patterns in worker's zone
4. System assigns initial risk score (Low/Medium/High)

**Week 1-2: Policy Creation & Weekly Premium**
1. Worker sees dynamic premium calculation: ₹45/week for medium-risk zone vs ₹60/week for high-risk
2. Premium is calculated as: Base Rate (₹35) + Zone Risk Factor (₹10-20) + Weather Volatility (₹0-10)
3. Coverage amount: Min ₹500/week, Max ₹5,000/week (based on declared earnings)
4. Worker activates policy; premium auto-deducted next day via UPI

**Days 1-7: Parametric Monitoring**
1. Background process monitors 5 parametric triggers 24/7:
   - **Trigger 1:** Rainfall >50mm in worker's zone (via OpenWeather API)
   - **Trigger 2:** AQI >300 in worker's zone (pollution - via mock API)
   - **Trigger 3:** Temperature <5°C or >45°C (extreme temps)
   - **Trigger 4:** Zone closure (admin simulates or via mock platform API)
   - **Trigger 5:** App downtime detection (platform unavailability)

**When Trigger Occurs (Automatic - No Worker Action):**
1. System captures: Trigger type, timestamp, worker location, current status
2. Fraud detection engine runs: GPS validation, historical pattern check, weather verification
3. If fraud score <50 (safe): Claim auto-approved
4. If fraud score 50-80: Manual review by insurance team
5. If fraud score >80: Auto-rejected with reason

**T+1 Payout:**
1. Approved claims processed immediately
2. Amount calculated: Daily Average Earnings × Hours Affected × Coverage Percentage
3. Transferred to worker's registered UPI account via mock Razorpay
4. Worker receives push notification + SMS confirmation

**Dashboard Insights (Real-time):**
- Worker Dashboard: "Earnings Protected: ₹3,450 this week" | "Active Coverage: Until Sunday" | "Claims Paid: ₹2,100 this month"
- Admin Dashboard: "Loss Ratio: 65%" | "Next Week Forecast: 40% claims expected (monsoon)" | "Top Fraud Risk Zone: Downtown (3 flagged claims)"

---

## 4. HOW OUR SOLUTION IS USEFUL - DETAILED BENEFITS

### 4.1 For Delivery Workers

**Financial Security**
- Income protection during uncontrollable events (lost ₹1,200 during rain? Get ₹1,000 back via claim)
- Budget stability for families (weekly payout predictability)
- Accumulation of safety nets (can stack multiple policies for different platforms)

**User Experience**
- No paperwork, no documentation burden (fully automated)
- 2-minute onboarding on mobile phone (no complex forms)
- Real-time dashboard showing earnings protected and claim status
- Zero mental stress (claims auto-triggered, no need to figure out complex processes)

**Economic Empowerment**
- Access to financial products previously unavailable to them
- Better financial planning (can promise family weekly income)
- Builds credit history with insurance company (potential for future microfinance)

### 4.2 For Insurance Companies

**Risk Management**
- Parametric insurance reduces ambiguity (trigger = payout, no subjective assessment)
- Real-time data on claim patterns helps fine-tune pricing
- AI fraud detection prevents 95%+ of fraudulent claims
- Better underwriting through hyper-local risk modeling

**Operational Efficiency**
- 70% reduction in claim processing overhead (automatic triggering)
- Predictive analytics forecast next week's likely claims (help with capital allocation)
- Scalable system (can serve 1M workers with same infrastructure)

**Market Opportunity**
- Untapped ₹500B+ annual insurance market (15M workers × ₹3,000/year avg spend)
- Customer retention (loyal customer base = recurring revenue)
- Cross-sell opportunity (can introduce health insurance after trust is built)

### 4.3 For Delivery Platforms (Zomato/Swiggy)

**Worker Retention**
- Reduces churn during bad seasons (workers stay engaged knowing they have protection)
- Improves partner satisfaction scores
- Differentiates their platform (value-added service)

**Brand Reputation**
- Shows commitment to worker welfare (important for ESG metrics)
- Positive media coverage (supporting vulnerable workers)
- Regulatory goodwill (government sees them supporting gig economy protection)

---

## 5. TECHNOLOGIES USED - DETAILED BREAKDOWN

### 5.1 Frontend Stack - React Ecosystem

**Technology:** React 18 with TypeScript
- **Why React?** Best-in-class component reusability, vast ecosystem, proven for fintech apps (Stripe, PayPal use React)
- **Why TypeScript?** Type safety reduces runtime errors in financial operations (transaction amounts, coverage limits)

**Supporting Libraries:**
- **React Router v6:** Page navigation (home → onboarding → policy → claims → dashboard)
- **Redux Toolkit + Redux Persist:** Global state management for user session, active policy, claim history
- **Tailwind CSS:** Responsive UI framework (optimized for mobile-first design)
- **Axios:** HTTP client for API calls (better error handling than fetch)
- **React Query:** Server state management (caching API responses, real-time claim status)
- **Chart.js / Recharts:** Dashboard analytics visualization (loss ratios, claim trends)
- **React-Toastify:** Toast notifications (claim approved, payout sent)

**Mobile Optimization:**
- 100% responsive design for 320px-1920px screens
- Touch-optimized buttons (48px minimum for easy tapping)
- Low-bandwidth mode (reduce image quality on slow networks)

### 5.2 Backend Stack - Node.js + Express

**Technology:** Node.js v18+ with Express Framework
- **Why Node.js?** JavaScript consistency (reduces context switching), non-blocking I/O (handle 10K+ concurrent requests), vast npm ecosystem
- **Why Express?** Lightweight, fast, middleware-based architecture, battle-tested for financial platforms

**Key Libraries:**
- **MongoDB + Mongoose:** Document database for flexible schema (worker profiles, policies, claims)
  - Schema design optimized for queries: worker_id indexed, policy_status indexed, claim_date indexed
- **JWT (jsonwebtoken):** Stateless authentication (worker login tokens valid 30 days)
- **Bcrypt:** Password hashing with salt rounds = 12 (industry standard)
- **Joi/Yup:** Input validation (ensure premium calculations don't overflow, dates are valid)
- **Winston Logger:** Structured logging for debugging and compliance audit trails
- **Redis Client:** Caching premium calculations (avoid recalculating for same worker/zone combo)
- **Nodemailer / Twilio:** Email + SMS notifications

**API Architecture:**
- RESTful endpoints organized by domain: /api/auth, /api/policies, /api/claims, /api/workers
- Rate limiting: 100 requests/minute per worker (prevent abuse)
- CORS enabled for specific frontend domains only

### 5.3 ML/AI Microservice - Python Stack

**Technology:** Python 3.9+ with Flask/FastAPI
- **Why separate from Node.js?** Python has superior ML libraries; language-agnostic design allows swapping with Java/Go later
- **Why Flask?** Lightweight, easy to containerize, perfect for inference APIs

**ML Model 1: Premium Calculation (Regression)**

```
Training Pipeline:
- Features: zone_safety_score, avg_rainfall_history, pollution_avg, worker_age, platform_type
- Model: Linear Regression (Scikit-learn)
- Target: Weekly premium (₹40-100 range)
- Training Data: 10,000+ synthetic workers + historical disruption data
- R² Score Target: >0.85

Inference Logic:
1. Input: worker's zone, earnings, platform
2. Query historical disruption data for that zone (past 6 months)
3. Get 7-day weather forecast for that zone
4. Feed features to trained model
5. Output: Premium quote
6. Adjustment: Apply surge pricing if high disruption week predicted
```

**ML Model 2: Fraud Detection (Classification)**

```
Algorithm: XGBoost (Extreme Gradient Boosting)
- Advantages: Handles non-linear relationships, built-in feature importance, fast inference

Training Features:
- claim_frequency (claims per worker per month)
- claim_amount (vs. historical average for that worker)
- gps_zone_match (claimed zone vs. GPS history)
- temporal_pattern (claim submitted at unusual hour?)
- weather_authenticity (claimed rainfall vs. actual API data)
- duplicate_claim (same event claimed twice?)

Output: Fraud Risk Score (0-100)
- 0-40: Auto-approve (low risk)
- 40-70: Manual review (medium risk)
- 70-100: Auto-reject (high risk)

Model Monitoring:
- Track false positive rate weekly (target <5%)
- Retrain every 2 weeks with new claim data
- A/B test threshold adjustments
```

**ML Libraries:**
- **Scikit-learn:** Data preprocessing, model training, evaluation metrics
- **XGBoost:** Fast classification model for fraud detection
- **Pandas:** Data manipulation and feature engineering
- **NumPy:** Numerical computation
- **Joblib:** Model serialization (save trained model to disk)
- **Plotly:** Generate fraud trend visualizations

### 5.4 Data Integration & Parametric Monitoring

**Weather Data:**
- **OpenWeather API (Free Tier):** Real-time weather, 5-day forecasts
- Mock Implementation: JSON file with pre-generated weather scenarios for testing
- Polling Frequency: Every 1 hour per worker zone
- Threshold Triggers:
  - Rainfall >50mm
  - AQI (Air Quality Index) >300
  - Temperature <5°C or >45°C

**Platform Downtime Detection:**
- Mock Zomato/Swiggy API: Simulated app availability status
- Trigger: Platform unavailable >30 minutes during peak hours (11 AM-11 PM)

**Geofencing & Zone Closure:**
- Google Maps API (mocked): Reverse geocode worker's GPS to zone
- Admin Panel: Manually trigger zone closures for testing

### 5.5 Payment & Payout System

**Mock Payment Gateway:**
- **Razorpay Test Mode:** $0 cost, full API feature parity with production
- Alternatively: **Stripe Sandbox** or **UPI Simulators** (PayTM, Google Pay mocks)

**Payout Flow:**
```
Approved Claim → Payout Service → Mock Razorpay API → Worker's UPI ID → Notification
```

**Transaction Tracking:**
- All payouts recorded in database with status (pending, processed, failed)
- Workers can see transaction history + verification codes

### 5.6 DevOps & Infrastructure

**Version Control:**
- Git + GitHub for centralized repository
- Branch strategy: main (production), dev (development), feature/* (feature branches)

**Containerization:**
- Docker: Separate Dockerfiles for frontend, backend, ML service
- Benefits: Consistent environment across dev/staging/production

**CI/CD Pipeline:**
- GitHub Actions: Auto-run tests on every push
- Deployment: Manual trigger to AWS EC2 or Railway
- Stages: Build → Test → Deploy Staging → Deploy Production

**Hosting Options:**
- **AWS EC2 t2.medium:** ₹2,000/month (production-ready)
- **Railway.app:** ₹5/hour (~₹3,600/month), simpler deployment
- **Vercel:** Free tier for frontend deployment

**Monitoring & Logging:**
- **LogRocket:** Client-side error tracking (track UI crashes)
- **Sentry:** Backend error tracking (track API failures)
- **Datadog:** Infrastructure monitoring (CPU, memory, API latency)
- **CloudWatch:** AWS native monitoring

### 5.7 Testing Stack

- **Jest:** Unit testing for Node.js/React
- **React Testing Library:** Component testing for React
- **Pytest:** Python ML model testing
- **Postman:** API endpoint testing + mock API responses

---

## 6. DETAILED IMPLEMENTATION PLAN - 4 PHASES

### PHASE 1: Foundation & Discovery (March 4-20, Weeks 1-2)

**Theme:** "Ideate & Know Your Delivery Worker"

#### Phase 1a: Research & Persona Validation (Days 1-3)

**Deliverables:**
1. **Worker Research Document**
   - Survey 10-15 actual delivery workers (Zomato/Swiggy) in 3 cities (Delhi, Mumbai, Bangalore)
   - Questions: Average earnings, disruption frequency, existing coping mechanisms, pain points
   - Finding: Workers lose income ~30-40% during monsoon, twice a year each
   - Finding: Current support is zero; they either reduce spending or take personal loans

2. **Competitive Analysis**
   - Analyze existing insurance products: PolicyBazaar, Razorpay Protect, Digit Insurance
   - Finding: None offer weekly pricing; all misaligned with gig cycles
   - Finding: Parametric insurance is new to India; first-mover advantage

3. **Regulatory Landscape**
   - Study IRDAI (Insurance Regulatory Authority) guidelines for parametric insurance
   - Finding: Allowed, but requires approval; mock implementation sufficient for MVP

#### Phase 1b: System Architecture & Database Design (Days 4-6)

**Database Schema:**

```javascript
// Worker Collection
{
  _id: ObjectId,
  phone: "+919XXXXXXXXX",
  name: "Raj Kumar",
  email: "raj@example.com",
  zone: "Andheri_West", // Geofence identifier
  platform: "Zomato", // or Swiggy, Amazon, etc.
  avgWeeklyEarnings: 18000,
  workingHoursPerDay: 10,
  riskScore: "MEDIUM", // LOW, MEDIUM, HIGH
  kycStatus: "VERIFIED",
  upiId: "raj@googlePay",
  createdAt: "2026-03-04T10:00:00Z",
}

// Policy Collection
{
  _id: ObjectId,
  workerId: ObjectId,
  policyNumber: "GG-2026-001234",
  weekStartDate: "2026-03-16",
  weekEndDate: "2026-03-22",
  premium: 55, // ₹55 for that week
  coverageAmount: 2000, // ₹2000 max claim per week
  status: "ACTIVE", // or EXPIRED, CLAIMED
  premiumBreakdown: {
    base: 35,
    zoneRiskFactor: 15,
    weatherVolatility: 5,
  },
  createdAt: "2026-03-10T00:00:00Z",
}

// Claim Collection
{
  _id: ObjectId,
  workerId: ObjectId,
  policyId: ObjectId,
  claimId: "CLAIM-2026-00567",
  triggerType: "RAINFALL",
  triggerData: {
    rainfall: 65, // mm
    location: "Andheri_West",
    timestamp: "2026-03-17T14:30:00Z",
  },
  fraudScore: 35, // 0-100
  fraudDetails: {
    gpsMatch: true,
    frequencyOK: true,
    weatherVerified: true,
  },
  claimAmount: 1500,
  status: "APPROVED", // or PENDING, REJECTED
  payoutStatus: "PROCESSED",
  payoutId: "TXN12345",
  createdAt: "2026-03-17T14:35:00Z",
  approvedAt: "2026-03-17T14:45:00Z",
}

// DisruptionEvent Collection
{
  _id: ObjectId,
  zone: "Andheri_West",
  eventType: "RAINFALL",
  eventData: {
    rainfall: 65,
    aqi: 280,
    temperature: 32,
  },
  timestamp: "2026-03-17T14:00:00Z",
  workersAffected: ["worker_id_1", "worker_id_2"],
  claimsTriggered: 2,
}

// Transaction Collection (Payment Ledger)
{
  _id: ObjectId,
  workerId: ObjectId,
  type: "PAYOUT", // or PREMIUM_DEDUCTION, REFUND
  claimId: ObjectId,
  amount: 1500,
  upiId: "raj@googlePay",
  status: "SUCCESS",
  razorpayTxnId: "mock_txn_12345",
  timestamp: "2026-03-18T06:00:00Z",
}
```

**API Endpoints (High-Level):**

```
Authentication:
  POST /api/auth/register - Send OTP to phone
  POST /api/auth/verify-otp - Verify OTP, create session
  POST /api/auth/logout - Log out

Worker Profile:
  GET /api/workers/profile - Fetch worker details
  POST /api/workers/profile - Update profile
  POST /api/workers/kyc - Upload verification docs (mock)

Policies:
  GET /api/policies - List all policies (active + past)
  GET /api/policies/:policyId - Fetch specific policy
  POST /api/policies/calculate-premium - Submit worker details, get premium quote
  POST /api/policies/activate - Create policy, deduct premium

Claims:
  GET /api/claims - List claims (status, amount, date)
  GET /api/claims/:claimId - Fetch claim details
  POST /api/claims/file - File new claim (frontend rarely calls this; mostly backend auto-triggers)

Admin Endpoints:
  GET /api/admin/claims - List all claims for manual review
  POST /api/admin/claims/:claimId/approve-or-reject - Approve/reject claim
  GET /api/admin/analytics - Dashboard metrics (loss ratios, patterns)
  POST /api/admin/disruption/trigger - Manually trigger test disruption
```

#### Phase 1c: UI/UX Design & Wireframes (Days 5-7)

**Wireframe Structure:**

```
Onboarding Flow:
1. Splash Screen → "Welcome to GuardGig"
2. Phone Verification → Enter +91 XXX XXXXX XXX
3. OTP Verification → Enter 4-digit OTP
4. Worker Details → Zone, Platform, Earnings
5. Policy Review → See calculated premium
6. Payment → OTP from bank, policy activated

Dashboard:
1. Hero Section → "You're Protected This Week"
2. Stats Cards → Earnings Protected: ₹2,100 | Active Coverage: Until Sunday
3. Policy Section → Current week premium, coverage amount
4. Claims History → Last 5 claims with status
5. Bottom Navigation → Home | Policies | Claims | Profile

Claim Details Page:
1. Claim ID + Timestamp
2. Trigger Type + Details (Rainfall: 65mm at 2:30 PM)
3. Fraud Check Status (Green checkmark: Verified)
4. Amount Approved
5. Payout Status + UPI Receipt

Admin Dashboard:
1. KPIs → Total Claims: 342 | Approved: 298 (87%) | Loss Ratio: 62%
2. Geographic Heatmap → Zones with most claims (red = high, green = low)
3. Time Series Chart → Claims by day over past month
4. Next Week Forecast → Predicted claims based on weather forecast
5. Recent Claims Table → Sortable, filterable
```

#### Phase 1d: Project Setup & Boilerplate Code (Days 6-7)

**Deliverables:**

1. **GitHub Repository Structure**
   ```
   guardigig/
     ├── frontend/
     │   ├── src/
     │   │   ├── components/     # Reusable React components
     │   │   ├── pages/          # Navigation pages
     │   │   ├── redux/          # State management
     │   │   ├── services/       # API client
     │   │   └── assets/
     │   ├── public/
     │   ├── package.json
     │   └── tailwind.config.js
     ├── backend/
     │   ├── models/             # Mongoose schemas
     │   ├── routes/             # Express route handlers
     │   ├── middleware/         # Auth, validation, error handling
     │   ├── services/           # Business logic
     │   ├── config/             # DB connection, env vars
     │   ├── utils/              # Helper functions
     │   ├── server.js           # Entry point
     │   └── package.json
     ├── ml-service/
     │   ├── models/
     │   │   ├── premium_calculator.pkl  # Trained model
     │   │   └── fraud_detector.pkl
     │   ├── app.py              # Flask app
     │   ├── train.py            # Model training script
     │   ├── requirements.txt
     ├── docker-compose.yml      # Local dev environment
     ├── .github/
     │   └── workflows/
     │       └── deploy.yml      # CI/CD pipeline
     ├── README.md
     ├── API_SPEC.md
     └── PROJECT_PLAN.md
   ```

2. **Initial Repositories**
   - Node.js Express server with MongoDB connection
   - React app with routing (React Router v6)
   - Python Flask app with model endpoints
   - Docker Compose for local development

3. **Authentication System**
   - OTP generation (mock: use 1111 for all phone numbers in dev)
   - JWT token generation on OTP verification
   - Middleware to protect routes with JWT validation

#### Phase 1 Deliverables Summary

- ✅ **README.md** (500+ words)
  - Problem statement with scenarios
  - Persona details (Zomato/Swiggy delivery partner)
  - Weekly premium model explanation
  - Parametric triggers definition
  - Tech stack overview
  - Development roadmap
  
- ✅ **GitHub Repository** with clean folder structure
- ✅ **Database Schema Diagram** (visual representation)
- ✅ **API Specification Document** (Postman export)
- ✅ **UI/UX Wireframes** (Figma link or screenshots)
- ✅ **2-Minute Video** (YouTube link)
  - Problem context (30 seconds)
  - Solution overview (45 seconds)
  - Minimal prototype demo (45 seconds): Show onboarding form, policy dashboard mockup

---

### PHASE 2: Core Features - Automation & Protection (March 21-April 4, Weeks 3-4)

**Theme:** "Protect Your Worker"

#### Phase 2a: Registration & KYC Pipeline (Days 8-11)

**Detailed Implementation:**

1. **Frontend Registration Form (React Component)**

```jsx
// Components/OnboardingFlow.jsx
import React, { useState } from 'react';
import OTPVerification from './OTPVerification';
import ProfileForm from './ProfileForm';
import PolicyReview from './PolicyReview';

export default function OnboardingFlow() {
  const [step, setStep] = useState(1);
  const [workerData, setWorkerData] = useState({
    phone: '',
    otp: '',
    name: '',
    zone: '',
    platform: 'Zomato',
    avgWeeklyEarnings: 18000,
  });

  const handlePhoneSubmit = async (phone) => {
    setWorkerData({ ...workerData, phone });
    setStep(2);
  };

  const handleOTPVerify = async (otp) => {
    setWorkerData({ ...workerData, otp });
    setStep(3);
  };

  return (
    <div>
      {step === 1 && <PhoneInput onSubmit={handlePhoneSubmit} />}
      {step === 2 && <OTPVerification onSubmit={handleOTPVerify} />}
      {step === 3 && <ProfileForm onSubmit={handleProfileSubmit} />}
    </div>
  );
}
```

2. **Backend Registration Endpoint**

```javascript
// routes/auth.js
router.post('/register', async (req, res) => {
  const { phone, name, zone, platform, avgWeeklyEarnings } = req.body;
  
  if (!validator.isMobilePhone(phone, 'en-IN')) {
    return res.status(400).json({ error: 'Invalid phone' });
  }

  let worker = await Worker.findOne({ phone });
  if (worker) {
    return res.status(400).json({ error: 'Worker already registered' });
  }

  const riskScore = await callMLService('/premium-factors', {
    zone,
    platform,
    avgWeeklyEarnings,
  });

  worker = new Worker({
    phone,
    name,
    zone,
    platform,
    avgWeeklyEarnings,
    riskScore,
    kycStatus: 'VERIFIED',
    createdAt: new Date(),
  });

  await worker.save();
  res.json({ workerId: worker._id, riskScore });
});
```

#### Phase 2b: Dynamic Premium Calculation with ML (Days 9-13)

**ML Model Training:**

```python
# ml-service/train.py
import pandas as pd
from sklearn.linear_model import LinearRegression
from sklearn.preprocessing import StandardScaler
import joblib

data = pd.read_csv('synthetic_workers.csv')
X = data[['zone_safety_score', 'rainfall_history', 'pollution_avg', 'working_hours']]
y = data['premium']

scaler = StandardScaler()
X_scaled = scaler.fit_transform(X)

model = LinearRegression()
model.fit(X_scaled, y)

joblib.dump(model, 'models/premium_calculator.pkl')
joblib.dump(scaler, 'models/scaler.pkl')
```

**ML Inference API:**

```python
# ml-service/app.py
from flask import Flask, request, jsonify
import joblib
import numpy as np

app = Flask(__name__)
model = joblib.load('models/premium_calculator.pkl')
scaler = joblib.load('models/scaler.pkl')

@app.route('/calculate-premium', methods=['POST'])
def calculate_premium():
    data = request.json
    X = np.array([[data['zone_safety_score'], data['rainfall_history'], 
                   data['pollution_avg'], data['working_hours_per_day']]])
    X_scaled = scaler.transform(X)
    premium = model.predict(X_scaled)[0]
    premium = max(40, min(100, premium))
    
    return jsonify({'premium': round(premium, 2)})
```

#### Phase 2c: Parametric Trigger System (Days 10-14)

**Real-time Monitoring Service:**

```javascript
// backend/services/triggerMonitor.js
const cron = require('node-cron');
const axios = require('axios');

class TriggerMonitor {
  async monitorDisruptions() {
    console.log('Scanning for disruptions...');
    const zones = await getUniqueZones();

    for (const zone of zones) {
      const weatherData = await weather.getWeatherData(zone);
      
      if (weatherData.rainfall > 50) {
        await this.checkRainfallTrigger(zone, weatherData);
      }
      if (weatherData.aqi > 300) {
        await this.checkAQITrigger(zone, weatherData);
      }
    }
  }

  async createAutoClaim(policy, triggerType, triggerData) {
    const claim = new Claim({
      workerId: policy.workerId,
      policyId: policy._id,
      claimId: `CLAIM-${Date.now()}`,
      triggerType,
      triggerData,
      status: 'PENDING_FRAUD_CHECK',
    });

    const fraudScore = await this.runFraudDetection(policy, claim);
    claim.fraudScore = fraudScore;

    if (fraudScore < 50) {
      claim.status = 'APPROVED';
      await this.processPayoutForClaim(claim);
    }

    await claim.save();
  }
}

cron.schedule('0 * * * *', async () => {
  const monitor = new TriggerMonitor();
  await monitor.monitorDisruptions();
});
```

#### Phase 2d: Claims Management & Payouts (Days 12-15)

**Payout Processing:**

```javascript
// backend/services/payoutService.js
class PayoutService {
  async processPayoutForClaim(claim) {
    const worker = await Worker.findById(claim.workerId);
    const dailyAvgEarnings = worker.avgWeeklyEarnings / 6;
    const hoursAffected = 6;
    const hourlyRate = dailyAvgEarnings / 10;
    const claimAmount = Math.min(
      hourlyRate * hoursAffected,
      claim.policyId.coverageAmount
    );

    const transaction = new Transaction({
      workerId: worker._id,
      claimId: claim._id,
      type: 'PAYOUT',
      amount: claimAmount,
      upiId: worker.upiId,
      status: 'PROCESSING',
    });

    try {
      const payoutResponse = await razorpay.payouts.create({
        amount: claimAmount * 100,
        currency: 'INR',
        mode: 'UPI',
      });

      transaction.razorpayTxnId = payoutResponse.id;
      transaction.status = 'SUCCESS';
    } catch (error) {
      transaction.status = 'FAILED';
    }

    await transaction.save();
  }
}
```

#### Phase 2 Deliverables Summary

- ✅ **Registration System** fully functional
- ✅ **ML-Powered Premium Calculation** working
- ✅ **Policy Management** (create, view, activate)
- ✅ **5 Parametric Triggers** implemented
- ✅ **Auto-Claim Triggering** operational
- ✅ **Basic Claims Dashboard** with status tracking
- ✅ **Mock Payout System** (simulates UPI transfer)
- ✅ **2-Minute Demo Video** showing full flow

---

### PHASE 3: Advanced Features - Scale & Optimize (April 5-17, Weeks 5-6)

**Theme:** "Perfect for Your Worker"

#### Phase 3a: Advanced Fraud Detection (Days 16-19)

**Fraud Detection Model:**

```python
# ml-service/train_fraud_detector.py
import pandas as pd
from xgboost import XGBClassifier
from sklearn.model_selection import train_test_split

data = pd.read_csv('synthetic_claims.csv')
features = data[[
    'claim_frequency_per_month',
    'claim_to_avg_ratio',
    'gps_zone_match',
    'temporal_anomaly_score',
    'weather_verification_score',
    'duplicate_claim_flag',
]]
target = data['is_fraud']

X_train, X_test, y_train, y_test = train_test_split(features, target, test_size=0.2)

model = XGBClassifier(n_estimators=100, max_depth=6)
model.fit(X_train, y_train)

joblib.dump(model, 'models/fraud_detector.pkl')
```

**Real-time Fraud Detection:**

```python
# ml-service/fraud_detection.py
class FraudDetector:
    def __init__(self):
        self.model = joblib.load('models/fraud_detector.pkl')
    
    def detect_fraud(self, claim, worker_history):
        claims_last_month = len([c for c in worker_history['claims'] 
                                if c['createdAt'] > datetime.now() - timedelta(days=30)])
        
        avg_claim_amount = np.mean([c['amount'] for c in worker_history['claims'][-10:]])
        claim_to_avg_ratio = claim['amount'] / (avg_claim_amount + 1)
        
        X = np.array([[
            claims_last_month,
            claim_to_avg_ratio,
            1,  # gps_match
            0.9,  # temporal_score
            1,  # weather_authentic
            0,  # duplicate
        ]])
        
        fraud_probability = self.model.predict_proba(X)[0][1]
        fraud_score = int(fraud_probability * 100)
        
        return {'fraud_score': fraud_score}
```

#### Phase 3b: Advanced Analytics Dashboard (Days 18-21)

**Worker Dashboard:**

```jsx
// Components/WorkerDashboard.jsx
export default function WorkerDashboard() {
  const [stats, setStats] = useState({
    earningsProtected: 8450,
    activeCoverage: true,
    claimsTrend: [],
  });

  useEffect(() => {
    const fetchDashboardData = async () => {
      const response = await axios.get('/api/dashboard/worker');
      setStats(response.data);
    };
    fetchDashboardData();
  }, []);

  return (
    <div className="dashboard-container">
      <div className="stat-card">
        <div className="label">Earnings Protected</div>
        <div className="value">₹{stats.earningsProtected}</div>
      </div>
    </div>
  );
}
```

**Admin Dashboard:**

```jsx
// Components/AdminDashboard.jsx
export default function AdminDashboard() {
  const [metrics, setMetrics] = useState({
    totalClaims: 5234,
    approvedClaims: 4562,
    lossRatio: 0.62,
  });

  return (
    <div className="admin-dashboard">
      <div className="kpi-card">
        <h4>Total Claims</h4>
        <div className="value">{metrics.totalClaims}</div>
      </div>
    </div>
  );
}
```

#### Phase 3 Deliverables Summary

- ✅ **Fraud Detection Engine** live
- ✅ **Mock Payout System** fully integrated
- ✅ **Worker Dashboard** with real-time metrics
- ✅ **Admin Dashboard** with predictive analytics
- ✅ **5-Minute Demo Video** (YouTube link)
- ✅ **Final Pitch Deck** (PDF, 12 slides)
- ✅ **Comprehensive README** with all details
- ✅ **API Documentation** (Postman collection)
- ✅ **Deployment Ready** (Docker, CI/CD pipeline)

---

### PHASE 4: Scaling & Optimization (Post-Submission, Ongoing)

#### Phase 4a: Performance & Scaling
- Implement Redis caching for weather data (90% cache hit rate)
- Optimize ML inference (ONNX runtime for 60% faster predictions)
- Database indexing on high-query fields
- Load testing: Validate system handles 10K concurrent users

#### Phase 4b: Security & Compliance
- Encryption for UPI IDs & sensitive data
- Rate limiting on APIs (100 req/min per user)
- HTTPS enforcement, CORS protection
- Security audit & penetration testing

#### Phase 4c: Multi-Persona Expansion
- Grocery delivery (Zepto/Blinkit) - optimize for traffic delays
- E-commerce pickup (Amazon Flex) - add vehicle breakdown protection
- Extend fraud detection for persona-specific patterns

---

## 7. TECHNOLOGY STACK - COMPREHENSIVE SUMMARY

| Layer | Technology | Why Chosen |
|-------|-----------|-----------|
| **Frontend UI** | React 18 + TypeScript | Component reusability, ecosystem, fintech proven |
| **Frontend Styling** | Tailwind CSS | Utility-first, responsive, mobile-optimized |
| **Frontend State** | Redux Toolkit | Predictable state management for financial data |
| **Frontend Caching** | React Query | Server state sync, automatic refetching |
| **Backend Framework** | Node.js + Express | JavaScript consistency, non-blocking I/O |
| **Database** | MongoDB + Mongoose | Flexible schema, easy to scale |
| **ML/AI** | Python + Scikit-learn + XGBoost | Best ML libraries, model interpretability |
| **ML API** | Flask | Lightweight, easy to containerize |
| **Authentication** | JWT + Bcrypt | Stateless, secure token-based auth |
| **Validation** | Joi/Yup | Input sanitization, financial data integrity |
| **Caching** | Redis | Sub-millisecond response times |
| **Task Scheduling** | Node-Cron | Trigger monitoring every hour |
| **Payment Gateway** | Razorpay (test mode) | India-native, UPI support |
| **External APIs** | OpenWeather + Mocks | Real-time weather, fallback mocks |
| **Logging** | Winston | Structured logging for debugging |
| **Error Tracking** | Sentry | Real-time error monitoring |
| **Containerization** | Docker | Consistent environments, easy scaling |
| **CI/CD** | GitHub Actions | Native to GitHub, free |
| **Hosting** | AWS EC2 / Railway | Reliable, scalable, cost-effective |
| **Monitoring** | Datadog/CloudWatch | Infrastructure & performance monitoring |

---

## 8. KEY BUSINESS METRICS & SUCCESS CRITERIA

### Phase 1 Success
- ✅ Comprehensive README > 500 words
- ✅ 2-minute video posted publicly
- ✅ Clean GitHub repo structure
- ✅ Database schema finalized

### Phase 2 Success
- ✅ 100+ test users onboarded
- ✅ ML premium calculator: 85%+ accuracy
- ✅ 5 parametric triggers operational
- ✅ Auto-claims: <1 second from trigger to claim creation
- ✅ 2-minute demo video showing full flow

### Phase 3 Success
- ✅ Fraud detection: <5% false positive rate
- ✅ Claims processed: <100ms each
- ✅ Payouts: T+1 completion
- ✅ Admin dashboard: Real-time updates
- ✅ 5-minute demo video
- ✅ Pitch deck: Compelling business case

### Overall Success (Post-Implementation)
- ✅ System handles 1M+ workers
- ✅ Loss ratio sustainable (55-65%)
- ✅ Average claim processing: <500ms
- ✅ Customer retention: 85%+
- ✅ NPS score: >70
- ✅ 99.9% uptime

---

## 9. RISK MITIGATION STRATEGY

| Risk | Mitigation |
|------|-----------|
| **Weather API downtime** | Use mock data as fallback; cache last known values |
| **Fraudulent claims** | 5-layer detection system; manual review for edge cases |
| **Payment gateway failures** | Queue failed payouts; retry with exponential backoff |
| **Database loss** | Automated daily backups; replica database |
| **ML model drift** | Weekly retraining; continuous monitoring of predictions |
| **Low user adoption** | Partner with platforms (Zomato/Swiggy); leverage existing user bases |
| **Regulatory issues** | Engage with IRDAI early; follow insurance compliance |

---

## 10. CONCLUSION

GuardGig represents a paradigm shift in gig worker protection through AI-powered parametric insurance. By automating claim triggering, eliminating manual documentation, aligning pricing with worker income cycles, and leveraging advanced fraud detection, we create the first truly worker-centric income protection solution in India.

**The opportunity:** ₹500B+ addressable market (15M workers × ₹3,000/year)  
**First-mover advantage:** Unique parametric approach not yet available in India  
**Sustainability:** 55-65% loss ratios maintain profitability while protecting workers  
**Scalability:** Platform can eventually serve all gig economy verticals

With React-first technology, AI-driven personalization, and zero-touch automation, GuardGig is positioned to become the essential income protection layer for India's gig economy.

---

**Document Version:** 1.0  
**Last Updated:** March 20, 2026  
**Next Review:** Phase 2 completion (April 4, 2026)
