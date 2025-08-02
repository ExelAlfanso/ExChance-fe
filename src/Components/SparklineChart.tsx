import { Sparklines, SparklinesLine } from "react-sparklines";

interface SparklineChartProps {
  data: number[];
  color: string;
}

const SparklineChart = ({ data, color }: SparklineChartProps) => {
  return (
    <Sparklines data={data} width={100} height={30} margin={1}>
      <SparklinesLine color={color} style={{ strokeWidth: 2, fill: "none" }} />
    </Sparklines>
  );
};
export default SparklineChart;
