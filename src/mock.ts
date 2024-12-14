import { IRegion, IDish, ICategory, IOrder } from '@/components'

export const regions: IRegion[] = [
  {
    id: 1,
    name: 'Thành phố Hồ Chí Minh',
    total: 7,
    branches: [
      {
        id: 1,
        name: 'Mori Quận 1',
        address: '123 Lê Lợi, Quận 1',
        openTime: '8:00',
        closeTime: '22:00',
        phone: 19001523,
        hasMotoPark: false,
        hasCarPark: true,
        canShip: true,
        floorQuantity: 3,
        image: '1CUdmmAXNWssnP3dP5edcyp_9r4y7eYr1'
      },
      {
        id: 2,
        name: 'Mori Thảo Điền',
        address: '45 Nguyễn Văn Hưởng, Quận 2',
        openTime: '8:00',
        closeTime: '22:00',
        phone: 19001523,
        hasMotoPark: true,
        hasCarPark: true,
        canShip: false,
        floorQuantity: 2,
        image: '1RRLFxlQ6Hr7sOSp5WblKJYYgeXMR6s78'
      },
      {
        id: 3,
        name: 'Mori Quận 3',
        address: '78 Võ Văn Tần, Quận 3',
        openTime: '8:00',
        closeTime: '22:00',
        phone: 19001523,
        hasMotoPark: false,
        hasCarPark: true,
        canShip: false,
        floorQuantity: 3,
        image: '1PWzrJAlZjOtBG-qSP3_NUv3-3h3IkFwD'
      },
      {
        id: 4,
        name: 'Mori Gò Vấp',
        address: '112 Phạm Văn Chiêu, Quận Gò Vấp',
        openTime: '8:00',
        closeTime: '22:00',
        phone: 19001523,
        hasMotoPark: true,
        hasCarPark: false,
        canShip: true,
        floorQuantity: 2,
        image: '1QsU0tu1uE5KJE5C6MOiXP5Gtwbx9Itds'
      },
      {
        id: 5,
        name: 'Mori Phú Mỹ Hưng',
        address: '90 Nguyễn Đức Cảnh, Quận 7',
        openTime: '8:00',
        closeTime: '22:00',
        phone: 19001523,
        hasMotoPark: true,
        hasCarPark: false,
        canShip: true,
        floorQuantity: 1,
        image: '1GZrGo0aiM8MetxArGlrqzb2ZFXhF-oj7'
      },
      {
        id: 6,
        name: 'Mori Tân Bình',
        address: '56 Hoàng Hoa Thám, Quận Tân Bình',
        openTime: '8:00',
        closeTime: '22:00',
        phone: 19001523,
        hasMotoPark: true,
        hasCarPark: true,
        canShip: true,
        floorQuantity: 2,
        image: '1PWzrJAlZjOtBG-qSP3_NUv3-3h3IkFwD'
      },
      {
        id: 7,
        name: 'Mori Bình Thạnh',
        address: '34 Đinh Tiên Hoàng, Quận Bình Thạnh',
        openTime: '8:00',
        closeTime: '22:00',
        phone: 19001523,
        hasMotoPark: false,
        hasCarPark: true,
        canShip: true,
        floorQuantity: 1,
        image: '1GZrGo0aiM8MetxArGlrqzb2ZFXhF-oj7'
      }
    ]
  },
  {
    id: 2,
    name: 'Hà Nội',
    total: 5,
    branches: [
      {
        id: 8,
        name: 'Mori Hoàn Kiếm',
        address: '25 Hàng Bạc, Quận Hoàn Kiếm',
        openTime: '8:00',
        closeTime: '22:00',
        phone: 19001523,
        hasMotoPark: true,
        hasCarPark: false,
        canShip: true,
        floorQuantity: 2,
        image: '1QsU0tu1uE5KJE5C6MOiXP5Gtwbx9Itds'
      },
      {
        id: 9,
        name: 'Mori Đống Đa',
        address: '72 Tây Sơn, Quận Đống Đa',
        openTime: '8:00',
        closeTime: '22:00',
        phone: 19001523,
        hasMotoPark: true,
        hasCarPark: true,
        canShip: false,
        floorQuantity: 1,
        image: '1PWzrJAlZjOtBG-qSP3_NUv3-3h3IkFwD'
      },
      {
        id: 10,
        name: 'Mori Cầu Giấy',
        address: '150 Trần Duy Hưng, Quận Cầu Giấy',
        openTime: '8:00',
        closeTime: '22:00',
        phone: 19001523,
        hasMotoPark: true,
        hasCarPark: true,
        canShip: true,
        floorQuantity: 2,
        image: '1QsU0tu1uE5KJE5C6MOiXP5Gtwbx9Itds'
      },
      {
        id: 11,
        name: 'Mori Long Biên',
        address: '88 Ngọc Lâm, Quận Long Biên',
        openTime: '8:00',
        closeTime: '22:00',
        phone: 19001523,
        hasMotoPark: false,
        hasCarPark: true,
        canShip: true,
        floorQuantity: 2,
        image: '16doyCVkk6SKlClI20la1IaMT1hQx8_T7'
      },
      {
        id: 12,
        name: 'Mori Hà Đông',
        address: '105 Quang Trung, Quận Hà Đông',
        openTime: '8:00',
        closeTime: '22:00',
        phone: 19001523,
        hasMotoPark: true,
        hasCarPark: false,
        canShip: true,
        floorQuantity: 1,
        image: '1PWzrJAlZjOtBG-qSP3_NUv3-3h3IkFwD'
      }
    ]
  },
  {
    id: 3,
    name: 'Đà Nẵng',
    total: 3,
    branches: [
      {
        id: 13,
        name: 'Mori Hải Châu',
        address: '45 Nguyễn Văn Linh, Quận Hải Châu',
        openTime: '8:00',
        closeTime: '22:00',
        phone: 19001523,
        hasMotoPark: true,
        hasCarPark: false,
        canShip: true,
        floorQuantity: 2,
        image: '16doyCVkk6SKlClI20la1IaMT1hQx8_T7'
      },
      {
        id: 14,
        name: 'Mori Sơn Trà',
        address: '123 Võ Nguyên Giáp, Quận Sơn Trà',
        openTime: '8:00',
        closeTime: '22:00',
        phone: 19001523,
        hasMotoPark: true,
        hasCarPark: true,
        canShip: false,
        floorQuantity: 3,
        image: '1PWzrJAlZjOtBG-qSP3_NUv3-3h3IkFwD'
      },
      {
        id: 15,
        name: 'Mori Ngũ Hành Sơn',
        address: '90 Trần Hưng Đạo, Quận Ngũ Hành Sơn',
        openTime: '8:00',
        closeTime: '22:00',
        phone: 19001523,
        hasMotoPark: true,
        hasCarPark: false,
        canShip: true,
        floorQuantity: 1,
        image: '1RRLFxlQ6Hr7sOSp5WblKJYYgeXMR6s78'
      }
    ]
  }
]

export const dishes: IDish[] = [
  {
    id: 1,
    isCombo: false,
    canShip: true,
    nameVn: 'Cá ngừ đại dương',
    nameEn: 'Ocean Tuna',
    price: 300000,
    image: '1KuVhTi60MggnmfFxbN8IAW9JXQAE7JcW'
  },
  {
    id: 2,
    isCombo: false,
    canShip: true,
    nameVn: 'Cơm cuộn cá hồi, tôm chiên',
    nameEn: 'Salmon and Shrimp Tempura Rolls',
    price: 100000,
    image: '1w2Kbd0sFkWHDK6OdYBHCvVUpoJPIdYPO'
  },
  {
    id: 3,
    isCombo: false,
    canShip: true,
    nameVn: 'Cá hồi Na Uy',
    nameEn: 'Norwegian Salmon',
    price: 350000,
    image: '1n546PGzrnLDU1uKkiTPkqtAcetKpQq5M'
  },
  {
    id: 4,
    isCombo: false,
    canShip: true,
    nameVn: 'Cơm cuộn lươn hun khói',
    nameEn: 'Smoked Eel Roll',
    price: 120000,
    image: '1F0BhMf5fLn1Ei-OjJtnZPhcucIS8mXQj'
  },
  {
    id: 5,
    isCombo: false,
    canShip: true,
    nameVn: 'Cá hồi, sò điệp',
    nameEn: 'Salmon and Scallops',
    price: 200000,
    image: '15Q_x28Y2yhCDLjE4kUQ9-f_7XTGQoLzm'
  },
  {
    id: 6,
    isCombo: false,
    canShip: true,
    nameVn: 'Bạch tuộc Nhật Bản',
    nameEn: 'Japanese Octopus',
    price: 300000,
    image: '11Yrx-V6-IzvvMYCSAX9n7LGmejhrrUl8'
  },
  {
    id: 7,
    isCombo: false,
    canShip: false,
    nameVn: 'Tôm chiên bột tempura',
    nameEn: 'Tempura Fried Shrimp',
    price: 150000,
    image: '1a0U3zicMnnF5cIVtY5fd4JF1nd1ucm3i'
  },
  {
    id: 8,
    isCombo: false,
    canShip: true,
    nameVn: 'Sò đỏ Nhật Bản',
    nameEn: 'Japanese Red Clams',
    price: 250000,
    image: '1C75aomZTHySFyCnrsjTFkzMwGgoX4wkZ'
  },
  {
    id: 9,
    isCombo: false,
    canShip: true,
    nameVn: 'Maki Cơm cuộn cá hồi',
    nameEn: 'Salmon Maki Roll',
    price: 150000,
    image: '1e1N4ogpmeapYioXaZFtPUnyC9tBa-Icd'
  },
  {
    id: 10,
    isCombo: false,
    canShip: true,
    nameVn: 'Lươn hun khói Nhật Bản',
    nameEn: 'Smoked Japanese Eel',
    price: 200000,
    image: '1BRcW0cAjxBgfqEeiVfw7MVAW1HWB4dDp'
  },
  {
    id: 11,
    isCombo: false,
    canShip: false,
    nameVn: 'Cá hồi và phô mai chiên giòn',
    nameEn: 'Crispy Fried Salmon and Cheese',
    price: 150000,
    image: '1hNRnKHGkimG_BY3ov-v_YXZBQkJwyGIP'
  },
  {
    id: 12,
    isCombo: false,
    canShip: true,
    nameVn: 'Cá hồi, trứng cá chuồn',
    nameEn: 'Salmon and Fish Roe',
    price: 200000,
    image: '1cpOriYbrJaReSEFlK5F_hdugVRTFRBzU'
  },
  {
    id: 13,
    isCombo: false,
    canShip: false,
    nameVn: 'Tôm sú biển thiên nhiên',
    nameEn: 'Natural Wild Sea Prawns',
    price: 300000,
    image: '1zijTnmOqQLiZLv4V-IcP90VOGDMahnQF'
  },
  {
    id: 14,
    isCombo: false,
    canShip: true,
    nameVn: 'Cá trích Nhật Bản',
    nameEn: 'Japanese Herring',
    price: 150000,
    image: '1Wd51V9oLEhoh6eNRnTWRuvABUnai2laL'
  },
  {
    id: 15,
    isCombo: false,
    canShip: false,
    nameVn: 'Trứng cá chuồn Nhật Bản',
    nameEn: 'Japanese Fish Roe',
    price: 400000,
    image: '1jxuba7RWfPMfiL8AzO6r6VN2qBbAnX4Z'
  },
  {
    id: 16,
    isCombo: false,
    canShip: true,
    nameVn: 'Cá ngừ vây xanh Nhật Bản',
    nameEn: 'Japanese Bluefin Tuna',
    price: 600000,
    image: '1m0TZ9MgerpZYxpjPfaMQkt227j8s4Nzm'
  },
  {
    id: 17,
    isCombo: false,
    canShip: true,
    nameVn: 'Gan cá sashimi',
    nameEn: 'Sashimi Fish Liver',
    price: 150000,
    image: '1Wj64yQy7e_l4x_WL33Phb_7fJxjJVIpx'
  },
  {
    id: 18,
    isCombo: false,
    canShip: true,
    nameVn: 'Bạch tuộc trộn',
    nameEn: 'Octopus Salad',
    price: 120000,
    image: '1G-mb8spDyHSy9ky0YJA6-iaZ2MKVi-Ci'
  },
  {
    id: 19,
    isCombo: false,
    canShip: true,
    nameVn: 'Cơm cuộn dưa leo',
    nameEn: 'Cucumber Roll',
    price: 50000,
    image: '1RYbrXjF8hyhtZ_3nPyEFqL85mJxeZpcj'
  },
  {
    id: 20,
    isCombo: false,
    canShip: true,
    nameVn: 'Cá Saba ngâm giấm',
    nameEn: 'Vinegar-Pickled Saba Fish',
    price: 120000,
    image: '1C6yRBuLPtc17b6GCM-RyK5UAF3qi-sQO'
  },
  {
    id: 21,
    isCombo: true,
    canShip: false,
    nameVn: 'Hải sản thượng hạng',
    nameEn: 'Seafood Deluxe',
    price: 1250000,
    image: '1LYiUuC-_TYW7L7mQ5qURg11ArlfBfHWj',
    total: 4,
    dishes: [1, 3, 6, 15]
  },
  {
    id: 22,
    isCombo: true,
    canShip: true,
    nameVn: 'Tiệc cơm cuộn và tempura',
    nameEn: 'Rolls and Tempura Feast',
    price: 500000,
    image: '1o8WHlLSc2gDv3KeOwtKeFLlT19tviuW6',
    total: 4,
    dishes: [2, 7, 9, 19]
  }
]

export const categories: ICategory[] = [
  {
    id: 1,
    name: 'Seafood',
    total: 10,
    dishes: [1, 3, 5, 6, 8, 13, 14, 15, 16, 20]
  },
  {
    id: 2,
    name: 'Tempura',
    total: 6,
    dishes: [2, 4, 7, 9, 11, 19]
  },
  {
    id: 3,
    name: 'Premium',
    total: 7,
    dishes: [1, 3, 6, 13, 15, 16]
  },
  {
    id: 0,
    name: 'Combo',
    total: 2,
    dishes: [21, 22]
  }
]

export const invoices: IOrder[] = [
  {
    id: 1,
    branch: 'Mori Quận 1 - 123 Lê Lợi Quận 1',
    phone: '08371973',
    orderAt: '2021-09-01 12:00',
    address: '74 Nguyễn Tấn Thái',
    distanceKm: 12,
    detail: [
      {
        id: 1,
        nameVn: 'Cá ngừ đại dương',
        nameEn: 'Ocean Tuna',
        quantity: 2,
        sum: 600000
      },
      {
        id: 2,
        nameVn: 'Cơm cuộn cá hồi, tôm chiên',
        nameEn: 'Salmon and Shrimp Tempura Rolls',
        quantity: 3,
        sum: 300000
      }
    ],
    total: 900000,
    shipCost: 20000,
    shipDiscount: 10000,
    dishDiscount: 10000,
    totalPayment: 890000,
    type: 'O',
    status: 'completed'
  },
  {
    id: 2,
    phone: '08371973',
    branch: 'Mori Quận 1 - 123 Lê Lợi Quận 1',
    address: '74 Nguyễn Văn B',
    distanceKm: 2,
    orderAt: '2021-09-01 12:00',
    detail: [
      {
        id: 1,
        nameVn: 'Cá ngừ đại dương',
        nameEn: 'Ocean Tuna',
        quantity: 3,
        sum: 900000
      },
      {
        id: 2,
        nameVn: 'Cơm cuộn cá hồi, tôm chiên',
        nameEn: 'Salmon and Shrimp Tempura Rolls',
        quantity: 1,
        sum: 100000
      }
    ],
    total: 300000,
    shipCost: 20000,
    shipDiscount: 10000,
    dishDiscount: 10000,
    totalPayment: 800000,
    type: 'W',
    status: 'cancel'
  }
]
