// Simulated data inspired by Olist, Superstore, and Amazon datasets

export interface KPI {
  label: string;
  value: string;
  change: number;
  prefix?: string;
  suffix?: string;
  icon: string;
}

export interface MonthlyRevenue {
  month: string;
  revenue: number;
  profit: number;
  orders: number;
  customers: number;
}

export interface CategoryData {
  category: string;
  revenue: number;
  profit: number;
  orders: number;
  margin: number;
  retention: number;
}

export interface RegionalData {
  region: string;
  state: string;
  revenue: number;
  profit: number;
  orders: number;
  avgDelivery: number;
  margin: number;
}

export interface CustomerSegment {
  segment: string;
  count: number;
  revenue: number;
  avgOrderValue: number;
  color: string;
}

export interface RFMData {
  segment: string;
  recency: number;
  frequency: number;
  monetary: number;
  count: number;
  color: string;
}

export interface ChurnData {
  month: string;
  churnRate: number;
  retentionRate: number;
  newCustomers: number;
  lostCustomers: number;
}

export interface ProductData {
  product: string;
  category: string;
  revenue: number;
  profit: number;
  units: number;
  margin: number;
  rating: number;
  returnRate: number;
}

export interface CohortData {
  cohort: string;
  month0: number;
  month1: number;
  month2: number;
  month3: number;
  month4: number;
  month5: number;
}

export interface Recommendation {
  type: 'insight' | 'warning' | 'opportunity';
  title: string;
  description: string;
  impact: string;
  metric: string;
}

// Executive KPIs
export const executiveKPIs: KPI[] = [
  { label: 'Total Revenue', value: '4.82M', change: 12.4, prefix: '$', icon: 'dollar' },
  { label: 'Net Profit', value: '1.23M', change: 8.7, prefix: '$', icon: 'trending' },
  { label: 'Total Orders', value: '68,429', change: 15.2, icon: 'package' },
  { label: 'Retention Rate', value: '34.7', change: -2.1, suffix: '%', icon: 'users' },
  { label: 'Avg Order Value', value: '70.44', change: 3.8, prefix: '$', icon: 'cart' },
  { label: 'Customer LTV', value: '142.30', change: 5.6, prefix: '$', icon: 'heart' },
];

// Monthly revenue trends (18 months)
export const monthlyRevenue: MonthlyRevenue[] = [
  { month: 'Jan 24', revenue: 312000, profit: 78000, orders: 4230, customers: 3180 },
  { month: 'Feb 24', revenue: 287000, profit: 71200, orders: 3890, customers: 2940 },
  { month: 'Mar 24', revenue: 342000, profit: 89000, orders: 4680, customers: 3520 },
  { month: 'Apr 24', revenue: 298000, profit: 74500, orders: 4120, customers: 3090 },
  { month: 'May 24', revenue: 356000, profit: 92300, orders: 4890, customers: 3670 },
  { month: 'Jun 24', revenue: 321000, profit: 80200, orders: 4410, customers: 3310 },
  { month: 'Jul 24', revenue: 289000, profit: 69800, orders: 3980, customers: 2990 },
  { month: 'Aug 24', revenue: 367000, profit: 95100, orders: 5030, customers: 3780 },
  { month: 'Sep 24', revenue: 334000, profit: 86700, orders: 4590, customers: 3440 },
  { month: 'Oct 24', revenue: 378000, profit: 98200, orders: 5190, customers: 3890 },
  { month: 'Nov 24', revenue: 456000, profit: 118600, orders: 6250, customers: 4690 },
  { month: 'Dec 24', revenue: 512000, profit: 133100, orders: 7020, customers: 5270 },
  { month: 'Jan 25', revenue: 348000, profit: 90500, orders: 4780, customers: 3580 },
  { month: 'Feb 25', revenue: 329000, profit: 85500, orders: 4510, customers: 3380 },
  { month: 'Mar 25', revenue: 389000, profit: 101100, orders: 5340, customers: 4010 },
  { month: 'Apr 25', revenue: 356000, profit: 92500, orders: 4880, customers: 3660 },
  { month: 'May 25', revenue: 412000, profit: 107100, orders: 5650, customers: 4240 },
  { month: 'Jun 25', revenue: 378000, profit: 98300, orders: 5190, customers: 3890 },
];

// Category performance
export const categoryData: CategoryData[] = [
  { category: 'Electronics', revenue: 1420000, profit: 284000, orders: 12800, margin: 20.0, retention: 28.4 },
  { category: 'Fashion & Apparel', revenue: 890000, profit: 312000, orders: 15200, margin: 35.1, retention: 41.2 },
  { category: 'Home & Garden', revenue: 672000, profit: 201600, orders: 8900, margin: 30.0, retention: 36.8 },
  { category: 'Health & Beauty', revenue: 534000, profit: 186900, orders: 9800, margin: 35.0, retention: 45.6 },
  { category: 'Sports & Outdoors', revenue: 423000, profit: 110000, orders: 5600, margin: 26.0, retention: 33.2 },
  { category: 'Books & Media', revenue: 312000, profit: 140400, orders: 7200, margin: 45.0, retention: 52.1 },
  { category: 'Toys & Games', revenue: 267000, profit: 72100, orders: 4800, margin: 27.0, retention: 22.8 },
  { category: 'Food & Grocery', revenue: 198000, profit: 29700, orders: 3200, margin: 15.0, retention: 58.3 },
  { category: 'Automotive', revenue: 145000, profit: 33350, orders: 1200, margin: 23.0, retention: 18.7 },
];

// Regional data
export const regionalData: RegionalData[] = [
  { region: 'West', state: 'California', revenue: 892000, profit: 178400, orders: 12300, avgDelivery: 3.2, margin: 20.0 },
  { region: 'West', state: 'Washington', revenue: 342000, profit: 85500, orders: 4700, avgDelivery: 3.5, margin: 25.0 },
  { region: 'East', state: 'New York', revenue: 756000, profit: 219200, orders: 10400, avgDelivery: 2.8, margin: 29.0 },
  { region: 'East', state: 'Massachusetts', revenue: 289000, profit: 89600, orders: 3980, avgDelivery: 2.6, margin: 31.0 },
  { region: 'South', state: 'Texas', revenue: 534000, profit: 149500, orders: 7340, avgDelivery: 4.1, margin: 28.0 },
  { region: 'South', state: 'Florida', revenue: 467000, profit: 121400, orders: 6420, avgDelivery: 3.8, margin: 26.0 },
  { region: 'South', state: 'Georgia', revenue: 234000, profit: 63200, orders: 3220, avgDelivery: 4.3, margin: 27.0 },
  { region: 'Central', state: 'Illinois', revenue: 378000, profit: 109600, orders: 5200, avgDelivery: 3.6, margin: 29.0 },
  { region: 'Central', state: 'Ohio', revenue: 256000, profit: 74200, orders: 3520, avgDelivery: 3.9, margin: 29.0 },
  { region: 'Central', state: 'Michigan', revenue: 198000, profit: 55400, orders: 2720, avgDelivery: 4.0, margin: 28.0 },
  { region: 'West', state: 'Oregon', revenue: 187000, profit: 50500, orders: 2570, avgDelivery: 3.4, margin: 27.0 },
  { region: 'East', state: 'Pennsylvania', revenue: 245000, profit: 73500, orders: 3370, avgDelivery: 3.0, margin: 30.0 },
];

// Region aggregated
export const regionSummary = [
  { region: 'West', revenue: 1421000, profit: 314400, orders: 19570, avgDelivery: 3.4, margin: 22.1 },
  { region: 'East', revenue: 1290000, profit: 382300, orders: 17750, avgDelivery: 2.8, margin: 29.6 },
  { region: 'South', revenue: 1235000, profit: 334100, orders: 16980, avgDelivery: 4.1, margin: 27.1 },
  { region: 'Central', revenue: 832000, profit: 239200, orders: 11440, avgDelivery: 3.8, margin: 28.8 },
];

// Customer segments
export const customerSegments: CustomerSegment[] = [
  { segment: 'Champions', count: 4820, revenue: 1680000, avgOrderValue: 124.50, color: '#10b981' },
  { segment: 'Loyal', count: 8340, revenue: 1230000, avgOrderValue: 89.20, color: '#3b82f6' },
  { segment: 'Potential', count: 12100, revenue: 890000, avgOrderValue: 62.30, color: '#8b5cf6' },
  { segment: 'At Risk', count: 6780, revenue: 520000, avgOrderValue: 48.90, color: '#f59e0b' },
  { segment: 'Lost', count: 9200, revenue: 310000, avgOrderValue: 34.10, color: '#ef4444' },
];

// RFM Segmentation
export const rfmData: RFMData[] = [
  { segment: 'Champions', recency: 8, frequency: 12, monetary: 1850, count: 4820, color: '#10b981' },
  { segment: 'Loyal Customers', recency: 25, frequency: 8, monetary: 980, count: 8340, color: '#3b82f6' },
  { segment: 'Potential Loyalists', recency: 18, frequency: 4, monetary: 620, count: 12100, color: '#8b5cf6' },
  { segment: 'Recent Customers', recency: 5, frequency: 1, monetary: 280, count: 3400, color: '#06b6d4' },
  { segment: 'Promising', recency: 35, frequency: 3, monetary: 450, count: 5600, color: '#14b8a6' },
  { segment: 'Need Attention', recency: 52, frequency: 5, monetary: 560, count: 6780, color: '#f59e0b' },
  { segment: 'About to Sleep', recency: 78, frequency: 2, monetary: 320, count: 4200, color: '#f97316' },
  { segment: 'Hibernating', recency: 120, frequency: 2, monetary: 210, count: 5800, color: '#ef4444' },
  { segment: 'Lost', recency: 180, frequency: 1, monetary: 150, count: 9200, color: '#dc2626' },
];

// Churn data
export const churnData: ChurnData[] = [
  { month: 'Jan 24', churnRate: 5.2, retentionRate: 94.8, newCustomers: 890, lostCustomers: 420 },
  { month: 'Feb 24', churnRate: 4.8, retentionRate: 95.2, newCustomers: 760, lostCustomers: 380 },
  { month: 'Mar 24', churnRate: 5.5, retentionRate: 94.5, newCustomers: 920, lostCustomers: 460 },
  { month: 'Apr 24', churnRate: 6.1, retentionRate: 93.9, newCustomers: 810, lostCustomers: 510 },
  { month: 'May 24', churnRate: 5.8, retentionRate: 94.2, newCustomers: 950, lostCustomers: 490 },
  { month: 'Jun 24', churnRate: 6.3, retentionRate: 93.7, newCustomers: 870, lostCustomers: 530 },
  { month: 'Jul 24', churnRate: 7.1, retentionRate: 92.9, newCustomers: 780, lostCustomers: 590 },
  { month: 'Aug 24', churnRate: 5.9, retentionRate: 94.1, newCustomers: 1020, lostCustomers: 510 },
  { month: 'Sep 24', churnRate: 5.4, retentionRate: 94.6, newCustomers: 890, lostCustomers: 450 },
  { month: 'Oct 24', churnRate: 4.9, retentionRate: 95.1, newCustomers: 980, lostCustomers: 410 },
  { month: 'Nov 24', churnRate: 4.2, retentionRate: 95.8, newCustomers: 1340, lostCustomers: 380 },
  { month: 'Dec 24', churnRate: 3.8, retentionRate: 96.2, newCustomers: 1560, lostCustomers: 350 },
  { month: 'Jan 25', churnRate: 5.6, retentionRate: 94.4, newCustomers: 920, lostCustomers: 470 },
  { month: 'Feb 25', churnRate: 5.3, retentionRate: 94.7, newCustomers: 860, lostCustomers: 440 },
  { month: 'Mar 25', churnRate: 5.0, retentionRate: 95.0, newCustomers: 1050, lostCustomers: 430 },
  { month: 'Apr 25', churnRate: 5.7, retentionRate: 94.3, newCustomers: 940, lostCustomers: 480 },
  { month: 'May 25', churnRate: 4.6, retentionRate: 95.4, newCustomers: 1120, lostCustomers: 400 },
  { month: 'Jun 25', churnRate: 4.9, retentionRate: 95.1, newCustomers: 980, lostCustomers: 420 },
];

// Product performance
export const productData: ProductData[] = [
  { product: 'Wireless Headphones Pro', category: 'Electronics', revenue: 234000, profit: 58500, units: 3200, margin: 25.0, rating: 4.5, returnRate: 3.2 },
  { product: 'Smart Watch Ultra', category: 'Electronics', revenue: 198000, profit: 29700, units: 1800, margin: 15.0, rating: 4.2, returnRate: 5.8 },
  { product: 'Organic Cotton T-Shirt', category: 'Fashion & Apparel', revenue: 156000, profit: 62400, units: 6200, margin: 40.0, rating: 4.7, returnRate: 8.1 },
  { product: 'Premium Yoga Mat', category: 'Sports & Outdoors', revenue: 89000, profit: 35600, units: 2800, margin: 40.0, rating: 4.8, returnRate: 1.2 },
  { product: 'LED Desk Lamp', category: 'Home & Garden', revenue: 78000, profit: 27300, units: 3400, margin: 35.0, rating: 4.4, returnRate: 2.8 },
  { product: 'Bluetooth Speaker Mini', category: 'Electronics', revenue: 167000, profit: 33400, units: 4100, margin: 20.0, rating: 4.1, returnRate: 4.5 },
  { product: 'Vitamin C Serum', category: 'Health & Beauty', revenue: 134000, profit: 53600, units: 5600, margin: 40.0, rating: 4.6, returnRate: 2.1 },
  { product: 'Bestseller Novel Bundle', category: 'Books & Media', revenue: 67000, profit: 33500, units: 2800, margin: 50.0, rating: 4.9, returnRate: 0.8 },
  { product: 'Gaming Mouse RGB', category: 'Electronics', revenue: 145000, profit: 36250, units: 3200, margin: 25.0, rating: 4.3, returnRate: 3.9 },
  { product: 'Kitchen Knife Set', category: 'Home & Garden', revenue: 112000, profit: 39200, units: 1600, margin: 35.0, rating: 4.5, returnRate: 1.5 },
  { product: 'Running Shoes Air', category: 'Sports & Outdoors', revenue: 98000, profit: 24500, units: 1400, margin: 25.0, rating: 4.0, returnRate: 12.3 },
  { product: 'Phone Case Ultra', category: 'Electronics', revenue: 45000, profit: 27000, units: 9000, margin: 60.0, rating: 3.8, returnRate: 6.2 },
  { product: 'Scented Candle Set', category: 'Home & Garden', revenue: 56000, profit: 28000, units: 3200, margin: 50.0, rating: 4.7, returnRate: 0.9 },
  { product: 'Board Game Classic', category: 'Toys & Games', revenue: 78000, profit: 23400, units: 2600, margin: 30.0, rating: 4.6, returnRate: 1.1 },
  { product: 'Laptop Stand Ergonomic', category: 'Electronics', revenue: 89000, profit: 31150, units: 1800, margin: 35.0, rating: 4.4, returnRate: 2.3 },
  { product: 'Protein Powder 2kg', category: 'Health & Beauty', revenue: 123000, profit: 36900, units: 3400, margin: 30.0, rating: 4.3, returnRate: 1.8 },
];

// Cohort retention data (% retained)
export const cohortData: CohortData[] = [
  { cohort: 'Jan 2024', month0: 100, month1: 42, month2: 28, month3: 21, month4: 18, month5: 15 },
  { cohort: 'Feb 2024', month0: 100, month1: 39, month2: 25, month3: 19, month4: 16, month5: 14 },
  { cohort: 'Mar 2024', month0: 100, month1: 44, month2: 31, month3: 24, month4: 20, month5: 17 },
  { cohort: 'Apr 2024', month0: 100, month1: 38, month2: 24, month3: 18, month4: 15, month5: 13 },
  { cohort: 'May 2024', month0: 100, month1: 41, month2: 27, month3: 20, month4: 17, month5: 0 },
  { cohort: 'Jun 2024', month0: 100, month1: 36, month2: 22, month3: 17, month4: 0, month5: 0 },
  { cohort: 'Jul 2024', month0: 100, month1: 43, month2: 29, month3: 0, month4: 0, month5: 0 },
  { cohort: 'Aug 2024', month0: 100, month1: 45, month2: 0, month3: 0, month4: 0, month5: 0 },
];

// Repeat purchase rates
export const repeatPurchaseData = [
  { timeframe: '0-30 days', rate: 18.4, revenue: 680000 },
  { timeframe: '31-60 days', rate: 12.2, revenue: 420000 },
  { timeframe: '61-90 days', rate: 8.7, revenue: 310000 },
  { timeframe: '91-180 days', rate: 5.3, revenue: 190000 },
  { timeframe: '180+ days', rate: 2.1, revenue: 78000 },
];

// Business Recommendations
export const recommendations: Recommendation[] = [
  {
    type: 'insight',
    title: 'Electronics drives revenue but has low retention',
    description: 'Electronics category generates $1.42M (29.5% of total revenue) but has only 28.4% retention rate — lowest among top 4 categories. Consider bundling accessories or subscription models.',
    impact: 'Potential +$180K annual revenue with 5% retention improvement',
    metric: '28.4% retention vs 41.2% category avg',
  },
  {
    type: 'warning',
    title: 'West region: high volume, low profit margins',
    description: 'West region leads in order volume (19,570 orders) but has the lowest profit margin at 22.1%. California alone accounts for 63% of West region orders with 20% margin. Shipping costs and competitive pricing are key factors.',
    impact: 'Margin optimization could add $142K to bottom line',
    metric: '22.1% margin vs 29.6% East region',
  },
  {
    type: 'opportunity',
    title: '30-day repeat purchasers show 2.3x higher retention',
    description: 'Customers who make a second purchase within 30 days show 2.3x higher lifetime retention (42% vs 18%). Post-purchase email campaigns targeting days 7-14 could significantly improve this metric.',
    impact: 'Estimated +$340K in customer lifetime value',
    metric: '18.4% repeat rate in 0-30 day window',
  },
  {
    type: 'insight',
    title: 'Health & Beauty has highest category loyalty',
    description: 'Health & Beauty maintains 45.6% retention with 35% margin. Consumable nature drives repeat purchases. Subscription box model could capture additional 12-15% of customer base.',
    impact: 'Subscription model could generate $80K recurring monthly revenue',
    metric: '45.6% retention, 35% margin',
  },
  {
    type: 'warning',
    title: 'July churn spike indicates seasonal vulnerability',
    description: 'Churn rate peaks at 7.1% in July, correlating with reduced promotional activity. Summer engagement campaigns and mid-year sales events should be planned proactively.',
    impact: 'Preventing July churn spike saves ~590 customers',
    metric: '7.1% peak churn vs 4.8% average',
  },
  {
    type: 'opportunity',
    title: 'Books & Media: hidden gem with 52% retention',
    description: 'Despite being 6th in revenue ($312K), Books & Media has the highest retention (52.1%) and margin (45%). Cross-selling book recommendations with other categories could boost engagement.',
    impact: 'Cross-sell potential of $95K additional revenue',
    metric: '52.1% retention, 45% margin',
  },
  {
    type: 'warning',
    title: 'Running Shoes have 12.3% return rate',
    description: 'Running Shoes Air has a return rate of 12.3% — 4x the product average. Size guide improvements and virtual try-on features could reduce returns by 40-50%.',
    impact: 'Reducing returns saves $12K in reverse logistics',
    metric: '12.3% return rate vs 3.1% avg',
  },
  {
    type: 'opportunity',
    title: 'East region delivery speed correlates with higher margins',
    description: 'East region has fastest avg delivery (2.8 days) and highest margins (29.6%). Investing in fulfillment centers in South region (4.1 day avg) could replicate this performance.',
    impact: 'South region margin improvement potential: +$62K',
    metric: '2.8 days East vs 4.1 days South',
  },
];

// SQL Queries for display
export const sqlQueries = [
  {
    title: 'Monthly Revenue & Profit Trend',
    query: `SELECT 
  DATE_TRUNC('month', order_date) AS month,
  SUM(order_value) AS revenue,
  SUM(profit) AS profit,
  COUNT(DISTINCT order_id) AS orders,
  COUNT(DISTINCT customer_id) AS customers
FROM orders
WHERE order_date >= '2024-01-01'
GROUP BY DATE_TRUNC('month', order_date)
ORDER BY month;`,
  },
  {
    title: 'Customer Retention Rate',
    query: `WITH first_purchase AS (
  SELECT customer_id, 
         MIN(order_date) AS first_order
  FROM orders GROUP BY customer_id
),
repeat_customers AS (
  SELECT fp.customer_id
  FROM first_purchase fp
  JOIN orders o ON fp.customer_id = o.customer_id
  WHERE o.order_date > fp.first_order
)
SELECT 
  COUNT(DISTINCT rc.customer_id) * 100.0 / 
  COUNT(DISTINCT fp.customer_id) AS retention_rate
FROM first_purchase fp
LEFT JOIN repeat_customers rc 
  ON fp.customer_id = rc.customer_id;`,
  },
  {
    title: 'RFM Segmentation',
    query: `WITH rfm AS (
  SELECT customer_id,
    DATEDIFF(day, MAX(order_date), GETDATE()) AS recency,
    COUNT(DISTINCT order_id) AS frequency,
    SUM(order_value) AS monetary
  FROM orders
  GROUP BY customer_id
),
rfm_scores AS (
  SELECT *,
    NTILE(5) OVER (ORDER BY recency DESC) AS r_score,
    NTILE(5) OVER (ORDER BY frequency) AS f_score,
    NTILE(5) OVER (ORDER BY monetary) AS m_score
  FROM rfm
)
SELECT 
  CASE 
    WHEN r_score >= 4 AND f_score >= 4 THEN 'Champions'
    WHEN r_score >= 3 AND f_score >= 3 THEN 'Loyal'
    WHEN r_score >= 3 AND f_score <= 2 THEN 'Potential'
    WHEN r_score <= 2 AND f_score >= 3 THEN 'At Risk'
    ELSE 'Lost'
  END AS segment,
  COUNT(*) AS customer_count,
  AVG(monetary) AS avg_monetary
FROM rfm_scores
GROUP BY segment;`,
  },
  {
    title: 'Top Categories by Profit Margin',
    query: `SELECT 
  p.category,
  SUM(o.order_value) AS revenue,
  SUM(o.profit) AS profit,
  ROUND(SUM(o.profit) / SUM(o.order_value) * 100, 1) AS margin_pct,
  COUNT(DISTINCT o.customer_id) AS unique_customers
FROM orders o
JOIN products p ON o.product_id = p.product_id
GROUP BY p.category
ORDER BY margin_pct DESC;`,
  },
  {
    title: 'Regional Delivery Performance',
    query: `SELECT 
  c.region,
  c.state,
  AVG(DATEDIFF(day, o.order_date, o.delivery_date)) AS avg_delivery_days,
  SUM(o.order_value) AS revenue,
  ROUND(SUM(o.profit) / SUM(o.order_value) * 100, 1) AS margin_pct
FROM orders o
JOIN customers c ON o.customer_id = c.customer_id
GROUP BY c.region, c.state
ORDER BY avg_delivery_days;`,
  },
];

// Python code snippets
export const pythonSnippets = [
  {
    title: 'Data Cleaning & EDA',
    code: `import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
import seaborn as sns

# Load datasets
olist = pd.read_csv('olist_orders.csv')
superstore = pd.read_csv('superstore.csv')
amazon = pd.read_csv('amazon_sales.csv')

# Clean & standardize
olist['order_date'] = pd.to_datetime(olist['order_purchase_timestamp'])
olist.dropna(subset=['order_value'], inplace=True)

# Feature engineering
olist['month'] = olist['order_date'].dt.to_period('M')
olist['days_since_last'] = olist.groupby('customer_id')['order_date'].diff().dt.days

# RFM Analysis
rfm = olist.groupby('customer_id').agg({
    'order_date': lambda x: (pd.Timestamp.now() - x.max()).days,
    'order_id': 'count',
    'order_value': 'sum'
}).rename(columns={
    'order_date': 'recency',
    'order_id': 'frequency', 
    'order_value': 'monetary'
})

print(f"Total customers: {len(rfm):,}")
print(f"Avg recency: {rfm.recency.mean():.0f} days")
print(f"Avg frequency: {rfm.frequency.mean():.1f} orders")`,
  },
  {
    title: 'Cohort Analysis',
    code: `# Cohort Analysis
olist['cohort'] = olist.groupby('customer_id')['order_date'] \\
    .transform('min').dt.to_period('M')
olist['order_month'] = olist['order_date'].dt.to_period('M')
olist['cohort_index'] = (olist['order_month'] - olist['cohort']) \\
    .apply(lambda x: x.n)

cohort_data = olist.groupby(['cohort', 'cohort_index']) \\
    .agg(customers=('customer_id', 'nunique')).reset_index()

cohort_pivot = cohort_data.pivot(
    index='cohort', columns='cohort_index', values='customers')
cohort_pct = cohort_pivot.divide(cohort_pivot[0], axis=0) * 100

# Heatmap
sns.heatmap(cohort_pct, annot=True, fmt='.0f', 
            cmap='YlGnBu', linewidths=0.5)
plt.title('Cohort Retention Analysis')
plt.xlabel('Months Since First Purchase')
plt.ylabel('Cohort Month')`,
  },
];
