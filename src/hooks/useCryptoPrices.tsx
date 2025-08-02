import { useEffect, useState } from "react";
import axios from "axios";

interface Coin {
  id: string;
  symbol: string;
  name: string;
  image: string;
  current_price: number;
  price_change_percentage_1h_in_currency: number;
  price_change_percentage_24h_in_currency: number;
  price_change_percentage_7d_in_currency: number;
  total_volume: number;
  market_cap: number;
  sparkline_in_7d: {
    price: number[];
  };
}

export const useCryptoPrices = () => {
  const [coins, setCoins] = useState<Coin[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      const { data } = await axios.get(
        "https://api.coingecko.com/api/v3/coins/markets",
        {
          params: {
            vs_currency: "usd",
            order: "market_cap_desc",
            per_page: 50,
            page: 1,
            sparkline: true,
            price_change_percentage: "1h,24h,7d",
          },
        }
      );
      setCoins(data);
    } catch (error) {
      console.error("Error fetching crypto data:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
    const interval = setInterval(fetchData, 10000); // refresh every 10 seconds
    return () => clearInterval(interval);
  }, []);

  return { coins, loading };
};
