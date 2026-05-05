const express = require('express');
const { records, cities, segments, publications, customerTypes } = require('../data/mockData');
const { calcMetrics } = require('../services/analyticsService');
const router = express.Router();
router.get('/data', (req, res) => { let rows = [...records]; ['city','segment','publication','customerType'].forEach((k)=>{ if (req.query[k]) rows = rows.filter((r)=>r[k]===req.query[k]);}); if (req.query.from) rows=rows.filter(r=>r.date>=req.query.from); if (req.query.to) rows=rows.filter(r=>r.date<=req.query.to); res.json({ rows, metrics: calcMetrics(rows), dimensions: { cities, segments, publications, customerTypes } });});
router.get('/insights', (_, res) => { const byCity = Object.values(records.reduce((a,r)=>((a[r.city]??=0),a[r.city]+=r.revenue,a),{})).sort((a,b)=>b-a); const top5=byCity.slice(0,5).reduce((s,n)=>s+n,0); const total=byCity.reduce((s,n)=>s+n,0); const anomalies=records.filter(r=>r.revenue/r.cost>6||r.revenue/r.cost<1).slice(0,8); res.json({ insights:[`Top 5 cities contribute ${((top5/total)*100).toFixed(1)}% of revenue`,'High cost but low ROI segments detected in Hospital and Banks cluster','Emerging high potential markets: Pune, Hyderabad'], anomalies, prediction:'Projected next-quarter revenue growth: 8.4% with Airport + Hotel bundles' });});
module.exports = router;
