export interface CoinData {
  id: number;
  name: string;
  symbol: string;
  image: string;
  price: number;
  change1h: number;
  change24h: number;
  change7d: number;
  volume24h: number;
  marketCap: number;
  sparkline: number[]; // Sparkline data for mini chart
}

export const dummyCoinDatas: CoinData[] = [
  {
    id: 1,
    name: "Bitcoin",
    symbol: "BTC",
    image: "https://assets.coingecko.com/coins/images/1/large/bitcoin.png",
    price: 67250,
    change1h: -0.3,
    change24h: 1.2,
    change7d: 5.5,
    volume24h: 28000000000,
    marketCap: 1300000000000,
    sparkline: [65000, 66000, 67000, 66500, 67250],
  },
  {
    id: 2,
    name: "Ethereum",
    symbol: "ETH",
    image: "https://assets.coingecko.com/coins/images/279/large/ethereum.png",
    price: 3520,
    change1h: 0.1,
    change24h: 2.5,
    change7d: 4.2,
    volume24h: 15000000000,
    marketCap: 420000000000,
    sparkline: [3300, 3400, 3450, 3500, 3520],
  },
  {
    id: 3,
    name: "Solana",
    symbol: "SOL",
    image: "https://assets.coingecko.com/coins/images/4128/large/Solana.png",
    price: 145.7,
    change1h: 0.6,
    change24h: 4.1,
    change7d: -2.2,
    volume24h: 1900000000,
    marketCap: 68000000000,
    sparkline: [138, 140, 142, 144, 145.7],
  },
];
