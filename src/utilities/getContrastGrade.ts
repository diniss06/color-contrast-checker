export const getContrastGrade = (ratio: number): string => {
  if (ratio >= 15) return "Super";
  if (ratio >= 9.5) return "Very Good";
  if (ratio >= 5) return "Good";
  if (ratio >= 2) return "Poor";
  return "Very Poor";
};
