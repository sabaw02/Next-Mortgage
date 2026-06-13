// "use client"
// import CardsReserveLayout from '@/components/layout/CardsReserveLayout'
// import MainLayout from '@/components/layout/mainLayout'
// import MainCard from '@/components/ui/cards/mainCard/mainCard'
// import Image from 'next/image'
// import best from '@/assets/images/reserve/pexels-expect-best-79873-323780 1.png'
// import restu from '@/assets/images/reserve/686bba4ba1e6f83605b73bed_رستوران (3) 1.png'
// import sw from '@/assets/images/reserve/686bba85a1e6f83605b73bf2_سوییت دبل لاکچری (2) 2.png'
// import ReserveCard from '@/components/ui/cards/reservecard/reserveCard'
// import { useEffect, useRef, useState } from 'react'
// import ModalImageReviws from '@/components/reserveAndRentDetails/ModalImageReviws'
// import ReserveAndRentLayout from '@/components/layout/ReserveAndRentLayout'
//  import PaginationComponent from "@/components/ui/pagination/paginationComponent";
// import SellerInfoCard from '@/components/rent/sellerInfoCard/sellerInfoCard'
// import SlideShowRent from '@/components/ui/slideShow/slideShowRent'
// import { GetRentSection } from '@/components/landingContainer/RentSection/GetRentSection'
// import { IoIosArrowBack } from 'react-icons/io'
// import { useParams } from 'next/navigation'

// const PropertyRentPage = () => {
//   const params = useParams() 
//   const id = params?.id

//     const [data, setData] = useState<[]>()
//     const [isOpenModal, setIsOpenModal] =useState('');

//     useEffect(() => {
//         const fetchData = async () => {
//           const res = await GetRentSection();
//           setData(res);
//         };
//       fetchData();
//     }, []);
    

      
//     const iconn = <IoIosArrowBack className="w-6 h-6" />;
//     // const swiperRef = useRef<any>(null);

//   return (
//     <div className=' w-full h-auto mb-5 z-100'>
//         <MainLayout title='هتل همایون فر کیش ایران' >

//             <div className=' w-[85%] h-auto flex justify-between mx-auto'>
//                 <div className=' w-[70%] h-auto'>
//                     <div>
//                         <Image src={best}  alt='' />
//                         <p className='my-3 w-[70%] h-auto text-[16px] font-medium text-[#999999] '>آدرس : گیلان ، رشت ، میدان آزادی ، جنب چهار راه عظ....گیلان ، رشت ، میدان آزادی ، جنب چهار راه عظ....</p>
//                     </div>
//                        {/* tab section reserv */}
//                     <ReserveAndRentLayout showTabs={true}/>
//                 </div>

//                 <div className=' relative space-y-10 w-[30%] h-auto '>
//                     <Image src={restu}  alt=''className='w-[95%] mx-auto rounded-[14px]' />
//                     <div className='grid grid-cols-1 grid-rows-1 items-center justify-items-center'>
//                         <Image src={sw}  alt='' className='  row-start-1 col-start-1  mx-auto w-[95%] opacity-70 bg-white rounded-[14px]'  />
//                         <button 
//                             onClick={() => setIsOpenModal(true)}
//                             className='max-[1024px]:font-medium max-[1024px]:text-[12px] z-100 row-start-1 col-start-1 text-[16px] font-semibold text-[#FFFFFF] w-[45%] h-[21%] border border-[#ffffff] rounded-[24px]'>مشاهده بیشتر
//                         </button>
//                     </div>
//                     <ModalImageReviws
//                         isOpenModal={isOpenModal}
//                         closeModal={() => setIsOpenModal(false)}
//                     />
//                     <SellerInfoCard/>
//                 </div>  
//             </div>

//             <CardsReserveLayout title='آگهی های مشابه'>
//                 <div className=' w-[72%] flex  mx-auto justify-center'>
//                     <div className="h-auto w-full mt-4">
//                         <SlideShowRent houses={data || []} />
//                     </div>
//                 </div>
//             </CardsReserveLayout>

//         </MainLayout>
//     </div>
//   )
// }

// export default PropertyRentPage
import ReserveSinglePage from "@/components/reserve/reserveSinglePage/reserveSinglePage";
import { getHouseById } from "@/utils/api/reserve/housesApi";
import { HouseDetailProps } from "@/types";
import RentSinglePage from "@/components/rent/rentSinglePage/rentSinglePage";

const PropertyRentPage = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  const { slug } = await params;

  const houseDetail: HouseDetailProps = await getHouseById(slug);

  return <RentSinglePage houseDetail={houseDetail} />;
};

export default PropertyRentPage;
