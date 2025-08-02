import React from "react";
import Heading from "../../Components/Heading";
import SparklineChart from "../../Components/SparklineChart";
import ChangeCell from "../../Components/ChangeCell";
import Button from "../../Components/Button";
import { useCryptoPrices } from "../../hooks/useCryptoPrices";
import { OverviewDatas } from "../../Datas/OverviewDatas";

interface OverviewProps {
  id: string;
  className?: string;
  children?: React.ReactNode;
}

const Overview: React.FC<OverviewProps> = ({ id, className, children }) => {
  const { coins, loading } = useCryptoPrices();
  if (loading) return <div>Loading...</div>;
  return (
    <div
      id={id}
      className={`bg-primary ${className} flex flex-col items-center justify-center mb-14 lg:mb-16`}
    >
      <div className="items-center justify-center font-semibold text-center">
        <Heading level={5} className="inline mr-2 lg:block">
          Discover the Future of Finance with Our
        </Heading>
        <Heading level={5} className="inline text-tertiary lg:block">
          Curated Coins
        </Heading>
      </div>
      <div className="items-center justify-center w-full mb-5 overflow-x-auto lg:flex lg:mb-16 scrollbar-thin scrollbar-track-primary scrollbar-thumb-secondary">
        <table className="text-base table-auto text-secondary font-primary text-semibold">
          <thead className="text-right">
            <th className="text-center">
              <span>
                <img
                  src="icon-park-solid-up-one-white.svg"
                  className="w-10"
                  alt=""
                />
              </span>
              <span>#</span>
            </th>
            {OverviewDatas.map((item, index) => (
              <th
                key={index}
                className={`p-6 ${index === 0 ? "text-left" : ""}`}
              >
                {item.label}
              </th>
            ))}
          </thead>
          <tbody>
            {coins.map((coin, index) => (
              <tr key={index}>
                <td className="p-6">{index + 1}</td>
                <td className="p-4 text-left">
                  <img
                    src={coin.image}
                    alt=""
                    className="w-[16px] inline mr-1"
                  />
                  <span className="font-semibold">{coin.name}</span>
                  <span className="ml-1 text-sm font-normal">
                    ({coin.symbol.toUpperCase()})
                  </span>
                </td>

                <td className="p-3 text-right">
                  {coin.current_price.toLocaleString("en-US", {
                    style: "currency",
                    currency: "USD",
                  })}
                </td>
                <ChangeCell
                  value={coin.price_change_percentage_1h_in_currency}
                ></ChangeCell>
                <ChangeCell
                  value={coin.price_change_percentage_24h_in_currency}
                ></ChangeCell>
                <ChangeCell
                  value={coin.price_change_percentage_7d_in_currency}
                ></ChangeCell>
                <td className={`p-6 text-right`}>
                  {coin.total_volume.toLocaleString("en-US", {
                    style: "currency",
                    currency: "USD",
                    minimumFractionDigits: 0,
                  })}
                </td>
                <td className="px-3 py-4 text-right">
                  {coin.market_cap.toLocaleString("en-US", {
                    style: "currency",
                    currency: "USD",
                    minimumFractionDigits: 0,
                  })}
                </td>
                <td>
                  <SparklineChart
                    color={`${
                      coin.price_change_percentage_7d_in_currency >= 0
                        ? "#b4e50d"
                        : "#fb4141"
                    }`}
                    data={coin.sparkline_in_7d.price}
                  ></SparklineChart>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Button type="primary" id={""}>
        SHOW MORE
      </Button>
      {children}
    </div>
  );
};

export default Overview;
