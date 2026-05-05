# OOH Channel Reporting System (RMD BI Platform)

Full-stack analytics web application for OOH channel reporting with dashboard KPIs, customer analytics, revenue/cost intelligence, AI insight simulation, automated reporting, and ETL pipeline visualization.

## Stack
- Frontend: Next.js + Tailwind CSS + Recharts
- Backend: Node.js + Express REST API
- Data: Mock dataset (MongoDB-ready structure)

## Run
### Backend
```bash
cd backend
npm install
npm run dev
```

### Frontend
```bash
cd frontend
npm install
npm run dev
```

Frontend: http://localhost:3000
Backend: http://localhost:4000

## Features
- Dummy login and corporate-style sidebar layout
- KPI cards: Revenue, Distribution Cost, RPC, ROI, Growth Markets
- Dynamic filters (city, segment, publication, customer type)
- Charts: revenue bar, stacked costs, RPC line, visibility/influence scatter, plus market/competition panel
- Customer analytics and financial analytics pages
- AI insights with anomaly detection + predictive mock output
- Automated CSV/PDF reporting and scheduling UI
- ETL pipeline flow/status simulation
