import { Box, Button } from "@mui/material";
// import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import { tokens } from "../../theme";
import { useNavigate } from "react-router-dom";
import Header from "../../components/Header";
import { useTheme } from "@mui/material";
import { useEffect, useState } from "react";
import LooksOneIcon from "@mui/icons-material/LooksOne";
import axios from "axios";

import {
  DataGrid,
  GridToolbarContainer,
  GridToolbarColumnsButton,
  GridToolbarFilterButton,
  GridToolbarDensitySelector,
} from "@mui/x-data-grid";
import { IconButton } from "@mui/material";
import DownloadIcon from "@mui/icons-material/Download";
import TextField from "@mui/material/TextField";

const ContactUs = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [data, setData] = useState([]);
  const [col, setCol] = useState([]);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        const token = localStorage.getItem("authToken");
        if (!token) {
           navigate("/login");
          return;
        }
        const res = await axios.get(
          "https://arena-backend-zj42.onrender.com/getContactUs",
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );
        setCol([
          { field: "id", headerName: "ID", flex: 0.25, width:80 },
          {
            field: "name",
            headerName: "Name",
            flex: 0.85,
          },
          {
            field: "phone",
            headerName: "Phone Number",
            flex: 0.75,
            cellClassName: "phone-column--cell",
          },
          {
            field: "email",
            headerName: "Email",
            flex: 0.75,
          },
          {
            field: "model",
            headerName: "Model",
            // flex:  0.75,
            width:150
          },
          {
            field: "subject",
            headerName: "Subject",
            flex: 0.5,
            width:140
          },
          {
            field: "message",
            headerName: "Message",
            // flex: 3.75,
            width:350
          },
          {
            field: "outlet",
            headerName: "Outlet",
            flex: 0.5,
            width:120
          },
          {
            field: "date",
            headerName: "Date",
            flex:  0.75,
            width:120
          },
          {
            field: "time",
            headerName: "Time",
            flex:  0.5,
            width:100
          },
        ]);
        setData(res.data.data);
        setStartDate("")
        setEndDate("")
        setLoading(false);
      } catch (err) {
        setError(err);
        navigate("/login");
        setLoading(false);
      }
    }
    fetchData();
  }, [navigate]);

  let newData = data.map((item, index) => {
    return { ...item, id: index + 1 };
  });

  const handleStartDateChange = (event) => {
    setStartDate(event.target.value);
  };
  
  const handleEndDateChange = (event) => {
    setEndDate(event.target.value);
  };
  
  useEffect(() => {
  async function fetchUniqueValues() {
    try {
      setLoading(true);
      const token = localStorage.getItem("authToken");
      if (!token) {
         navigate("/login");
        return;
      }
      const res = await axios.post(
        "https://arena-backend-zj42.onrender.com/contactUsRange",
        {
          startDate: startDate,
          endDate: endDate,
        },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      setCol([
        { field: "id", headerName: "ID", flex: 0.25, width:80 },
        {
          field: "name",
          headerName: "Name",
          flex: 0.85,
        },
        {
          field: "phone",
          headerName: "Phone Number",
          flex: 0.75,
          cellClassName: "phone-column--cell",
        },
        {
          field: "email",
          headerName: "Email",
          flex: 0.75,
        },
        {
          field: "model",
          headerName: "Model",
          // flex:  0.75,
          width:150
        },
        {
          field: "subject",
          headerName: "Subject",
          flex: 0.5,
          width:140
        },
        {
          field: "message",
          headerName: "Message",
          // flex: 3.75,
          width:350
        },
        {
          field: "outlet",
          headerName: "Outlet",
          flex: 0.5,
          width:120
        },
        {
          field: "date",
          headerName: "Date",
          flex:  0.75,
          width:120
        },
        {
          field: "time",
          headerName: "Time",
          flex:  0.5,
          width:100
        },
      ]);
      setData(res.data.data);
      setStartDate("")
        setEndDate("")
      setLoading(false);
    } catch (err) {
      setError(err);
      navigate("/login");
      setLoading(false);
    }
  }


    if (startDate && endDate) {
      fetchUniqueValues();
    }
  }, [startDate, endDate, navigate]);

  const handleReset = async () => {
    try {
      setLoading(true);
      const token = localStorage.getItem("authToken");
      if (!token) {
         navigate("/login");
        return;
      }
      const res = await axios.get(
        "https://arena-backend-zj42.onrender.com/getContactUs",
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      setCol([
        { field: "id", headerName: "ID", flex: 0.25, width:80 },
        {
          field: "name",
          headerName: "Name",
          flex: 0.85,
        },
        {
          field: "phone",
          headerName: "Phone Number",
          flex: 0.75,
          cellClassName: "phone-column--cell",
        },
        {
          field: "email",
          headerName: "Email",
          flex: 0.75,
        },
        {
          field: "model",
          headerName: "Model",
          // flex:  0.75,
          width:150
        },
        {
          field: "subject",
          headerName: "Subject",
          flex: 0.5,
          width:140
        },
        {
          field: "message",
          headerName: "Message",
          // flex: 3.75,
          width:350
        },
        {
          field: "outlet",
          headerName: "Outlet",
          flex: 0.5,
          width:120
        },
        {
          field: "date",
          headerName: "Date",
          flex:  0.75,
          width:120
        },
        {
          field: "time",
          headerName: "Time",
          flex:  0.5,
          width:100
        },
      ]);
      setData(res.data.data);
      setStartDate("")
      setEndDate("")
      setLoading(false);
    } catch (err) {
      setError(err);
      navigate("/login");
      setLoading(false);
    }
  };

  const handleDup = async () => {
    try {
      setLoading(true);
      const token = localStorage.getItem("authToken");
      if (!token) {
         navigate("/login");
        return;
      }
      const res = await axios.get(
        "https://arena-backend-zj42.onrender.com/dupesContactUs",
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      // Process the response data to create rows
      const processedData = res.data.data.map((item, index) => ({
        id: index + 1,
        date: item.date,
        phoneNumber: item.number,
        count: item.count,
      }));

      setCol([
        { field: "id", headerName: "ID", flex: 0.25, width:80 },
        {
          field: "name",
          headerName: "Name",
          flex: 0.85,
        },
        {
          field: "phone",
          headerName: "Phone Number",
          flex: 0.75,
          cellClassName: "phone-column--cell",
        },
        {
          field: "email",
          headerName: "Email",
          flex: 0.75,
        },
        {
          field: "model",
          headerName: "Model",
          // flex:  0.75,
          width:150
        },
        {
          field: "subject",
          headerName: "Subject",
          flex: 0.5,
          width:140
        },
        {
          field: "message",
          headerName: "Message",
          // flex: 3.75,
          width:350
        },
        {
          field: "outlet",
          headerName: "Outlet",
          flex: 0.5,
          width:120
        },
        {
          field: "date",
          headerName: "Date",
          flex:  0.75,
          width:120
        },
        {
          field: "time",
          headerName: "Time",
          flex:  0.5,
          width:100
        },
      ]);

      setData(processedData);
      setStartDate("")
        setEndDate("")
      setLoading(false);
    } catch (err) {
      setError(err);
      navigate("/login");
      setLoading(false);
    }
  };
  const uniqueEntries = async () => {
    try {
      setLoading(true);
      const token = localStorage.getItem("authToken");
      if (!token) {
         navigate("/login");
        return;
      }

      const res = await axios.get(
        `https://arena-backend-zj42.onrender.com/contactUsUniqueEntries`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      setCol([
        { field: "id", headerName: "ID", flex: 0.25, width:80 },
        {
          field: "name",
          headerName: "Name",
          flex: 0.85,
        },
        {
          field: "phone",
          headerName: "Phone Number",
          flex: 0.75,
          cellClassName: "phone-column--cell",
        },
        {
          field: "email",
          headerName: "Email",
          flex: 0.75,
        },
        {
          field: "model",
          headerName: "Model",
          // flex:  0.75,
          width:150
        },
        {
          field: "subject",
          headerName: "Subject",
          flex: 0.5,
          width:140
        },
        {
          field: "message",
          headerName: "Message",
          // flex: 3.75,
          width:350
        },
        {
          field: "outlet",
          headerName: "Outlet",
          flex: 0.5,
          width:120
        },
        {
          field: "date",
          headerName: "Date",
          flex:  0.75,
          width:120
        },
        {
          field: "time",
          headerName: "Time",
          flex:  0.5,
          width:100
        },
      ]);
      setData(res.data.data);
      setStartDate("")
        setEndDate("")
      setLoading(false);
    } catch (error) {
      setError(error);
      navigate("/login");
      setLoading(false);
    }
  };

  const handleDownloadCSV = () => {
    const csvData = [];
    const headers = col.map((column) => `"${column.headerName}"`);
    csvData.push(headers);

    newData.forEach((item) => {
      const row = col.map((column) => item[column.field]);
      csvData.push(row);
    });

    const csvContent = csvData.map((row) => row.join(",")).join("\n");

    const blob = new Blob([csvContent], { type: "text/csv" });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.style.display = "none";
    a.href = url;
    a.download = "contact_us(Arena).csv";
    document.body.appendChild(a);
    a.click();
    window.URL.revokeObjectURL(url);
    document.body.removeChild(a);
  };

  // Custom toolbar with the download button

  const CustomToolbar = () => {
    return (
      <GridToolbarContainer>
        <GridToolbarColumnsButton />
        <GridToolbarFilterButton />
        <GridToolbarDensitySelector />
        <IconButton
          color="primary"
          onClick={handleDownloadCSV}
          sx={{
            marginLeft: "10px",
            backgroundColor: "white",
            fontSize: "14px",
            padding: "5px",
            minWidth: "auto",
            height: "25px",
            color: "#3e4396",
          }}
        >
          <DownloadIcon />
        </IconButton>
      </GridToolbarContainer>
    );
  };
  return (
    <Box m="20px">
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Header
          title="Contact Us"
          subtitle="Data form contact us form"
        />
        <div style={{ display: "flex", alignItems: "center" }}>
        <div style={{ marginRight: "10px" }}>
            <TextField
              id="start-date"
              label="Start Date"
              type="date"
              value={startDate}
              onChange={handleStartDateChange}
              InputLabelProps={{
                shrink: true,
              }}
              sx={{ margin: "10px" }}
            />

            <TextField
              id="end-date"
              label="End Date"
              type="date"
              value={endDate}
              onChange={handleEndDateChange}
              InputLabelProps={{
                shrink: true,
              }}
              sx={{ margin: "10px" }}
            />
          </div>

          <Button
            variant="contained"
            color="primary"
            sx={{
              backgroundColor: "#3e4396",
              mr: 2,
              color: "white",
              "&:hover": {
                backgroundColor: "red",
              },
            }}
            onClick={handleDup}
          >
            Duplicates
          </Button>

          {/* <input
            type='date'
            required
            sx={{ mr: 2, backgroundColor: '#940004' }}
            value={inputValue}
            onChange={(e) => {
              const newInputValue = e.target.value;
              console.log('New input value:', newInputValue);
              setInputValue(newInputValue);
              handleRemoveDuplicates(newInputValue);
            }}
            style={{
              backgroundColor: '#940004',
              color: 'white',
              borderRadius: '6px',
              border: 'none',
              padding: '6px',
              margin: '15px', // Add margin to separate input and button
              flex: 1,
              // Allow the input to grow to fill available space
            }}
          /> */}

          <Button
            variant="contained"
            color="primary"
            sx={{
              mr: 2,
              backgroundColor: "#3e4396",
              color: "white",
              "&:hover": {
                backgroundColor: "red",
              },
            }}
            onClick={uniqueEntries}
          >
            {" "}
            <LooksOneIcon />
          </Button>
          <Button
            variant="contained"
            color="primary"
            sx={{
              backgroundColor: "#3e4396",
              color: "white",
              "&:hover": {
                backgroundColor: "red",
              },
            }}
            onClick={handleReset}
          >
            Reset
          </Button>
       
        </div>
      </div>

      <Box
        // m="40px 0 0 0"
        height="83vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
            backgroundColor: "white",
            // border: "1px solid #ccc", // Add a border to the table
          },
          "& .phone-column--cell": {
            color: colors.sabooAutoColors[500],
          },
          "& .MuiDataGrid-columnHeader": {
            color: "white",
            backgroundColor: colors.blueAccent[700], // Optional background color for headers
          },
          // "& .MuiDataGrid-virtualScroller": {
          //   backgroundColor: colors.sabooAutoColors[400],
          // },
          // "& .MuiDataGrid-footerContainer": {
          //   borderTop: "none",
          //   backgroundColor: colors.blueAccent[700],
          //   "& .MuiTypography-root": {
          //     color: "white", // Change the footer text color to white
          //   },
          // },
          "& .MuiCheckbox-root": {
            color: `${colors.blueAccent[700]} !important`,
          },
          "& .MuiDataGrid-toolbarContainer .MuiButton-text ": {
            color: `${colors.blueAccent[700]} !important`,
          },
          "& .MuiDataGrid-toolbarContainer .MuiButton-text:hover ": {
            color: `${colors.blueAccent[700]}} !important`,
          },
          "& .MuiDataGrid-sortIcon": {
            color: "white",
          },
          "& .MuiDataGrid-cell": {
            whiteSpace: "pre-wrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
            lineHeight: 1.2,
          },
  
          "& .MuiDataGrid-viewport": {
            height: "calc(100% - 48px)",
          },
          
          "& .css-196n7va-MuiSvgIcon-root": {
            color: "white",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.sabooAutoColors[400],
            overflowX: "auto",
            "&::-webkit-scrollbar": {
              height: "7px",
              width: "7px",
            },
            "&::-webkit-scrollbar-thumb": {
              backgroundColor: `${colors.sabooAutoColors[700]} !important`,
              borderRadius: "100px",
              height: "5px",
              
            },
            "&::-webkit-scrollbar-track": {
              backgroundColor: colors.grey[100],
            },
          },
        }}
      >
        {loading ? (
          <div style={{ fontSize: "14px" }}>Processing, please wait...</div>
        ) : error ? (
          "Error ~ Something went wrong :)"
        ) : (
          <DataGrid
          rows={newData}
          columns={col.map((column) => ({
            ...column,
            minWidth: column.width || 200,
            renderCell: (params) => (
              <div
                style={{
                  whiteSpace: "pre-wrap",
                }}
              >
                {params.value}
              </div>
            ),
          }))}
          components={{ Toolbar: CustomToolbar }}
          getRowHeight={(params) => {
            const lineHeight = 2;
            if (params && params.model && params.model.message) {
              // console.log(params.model.message.join(''))
              const lines = params.model.message.split('\n');
              const lineCount = (lines.length )+1
              const rowHeight = lineCount * lineHeight * 18;
              console.log("Row Height:", rowHeight, "Line Count:", lineCount);
              return lineCount === 1 ? 50 : rowHeight;
            }
            return 50; 
          //  console.log(params.model.message.join(''))
          }}
          sx={{
            backgroundColor: "white",
            height: "100%",
            fontSize:14
          }}
        />
        )}
      </Box>
    </Box>
  );
};

export default ContactUs;



