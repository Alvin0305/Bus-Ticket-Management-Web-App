import RevenueTile from "./RevenueTile/RevenueTile";
import "./Revenue.css";
import { FiTag, FiTrendingUp } from "react-icons/fi";
import { FaDollarSign, FaMoneyBillWave } from "react-icons/fa";
import { Users } from "lucide-react";
import {
  Bar,
  BarChart,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

function Revenue() {
  const getNumberOfBusTicketsBooked = () => {
    // API call for finding the number of bus tickets booked till now

    return 100;
  };

  const getRevenue = () => {
    // API call for finding the total bus fare

    return 10000;
  };

  const getNumberOfCustomers = () => {
    // API call for finding the numbe of customers

    return 100;
  };

  const getExpenditure = () => {
    return getRevenue() * 0.99;
  };

  const getProfit = () => {
    return getRevenue() - getExpenditure();
  };

  const getYearWiseRevenueExpenditureAndProfit = () => {
    return [
      { x: 2015, y1: 10, y2: 15 },
      { x: 2016, y1: 20, y2: 25 },
      { x: 2017, y1: 15, y2: 20 },
      { x: 2018, y1: 25, y2: 30 },
      { x: 2019, y1: 30, y2: 35 },
      { x: 2020, y1: 10, y2: 15 },
      { x: 2021, y1: 20, y2: 25 },
      { x: 2022, y1: 15, y2: 20 },
      { x: 2023, y1: 25, y2: 30 },
      { x: 2024, y1: 30, y2: 35 },
      { x: 2025, y1: 30, y2: 35 },
    ];
  };

  const getYearWiseCustomersAndTickets = () => {
    return [
      { x: 2015, y1: 10, y2: 10 },
      { x: 2016, y1: 20, y2: 12 },
      { x: 2017, y1: 15, y2: 16 },
      { x: 2018, y1: 25, y2: 20 },
      { x: 2019, y1: 30, y2: 8 },
      { x: 2020, y1: 10, y2: 4 },
      { x: 2021, y1: 20, y2: 30 },
      { x: 2022, y1: 15, y2: 12 },
      { x: 2023, y1: 25, y2: 23 },
      { x: 2024, y1: 30, y2: 18 },
      { x: 2025, y1: 30, y2: 27 },
    ];
  };

  const getTop10Buses = () => {
    return [
      { x: "Bus 1", y1: 10 },
      { x: "Bus 2", y1: 20 },
      { x: "Bus 3", y1: 15 },
      { x: "Bus 4", y1: 25 },
      { x: "Bus 5", y1: 30 },
      { x: "Bus 6", y1: 10 },
      { x: "Bus 7", y1: 20 },
      { x: "Bus 8", y1: 15 },
      { x: "Bus 9", y1: 25 },
      { x: "Bus 10", y1: 30 },
    ];
  };

  const getTop10Users = () => {
    return [
      { x: "User 1", y1: 10 },
      { x: "User 2", y1: 20 },
      { x: "User 3", y1: 15 },
      { x: "User 4", y1: 25 },
      { x: "User 5", y1: 30 },
      { x: "User 6", y1: 10 },
      { x: "User 7", y1: 20 },
      { x: "User 8", y1: 15 },
      { x: "User 9", y1: 25 },
      { x: "User 10", y1: 30 },
    ];
  };

  return (
    <div className="revenue-session">
      <div className="revenue-top-session">
        <RevenueTile
          name="Tickets Sold"
          value={getNumberOfBusTicketsBooked()}
          icon={<FiTag size={40} color="#814CB2" />}
        />
        <RevenueTile
          name="Revenue"
          value={getRevenue()}
          icon={<FaDollarSign size={40} color="green" />}
        />
        <RevenueTile
          name="Expenditure"
          value={getExpenditure()}
          icon={<FaMoneyBillWave size={40} color="#F25959" />}
        />
        <RevenueTile
          name="Profit"
          value={getProfit()}
          icon={<FiTrendingUp size={40} color="green" />}
        />
        <RevenueTile
          name="Customers"
          value={getNumberOfCustomers()}
          icon={<Users size={40} color="green" />}
        />
      </div>
      <div className="revenue-graphs">
        <div className="revenue-graphs-div">
          <ResponsiveContainer width="100%" height={400}>
            <LineChart data={getYearWiseRevenueExpenditureAndProfit()}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="x" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line
                type="monotone"
                dataKey="y1"
                stroke="#4A90E2"
                strokeWidth={3}
                dot={{ r: 5 }}
                name="Revenue"
              />
              <Line
                type="monotone"
                dataKey="y2"
                stroke="#7ED321"
                strokeWidth={3}
                dot={{ r: 5 }}
                name="Profit"
              />
            </LineChart>
          </ResponsiveContainer>
          <ResponsiveContainer width="100%" height={400}>
            <LineChart data={getYearWiseCustomersAndTickets()}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="x" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line
                type="monotone"
                dataKey="y1"
                stroke="#F5A623"
                strokeWidth={3}
                dot={{ r: 5 }}
                name="Customers"
              />
              <Line
                type="monotone"
                dataKey="y2"
                stroke="#D0021B"
                strokeWidth={3}
                dot={{ r: 5 }}
                name="Tickets"
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
        <div className="revenue-graphs-div">
          <ResponsiveContainer width="100%" height={400}>
            <BarChart data={getTop10Buses()}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="x" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="y1" fill="#B71C1C" barSize={50} name="Bookings" />
            </BarChart>
          </ResponsiveContainer>
          <ResponsiveContainer width="100%" height={400}>
            <BarChart data={getTop10Users()}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="x" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="y1" fill="#1976D2" barSize={50} name="Booked" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}

export default Revenue;
