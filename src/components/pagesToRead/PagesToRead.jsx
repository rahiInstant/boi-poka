import { useContext } from "react";
import { ReadContext } from "../Root/root";
import { BarChart, Bar, XAxis, YAxis } from "recharts";
const PagesToRead = () => {
  const [read, setRead] = useContext(ReadContext);
  // const chartData = read.map((book) => book.totalPages)
  function changeFill() {
    const value = Math.floor(Math.random() * 256);
    let hex = value.toString(16);
    return hex.length === 1 ? `0${hex}` : hex;
  }
  return (
    <div className="max-w-7xl mx-auto mb-24">
      <div className="border px-4 py-8 rounded-xl mx-4 mb-5 text-center font-medium">
        Reload page for changing the color of the Bars.
      </div>
      <div className="bg-[#13131308] rounded-2xl mx-4 px-3 lg:px-10 py-4 lg:py-16 flex items-center justify-center">
        <BarChart width={1100} height={600} data={read}>
          <Bar
            dataKey="totalPages"
            fill={`#${changeFill()}${changeFill()}${changeFill()}`}
          />
          <XAxis className="text-3xl" dataKey="bookName"></XAxis>
          <YAxis className="text-3xl"></YAxis>
        </BarChart>
      </div>
    </div>
  );
};

export default PagesToRead;
