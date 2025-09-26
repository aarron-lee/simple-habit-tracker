import useHabitIds from "redux-modules/habits/hooks/useHabitIds";
import useHabits from "redux-modules/habits/hooks/useHabits";

function exportAllData(data) {
  const jsonStr = JSON.stringify(data, null, 2);
  const blob = new Blob([jsonStr], { type: "application/json" });
  const url = URL.createObjectURL(blob);

  const link = document.createElement("a");
  link.href = url;
  link.download =
    "simple_habit_tracker_" +
    new Date().toLocaleString().replace(/\W/g, "_") +
    ".json";
  link.click();

  URL.revokeObjectURL(url);
}

const useExportData = () => {
  const habitIds = useHabitIds();
  const habits = useHabits();

  const exportData = () => {
    exportAllData({ habitIds, habits });
  };

  return exportData;
};

export default useExportData;
