// src/constants/projects.js

// Tooltip descriptions for each tech
export const techDescriptions = {
  "Power BI": "Interactive dashboards and business intelligence reports.",
  SQL: "Query language for relational databases.",
  Python: "Programming language for data analysis, AI, and automation.",
  "Generative AI": "AI models like GPT used to generate text, code, and more.",
  Tableau: "Visual analytics platform for data dashboards.",
};

export const allProjects = [
  {
    title: "Amazon Sales Dashboard",
    description:
      "Developed a Power BI dashboard to analyze product sales, returns, and reviews, addressing the need for data-driven decisions by providing insights into trends, geographic performance, and product metrics to optimize Amazon's e-commerce strategies.",
    stack: ["Power BI", "SQL", "Excel"],
    github:
      "https://github.com/mihirkudale/Amazon-Dashboard-in-Power-BI/tree/main",
    demo:
      "https://app.powerbi.com/view?r=eyJrIjoiNTQ2ZWFlZTYtYWU2OC00OWU2LWE5YzEtOWU4NGY2ODUxZmNhIiwidCI6IjJjMzk3MjYyLTM1MGMtNGY5MC1iOTM0LWFiYzUxNmQ4MTc0ZCJ9",
  },
  {
    title: "Blinkit Dashboard",
    description:
      "The Blinkit dashboard provides a comprehensive view of operations, including real-time order tracking, inventory management, and performance analytics. It streamlines decision-making by offering actionable insights to enhance efficiency and customer satisfaction.",
    stack: ["Python", "Power BI", "SQL", "Excel"],
    github: "https://github.com/mihirkudale/Blinkit-Dashboard",
    demo:
      "https://app.powerbi.com/view?r=eyJrIjoiYzhmMmQyMzktNzVkNy00OGVmLWI3ZWEtNzFhZGM2NzIxNDZiIiwidCI6IjJjMzk3MjYyLTM1MGMtNGY5MC1iOTM0LWFiYzUxNmQ4MTc0ZCJ9",
  },
  {
    title: "Madhav E-Commerce Sales Insights Dashboard",
    description:
      "Developed a Power BI dashboard to analyze Madhav Ecommerce sales performance, addressing the need for data-driven insights into sales, profit, and quantity by state, category, customer, and payment mode to optimize business strategies.",
    stack: ["Power BI", "SQL", "Excel"],
    github:
      "https://github.com/mihirkudale/Madhav-Ecommerce-Sales-Dashboard-Power-BI",
    demo:
      "https://app.powerbi.com/view?r=eyJrIjoiMTA3ZWQwNzEtOTQ4OS00NzM1LTlhYzktMGJlMGY0YmYxZDk3IiwidCI6IjJjMzk3MjYyLTM1MGMtNGY5MC1iOTM0LWFiYzUxNmQ4MTc0ZCJ9",
  },
];

export const techFilters = ["All", "Python", "SQL", "Power BI", "Tableau"];