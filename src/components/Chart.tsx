import {
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  ChartOptions,
  LinearScale,
  Title,
  Tooltip,
} from "chart.js";
import annotationPlugin from "chartjs-plugin-annotation";
import ChartDataLabels from "chartjs-plugin-datalabels";
import { Bar } from "react-chartjs-2";
import themeResponsiveFonts from "../ThemeOptions";
import js from "../assets/js.svg";
import node from "../assets/node.svg";
import python from "../assets/py-logo.png";
import react from "../assets/react.svg";
import typescript from "../assets/typescript.png";
import Html from "../assets/html-css.png";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  ChartDataLabels,
  annotationPlugin
);
ChartJS.defaults.set("plugins.datalabels", {
  color: themeResponsiveFonts.palette.grey[900],
});

const jsImage = new Image();
jsImage.src = js;

const nodeImage = new Image();
nodeImage.src = node;

const reactImage = new Image();
reactImage.src = react;

const pyImage = new Image();
pyImage.src = python;

const tsImage = new Image();
tsImage.src = typescript;
const htmlImage = new Image();
htmlImage.src = Html;

// TODO: Add more skills- DBs like postgres, etc

const options = {
  indexAxis: "y" as const,
  elements: {
    bar: {
      borderWidth: 1,
      fontSize: 14,
    },
  },
  responsive: true,
  plugins: {
    datalabels: {
      borderRadius: 4,
      font: {
        size: 14,
      },
    },
    annotation: {
      annotations: {
        labelJavascript: {
          type: "label",
          xValue: 8.2,
          yValue: 0,
          content: jsImage,
          width: 80,
          height: 40,
        },
        labelReact: {
          type: "label",
          xValue: 6.5,
          yValue: 1,
          content: reactImage,
          width: 90,
          height: "auto",
        },
        labelHtml: {
          type: "label",
          xValue: 8.2,
          yValue: 2,
          content: htmlImage,
          width: 50,
          height: 50,
        },
        labelTypescript: {
          type: "label",
          xValue: 4.5,
          yValue: 3,
          content: tsImage,
          width: 50,
          height: 50,
        },
        labelNode: {
          type: "label",
          content: nodeImage,
          xValue: 4.5,
          yValue: 4,
          width: 50,
          height: 40,
        },
        labelPython: {
          type: "label",
          xValue: 1.5,
          yValue: 5,
          content: pyImage,
          width: 40,
          height: 40,
        },
      },
    },
  },
} as unknown as ChartOptions<"bar">;

const labels = [
  "Javascript",
  "React",
  "HTML/CSS",
  "TypeScript",
  "Node.js",
  "Python",
];

const data = {
  labels,
  datasets: [
    {
      label: "Years of Experience",
      data: [8, 6, 8, 4, 4, 1],
      min: 0,
      max: 10,
      borderColor: themeResponsiveFonts.palette.secondary.main,
      backgroundColor: themeResponsiveFonts.palette.primary.light,
      showLine: false,
    },
  ],
};
export default function Chart() {
  return <Bar options={options} data={data} style={{ maxHeight: "300px" }} />;
}
