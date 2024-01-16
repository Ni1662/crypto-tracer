export const chartDays = [
  {
    label: "24 Hours",
    value: 1,
  },
  {
    label: "30 Days",
    value: 30,
  },
  {
    label: "3 Months",
    value: 90,
  },
  {
    label: "1 Year",
    value: 365,
  },
];

export const ForexDate = [
  {
    label: "24 Hours",
    value: "24hr",
  },
  {
    label: "30 Days",
    value: "30d",
  },
  {
    label: "3 Months",
    value: "3mo",
  },
  {
    label: "1 Year",
    value: "1yr",
  },
]

export const calculateDateRange = (period) => {
  const today = new Date();
  today.setDate(today.getDate() - 0);
  const endDate = today.toISOString().split("T")[0]; // Format: YYYY-MM-DD

  let startDate;

  switch (period) {
    case "24hr":
      // Calculate the start date excluding weekends
      startDate = new Date(today);
      startDate.setDate(today.getDate() - 1);
      break;
    case "30d":
      startDate = new Date(today);
      startDate.setDate(today.getDate() - 30);
      break;
    case "3mo":
      startDate = new Date(today);
      startDate.setMonth(today.getMonth() - 3);
      break;
    case "1yr":
      startDate = new Date(today);
      startDate.setFullYear(today.getFullYear() - 1);
      break;
    default:
      // Default to 24hr if the period is not recognized
      startDate = new Date(today);
      while (startDate.getDay() === 0 || startDate.getDay() === 6) {
        startDate.setDate(startDate.getDate() - 1);
      }
      break;
  }

  const formattedStartDate = startDate.toISOString().split("T")[0];

  return { startDate: formattedStartDate, endDate };
};
