import { Box, Button } from '@mui/material';

import { tokens } from '../../theme';
import LooksOneIcon from '@mui/icons-material/LooksOne';
import Header from '../../components/Header';
import { useTheme } from '@mui/material';
import { useEffect, useState } from 'react';
import axios from 'axios';
//import date range picker files
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers-pro/AdapterDayjs';
import { DateRangePicker } from '@mui/x-date-pickers-pro/DateRangePicker';
import {
  DataGrid,
  GridToolbarContainer,
  GridToolbarColumnsButton,
  GridToolbarFilterButton,
  GridToolbarDensitySelector,
} from "@mui/x-data-grid";
import { IconButton } from "@mui/material";
import DownloadIcon from "@mui/icons-material/Download";
const Finance = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [data, setData] = useState([]);
  const [col, setCol] = useState([]);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        const res = await axios.get(
          'https://arena-backend-zj42.onrender.com/getfinance'
        );
        setCol([
          { field: 'id', headerName: 'ID', flex: 0.5 },
          {
            field: 'name',
            headerName: 'Name',
            flex: 1,
            
          },
          {
            field: 'phone',
            headerName: 'Phone Number',
            flex: 1,
            cellClassName: 'phone-column--cell',
          },
          {
            field: 'email',
            headerName: 'Email',
            flex: 1,
          },
         
          {
            field: 'loan_amount',
            headerName: 'Loan Amount',
            flex: 1,
          },
          {
            field: 'loan_duration',
            headerName: 'Loan Duration',
            flex: 1,
          },
          {
            field: 'comments',
            headerName: 'Message',
            flex: 1,
          },
          {
            field: 'outlet',
            headerName: 'Outlet',
            flex: 1,
          },
          {
            field: 'purchase_time',
            headerName: 'Purchase Time',
            flex: 1,
          },
          {
            field: 'model',
            headerName: 'Vehicle',
            flex: 1,
          },
          {
            field: 'date',
            headerName: 'Date',
            flex: 1,
          },

          {
            field: 'time',
            headerName: 'Time',
            flex: 1,
          },
        ]);
        setData(res.data.data);
        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  let newData = data.map((item, index) => {
    return { ...item, id: index + 1 };
  });

  async function fetchUniqueValues(startDate, endDate) {
    try {
      setLoading(true);
      const formattedStartDate = new Date(startDate);
      formattedStartDate.setDate(formattedStartDate.getDate() + 1);
      const formattedStartDateString = formattedStartDate
        .toISOString()
        .slice(0, 10);

      const formattedEndDate = new Date(endDate);
      formattedEndDate.setDate(formattedEndDate.getDate() + 1);
      const formattedEndDateString = formattedEndDate
        .toISOString()
        .slice(0, 10);

      const res = await axios.post(
        'https://arena-backend-zj42.onrender.com/financeRange',
        {
          startDate: formattedStartDateString,
          endDate: formattedEndDateString,
        }
      );
      setCol([
        { field: 'id', headerName: 'ID', flex: 0.5 },
        {
          field: 'name',
          headerName: 'Name',
          flex: 1,
          cellClassName: 'name-column--cell',
        },
        {
          field: 'phone',
          headerName: 'Phone Number',
          flex: 1,
          cellClassName: 'phone-column--cell',
        },
        {
          field: 'email',
          headerName: 'Email',
          flex: 1,
        },
       
        {
          field: 'loan_amount',
          headerName: 'Loan Amount',
          flex: 1,
        },
        {
          field: 'loan_duration',
          headerName: 'Loan Duration',
          flex: 1,
        },
        {
          field: 'comments',
          headerName: 'Message',
          flex: 1,
        },
        {
          field: 'outlet',
          headerName: 'Outlet',
          flex: 1,
        },
        {
          field: 'purchase_time',
          headerName: 'Purchase Time',
          flex: 1,
        },
        {
          field: 'model',
          headerName: 'Vehicle',
          flex: 1,
        },
        {
          field: 'date',
          headerName: 'Date',
          flex: 1,
        },

        {
          field: 'time',
          headerName: 'Time',
          flex: 1,
        },
      ]);
      setData(res.data.data);
      setLoading(false);
    } catch (err) {
      setError(err);
      setLoading(false);
    }
  }

  useEffect(() => {
    if (startDate && endDate) {
      fetchUniqueValues(startDate, endDate);
    }
  }, [startDate, endDate]);

  const handleReset = async () => {
    try {
      setLoading(true);
      const res = await axios.get(
        'https://arena-backend-zj42.onrender.com/getfinance'
      );
      setCol([
        { field: 'id', headerName: 'ID', flex: 0.5 },
        {
          field: 'name',
          headerName: 'Name',
          flex: 1,
          cellClassName: 'name-column--cell',
        },
        {
          field: 'phone',
          headerName: 'Phone Number',
          flex: 1,
          cellClassName: 'phone-column--cell',
        },
        
        {
          field: 'email',
          headerName: 'Email',
          flex: 1,
        },
       
        {
          field: 'loan_amount',
          headerName: 'Loan Amount',
          flex: 1,
        },
        {
          field: 'loan_duration',
          headerName: 'Loan Duration',
          flex: 1,
        },
        {
          field: 'comments',
          headerName: 'Message',
          flex: 1,
        },
        {
          field: 'outlet',
          headerName: 'Outlet',
          flex: 1,
        },
        {
          field: 'purchase_time',
          headerName: 'Purchase Time',
          flex: 1,
        },
        {
          field: 'model',
          headerName: 'Vehicle',
          flex: 1,
        },
        {
          field: 'date',
          headerName: 'Date',
          flex: 1,
        },

        {
          field: 'time',
          headerName: 'Time',
          flex: 1,
        },
      ]);
      setData(res.data.data);

      setLoading(false);
    } catch (err) {
      setError(err);
      setLoading(false);
    }
  };

  const handleDup = async () => {
    try {
      setLoading(true);
      const res = await axios.get(
        'https://arena-backend-zj42.onrender.com/duplicateFinance'
      );

      // Process the response data to create rows with phoneNumber, model, and count
      const processedData = [];
      let idCounter = 1;

      res.data.data.forEach((item) => {
        processedData.push({
          id: idCounter++,
          phoneNumber: item.number,
          model: item.model || 'N/A',
          count: item.count,
          date: item.date, // Adding the date field
        });
      });

      setCol([
        { field: 'id', headerName: 'ID', flex: 0.5 },
        { field: 'phoneNumber', headerName: 'Phone Number', flex: 1 , cellClassName: 'phone-column--cell',},
        // { field: 'model', headerName: 'Model', flex: 1 },
        { field: 'count', headerName: 'Count', flex: 1 },
        { field: 'date', headerName: 'Date', flex: 1 }, // Adding the date column
      ]);

      setData(processedData);
      setLoading(false);
    } catch (err) {
      setError(err);
      setLoading(false);
    }
  };
  const uniqueEntries = async () => {
    try {
      setLoading(true);
      const res = await axios.get(
        `https://arena-backend-zj42.onrender.com/financeUniqueEntries`
      );
      setCol([
        { field: 'id', headerName: 'ID', flex: 0.5 },
        {
          field: 'name',
          headerName: 'Name',
          flex: 1,
          cellClassName: 'name-column--cell',
        },
        {
          field: 'phone',
          headerName: 'Phone Number',
          flex: 1,
          cellClassName: 'phone-column--cell',
        },
        {
          field: 'email',
          headerName: 'Email',
          flex: 1,
        },
       
        {
          field: 'loan_amount',
          headerName: 'Loan Amount',
          flex: 1,
        },
        {
          field: 'loan_duration',
          headerName: 'Loan Duration',
          flex: 1,
        },
        {
          field: 'comments',
          headerName: 'Message',
          flex: 1,
        },
        {
          field: 'outlet',
          headerName: 'Outlet',
          flex: 1,
        },
        {
          field: 'purchase_time',
          headerName: 'Purchase Time',
          flex: 1,
        },
        {
          field: 'model',
          headerName: 'Vehicle',
          flex: 1,
        },
        {
          field: 'date',
          headerName: 'Date',
          flex: 1,
        },

        {
          field: 'time',
          headerName: 'Time',
          flex: 1,
        },
      ]);
      setData(res.data.data);
      setLoading(false);
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  };
  const handleDownloadCSV = () => {
    const csvData = [];
    const headers = col.map((column) => column.headerName);
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
    a.download = "Finance(Arena).csv";
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
            color:"#3e4396"
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
  title='Finance'
  subtitle='List of Finance Price for Future Reference'
/>
        <div style={{ display: "flex", alignItems: "center" }}>
          <div style={{ marginRight: "10px" }}>
            {" "}
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DemoContainer
                components={["DateRangePicker"]}
                sx={{ padding: "6px", backgroundColor: "transparent" }}
              >
                <DateRangePicker
                  localeText={{
                    start: (
                      <span style={{ fontSize: "16px", padding: "2px" }}>
                        Start Date
                      </span>
                    ),
                    end: (
                      <span style={{ fontSize: "16px", padding: "2px" }}>
                        End Date
                      </span>
                    ),
                  }}
                  start={startDate}
                  end={endDate}
                  onChange={(newValue) => {
                    setStartDate(newValue[0]);
                    setEndDate(newValue[1]);
                  }}
                />
              </DemoContainer>
            </LocalizationProvider>
          </div>

          <Button
            variant="contained"
            color="primary"
            sx={{ backgroundColor: "#3e4396", mr: 2,color: "white" ,  '&:hover': {
              backgroundColor: "red",
            },}}
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
            sx={{ mr: 2, backgroundColor: "#3e4396" , color: "white" ,  '&:hover': {
              backgroundColor: "red",
            },}}
            onClick={uniqueEntries}
          >
            {" "}
            <LooksOneIcon />
          </Button>
          <Button
            variant="contained"
            color="primary"
            sx={{ backgroundColor: "#3e4396",color: "white", '&:hover': {
              backgroundColor: "red",
            }, }}
            onClick={handleReset}
          >
            Reset
          </Button>
          {/* <Button
            variant='contained'
            color='primary'
            sx={{ ml: 2, backgroundColor: '#940004' }}
            onClick={handleRemoveDuplicates}
          >
            Unique
          </Button>
          <input
            type='date'
            required
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            style={{
              marginLeft: '16px',
              backgroundColor: '#940004',
              color: 'white',
              borderRadius: '8px',
              border: 'none',
              padding: '8px',
            }}
          /> */}
        </div>
      </div>
      
      <Box
  m="40px 0 0 0"
  height="75vh"
  sx={{
    "& .MuiDataGrid-root": {
      border: "none",
      backgroundColor: "white",
     // border: "1px solid #ccc", // Add a border to the table
    },
    "& .MuiDataGrid-cell": {
     // borderBottom: "none",
      backgroundColor: "white",
      borderBottom: "1px solid #ccc", // Add a border to table cells
    },
    "& .phone-column--cell": {
      color: colors.sabooAutoColors[500],
      backgroundColor: "white",
    },
    "& .MuiDataGrid-columnHeader": {
      color: "white",
      backgroundColor: colors.blueAccent[700], // Optional background color for headers
    },
    "& .MuiDataGrid-virtualScroller": {
      backgroundColor: colors.sabooAutoColors[400],
    },
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
    "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
      color: `${colors.blueAccent[700]} !important`,
    },
    '& .MuiDataGrid-sortIcon': {
      color:'white',
    },
    '& .css-196n7va-MuiSvgIcon-root': {
      color:'white',
    },
  }}
>
  {loading ? (
    <div style={{ fontSize: '14px' }}>Processing, please wait...</div>
  ) : error ? (
    "Error ~ Something went wrong :)"
  ) : (
    <DataGrid
      rows={newData}
      columns={col}
      components={{ Toolbar: CustomToolbar }}
      sx={{
        backgroundColor: "white", // Set the background color to white
      }}
    />
  )}
</Box>

    </Box>
  );
};

export default Finance;
