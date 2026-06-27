// const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL;

// export const GetComments = async () => {
//   const res = await fetch(
//     `${API_BASE_URL}/comments?page=1&limit=10`,
//   );

//   if (!res.ok) throw new Error("Failed to fetch houses");
//   return res.json();
// };




export interface Comment {
  id: number;
  userName: string;
  userImage: string;
  rating: number;
  text: string;
  houseTitle: string;
  createdAt: string;
}

export interface CommentsResponse {
  comments: Comment[];
  totalCount: number;
}

const mockComments: Comment[] = [
  {
    id: 1,
    userName: "علی محمدی",
    userImage: "",
    rating: 5,
    text: "اقامت فوق‌العاده‌ای داشتیم. ویلا دقیقاً همان‌طور که در تصاویر نشان داده شده بود.",
    houseTitle: "ویلا مدرن دوبلکس",
    createdAt: "2026-05-20T10:00:00.000Z",
  },
  {
    id: 2,
    userName: "سارا احمدی",
    userImage: "",
    rating: 4,
    text: "خانه تمیز و مرتب بود. صاحب ملک خیلی مهربان و راهنمای خوبی بود.",
    houseTitle: "خانه باغ سنتی",
    createdAt: "2026-05-25T14:00:00.000Z",
  },
  {
    id: 3,
    userName: "رضا کریمی",
    userImage: "",
    rating: 5,
    text: "بهترین تجربه سفر زندگیم! کلبه جنگلی با طبیعت بکر شمال واقعاً بی‌نظیر بود.",
    houseTitle: "کلبه جنگلی",
    createdAt: "2026-06-01T09:00:00.000Z",
  },
  {
    id: 4,
    userName: "مریم حسینی",
    userImage: "",
    rating: 4,
    text: "موقعیت مکانی عالی، نزدیک به مراکز خرید و رستوران‌ها. پیشنهاد می‌کنم.",
    houseTitle: "آپارتمان لوکس",
    createdAt: "2026-06-05T16:00:00.000Z",
  },
  {
    id: 5,
    userName: "امیر تهرانی",
    userImage: "",
    rating: 5,
    text: "خانه ساحلی رویایی بود. صبح با صدای امواج دریا بیدار شدیم. حتماً برمی‌گردیم.",
    houseTitle: "خانه ساحلی",
    createdAt: "2026-06-10T11:00:00.000Z",
  },
  {
    id: 6,
    userName: "نیلوفر صادقی",
    userImage: "",
    rating: 5,
    text: "پنت‌هاوس واقعاً شگفت‌انگیز بود. چشم‌انداز شهر از بالا فراموش‌نشدنی بود.",
    houseTitle: "پنت‌هاوس مرکز شهر",
    createdAt: "2026-06-12T13:00:00.000Z",
  },
];

export const GetComments = async (): Promise<CommentsResponse> => {
  await new Promise((r) => setTimeout(r, 200));
  return {
    comments: mockComments,
    totalCount: mockComments.length,
  };
};