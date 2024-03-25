import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import js from "../assets/js.svg";
import node from "../assets/node.svg";
import react from "../assets/react.svg";
import themeResponsiveFonts from "../ThemeOptions";
import ChartDataLabels from "chartjs-plugin-datalabels";
import annotationPlugin from "chartjs-plugin-annotation";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  ChartDataLabels,
  annotationPlugin
);
ChartJS.defaults.set("plugins.datalabels", {
  color: themeResponsiveFonts.palette.gray["800"],
});

const jsImage = new Image();
jsImage.src = js;

const nodeImage = new Image();
nodeImage.src = node;

const reactImage = new Image();
reactImage.src = react;

const options = {
  indexAxis: "y" as const,
  elements: {
    bar: {
      borderWidth: 1,
    },
  },
  responsive: true,
  plugins: {
    datalabels: {
      borderRadius: 4,
    },
    annotation: {
      annotations: {
        label0: {
          type: "label",
          xValue: 75,
          yValue: 0,
          content: nodeImage,
          width: 100,
          height: "auto",
          font: {
            size: 18,
          },
        },
        label1: {
          type: "label",
          xValue: 70,
          yValue: 1,
          content: reactImage,
          width: 80,
          height: "auto",
          font: {
            size: 18,
          },
        },
        label2: {
          type: "label",
          xValue: 85,
          yValue: 2,
          content: jsImage,
          width: 100,
          height: 100,
          font: {
            size: 18,
          },
        },
      },
    },
  },
};

const labels = ["Node.js", "React", "Javascript"];

const data = {
  labels,
  datasets: [
    {
      label: "skills",
      data: [65, 59, 80, 81, 56],
      min: 0,
      max: 100,
      borderColor: themeResponsiveFonts.palette.secondary.main,
      backgroundColor: themeResponsiveFonts.palette.primary.light,
      showLine: false,
    },
  ],
};
export default function Chart() {
  console.log(ChartJS, annotationPlugin);
  return (
    <>
      <Bar options={options} data={data} style={{ maxHeight: "300px" }} />
    </>
  );
}
