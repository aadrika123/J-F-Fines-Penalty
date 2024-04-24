///////////////////////////////////////////////////////////////////////////////////////////////////////////
// 👉 Author      : R U Bharti
// 👉 Component   : PaymentCard
// 👉 Status      : Close
// 👉 Description : Payment card exported to MarriagePayment.jsx.
// 👉 Functions   :  
//                  1. activateBottomErrorCard -> To activate error card
//                  2. handleChange            -> To handle input value.      
//                  3. closeModal              -> To close modal.    
//                  4. checkRuleSet            -> To check validation.    
//                  5. getOrderId              -> To generate order Id.    
//                  6. makePayment             -> For offline payment.     
//                  7. goPayment               -> For check payment method to make payment.  
///////////////////////////////////////////////////////////////////////////////////////////////////////////

// 👉 Importing Packages 👈
import { useFormik } from 'formik';
import { useEffect, useState } from 'react';
import Modal from 'react-modal'
import { useNavigate, useParams } from 'react-router-dom';
import * as yup from 'yup'
import { allowCharacterNumberInput, allowCharacterSpaceCommaInput, allowNumberCharacterInput, allowNumberInput, indianAmount } from '@/Components/Common/PowerupFunctions';
import BottomErrorCard from '@/Components/Common/BottomErrorCard';
import CommonModal from '@/Components/Common/CommonModal';
import { FiAlertCircle } from 'react-icons/fi'
import BarLoader from '@/Components/Common/Loaders/BarLoader';
import ProjectApiList from '@/Components/api/ProjectApiList';
import AxiosInterceptors from '@/Components/Common/AxiosInterceptors';
import ApiHeader3 from '@/Components/api/ApiHeader';
import { RxCross1 } from 'react-icons/rx'
import QRCode from 'react-qr-code';
import ApiHeader from '@/Components/api/ApiHeader';
import RazorpayPaymentScreen from '@/Components/Common/RazorpayPaymentScreen';
import RazorpayPaymentScreenUpdated from '@/Components/Common/RazorpayPaymentScreenUpdated';

// 👉 CSS constant for Modal 👈
const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        backgroundColor: 'white',
        border: 'none'
    },
};

function PaymentCardDirect(props) {

    // 👉 URL constant 👈
    const { id } = useParams()

    // 👉 API constant 👈
    const { api_challanOfflinePayment, api_generateOrderId, api_getTransactionNo, api_sendOnlineResponse } = ProjectApiList()

    // 👉 Navigation constant 👈
    const navigate = useNavigate()

    // 👉 State constants 👈
    const [responseScreenStatus, setResponseScreenStatus] = useState(false)
    const [isLoading, setisLoading] = useState(false);
    const [erroState, seterroState] = useState(false);
    const [modalIsOpen, setIsOpen] = useState(false);
    const [tranNo, settranNo] = useState(null)
    const [erroMessage, seterroMessage] = useState(null);
    const [openQr, setOpenQr] = useState(false)
    const [paymentMode, setPaymentMode] = useState()

    // 👉 Link to direct payment using QR code 👈
    // In the upiLink variable, replace your-vpa@provider with your Virtual Payment Address (VPA) and MerchantName with the name of the merchant. Modify other parameters like mc (Merchant Category Code), tid (Transaction ID), tr (Order ID), tn (Payment Description), am (Amount), and cu (Currency) as needed.
    // const upiLink = `upi://pay?pa=your-vpa@provider&pn=MerchantName&mc=1234&tid=1234567890&tr=order-id&tn=Payment%20Description&am=${props?.demand?.total_payable_amount}&cu=INR`;

    // 👉 Formik validation schema 👈
    let schema = yup.object({
        paymentMode: yup.string().required('select payment mode'),
        remarks: yup.string(),

        bankName: yup.string(),
        branchName: yup.string(),
        cheque_dd_no: yup.string(),
        cheque_dd_date: yup.string(),

    })

    // 👉 Formik constant 👈
    const formik = useFormik({
        initialValues: {
            paymentMode: 'CASH',

            remarks: '',
            bankName: '',
            branchName: '',
            cheque_dd_no: '',
            cheque_dd_date: '',
            payAdvance: '',
            advanceAmount: '',

        },

        validationSchema: schema,

        onSubmit: (values) => {
            console.log('values at submit payment', values)
            let ruleOk = checkRuleSet(values)
            if (!ruleOk) {
                return
            }
            getOrderId()

        }
    })


    const { values } = formik;

    // 👉 Function 1 👈
    const activateBottomErrorCard = (state, msg) => {
        seterroMessage(msg)
        seterroState(state)
    }

    // 👉 Function 3 👈
    const closeModal = () => setIsOpen(false);

    // 👉 Function 4 👈
    const checkRuleSet = (values) => {
        console.log('vlaues at ruleset..', values)
        if (values.paymentMode == 'CHEQUE' || values.paymentMode == 'DD') {
            if (values.bankName == '' || values.bankName == null) {
                activateBottomErrorCard(true, 'Please enter bank name')
                return false
            }
            if (values.branchName == '' || values.branchName == null) {
                activateBottomErrorCard(true, 'Please enter branch name')
                return false
            }
            if (values.cheque_dd_no == '' || values.cheque_dd_no == null) {
                activateBottomErrorCard(true, 'Please enter cheque/dd no.')
                return false
            }
            if (values.cheque_dd_date == '' || values.cheque_dd_date == null) {
                activateBottomErrorCard(true, 'Please enter cheque/dd date')
                return false
            }

        }
        return true
    }


    // ════════════════════║ THIS FUNCTION GENERATES THE ORDER ID AND CALLS THE ONLINE PAYMENT   ║═════════════════════════
    const getOrderId = async (values) => {
        setisLoading(true)

        let requestBody = {
            amount: props?.demand?.amount,
            challanId: id,
            applicationId: props?.demand?.application_id,
        }

        console.log("orderidpayload at payment before...", requestBody);

        AxiosInterceptors.post(api_generateOrderId, requestBody, ApiHeader()) // This API will generate Order ID
            .then((res) => {
                console.log("Order Id Response ", res?.data);
                if (res?.data?.status === true) {
                    console.log("==1==OrderId Generated True", res?.data?.data);
                    RazorpayPaymentScreenUpdated(res?.data?.data?.order_id, sendPaymentResponse);

                    //Send Response Data as Object (amount, orderId, ulbId, departmentId, applicationId, workflowId, userId, name, email, contact) will call razorpay payment function to show payment popup
                }
                else {
                    // props.showLoader(false)
                    activateBottomErrorCard(true, 'Error occured. Please try again later.')
                }
            })
            .catch((err) => {
                activateBottomErrorCard(true, 'Error occured. Please try again later.')
                console.log("ERROR :-  Unable to Generate Order Id ", err)
            }).finally(() => {
                setisLoading(false)
            });
    };

    // ════════════════════║ THIS FUNCTION IS CALLBACK FROM ONLINE PAYMENT TO SEND PAYMENT DATA TO BACKEND   ║═════════════════════════
    const sendPaymentResponse = async (data) => {
        console.log('payment responsedsdasdasdasdasd....', data)
        // return
        setisLoading(true)

        let requestBody = {
            applicationId: props?.demand?.application_id,
            challanId: id,
            amount: props?.demand?.amount,
            //   date: '2024-01-02',
            date: new Date(),
            transactionId: '',
            status: '',
            cardNo: '',
            authCode: '',
            tid: '',
            mid: 'gghg',
            status: 'AUTHORIZED',
            rrNo: '',
            batchNo: '',
            orderId: data?.razorpay_order_id,
        }

        console.log('==inside payment reesponse of online payment...', requestBody)
        AxiosInterceptors.post(api_sendOnlineResponse, requestBody, ApiHeader())
            .then((res) => {
                console.log('===== 3 response after onlin payment api....', JSON.stringify(res?.data, null, 2))
                console.log('===== 45354353 response after onlin payment api....', res?.data)
                if (res?.data?.status === true) {
                    // send inside to trach challan details
                    console.log('payment success Chandan dev')
                    setResponseScreenStatus(true)
                    settranNo(res?.data?.data?.tran_no)
                    console.log("chandan5",res?.data?.data?.tran_no)
                } else {
                    console.log("Login Failed", res?.data?.message)
                    setResponseScreenStatus()
                }

            })
            .catch(err => {
                console.log("-Exception--", err)
                setResponseScreenStatus()

            }).finally(() => {
                setisLoading(false)

            })
    }

    // ════════════════════║ THIS FUNCTION FETCHES THE TRANSACTION NO.   ║═════════════════════════
    // const getTransactionNo = async (values) => {
    //     setisLoading(true)

    //  let requestBody = {
    //     orderId:'order_Mp9yh7eKZe8kMT'
    //  }

    //     console.log( "before trnansaction no. find..", requestBody);

    //     AxiosInterceptors.post(api_getTransactionNo, requestBody, ApiHeader()) // This API will generate Order ID
    //       .then((res) => {
    //         console.log("transaction no Response ", res?.data);
    //         if (res?.data?.status === true) {
    //         }
    //         else {
    //           // props.showLoader(false)
    //           alert(res?.data?.message)
    //         }
    //       })
    //       .catch((err) => {
    //         alert('Error '?.message)
    //         console.log("ERROR :-  Unable to Generate Order Id ", err)
    //       }).finally(()=>{
    //         setisLoading(false)
    //       });
    //   };

    //   useEffect(() => {
    //     getTransactionNo()
    //   }, [])



    // 👉 Function 7 👈
    const goPayment = () => {
        setIsOpen(false)
        getOrderId()
    }

    // 👉 Loader 👈
    if (isLoading) {
        return (
            <>
                <BarLoader />
            </>
        )
    }

    // 👉 View screen after successfull payment 👈
    if (responseScreenStatus == true) {
        return (
            <>
                <div className="w-full h-full bg-white sm:p-20 p-2">
                    <div>
                        <div className="text-center font-semibold text-3xl">Your payment has been successfully done !</div>
                        <div className="text-center mt-6">
                            <button className={`mr-4 bg-indigo-500  text-white px-6 py-1 shadow-lg hover:scale-105 rounded-sm`} onClick={() => navigate(`/fp-receipt/${encodeURIComponent(tranNo)}/direct`)}>View Receipt</button>
                            <button className={`mr-4 bg-white border border-indigo-500 text-indigo-500 px-4 py-1 shadow-lg hover:scale-105 rounded-sm`} onClick={() => navigate(`/challan/${id}/direct`)}>View Challan</button>
                        </div>
                    </div>
                    {console.log("dghhjhdj",tranNo)}
                </div>
            </>
        )
    }

    // 👉 QR code screen 👈
    // if (openQr) {
    //     return (<CommonModal>

    //         <div className='relative bg-white w-[90vw] md:w-[50vw] h-[80vh] md:h-[35vw] py-8 gap-8 border rounded-md shadow-lg shadow-indigo-50 border-indigo-600 flex flex-col justify-center items-center'>
    //             <button className='absolute top-4 right-4 font-bold bg-red-200 p-2 rounded-full shadow-sm hover:bg-red-400' onClick={() => setOpenQr(false)}><RxCross1 /></button>
    //             <div className='flex justify-center'><span className='font-semibold border-b text-xl uppercase'>Scan To Pay</span>
    //             </div>
    //             <QRCode value={upiLink} />
    //             <div className=' font-semibold bg-green-300 px-8 py-1.5 rounded-sm'>
    //                 {indianAmount(props?.demand?.total_payable_amount)}
    //             </div>
    //         </div>

    //     </CommonModal>)
    // }

    return (

        <>
            {/* 👉 Error card 👈 */}
            {erroState && <BottomErrorCard activateBottomErrorCard={activateBottomErrorCard} errorTitle={erroMessage} />}

            {/* 👉 Main Section 👈 */}
            <div className={` block sm:p-4 mt-4 w-full md:py-4 md:px-40 md:pb-0 md:pt-0 rounded-lg  bg-white md:w-full mx-auto  overflow-x-auto mb-20 `}>

                <div className="p-4 w-full md:py-6 rounded-lg bg-white mx-auto flex justify-center items-center flex-col">

                    {/* 👉 line break 👈 */}
                    <div className="md:px-4">
                        <span>Total Payable Amount :</span> <span className='font-mono font-bold text-xl'>{indianAmount(props?.demand?.amount)}</span>
                    </div>
                    <div className='mt-4'>
                        <button onClick={getOrderId} type='button' className="sm:ml-4 font-bold px-6 py-3 md:py-2 bg-indigo-500 text-white text-xs sm:text-sm leading-tight uppercase rounded  hover:bg-indigo-700 hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:bg-indigo-800 active:shadow-lg transition duration-150 ease-in-out shadow-xl border border-white"><span className='sm:mr-2 mr-1'>Pay </span>
                            {indianAmount(props?.demand?.amount)}
                        </button>

                    </div>

                </div>



            </div>

            {/* 👉 Confirmation Modal 👈 */}
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >

                <div class="relative bg-white rounded-lg shadow-xl border-2 border-gray-50">
                    <button onClick={closeModal} type="button" class="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white" >
                        <svg class="w-5 h-5" fill="currentColor" ><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                    </button>
                    <div class="p-6 text-center">
                        <div className='w-full flex h-10'> <span className='mx-auto'><FiAlertCircle size={30} /></span></div>
                        <h3 class="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">Confirm Payment</h3>
                        <button type="button" class="text-white bg-green-600 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2" onClick={goPayment}>
                            Yes, I'm sure
                        </button>

                    </div>
                </div>

            </Modal>

        </>
    )
}

export default PaymentCardDirect