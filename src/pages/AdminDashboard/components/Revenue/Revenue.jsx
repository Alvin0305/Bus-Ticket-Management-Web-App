import RevenueTile from "./RevenueTile/RevenueTile";
import "./Revenue.css";
import { FiTag, FiTrendingUp } from "react-icons/fi";
import { FaDollarSign, FaMoneyBillWave } from "react-icons/fa";
import { Users } from "lucide-react";
import React, { useState, useEffect } from "react";
import axios from "axios";
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
  const [ticketsSold, setTicketsSold] = useState(0);
  const [revenue, setRevenue] = useState(0);
  const [customers, setCustomers] = useState(0);
  const [expenditure, setExpenditure] = useState(0);
  const [profit, setProfit] = useState(0);
  const [yearWiseData, setYearWiseData] = useState([]);
  const [customersTicketsData, setCustomersTicketsData] = useState([]);
  const [topBuses, setTopBuses] = useState([]);
  const [topUsers, setTopUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const BACKEND_URL = "http://localhost:5000";

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);

        const [
          ticketsResponse,
          revenueResponse,
          customersResponse,
          yearWiseResponse,
          customersTicketsResponse,
          topBusesResponse,
          topUsersResponse,
        ] = await Promise.all([
          axios.get(`${BACKEND_URL}/api/tickets/count`),
          axios.get(`${BACKEND_URL}/api/transactions/revenue`),
          axios.get(`${BACKEND_URL}/api/users/count`),
          axios.get(`${BACKEND_URL}/api/transactions/yearly`),
          axios.get(`${BACKEND_URL}/api/users/yearly`),
          axios.get(`${BACKEND_URL}/api/buses/top`),
          axios.get(`${BACKEND_URL}/api/users/top`),
        ]);

        // Set basic metrics
        setTicketsSold(ticketsResponse.data.count || 0);
        setRevenue(revenueResponse.data.revenue || 0);
        setCustomers(customersResponse.data.count || 0);
        
        // Calculate derived metrics
        const exp = (revenueResponse.data.revenue || 0) * 0.99;
        setExpenditure(exp);
        setProfit((revenueResponse.data.revenue || 0) - exp);

        // Transform chart data
        setYearWiseData(
          (yearWiseResponse.data || []).map(item => ({
            x: item.year?.toString() || '',
            y1: item.revenue || 0,
            y2: item.profit || 0
          }))
        );

        setCustomersTicketsData(
          (customersTicketsResponse.data || []).map(item => ({
            x: item.year?.toString() || '',
            y1: item.customers || 0,
            y2: item.tickets || 0
          }))
        );

        setTopBuses(
          (topBusesResponse.data || []).map(item => ({
            x: item.bus_number || '',
            y1: item.tickets || 0
          }))
        );

        setTopUsers(
          (topUsersResponse.data || []).map(item => ({
            x: item.name || '',
            y1: item.tickets || 0
          }))
        );

      } catch (error) {
        console.error('API Error:', {
          message: error.message,
          response: error.response?.data,
          config: error.config
        });
        setError('Failed to load data. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div className="revenue-session">Loading data...</div>;
  }

  if (error) {
    return <div className="revenue-session error">{error}</div>;
  }

  return (
    <div className="revenue-session">
      <div className="revenue-top-session">
        <RevenueTile
          name="Tickets Sold"
          value={ticketsSold}
          icon={<FiTag size={40} color="#814CB2" />}
        />
        <RevenueTile
          name="Revenue"
          value={revenue}
          icon={<FaDollarSign size={40} color="green" />}
        />
        <RevenueTile
          name="Expenditure"
          value={expenditure}
          icon={<FaMoneyBillWave size={40} color="#F25959" />}
        />
        <RevenueTile
          name="Profit"
          value={profit}
          icon={<FiTrendingUp size={40} color="green" />}
        />
        <RevenueTile
          name="Customers"
          value={customers}
          icon={<Users size={40} color="green" />}
        />
      </div>
      <div className="revenue-graphs">
        <div className="revenue-graphs-div">
          <ResponsiveContainer width="100%" height={400}>
            <LineChart data={yearWiseData}>
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
            <LineChart data={customersTicketsData}>
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
            <BarChart data={topBuses}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="x" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="y1" fill="#B71C1C" barSize={50} name="Bookings" />
            </BarChart>
          </ResponsiveContainer>
          <ResponsiveContainer width="100%" height={400}>
            <BarChart data={topUsers}>
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