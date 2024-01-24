import RestaurantCard from './RestaurantCard';

const restaurantsList = [
  {
    info: {
      id: '65797',
      name: "Leon's - Burgers & Wings (Leon Grill)",
      cloudinaryImageId: 'b2edbc28b7b8219d6e0a9c049ce06658',
      locality: 'Koramangala',
      areaName: 'Koramangala',
      costForTwo: '₹300 for two',
      cuisines: ['American', 'Snacks', 'Turkish', 'Portuguese', 'Continental'],
      avgRating: 4.4,
      parentId: '371281',
      avgRatingString: '4.4',
      totalRatingsString: '10K+',
      sla: {
        deliveryTime: 24,
        lastMileTravel: 1.5,
        serviceability: 'SERVICEABLE',
        slaString: '24 mins',
        lastMileTravelString: '1.5 km',
        iconType: 'ICON_TYPE_EMPTY',
      },
      availability: {
        nextCloseTime: '2024-01-25 04:00:00',
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: 'F',
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: '₹100 OFF',
        subHeader: 'ABOVE ₹199',
        discountTag: 'FLAT DEAL',
      },
      differentiatedUi: {
        displayType: 'ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT',
        differentiatedUiMediaDetails: {
          mediaType: 'ADS_MEDIA_ENUM_IMAGE',
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: 'RESTAURANT_DISPLAY_TYPE_DEFAULT',
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: 'https://www.swiggy.com/restaurants/leons-burgers-and-wings-leon-grill-koramangala-bangalore-65797',
      type: 'WEBLINK',
    },
  },
  {
    info: {
      id: '10820',
      name: 'California Burrito',
      cloudinaryImageId: 'b58sysfvskincfwmgoqd',
      locality: 'Koramangala',
      areaName: 'Koramangala',
      costForTwo: '₹250 for two',
      cuisines: ['Mexican', 'American', 'Salads', 'Continental', 'Keto', 'Healthy Food'],
      avgRating: 4.6,
      parentId: '1252',
      avgRatingString: '4.6',
      totalRatingsString: '10K+',
      sla: {
        deliveryTime: 18,
        lastMileTravel: 1.5,
        serviceability: 'SERVICEABLE',
        slaString: '18 mins',
        lastMileTravelString: '1.5 km',
        iconType: 'ICON_TYPE_EMPTY',
      },
      availability: {
        nextCloseTime: '2024-01-25 01:00:00',
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: 'F',
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: '20% OFF',
        subHeader: 'UPTO ₹50',
      },
      differentiatedUi: {
        displayType: 'ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT',
        differentiatedUiMediaDetails: {
          mediaType: 'ADS_MEDIA_ENUM_IMAGE',
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: 'RESTAURANT_DISPLAY_TYPE_DEFAULT',
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: 'https://www.swiggy.com/restaurants/california-burrito-koramangala-bangalore-10820',
      type: 'WEBLINK',
    },
  },
  {
    info: {
      id: '312',
      name: 'Beijing Bites',
      cloudinaryImageId: 'ca0eb08d0635fd6da2e5a480fec897d0',
      locality: '5th A Block',
      areaName: 'Koramangala',
      costForTwo: '₹450 for two',
      cuisines: ['Chinese', 'Thai', 'Pan-Asian'],
      avgRating: 4.4,
      parentId: '103',
      avgRatingString: '4.4',
      totalRatingsString: '10K+',
      sla: {
        deliveryTime: 27,
        lastMileTravel: 1.1,
        serviceability: 'SERVICEABLE',
        slaString: '27 mins',
        lastMileTravelString: '1.1 km',
        iconType: 'ICON_TYPE_EMPTY',
      },
      availability: {
        nextCloseTime: '2024-01-25 01:00:00',
        opened: true,
      },
      badges: {
        textExtendedBadges: [
          {
            iconId: 'guiltfree/GF_Logo_android_3x',
            shortDescription: 'options available',
            fontColor: '#7E808C',
          },
        ],
      },
      isOpen: true,
      type: 'F',
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {
            badgeObject: [
              {
                attributes: {
                  description: '',
                  fontColor: '#7E808C',
                  iconId: 'guiltfree/GF_Logo_android_3x',
                  shortDescription: 'options available',
                },
              },
            ],
          },
        },
      },
      aggregatedDiscountInfoV3: {
        header: '₹100 OFF',
        subHeader: 'ABOVE ₹599',
        discountTag: 'FLAT DEAL',
      },
      differentiatedUi: {
        displayType: 'ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT',
        differentiatedUiMediaDetails: {
          mediaType: 'ADS_MEDIA_ENUM_IMAGE',
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: 'RESTAURANT_DISPLAY_TYPE_DEFAULT',
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: 'https://www.swiggy.com/restaurants/beijing-bites-5th-a-block-koramangala-bangalore-312',
      type: 'WEBLINK',
    },
  },
  {
    info: {
      id: '18973',
      name: 'Nandhana Palace',
      cloudinaryImageId: '195876a3181ef63f76e45e3a7b49b585',
      locality: 'Koramangala',
      areaName: 'Koramangala',
      costForTwo: '₹500 for two',
      cuisines: ['Biryani', 'Andhra', 'South Indian', 'North Indian'],
      avgRating: 4.2,
      parentId: '2120',
      avgRatingString: '4.2',
      totalRatingsString: '10K+',
      sla: {
        deliveryTime: 18,
        lastMileTravel: 0.5,
        serviceability: 'SERVICEABLE',
        slaString: '18 mins',
        lastMileTravelString: '0.5 km',
        iconType: 'ICON_TYPE_EMPTY',
      },
      availability: {
        nextCloseTime: '2024-01-25 02:00:00',
        opened: true,
      },
      badges: {},
      isOpen: true,
      aggregatedDiscountInfoV2: {},
      type: 'F',
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      differentiatedUi: {
        displayType: 'ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT',
        differentiatedUiMediaDetails: {
          mediaType: 'ADS_MEDIA_ENUM_IMAGE',
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: 'RESTAURANT_DISPLAY_TYPE_DEFAULT',
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: 'https://www.swiggy.com/restaurants/nandhana-palace-koramangala-bangalore-18973',
      type: 'WEBLINK',
    },
  },
  {
    info: {
      id: '289266',
      name: 'BOX8 - Desi Meals',
      cloudinaryImageId: '69a061b7e0f951cef2b4947946f94ec6',
      locality: '6TH BLOCK',
      areaName: 'Koramangala',
      costForTwo: '₹250 for two',
      cuisines: ['North Indian', 'Biryani', 'Thalis', 'Home Food'],
      avgRating: 4.4,
      parentId: '10655',
      avgRatingString: '4.4',
      totalRatingsString: '1K+',
      sla: {
        deliveryTime: 14,
        lastMileTravel: 0.7,
        serviceability: 'SERVICEABLE',
        slaString: '9-19 mins',
        lastMileTravelString: '0.7 km',
        iconType: 'ICON_TYPE_EMPTY',
      },
      availability: {
        nextCloseTime: '2024-01-25 02:00:00',
        opened: true,
      },
      badges: {
        textExtendedBadges: [
          {
            iconId: 'guiltfree/GF_Logo_android_3x',
            shortDescription: 'options available',
            fontColor: '#7E808C',
          },
        ],
      },
      isOpen: true,
      type: 'F',
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {
            badgeObject: [
              {
                attributes: {
                  description: '',
                  fontColor: '#7E808C',
                  iconId: 'guiltfree/GF_Logo_android_3x',
                  shortDescription: 'options available',
                },
              },
            ],
          },
        },
      },
      aggregatedDiscountInfoV3: {
        header: '50% OFF',
        subHeader: 'UPTO ₹100',
      },
      differentiatedUi: {
        displayType: 'ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT',
        differentiatedUiMediaDetails: {
          mediaType: 'ADS_MEDIA_ENUM_IMAGE',
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: 'RESTAURANT_DISPLAY_TYPE_DEFAULT',
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: 'https://www.swiggy.com/restaurants/box8-desi-meals-6th-block-koramangala-bangalore-289266',
      type: 'WEBLINK',
    },
  },
  {
    info: {
      id: '140887',
      name: "McDonald's",
      cloudinaryImageId: '405645b3118d83e89db4c65361e43733',
      locality: 'Mantri Avenue',
      areaName: 'Koramangala',
      costForTwo: '₹400 for two',
      cuisines: ['Burgers', 'Beverages', 'Cafe', 'Desserts'],
      avgRating: 4.5,
      parentId: '630',
      avgRatingString: '4.5',
      totalRatingsString: '5K+',
      sla: {
        deliveryTime: 20,
        lastMileTravel: 1.6,
        serviceability: 'SERVICEABLE',
        slaString: '20 mins',
        lastMileTravelString: '1.6 km',
        iconType: 'ICON_TYPE_EMPTY',
      },
      availability: {
        nextCloseTime: '2024-01-24 23:00:00',
        opened: true,
      },
      badges: {
        textExtendedBadges: [
          {
            iconId: 'guiltfree/GF_Logo_android_3x',
            shortDescription: 'options available',
            fontColor: '#7E808C',
          },
        ],
      },
      isOpen: true,
      type: 'F',
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {
            badgeObject: [
              {
                attributes: {
                  description: '',
                  fontColor: '#7E808C',
                  iconId: 'guiltfree/GF_Logo_android_3x',
                  shortDescription: 'options available',
                },
              },
            ],
          },
        },
      },
      aggregatedDiscountInfoV3: {
        header: '10% OFF',
        subHeader: 'ABOVE ₹1000',
        discountTag: 'FLAT DEAL',
      },
      differentiatedUi: {
        displayType: 'ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT',
        differentiatedUiMediaDetails: {
          mediaType: 'ADS_MEDIA_ENUM_IMAGE',
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: 'RESTAURANT_DISPLAY_TYPE_DEFAULT',
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: 'https://www.swiggy.com/restaurants/mcdonalds-mantri-avenue-koramangala-bangalore-140887',
      type: 'WEBLINK',
    },
  },
  {
    info: {
      id: '25620',
      name: 'KFC',
      cloudinaryImageId: 'f01666ac73626461d7455d9c24005cd4',
      locality: 'Intermediate Ring Road',
      areaName: 'Ejipura',
      costForTwo: '₹400 for two',
      cuisines: ['Burgers', 'Biryani', 'American', 'Snacks', 'Fast Food'],
      avgRating: 4.2,
      parentId: '547',
      avgRatingString: '4.2',
      totalRatingsString: '10K+',
      sla: {
        deliveryTime: 16,
        lastMileTravel: 0.7,
        serviceability: 'SERVICEABLE',
        slaString: '16 mins',
        lastMileTravelString: '0.7 km',
        iconType: 'ICON_TYPE_EMPTY',
      },
      availability: {
        nextCloseTime: '2024-01-24 23:00:00',
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: 'F',
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: '20% OFF',
        subHeader: 'UPTO ₹50',
      },
      differentiatedUi: {
        displayType: 'ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT',
        differentiatedUiMediaDetails: {
          mediaType: 'ADS_MEDIA_ENUM_IMAGE',
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: 'RESTAURANT_DISPLAY_TYPE_DEFAULT',
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: 'https://www.swiggy.com/restaurants/kfc-intermediate-ring-road-ejipura-bangalore-25620',
      type: 'WEBLINK',
    },
  },
  {
    info: {
      id: '10576',
      name: 'Pizza Hut',
      cloudinaryImageId: '2b4f62d606d1b2bfba9ba9e5386fabb7',
      locality: 'Koramangala',
      areaName: 'Koramangala',
      costForTwo: '₹350 for two',
      cuisines: ['Pizzas'],
      avgRating: 4,
      parentId: '721',
      avgRatingString: '4.0',
      totalRatingsString: '10K+',
      sla: {
        deliveryTime: 25,
        lastMileTravel: 0.7,
        serviceability: 'SERVICEABLE',
        slaString: '25 mins',
        lastMileTravelString: '0.7 km',
        iconType: 'ICON_TYPE_EMPTY',
      },
      availability: {
        nextCloseTime: '2024-01-25 04:00:00',
        opened: true,
      },
      badges: {},
      isOpen: true,
      aggregatedDiscountInfoV2: {},
      type: 'F',
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      differentiatedUi: {
        displayType: 'ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT',
        differentiatedUiMediaDetails: {
          mediaType: 'ADS_MEDIA_ENUM_IMAGE',
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: 'RESTAURANT_DISPLAY_TYPE_DEFAULT',
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: 'https://www.swiggy.com/restaurants/pizza-hut-koramangala-bangalore-10576',
      type: 'WEBLINK',
    },
  },
  {
    info: {
      id: '5934',
      name: 'Burger King',
      cloudinaryImageId: 'e33e1d3ba7d6b2bb0d45e1001b731fcf',
      locality: 'Koramangala',
      areaName: 'Koramangala',
      costForTwo: '₹350 for two',
      cuisines: ['Burgers', 'American'],
      avgRating: 4.3,
      parentId: '166',
      avgRatingString: '4.3',
      totalRatingsString: '10K+',
      sla: {
        deliveryTime: 23,
        lastMileTravel: 1.6,
        serviceability: 'SERVICEABLE',
        slaString: '23 mins',
        lastMileTravelString: '1.6 km',
        iconType: 'ICON_TYPE_EMPTY',
      },
      availability: {
        nextCloseTime: '2024-01-25 05:00:00',
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: 'F',
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: 'ITEMS',
        subHeader: 'AT ₹129',
      },
      differentiatedUi: {
        displayType: 'ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT',
        differentiatedUiMediaDetails: {
          mediaType: 'ADS_MEDIA_ENUM_IMAGE',
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: 'RESTAURANT_DISPLAY_TYPE_DEFAULT',
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: 'https://www.swiggy.com/restaurants/burger-king-koramangala-bangalore-5934',
      type: 'WEBLINK',
    },
  },
  {
    info: {
      id: '50467',
      name: 'Bakingo',
      cloudinaryImageId: '05994df0e49725bd230146c320b8f7aa',
      locality: '1st Block',
      areaName: 'Koramangala',
      costForTwo: '₹300 for two',
      cuisines: ['Bakery', 'Desserts', 'Beverages', 'Snacks'],
      avgRating: 4.3,
      parentId: '3818',
      avgRatingString: '4.3',
      totalRatingsString: '5K+',
      sla: {
        deliveryTime: 27,
        lastMileTravel: 2.2,
        serviceability: 'SERVICEABLE',
        slaString: '27 mins',
        lastMileTravelString: '2.2 km',
        iconType: 'ICON_TYPE_EMPTY',
      },
      availability: {
        nextCloseTime: '2024-01-25 01:00:00',
        opened: true,
      },
      badges: {},
      isOpen: true,
      aggregatedDiscountInfoV2: {},
      type: 'F',
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      differentiatedUi: {
        displayType: 'ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT',
        differentiatedUiMediaDetails: {
          mediaType: 'ADS_MEDIA_ENUM_IMAGE',
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: 'RESTAURANT_DISPLAY_TYPE_DEFAULT',
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: 'https://www.swiggy.com/restaurants/bakingo-1st-block-koramangala-bangalore-50467',
      type: 'WEBLINK',
    },
  },
  {
    info: {
      id: '506324',
      name: 'Louis Burger',
      cloudinaryImageId: '19d3d352cc815b9d88b22617b41fa97b',
      locality: '6Th Block, Koramangala',
      areaName: 'Koramangala',
      costForTwo: '₹600 for two',
      cuisines: ['Burgers', 'American', 'Fast Food'],
      avgRating: 4.4,
      parentId: '22485',
      avgRatingString: '4.4',
      totalRatingsString: '1K+',
      sla: {
        deliveryTime: 27,
        lastMileTravel: 1.6,
        serviceability: 'SERVICEABLE',
        slaString: '27 mins',
        lastMileTravelString: '1.6 km',
        iconType: 'ICON_TYPE_EMPTY',
      },
      availability: {
        nextCloseTime: '2024-01-25 04:00:00',
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: 'newg.png',
            description: 'Gourmet',
          },
        ],
      },
      isOpen: true,
      type: 'F',
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: 'Gourmet',
                  imageId: 'newg.png',
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: '₹125 OFF',
        subHeader: 'ABOVE ₹249',
        discountTag: 'FLAT DEAL',
      },
      differentiatedUi: {
        displayType: 'ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT',
        differentiatedUiMediaDetails: {
          mediaType: 'ADS_MEDIA_ENUM_IMAGE',
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: 'RESTAURANT_DISPLAY_TYPE_DEFAULT',
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: 'https://www.swiggy.com/restaurants/louis-burger-6th-block-koramangala-bangalore-506324',
      type: 'WEBLINK',
    },
  },
  {
    info: {
      id: '93741',
      name: 'Subway',
      cloudinaryImageId: '63178e3e64d503a479f2a2048a474552',
      locality: 'The Nexus Mall',
      areaName: 'Koramangala',
      costForTwo: '₹350 for two',
      cuisines: ['Salads', 'Snacks', 'Desserts', 'Beverages'],
      avgRating: 4,
      parentId: '2',
      avgRatingString: '4.0',
      totalRatingsString: '5K+',
      sla: {
        deliveryTime: 27,
        lastMileTravel: 1.6,
        serviceability: 'SERVICEABLE',
        slaString: '27 mins',
        lastMileTravelString: '1.6 km',
        iconType: 'ICON_TYPE_EMPTY',
      },
      availability: {
        nextCloseTime: '2024-01-24 23:00:00',
        opened: true,
      },
      badges: {
        textExtendedBadges: [
          {
            iconId: 'guiltfree/GF_Logo_android_3x',
            shortDescription: 'options available',
            fontColor: '#7E808C',
          },
        ],
      },
      isOpen: true,
      type: 'F',
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {
            badgeObject: [
              {
                attributes: {
                  description: '',
                  fontColor: '#7E808C',
                  iconId: 'guiltfree/GF_Logo_android_3x',
                  shortDescription: 'options available',
                },
              },
            ],
          },
        },
      },
      aggregatedDiscountInfoV3: {
        header: '30% OFF',
        subHeader: 'UPTO ₹75',
      },
      differentiatedUi: {
        displayType: 'ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT',
        differentiatedUiMediaDetails: {
          mediaType: 'ADS_MEDIA_ENUM_IMAGE',
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: 'RESTAURANT_DISPLAY_TYPE_DEFAULT',
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: 'https://www.swiggy.com/restaurants/subway-the-nexus-mall-koramangala-bangalore-93741',
      type: 'WEBLINK',
    },
  },
  {
    info: {
      id: '293023',
      name: 'Istah - The Mediterranean Way',
      cloudinaryImageId: '9a01f2935fcb5ae05426db8264062102',
      locality: '6th Block',
      areaName: 'Koramangala',
      costForTwo: '₹250 for two',
      cuisines: [
        'Mediterranean',
        'Snacks',
        'Biryani',
        'Grill',
        'Kebabs',
        'Arabian',
        'Lebanese',
        'Beverages',
        'Desserts',
        'Italian',
        'Turkish',
      ],
      avgRating: 4.5,
      parentId: '3518',
      avgRatingString: '4.5',
      totalRatingsString: '10K+',
      sla: {
        deliveryTime: 24,
        lastMileTravel: 1,
        serviceability: 'SERVICEABLE',
        slaString: '24 mins',
        lastMileTravelString: '1.0 km',
        iconType: 'ICON_TYPE_EMPTY',
      },
      availability: {
        nextCloseTime: '2024-01-25 02:00:00',
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: 'v1690360529/Ratnesh_Badges/Only_on_swiggy_badge_4x.png',
            description: 'OnlyOnSwiggy',
          },
        ],
      },
      isOpen: true,
      type: 'F',
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: 'OnlyOnSwiggy',
                  imageId: 'v1690360529/Ratnesh_Badges/Only_on_swiggy_badge_4x.png',
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: '60% OFF',
        subHeader: 'UPTO ₹110',
      },
      differentiatedUi: {
        displayType: 'ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT',
        differentiatedUiMediaDetails: {
          mediaType: 'ADS_MEDIA_ENUM_IMAGE',
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: 'RESTAURANT_DISPLAY_TYPE_DEFAULT',
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: 'https://www.swiggy.com/restaurants/istah-the-mediterranean-way-6th-block-koramangala-bangalore-293023',
      type: 'WEBLINK',
    },
  },
  {
    info: {
      id: '108424',
      name: "Domino's Pizza",
      cloudinaryImageId: 'vw6n5betlssnqelt7rmu',
      locality: '5TH Block',
      areaName: 'Koramangala',
      costForTwo: '₹400 for two',
      cuisines: ['Pizzas', 'Italian', 'Pastas', 'Desserts'],
      avgRating: 4.4,
      parentId: '2456',
      avgRatingString: '4.4',
      totalRatingsString: '5K+',
      sla: {
        deliveryTime: 25,
        serviceability: 'SERVICEABLE',
        slaString: '25 mins',
        iconType: 'ICON_TYPE_EMPTY',
      },
      availability: {
        nextCloseTime: '2024-01-25 00:59:00',
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: 'F',
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: '₹150 OFF',
        subHeader: 'ABOVE ₹299',
        discountTag: 'FLAT DEAL',
      },
      differentiatedUi: {
        displayType: 'ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT',
        differentiatedUiMediaDetails: {
          mediaType: 'ADS_MEDIA_ENUM_IMAGE',
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: 'RESTAURANT_DISPLAY_TYPE_DEFAULT',
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: 'https://www.swiggy.com/restaurants/dominos-pizza-5th-block-koramangala-bangalore-108424',
      type: 'WEBLINK',
    },
  },
  {
    info: {
      id: '158855',
      name: "Candice's Gourmet Sandwiches & Wraps",
      cloudinaryImageId: 'd1331113564b015c9d55c48ff48a2553',
      locality: '5th Block',
      areaName: 'Koramangala',
      costForTwo: '₹600 for two',
      cuisines: ['Continental', 'American', 'Salads', 'Desserts', 'Beverages', 'Healthy Food'],
      avgRating: 4.5,
      parentId: '465403',
      avgRatingString: '4.5',
      totalRatingsString: '1K+',
      sla: {
        deliveryTime: 23,
        lastMileTravel: 0.3,
        serviceability: 'SERVICEABLE',
        slaString: '23 mins',
        lastMileTravelString: '0.3 km',
        iconType: 'ICON_TYPE_EMPTY',
      },
      availability: {
        nextCloseTime: '2024-01-24 23:00:00',
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: 'newg.png',
            description: 'Gourmet',
          },
        ],
        textExtendedBadges: [
          {
            iconId: 'guiltfree/GF_Logo_android_3x',
            shortDescription: 'options available',
            fontColor: '#7E808C',
          },
        ],
      },
      isOpen: true,
      type: 'F',
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: 'Gourmet',
                  imageId: 'newg.png',
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {
            badgeObject: [
              {
                attributes: {
                  description: '',
                  fontColor: '#7E808C',
                  iconId: 'guiltfree/GF_Logo_android_3x',
                  shortDescription: 'options available',
                },
              },
            ],
          },
        },
      },
      aggregatedDiscountInfoV3: {
        header: '30% OFF',
        subHeader: 'UPTO ₹75',
      },
      differentiatedUi: {
        displayType: 'ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT',
        differentiatedUiMediaDetails: {
          mediaType: 'ADS_MEDIA_ENUM_IMAGE',
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: 'RESTAURANT_DISPLAY_TYPE_DEFAULT',
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: 'https://www.swiggy.com/restaurants/candices-gourmet-sandwiches-and-wraps-5th-block-koramangala-bangalore-158855',
      type: 'WEBLINK',
    },
  },
  {
    info: {
      id: '41913',
      name: 'Chinita Real Mexican Food',
      cloudinaryImageId: '29fc772cc06b07a4b018e4971d96c9a3',
      locality: 'Koramangala',
      areaName: 'Koramangala',
      costForTwo: '₹750 for two',
      cuisines: ['Mexican', 'Salads', 'Desserts', 'Beverages'],
      avgRating: 4.5,
      parentId: '5064',
      avgRatingString: '4.5',
      totalRatingsString: '5K+',
      sla: {
        deliveryTime: 20,
        lastMileTravel: 0.3,
        serviceability: 'SERVICEABLE',
        slaString: '20 mins',
        lastMileTravelString: '0.3 km',
        iconType: 'ICON_TYPE_EMPTY',
      },
      availability: {
        nextCloseTime: '2024-01-24 23:00:00',
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: 'newg.png',
            description: 'Gourmet',
          },
        ],
      },
      isOpen: true,
      type: 'F',
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: 'Gourmet',
                  imageId: 'newg.png',
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: '30% OFF',
        subHeader: 'UPTO ₹75',
      },
      differentiatedUi: {
        displayType: 'ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT',
        differentiatedUiMediaDetails: {
          mediaType: 'ADS_MEDIA_ENUM_IMAGE',
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: 'RESTAURANT_DISPLAY_TYPE_DEFAULT',
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: 'https://www.swiggy.com/restaurants/chinita-real-mexican-food-koramangala-bangalore-41913',
      type: 'WEBLINK',
    },
  },
  {
    info: {
      id: '425',
      name: 'Hotel Empire',
      cloudinaryImageId: 'un4omn7rcunkmlw6vikr',
      locality: 'Koramangala',
      areaName: 'Koramangala',
      costForTwo: '₹450 for two',
      cuisines: ['North Indian', 'Kebabs', 'Biryani'],
      avgRating: 4.3,
      parentId: '475',
      avgRatingString: '4.3',
      totalRatingsString: '10K+',
      sla: {
        deliveryTime: 29,
        lastMileTravel: 1.5,
        serviceability: 'SERVICEABLE',
        slaString: '29 mins',
        lastMileTravelString: '1.5 km',
        iconType: 'ICON_TYPE_EMPTY',
      },
      availability: {
        nextCloseTime: '2024-01-25 03:00:00',
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: 'F',
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: '₹50 OFF',
        subHeader: 'ABOVE ₹199',
        discountTag: 'FLAT DEAL',
      },
      differentiatedUi: {
        displayType: 'ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT',
        differentiatedUiMediaDetails: {
          mediaType: 'ADS_MEDIA_ENUM_IMAGE',
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: 'RESTAURANT_DISPLAY_TYPE_DEFAULT',
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: 'https://www.swiggy.com/restaurants/hotel-empire-koramangala-bangalore-425',
      type: 'WEBLINK',
    },
  },
  {
    info: {
      id: '108097',
      name: 'Ambur Star Briyani Since 1890',
      cloudinaryImageId: 'yktanq9i7yfjrixaghuj',
      locality: '2nd Stage',
      areaName: 'BTM Layout',
      costForTwo: '₹500 for two',
      cuisines: ['Biryani', 'Chettinad', 'Andhra', 'Beverages', 'Seafood'],
      avgRating: 4.4,
      parentId: '21400',
      avgRatingString: '4.4',
      totalRatingsString: '10K+',
      sla: {
        deliveryTime: 31,
        lastMileTravel: 3.6,
        serviceability: 'SERVICEABLE',
        slaString: '31 mins',
        lastMileTravelString: '3.6 km',
        iconType: 'ICON_TYPE_EMPTY',
      },
      availability: {
        nextCloseTime: '2024-01-24 23:45:00',
        opened: true,
      },
      badges: {
        textExtendedBadges: [
          {
            iconId: 'guiltfree/GF_Logo_android_3x',
            shortDescription: 'options available',
            fontColor: '#7E808C',
          },
        ],
      },
      isOpen: true,
      aggregatedDiscountInfoV2: {},
      type: 'F',
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {
            badgeObject: [
              {
                attributes: {
                  description: '',
                  fontColor: '#7E808C',
                  iconId: 'guiltfree/GF_Logo_android_3x',
                  shortDescription: 'options available',
                },
              },
            ],
          },
        },
      },
      differentiatedUi: {
        displayType: 'ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT',
        differentiatedUiMediaDetails: {
          mediaType: 'ADS_MEDIA_ENUM_IMAGE',
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: 'RESTAURANT_DISPLAY_TYPE_DEFAULT',
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: 'https://www.swiggy.com/restaurants/ambur-star-briyani-since-1890-2nd-stage-btm-layout-bangalore-108097',
      type: 'WEBLINK',
    },
  },
  {
    info: {
      id: '293095',
      name: 'Barbeque Nation',
      cloudinaryImageId: 'vgksvwfy7ybng94snjtx',
      locality: 'Koramangala',
      areaName: 'Koramangala',
      costForTwo: '₹600 for two',
      cuisines: ['North Indian', 'Barbecue', 'Biryani', 'Kebabs', 'Mughlai', 'Desserts'],
      avgRating: 3.7,
      parentId: '2438',
      avgRatingString: '3.7',
      totalRatingsString: '1K+',
      sla: {
        deliveryTime: 37,
        lastMileTravel: 1.9,
        serviceability: 'SERVICEABLE',
        slaString: '37 mins',
        lastMileTravelString: '1.9 km',
        iconType: 'ICON_TYPE_EMPTY',
      },
      availability: {
        nextCloseTime: '2024-01-24 23:30:00',
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: 'F',
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: '50% OFF',
        subHeader: 'UPTO ₹100',
      },
      differentiatedUi: {
        displayType: 'ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT',
        differentiatedUiMediaDetails: {
          mediaType: 'ADS_MEDIA_ENUM_IMAGE',
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: 'RESTAURANT_DISPLAY_TYPE_DEFAULT',
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: 'https://www.swiggy.com/restaurants/barbeque-nation-koramangala-bangalore-293095',
      type: 'WEBLINK',
    },
  },
  {
    info: {
      id: '42060',
      name: 'Sharief Bhai',
      cloudinaryImageId: '9ca4ac15ca5cdee1e71efe15909d465f',
      locality: 'Koramangala',
      areaName: 'Koramangala',
      costForTwo: '₹400 for two',
      cuisines: ['Biryani', 'Mughlai', 'Arabian', 'Kebabs', 'Desserts', 'Beverages'],
      avgRating: 4.3,
      parentId: '5734',
      avgRatingString: '4.3',
      totalRatingsString: '10K+',
      sla: {
        deliveryTime: 29,
        lastMileTravel: 2.3,
        serviceability: 'SERVICEABLE',
        slaString: '29 mins',
        lastMileTravelString: '2.3 km',
        iconType: 'ICON_TYPE_EMPTY',
      },
      availability: {
        nextCloseTime: '2024-01-25 03:00:00',
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: 'F',
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: '40% OFF',
        subHeader: 'UPTO ₹80',
      },
      differentiatedUi: {
        displayType: 'ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT',
        differentiatedUiMediaDetails: {
          mediaType: 'ADS_MEDIA_ENUM_IMAGE',
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: 'RESTAURANT_DISPLAY_TYPE_DEFAULT',
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: 'https://www.swiggy.com/restaurants/sharief-bhai-koramangala-bangalore-42060',
      type: 'WEBLINK',
    },
  },
];

function Body() {
  return (
    <div className="container">
      <div className="search">
        <input type="text" className="search-input" placeholder="Search for restaurant and food" />
      </div>
      <div className="grid-container gap-30 mtb-20">
        {restaurantsList.map((restaurant) => (
          <RestaurantCard key={restaurant?.info?.id} restaurant={restaurant} />
        ))}
      </div>
    </div>
  );
}

export default Body;
