///////////////////////////////////////////////////////////////////////////////////////////////////////////
// 👉 Author      : R U Bharti
// 👉 Component   : ListTableConnect
// 👉 Status      : Closed
// 👉 Description : Component to manage backend pagination proccess
// 👉 Functions   :  
//                  1. searchOldFun  -> Search Data with payload  
//                  2. nextPageFun   -> To move on next page
//                  3. prevPageFun   -> To move on previous page
//                  4. perPageFun    -> To set no. of data in per page
//                  5. firstPageFun  -> To jump on first page
//                  6. lastPageFun   -> To jump on last page
//                  7. gotoPageFun   -> To jump of manual or any entered page
//                  8. makeExportFun -> To make export table.
//                  9. exportDataFun -> To collect all data to export
//                 10. downloadFun   -> To download the exported data in CSV
///////////////////////////////////////////////////////////////////////////////////////////////////////////

// 👉 Importing packages 👈
import React, { useEffect, useState } from 'react'
import ListTable2 from './ListTable2v2'
import ApiHeader from '@/Components/api/ApiHeader'
import { CSVDownload } from 'react-csv'
import axios from 'axios'
import ShimmerEffectInline from '@/Components/Common/Loaders/ShimmerEffectInline'
import AxiosInterceptors from '../AxiosInterceptors'
import { saveAs } from 'file-saver';
import * as XLSX from 'xlsx'
// import html2pdf from 'html2pdf.js';

const ListTableConnect = (props) => {

    // 👉 State constants 👈
    const [perPageCount, setperPageCount] = useState(10)
    const [pageCount, setpageCount] = useState(1)
    const [currentPage, setcurrentPage] = useState(0)
    const [lastPage, setlastPage] = useState(0)
    const [totalCount, settotalCount] = useState(0)
    const [exportData, setexportData] = useState()
    const [csvStatus, setcsvStatus] = useState(false)
    const [errorState, seterrorState] = useState(false)
    const [dataList, setdataList] = useState([])
    const [loader, setloader] = useState(false)

    // __________// FUNCTION TO FETCH DATA FROM AN API USING AXIOS, HANDLE LOADING STATE, AND UPDATE DATA OR ERROR STATE ACCORDINGLY____________
    const searchOldFun = () => {

        seterrorState(false)

        setloader(true)

        if (Object.keys(props?.requestBody).length !== 0) {
            typeof (props.loader) == 'function' && props.loader(true)
        }


        AxiosInterceptors.post(
            props?.api, { ...props?.requestBody, perPage: perPageCount, page: pageCount }, ApiHeader())
            .then((res) => {
                if (res?.data?.status == true) {
                    console.log('success getting list => ', res)
                    props?.getData && props?.allData(res?.data?.data)
                    setdataList(res?.data?.data?.data)
                    settotalCount(res?.data?.data?.total)
                    setcurrentPage(res?.data?.data?.current_page)
                    setlastPage(res?.data?.data?.last_page)
                    seterrorState(false)
                } else {
                    console.log('false error while getting list => ', res)
                    seterrorState(true)
                }

            })
            .catch((err) => (console.log('error while getting list => ', err), seterrorState(true)))
            .finally(() => {
                setloader(false)
                if (Object.keys(props?.requestBody).length !== 0) {
                    typeof (props.loader) == 'function' && props.loader(false)
                }
                seterrorState(false)
            })

    }

    //  ________FUNCTION TO INCREMENT THE PAGE COUNT BY 1________ 
    const nextPageFun = () => {
        setpageCount(currentPage + 1)
    }

    //  ________FUNCTION TO DECREMENT THE PAGE COUNT BY 1________
    const prevPageFun = () => {
        setpageCount(currentPage - 1)
    }

    // ________FUNCTION TO SET THE NUMBER OF DATA PER PAGE________
    const perPageFun = (val) => {

        let checkPage = parseInt(totalCount / val)
        let checkPageRemainder = parseInt(totalCount % val)

        // console.log("total count => ", totalCount,
        // "\n Per page => ", val,
        // "\n checkPage => ", checkPage,
        // "\n check page remainder => ", checkPageRemainder)

        if (checkPageRemainder == 0) {
            checkPage < currentPage && setpageCount(checkPage)
            setperPageCount(val)
            return
        }

        if (checkPageRemainder != 0) {
            (checkPage + 1) < currentPage && setpageCount(checkPage + 1)
            setperPageCount(val)
            return
        }

        // setperPageCount(val)
    }

   // _________FUNCTION TO JUMP ON FIRST PAGE_________
    const firstPageFun = () => {
        setpageCount(1)
    }

   // _________FUNCTION TO JUMP ON LAST PAGE_________
    const lastPageFun = () => {
        setpageCount(lastPage)
    }

    // _________FUNCTION TO JUMP ON ANY PAGE_________
    const gotoPageFun = (val) => {
        setpageCount(val)
    }

    // _________FUNCTION TO MAKE EXPORT TABLE_________
    const makeExportFun = (dataList) => {

        let data = dataList?.map((elem, index) => {
            // Map over the columns for each element in dataList
            const rowData = props?.columns?.map((col, columnIndex) => {

                var value = elem[col?.accessor];

                if (col?.option && col?.option?.length > 0) {

                    const matchingOption = col?.option?.find(option => option.hasOwnProperty(elem[col?.accessor]));

                    if (matchingOption) {
                        value = matchingOption[elem[col?.accessor]];
                    } else {
                        value = elem[col?.accessor]
                    }

                }

                return col?.Header.toLowerCase() != "action" && { [col?.Header]: col?.accessor ? value : index + 1 };

            });

            // Combine rowData for each element into a single object
            return Object.assign({}, ...rowData);
        });

        return data;

    };

    // _________FUNCTION TO EXPORT DATA IN EXCEL_________
    const exportToExcel = (data) => {
        const worksheet = XLSX.utils.json_to_sheet(data);
        const workbook = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(workbook, worksheet, 'Sheet 1');
        const excelBuffer = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
        const blob = new Blob([excelBuffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8' });
        saveAs(blob, 'ExcelDataList.xlsx');
    }

//     // Export To PDF
//     const exportToPDF = () => {
//         const data = [
//             { id: 1, name: 'John Doe', age: 30, city: 'New York' },
//             { id: 2, name: 'Jane Doe', age: 25, city: 'San Francisco' },
//             // Add more data as needed
//         ];

//         // Create an HTML string for the table
//         const tableHtml = `
//   <table>
//     <thead>
//       <tr>
//         ${Object.keys(data[0]).map((header) => `<th>${header}</th>`).join('')}
//       </tr>
//     </thead>
//     <tbody>
//       ${data.map((row) => `<tr>${Object.values(row).map((value) => `<td>${value}</td>`).join('')}</tr>`).join('')}
//     </tbody>
//   </table>
// `;

//         // Options for html2pdf
//         const options = {
//             margin: 10,
//             filename: 'exportedData.pdf',
//             image: { type: 'jpeg', quality: 0.98 },
//             html2canvas: { scale: 2 },
//             jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' },
//         };

//         // Generate PDF from HTML
//         html2pdf().from(tableHtml).set(options).outputPdf((pdf) => {
//             saveAs(pdf, 'exportedData.pdf');
//         });
//     };


    // _________FUNCTION TO EXPORT DATA IN PDF_________
    const exportDataFun = (type) => {

        setloader(true)
        setcsvStatus(false)

        axios.post(
            props?.api, { ...props?.requestBody, perPage: totalCount }, ApiHeader())
            .then((res) => {
                if (res?.data?.status == true) {
                    if (type == 'csv') {
                        setexportData(makeExportFun(res?.data?.data?.data))
                        downloadFun()
                    }
                    if (type == 'excel') {
                        exportToExcel(makeExportFun(res?.data?.data?.data))
                    }
                    if (type == 'pdf') {
                        exportToPDF(makeExportFun(res?.data?.data?.data))
                    }
                } else {
                }

                setloader(false)
            })
            .catch((err) => {
                setloader(false)
            })

    }

    // _________FUNCTION TO DOWNLOAD THE EXPORTED DATA IN CSV_________
    const downloadFun = () => {
        setcsvStatus(true)
    }

    // _________USE EFFECT TO CALL FUNCTION 1 WHEN PAGE NO. OR DATA PER PAGE CHANGE_________
    useEffect(() => {

        if (props?.requestBody != null) {
            setpageCount(1)
            setperPageCount(10)
            searchOldFun()
        }
    }, [props?.changeData])

   // _________USE EFFECT TO CALL FUNCTION 1 WHEN PAGE NO. OR DATA PER PAGE CHANGE_________
    useEffect(() => {
        setloader(true)
        searchOldFun()
    }, [pageCount, perPageCount])

    return (
        <>

            {/* 👉 When error occured 👈 */}
            {errorState &&
                <div className="bg-red-100 border border-red-400 text-red-700 pl-4 pr-16 py-3 rounded relative text-center" role="alert">
                    <strong className="font-bold">Sorry! </strong>
                    <span className="block sm:inline">Some error occured while fetching list. Please try again later.</span>
                    <span className="absolute top-0 bottom-0 right-0 px-4 py-3">
                    </span>
                </div>
            }

            {/* 👉 Download CSV 👈 */}
            {
                csvStatus && <CSVDownload data={exportData} />
            }

            {/* 👉 Loader 👈 */}
            {
                loader && <ShimmerEffectInline />
            }

            {/* 👉 Listtable Components 👈 */}
            {
                (!loader && dataList?.length > 0) ?

                    <>
                        {/* 👉 Listtable 👈 */}
                        <ListTable2 search={props?.search} currentPage={currentPage} lastPage={lastPage} goFirst={firstPageFun} goLast={lastPageFun} count1={totalCount} columns={props?.columns} dataList={dataList} exportStatus={props?.exportStatus} perPage={perPageCount} perPageC={perPageFun} totalCount={totalCount} nextPage={nextPageFun} prevPage={prevPageFun} exportDataF={exportDataFun} exportData={exportData} gotoPage={(val) => gotoPageFun(val)} />
                    </>

                    :

                    // 👉 When no data available 👈
                    <>{(!loader) &&
                        <div className="bg-red-100 border border-red-400 text-red-700 pl-4 pr-16 py-3 rounded relative text-center" role="alert">
                            <span className="block sm:inline">Oops! No data available.</span>
                            <span className="absolute top-0 bottom-0 right-0 px-4 py-3">
                            </span>
                        </div>}</>

            }

        </>
    )
}

export default ListTableConnect