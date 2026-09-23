# 📍 FoodBridge Kolkata — Project Checkpoint & Group Guide

> **Project Name:** FoodBridge Kolkata (খাদ্য সেতু — কলকাতা)  
> **Course:** MCA Minor Project (4-Member Group)  
> **Target Region:** Kolkata, West Bengal, India  
> **Repository:** [github.com/Shuvzorh/Minor-Project-MCA](https://github.com/Shuvzorh/Minor-Project-MCA)  
> **Last Updated:** September 2026  

---

## 💡 What is FoodBridge in Simple Words?

Imagine an evening in Kolkata:
- A wedding reception at **EM Bypass** or a corporate banquet at **Sector V, Salt Lake** has **150 extra meals** left over at 10:00 PM.
- Normally, this fresh, delicious food would be thrown into garbage dumps.
- At the exact same time, nearby night shelters, orphanages, and community camps (like **Calcutta Rescue** or **The Hope Foundation**) in Park Street or Kalighat have people sleeping hungry.

**FoodBridge is a real-time web platform that connects them:**
1. The **Restaurant/Banquet** posts: *"We have 150 meals ready for pickup before 11:00 PM."*
2. A nearby **Volunteer on a bike/scooter** gets an instant alert on their phone, accepts the pickup, and collects the food.
3. The volunteer delivers it safely to the **NGO shelter**.
4. The whole delivery is tracked live on a **Kolkata city map** from start to finish!

---

## 🏙️ Why Kolkata, West Bengal as the Base?

Setting the project specifically in Kolkata makes our MCA Minor Project **relatable, realistic, and highly impactful** for examiners:

| Area / Landmark | Real-World Role in FoodBridge |
|---|---|
| **EM Bypass & Science City** | Large wedding banquet halls & convention centers with huge evening food surplus |
| **Park Street & Camac Street** | High-density restaurants, cafes, and bakeries |
| **Salt Lake (Sector V) & New Town** | IT corporate cafeterias, tech symposiums, and buffet catering |
| **Gariahat & South Kolkata** | Community festival halls (*Utsav Bhavans*) and traditional catering |
| **Howrah & Burrabazar** | High-density transit relief camps and community kitchens |
| **Partner Shelters & NGOs** | **Calcutta Rescue** (Park St), **The Hope Foundation** (Ballygunge/Kasba), **Tomorrow's Foundation** (Kalighat), and **Robin Hood Army Kolkata Hub** |

---

## 👥 Smart 4-Member Work Division (For MCA Submission & Viva)

Since only **1 member knows web development** and the other **3 members are beginners**, here is a fair, structured division of responsibilities. Every member will have a clear, impressive contribution for university evaluation:

```
                          ┌─────────────────────────────┐
                          │   FoodBridge Kolkata Team   │
                          │        (4 MCA Members)      │
                          └──────────────┬──────────────┘
         ┌──────────────────┬────────────┴─────────────┬─────────────────┐
         ▼                  ▼                          ▼                 ▼
   Member 1 (Dev)     Member 2 (SRS/UML)         Member 3 (QA/Data)  Member 4 (PPT/Viva)
   Frontend & Code    Docs & Diagrams            Testing & Field     Presentation & Pitch
```

### 🧑‍💻 Member 1: Technical & Development Lead (The Coder)
- **Primary Responsibility:** Codebase management, React architecture, Leaflet map integration, and state management.
- **Tasks:**
  - Build & maintain frontend components (React + Tailwind CSS).
  - Implement the Leaflet live map with Kolkata coordinates (`[22.5726, 88.3639]`).
  - Manage application state via `FoodBridgeContext`.
  - Maintain the GitHub repository and assist teammates in running code locally.

### 📝 Member 2: System Architecture & MCA Documentation Lead
- **Primary Responsibility:** Writing the official MCA Minor Project Report / Synopsis.
- **Tasks:**
  - Create the **Software Requirements Specification (SRS)** document.
  - Draw standard software engineering diagrams:
    - **DFD Diagrams:** Level 0 (Context Level), Level 1, and Level 2 data flow diagrams.
    - **UML Diagrams:** Use Case Diagram, Class Diagram, Sequence Diagram, and Activity Diagram.
    - **ER Diagram (Entity-Relationship):** Donors, Volunteers, NGOs, Donations, and Deliveries.
  - Write chapters on *Feasibility Study*, *Hardware/Software Requirements*, and *Literature Review*.

### 🧪 Member 3: Field Research, Kolkata NGO Data & Quality Assurance (Testing Lead)
- **Primary Responsibility:** Data authenticity and rigorous manual testing.
- **Tasks:**
  - Gather authentic Kolkata NGO contact details, banquet locations, and food safety rules (FSSAI guidelines for cooked food shelf life).
  - Create a formal **Test Case Document** with columns: `Test ID`, `Feature Tested`, `Test Steps`, `Expected Output`, `Actual Output`, `Pass/Fail`.
  - Perform cross-browser testing (Chrome, Edge, Firefox) and mobile responsive testing.
  - Verify every role (Donor, Volunteer, NGO, Admin) and document any bugs or layout glitches.

### 🎤 Member 4: UI/UX Evaluation, Final PPT Presentation & Viva Lead
- **Primary Responsibility:** Preparing the presentation slides and coordinating the final viva demo.
- **Tasks:**
  - Design the college **PowerPoint Presentation (PPT)** (15-20 slides following university guidelines).
  - Create the live project demo walkthrough script (which page to click first, what story to tell the external examiner).
  - Prepare slides on *Social Impact*, *Sustainable Development Goals (SDG 2: Zero Hunger & SDG 12: Responsible Consumption)*, and *Future Scope*.
  - Coordinate group practice sessions for the oral viva.

---

## 🚀 How to Run FoodBridge on Any Teammate's Laptop (In 3 Simple Steps)

You do **NOT** need advanced programming knowledge to run this project on your laptop!

### Step 1: Install Node.js (One-time setup)
- Go to [nodejs.org](https://nodejs.org) and download the **LTS Version** (v20 or v22).
- Install it by clicking `Next -> Next -> Finish`.

### Step 2: Open Terminal / Command Prompt in the `frontend` folder
1. Open your project folder: `Minor Project MCA`.
2. Open the `frontend` subfolder.
3. In the Windows file explorer address bar at the top, type `cmd` and press **Enter**.

### Step 3: Run These Two Commands
```bash
# First, install dependencies (only need to run this once):
npm install

# Then, start the development server:
npm run dev
```

You will see:
```text
  VITE v6.0.1  ready in 250 ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
```
👉 Hold `Ctrl` and click the link, or open Google Chrome and paste: `http://localhost:5173/`.  
**That's it! The whole platform is live on your laptop!**

---

## 🧭 The 4 User Personas (How to Demo the App)

Use the role switcher in the top navigation bar or log in with different roles:

```text
1. 🏨 Food Provider (Donor) 
   → Posts surplus meals (e.g. 150 meals from The Grand Ballroom, EM Bypass)
   → Specifies expiry time, food category, and pickup instructions

2. 🛵 Volunteer Courier
   → Views active rescue requests on the Kolkata map
   → Accepts task, views pickup route, updates status: "Food Picked Up" → "Out for Delivery"

3. 🏠 Partner NGO / Shelter (e.g. Calcutta Rescue, Park Street)
   → Receives real-time notification of incoming food delivery
   → Verifies hygiene and confirms receipt

4. 📊 City Administrator (Kolkata Operations Hub)
   → Monitors city-wide statistics: total meals saved, active volunteers, and waste reduction charts
```

---

## 🗺️ Key Pages in the Codebase

| Page | URL Path | What It Does |
|---|---|---|
| **Landing Page** | `/` | Hero section, social mission, 3-step explainer, impact counters |
| **Explore Kolkata Map** | `/explore` | Full-screen interactive Leaflet map centered on Kolkata with filterable pins (Food, NGOs, Volunteers) |
| **Donor Dashboard** | `/donor/dashboard` | Shows active donations created by hotels/banquets |
| **Create Donation** | `/donor/create-donation` | Form to list new food with quantity, shelf-life, and pickup location |
| **Volunteer Hub** | `/volunteer/dashboard` | Nearby pickup requests with distance and acceptance modal |
| **Live Tracking** | `/track/:id` | Visual timeline + route map showing driver traveling from donor to NGO |
| **NGO Dashboard** | `/ngo/dashboard` | Inventory of meals received and capacity toggle |
| **Admin Dashboard** | `/admin` | City-wide analytics, monthly recovery graph, and system audit logs |

---

## 🗣️ Top 10 MCA Viva Questions & Cheat-Sheet Answers

Memorize these simple answers for the external examiner:

### Q1: What is the main objective of FoodBridge Kolkata?
> **Answer:** "FoodBridge is a real-time hyper-local web platform that reduces urban food wastage by bridging surplus food from wedding banquets, restaurants, and IT cafeterias in Kolkata to local NGO shelters and orphanages before it spoils."

### Q2: Why did you choose Kolkata, West Bengal as your target area?
> **Answer:** "Kolkata has hundreds of banquet halls along EM Bypass and major hotel clusters in Park Street and Salt Lake Sector V that generate significant surplus food every night. At the same time, reputable NGOs like Calcutta Rescue and Hope Foundation operate extensive hunger relief programs in the city, making hyper-local real-time coordination viable."

### Q3: What technology stack did you use and why?
> **Answer:** "On the frontend, we used **React 18** with **Vite** for fast performance, **Tailwind CSS** for responsive design, **Leaflet** for interactive mapping, and **Framer Motion** for smooth user feedback. State management is handled through React's **Context API**."

### Q4: Why did you choose Leaflet and OpenStreetMap instead of Google Maps API?
> **Answer:** "Google Maps API requires paid billing accounts and API keys with request quotas. **Leaflet with OpenStreetMap** is free, lightweight, open-source, and does not depend on paid third-party proprietary billing, making it ideal for non-profit and academic initiatives."

### Q5: How do you handle food safety and expiration?
> **Answer:** "Every donation listing requires a strict *Prepared At* and *Pickup Before* shelf-life deadline. Listings show dynamic urgency badges ('Urgent' vs 'Normal'). The platform prioritizes nearest volunteers to ensure food is delivered within safe temperature windows."

### Q6: How does the application maintain real-time status?
> **Answer:** "Currently, we have implemented an active client-side event and state synchronization model using React Context API that tracks stage transitions across 5 stages: Created → Volunteer Assigned → Food Picked Up → Out for Delivery → Delivered. In the next phase, we are connecting WebSockets / Supabase Realtime for push updates."

### Q7: What are the United Nations Sustainable Development Goals (SDGs) addressed?
> **Answer:** "FoodBridge directly addresses **SDG 2 (Zero Hunger)** by redirecting meals to underprivileged populations, and **SDG 12 (Responsible Consumption and Production)** by preventing food waste from entering municipal landfills."

### Q8: How can false or spoiled donations be prevented?
> **Answer:** "Through a two-way verification process: Donors and NGOs must register with valid contact numbers and addresses, and the receiving NGO must confirm physical food quality upon arrival before the delivery is marked as verified."

### Q9: What is the database and backend plan?
> **Answer:** "The backend architecture is structured in the `backend/` directory to support Node.js / Express or Supabase with PostgreSQL. It will handle JWT role-based authentication, donation persistent storage, and geolocation spatial queries."

### Q10: How was the project divided among the 4 team members?
> **Answer:** "Member 1 led web development, React components, and map logic. Member 2 designed system architecture, SRS, DFDs, and UML diagrams. Member 3 conducted Kolkata field research, gathered real NGO data, and executed manual QA testing. Member 4 managed UI/UX review, presentation documentation, and project defense coordination."

---

## 📈 Current Project Milestone Checklist

- [x] **Frontend Architecture:** Complete React 18 + Vite scaffolding.
- [x] **Kolkata Map Integration:** OpenStreetMap centered at `[22.5726, 88.3639]` with custom colored pins:
  - 🟢 Green = Kolkata NGOs
  - 🟠 Orange = Food Listings
  - 🟣 Purple = Emergency Food Camps
  - 🔵 Blue = Active Volunteers
- [x] **Kolkata Mock Dataset:** Realistic local data (EM Bypass, Park Street, Salt Lake Sector V, New Town, Gariahat) and Indian contact numbers.
- [x] **4 User Dashboards:** Food Provider, Volunteer, NGO, and Admin.
- [x] **Role Switcher:** Instant role-switching preview for demo presentations.
- [x] **Live Tracking Pipeline:** 5-stage donation lifecycle with interactive map route.
- [ ] **College Documentation:** Finalizing SRS, DFD, and UML diagrams (Member 2).
- [ ] **Test Case Report:** Completing manual test sheets across all pages (Member 3).
- [ ] **Viva Presentation Deck:** Finalizing PPT slides (Member 4).
- [ ] **Backend Service:** Connecting database and live authentication (`backend/`).
