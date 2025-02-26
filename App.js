//how will we create nested tools in react

import React from "react";
import { createRoot } from "react-dom/client";

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://static.vecteezy.com/system/resources/previews/011/405/724/non_2x/call-food-logo-design-food-delivery-service-logo-concept-free-vector.jpg"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>
            <img
              className="cart-icon"
              src="https://d1nhio0ox7pgb.cloudfront.net/_img/g_collection_png/standard/512x512/shopping_cart.png"
            ></img>
          </li>
        </ul>
      </div>
    </div>
  );
};

const RestaurantCard = (props) => {
    const{resData}=props;

    const {
      cloudinaryImageId,
      name,
      cuisines,
      costForTwo,
      avgRating,
      sla,
      slaString ,
    } =resData?.info;

  return (
    <div className="res-card">
      <img
        className="res-logo"
        alt="res-logo"
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + resData.info.cloudinaryImageId

        }
      />
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating} star</h4>
      
      <h4>{costForTwo}</h4>
      <h4>{sla.slaString}</h4>
    </div>
  );
};
const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        {
          resList.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant}/>
        ))
        }
        
      </div>
    </div>
  );
};

const resList = [
  {
    "info": {
      "id": "33859",
      "name": "McDonald's",
      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/9/18/05e097da-9200-492b-ba00-963364e606b8_33859.jpg",
      "locality": "Chinchwad",
      "areaName": "Chinchwad",
      "costForTwo": "₹400 for two",
      "cuisines": [
        "Burgers",
        "Beverages",
        "Cafe",
        "Desserts"
      ],
      "avgRating": 4.4,
      "parentId": "630",
      "avgRatingString": "4.4",
      "totalRatingsString": "42K+",
      "sla": {
        "deliveryTime": 41,
        "lastMileTravel": 11.6,
        "serviceability": "SERVICEABLE",
        "slaString": "40-45 mins",
        "lastMileTravelString": "11.6 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2025-02-26 23:59:00",
        "opened": true
      },
      "badges": {
        
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            
          },
          "textBased": {
            
          },
          "textExtendedBadges": {
            
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "ITEMS",
        "subHeader": "AT ₹99"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      },
      "externalRatings": {
        "aggregatedRating": {
          "rating": "4.2",
          "ratingCount": "7.1K+"
        },
        "source": "GOOGLE",
        "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
      },
      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {
      "context": "seo-data-5a030f5b-abaf-48c5-ab2c-b71d0e513c7f"
    },
    "cta": {
      "link": "https://www.swiggy.com/city/pune/mcdonalds-chinchwad-rest33859",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "188935",
      "name": "Theobroma",
      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/2/12/97192b57-2b7f-42a4-8b66-682e8f3194f6_188935.jpg",
      "locality": "Viman Nagar",
      "areaName": "Viman Nagar",
      "costForTwo": "₹400 for two",
      "cuisines": [
        "Bakery",
        "Desserts"
      ],
      "avgRating": 4.6,
      "parentId": "1040",
      "avgRatingString": "4.6",
      "totalRatingsString": "6.1K+",
      "sla": {
        "deliveryTime": 41,
        "lastMileTravel": 9.8,
        "serviceability": "SERVICEABLE",
        "slaString": "40-45 mins",
        "lastMileTravelString": "9.8 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2025-02-26 23:59:00",
        "opened": true
      },
      "badges": {
        
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            
          },
          "textBased": {
            
          },
          "textExtendedBadges": {
            
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "15% OFF",
        "discountTag": "FLAT DEAL"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      },
      "externalRatings": {
        "aggregatedRating": {
          "rating": "4.2",
          "ratingCount": "584"
        },
        "source": "GOOGLE",
        "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
      },
      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {
      "context": "seo-data-5a030f5b-abaf-48c5-ab2c-b71d0e513c7f"
    },
    "cta": {
      "link": "https://www.swiggy.com/city/pune/theobroma-viman-nagar-rest188935",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "581365",
      "name": "Chaayos Chai+Snacks=Relax",
      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/4/17/f92c604d-68cb-49db-8dec-9473650c363d_581365.JPG",
      "locality": "Pune Nagar Road",
      "areaName": "Kalyani Nagar",
      "costForTwo": "₹250 for two",
      "cuisines": [
        "Bakery",
        "Beverages",
        "Chaat",
        "Desserts",
        "Home Food",
        "Italian",
        "Maharashtrian",
        "Snacks",
        "Street Food",
        "Sweets"
      ],
      "avgRating": 4.5,
      "parentId": "281782",
      "avgRatingString": "4.5",
      "totalRatingsString": "2.3K+",
      "sla": {
        "deliveryTime": 58,
        "lastMileTravel": 10.3,
        "serviceability": "SERVICEABLE",
        "slaString": "55-60 mins",
        "lastMileTravelString": "10.3 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2025-02-26 23:00:00",
        "opened": true
      },
      "badges": {
        "textExtendedBadges": [
          {
            "iconId": "guiltfree/GF_Logo_android_3x",
            "shortDescription": "options available",
            "fontColor": "#7E808C"
          }
        ]
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            
          },
          "textBased": {
            
          },
          "textExtendedBadges": {
            "badgeObject": [
              {
                "attributes": {
                  "description": "",
                  "fontColor": "#7E808C",
                  "iconId": "guiltfree/GF_Logo_android_3x",
                  "shortDescription": "options available"
                }
              }
            ]
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "ITEMS",
        "subHeader": "AT ₹199"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      },
      "externalRatings": {
        "aggregatedRating": {
          "rating": "--"
        }
      },
      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {
      "context": "seo-data-5a030f5b-abaf-48c5-ab2c-b71d0e513c7f"
    },
    "cta": {
      "link": "https://www.swiggy.com/city/pune/chaayos-chai-snacks-relax-nagar-road-kalyani-nagar-rest581365",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "642728",
      "name": "Subway",
      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/1/21/31a750e5-9d26-43d9-9a27-c78de1643e95_642728.JPG",
      "locality": "Mhada Colony",
      "areaName": "Aero Mall Viman Nagar",
      "costForTwo": "₹350 for two",
      "cuisines": [
        "sandwich",
        "Salads",
        "wrap",
        "Healthy Food"
      ],
      "avgRating": 4.2,
      "parentId": "2",
      "avgRatingString": "4.2",
      "totalRatingsString": "3.1K+",
      "sla": {
        "deliveryTime": 45,
        "lastMileTravel": 7.2,
        "serviceability": "SERVICEABLE",
        "slaString": "45-50 mins",
        "lastMileTravelString": "7.2 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2025-02-27 05:00:00",
        "opened": true
      },
      "badges": {
        
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            
          },
          "textBased": {
            
          },
          "textExtendedBadges": {
            
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "40% OFF",
        "subHeader": "UPTO ₹80"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      },
      "externalRatings": {
        "aggregatedRating": {
          "rating": "--"
        }
      },
      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {
      "context": "seo-data-5a030f5b-abaf-48c5-ab2c-b71d0e513c7f"
    },
    "cta": {
      "link": "https://www.swiggy.com/city/pune/subway-mhada-colony-aero-mall-viman-nagar-rest642728",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "663386",
      "name": "Kwality Walls Ice Cream and More",
      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/6/13/558ecdec-88de-4d27-94fa-dfeccd817c73_663386.JPG",
      "locality": "Dighi road",
      "areaName": "Bhosari",
      "costForTwo": "₹200 for two",
      "cuisines": [
        "Desserts",
        "Ice Cream",
        "Ice Cream Cakes"
      ],
      "avgRating": 4.6,
      "veg": true,
      "parentId": "582",
      "avgRatingString": "4.6",
      "totalRatingsString": "248",
      "sla": {
        "deliveryTime": 38,
        "lastMileTravel": 3,
        "serviceability": "SERVICEABLE",
        "slaString": "35-40 mins",
        "lastMileTravelString": "3.0 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2025-02-26 09:59:00",
        "opened": true
      },
      "badges": {
        "imageBadges": [
          {
            "imageId": "v1695133679/badges/Pure_Veg111.png",
            "description": "pureveg"
          }
        ]
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            "badgeObject": [
              {
                "attributes": {
                  "description": "pureveg",
                  "imageId": "v1695133679/badges/Pure_Veg111.png"
                }
              }
            ]
          },
          "textBased": {
            
          },
          "textExtendedBadges": {
            
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "30% OFF",
        "subHeader": "UPTO ₹75"
      },
      "loyaltyDiscoverPresentationInfo": {
        "logoCtx": {
          "text": "BENEFITS",
          "logo": "v1634558776/swiggy_one/OneLogo_3x.png"
        },
        "freedelMessage": "FREE DELIVERY"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      },
      "externalRatings": {
        "aggregatedRating": {
          "rating": "--"
        }
      },
      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {
      "context": "seo-data-5a030f5b-abaf-48c5-ab2c-b71d0e513c7f"
    },
    "cta": {
      "link": "https://www.swiggy.com/city/pune/kwality-walls-ice-cream-and-more-dighi-road-bhosari-rest663386",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "284806",
      "name": "Starbucks Coffee",
      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/2/10/b0554a90-0474-4279-a9e7-6d1e2130ceda_284806.JPG",
      "locality": "Central Avenue Road",
      "areaName": "Kalyani Nagar",
      "costForTwo": "₹400 for two",
      "cuisines": [
        "Beverages",
        "Cafe",
        "Snacks",
        "Desserts",
        "Bakery",
        "Ice Cream"
      ],
      "avgRating": 4.5,
      "parentId": "195515",
      "avgRatingString": "4.5",
      "totalRatingsString": "2.7K+",
      "sla": {
        "deliveryTime": 49,
        "lastMileTravel": 9.5,
        "serviceability": "SERVICEABLE",
        "slaString": "45-50 mins",
        "lastMileTravelString": "9.5 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2025-02-26 23:00:00",
        "opened": true
      },
      "badges": {
        "textExtendedBadges": [
          {
            "iconId": "guiltfree/GF_Logo_android_3x",
            "shortDescription": "options available",
            "fontColor": "#7E808C"
          }
        ]
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            
          },
          "textBased": {
            
          },
          "textExtendedBadges": {
            "badgeObject": [
              {
                "attributes": {
                  "description": "",
                  "fontColor": "#7E808C",
                  "iconId": "guiltfree/GF_Logo_android_3x",
                  "shortDescription": "options available"
                }
              }
            ]
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "ITEMS",
        "subHeader": "AT ₹148"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      },
      "externalRatings": {
        "aggregatedRating": {
          "rating": "--"
        }
      },
      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {
      "context": "seo-data-5a030f5b-abaf-48c5-ab2c-b71d0e513c7f"
    },
    "cta": {
      "link": "https://www.swiggy.com/city/pune/starbucks-coffee-central-avenue-road-kalyani-nagar-rest284806",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "663430",
      "name": "Chai Point",
      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/1/22/854b312f-eb2c-4b09-8868-39199327f19f_663430.jpg",
      "locality": "Pune International Airport Lohegaon",
      "areaName": "Sangamwadi",
      "costForTwo": "₹150 for two",
      "cuisines": [
        "Bakery",
        "Beverages",
        "Maharashtrian",
        "Snacks",
        "Street Food",
        "South Indian",
        "Punjabi",
        "Chaat",
        "Indian",
        "American"
      ],
      "avgRating": 4.3,
      "parentId": "1607",
      "avgRatingString": "4.3",
      "totalRatingsString": "561",
      "sla": {
        "deliveryTime": 58,
        "lastMileTravel": 7.8,
        "serviceability": "SERVICEABLE",
        "slaString": "55-60 mins",
        "lastMileTravelString": "7.8 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2025-03-05 00:00:00",
        "opened": true
      },
      "badges": {
        "textExtendedBadges": [
          {
            "iconId": "guiltfree/GF_Logo_android_3x",
            "shortDescription": "options available",
            "fontColor": "#7E808C"
          }
        ]
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            
          },
          "textBased": {
            
          },
          "textExtendedBadges": {
            "badgeObject": [
              {
                "attributes": {
                  "description": "",
                  "fontColor": "#7E808C",
                  "iconId": "guiltfree/GF_Logo_android_3x",
                  "shortDescription": "options available"
                }
              }
            ]
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "50% OFF",
        "subHeader": "UPTO ₹100"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      },
      "externalRatings": {
        "aggregatedRating": {
          "rating": "3.7",
          "ratingCount": "264"
        },
        "source": "GOOGLE",
        "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
      },
      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {
      "context": "seo-data-5a030f5b-abaf-48c5-ab2c-b71d0e513c7f"
    },
    "cta": {
      "link": "https://www.swiggy.com/city/pune/chai-point-international-airport-lohegaon-sangamwadi-rest663430",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "623603",
      "name": "EatFit",
      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/1/26/b5808849-0359-44d2-b682-1a92e141a943_623603.jpg",
      "locality": "2nd Phase",
      "areaName": "Dhanori",
      "costForTwo": "₹270 for two",
      "cuisines": [
        "Chinese",
        "Healthy Food",
        "Tandoor",
        "Pizzas",
        "North Indian",
        "Thalis",
        "Biryani"
      ],
      "avgRating": 4.3,
      "parentId": "76139",
      "avgRatingString": "4.3",
      "totalRatingsString": "1.4K+",
      "sla": {
        "deliveryTime": 49,
        "lastMileTravel": 8.7,
        "serviceability": "SERVICEABLE",
        "slaString": "45-50 mins",
        "lastMileTravelString": "8.7 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2025-02-26 22:00:00",
        "opened": true
      },
      "badges": {
        
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            
          },
          "textBased": {
            
          },
          "textExtendedBadges": {
            
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "ITEMS",
        "subHeader": "AT ₹99"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      },
      "externalRatings": {
        "aggregatedRating": {
          "rating": "--"
        }
      },
      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {
      "context": "seo-data-5a030f5b-abaf-48c5-ab2c-b71d0e513c7f"
    },
    "cta": {
      "link": "https://www.swiggy.com/city/pune/eatfit-2nd-phase-dhanori-rest623603",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "36366",
      "name": "Sweet Truth - Cake and Desserts",
      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/2/17/d82337a2-f6d4-4ad7-bf41-935b6e09fe7a_36366.jpg",
      "locality": "NEAR INDRAYANI NAGAR",
      "areaName": "Bhosari",
      "costForTwo": "₹450 for two",
      "cuisines": [
        "Desserts",
        "Bakery",
        "Ice Cream",
        "Snacks"
      ],
      "avgRating": 4.4,
      "parentId": "4444",
      "avgRatingString": "4.4",
      "totalRatingsString": "2.0K+",
      "sla": {
        "deliveryTime": 41,
        "lastMileTravel": 7.9,
        "serviceability": "SERVICEABLE",
        "slaString": "40-45 mins",
        "lastMileTravelString": "7.9 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2025-02-26 23:59:00",
        "opened": true
      },
      "badges": {
        
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            
          },
          "textBased": {
            
          },
          "textExtendedBadges": {
            
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "60% OFF",
        "subHeader": "UPTO ₹110"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      },
      "externalRatings": {
        "aggregatedRating": {
          "rating": "--"
        }
      },
      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {
      "context": "seo-data-5a030f5b-abaf-48c5-ab2c-b71d0e513c7f"
    },
    "cta": {
      "link": "https://www.swiggy.com/city/pune/sweet-truth-cake-and-desserts-near-indrayani-nagar-bhosari-rest36366",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "627161",
      "name": "CakeZone Patisserie",
      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/2/18/010c4983-39da-407a-b748-844abd60bdc9_627161.jpg",
      "locality": "Nagar Road & Sangamwadi",
      "areaName": "Sangamwadi",
      "costForTwo": "₹200 for two",
      "cuisines": [
        "Bakery",
        "Desserts",
        "Sweets",
        "Ice Cream"
      ],
      "avgRating": 4.5,
      "parentId": "7003",
      "avgRatingString": "4.5",
      "totalRatingsString": "1.4K+",
      "sla": {
        "deliveryTime": 56,
        "lastMileTravel": 8.6,
        "serviceability": "SERVICEABLE",
        "slaString": "55-60 mins",
        "lastMileTravelString": "8.6 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2025-02-27 01:00:00",
        "opened": true
      },
      "badges": {
        "textExtendedBadges": [
          {
            "iconId": "guiltfree/GF_Logo_android_3x",
            "shortDescription": "options available",
            "fontColor": "#7E808C"
          }
        ]
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            
          },
          "textBased": {
            
          },
          "textExtendedBadges": {
            "badgeObject": [
              {
                "attributes": {
                  "description": "",
                  "fontColor": "#7E808C",
                  "iconId": "guiltfree/GF_Logo_android_3x",
                  "shortDescription": "options available"
                }
              }
            ]
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "₹125 OFF",
        "subHeader": "ABOVE ₹299",
        "discountTag": "FLAT DEAL"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      },
      "externalRatings": {
        "aggregatedRating": {
          "rating": "--"
        }
      },
      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {
      "context": "seo-data-5a030f5b-abaf-48c5-ab2c-b71d0e513c7f"
    },
    "cta": {
      "link": "https://www.swiggy.com/city/pune/cakezone-patisserie-nagar-road-and-sangamwadi-rest627161",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "864947",
      "name": "Bakingo",
      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/2/17/10ae89e5-8a82-4c95-8c22-6b1cd2e7c1b3_864947.jpg",
      "locality": "Galande Nagar",
      "areaName": "Wadagaon Sheri, Haveli",
      "costForTwo": "₹299 for two",
      "cuisines": [
        "Bakery",
        "Desserts",
        "Beverages",
        "Snacks"
      ],
      "avgRating": 4.5,
      "parentId": "3818",
      "avgRatingString": "4.5",
      "totalRatingsString": "1.4K+",
      "sla": {
        "deliveryTime": 62,
        "lastMileTravel": 12.2,
        "serviceability": "SERVICEABLE",
        "slaString": "60-65 mins",
        "lastMileTravelString": "12.2 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2025-02-27 01:00:00",
        "opened": true
      },
      "badges": {
        
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            
          },
          "textBased": {
            
          },
          "textExtendedBadges": {
            
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "40% OFF",
        "discountTag": "FLAT DEAL"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      },
      "externalRatings": {
        "aggregatedRating": {
          "rating": "--"
        }
      },
      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {
      "context": "seo-data-5a030f5b-abaf-48c5-ab2c-b71d0e513c7f"
    },
    "cta": {
      "link": "https://www.swiggy.com/city/pune/bakingo-galande-nagar-wadagaon-sheri-haveli-rest864947",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "623604",
      "name": "Great Indian Khichdi by EatFit",
      "cloudinaryImageId": "6e44fd7f1e5cd9967edfe47c10247671",
      "locality": "2nd Phase",
      "areaName": "Lohegaon",
      "costForTwo": "₹200 for two",
      "cuisines": [
        "Indian",
        "Home Food",
        "Healthy Food",
        "Snacks"
      ],
      "avgRating": 4.3,
      "veg": true,
      "parentId": "319582",
      "avgRatingString": "4.3",
      "totalRatingsString": "817",
      "sla": {
        "deliveryTime": 47,
        "lastMileTravel": 8.6,
        "serviceability": "SERVICEABLE",
        "slaString": "45-50 mins",
        "lastMileTravelString": "8.6 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2025-02-26 22:00:00",
        "opened": true
      },
      "badges": {
        "imageBadges": [
          {
            "imageId": "v1695133679/badges/Pure_Veg111.png",
            "description": "pureveg"
          }
        ]
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            "badgeObject": [
              {
                "attributes": {
                  "description": "pureveg",
                  "imageId": "v1695133679/badges/Pure_Veg111.png"
                }
              }
            ]
          },
          "textBased": {
            
          },
          "textExtendedBadges": {
            
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "ITEMS",
        "subHeader": "AT ₹99"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      },
      "externalRatings": {
        "aggregatedRating": {
          "rating": "--"
        }
      },
      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {
      "context": "seo-data-5a030f5b-abaf-48c5-ab2c-b71d0e513c7f"
    },
    "cta": {
      "link": "https://www.swiggy.com/city/pune/great-indian-khichdi-by-eatfit-2nd-phase-lohegaon-rest623604",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "757212",
      "name": "Keventers - Milkshakes & Desserts",
      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/1/13/4b420b76-1f80-4479-8187-cc22cbbc79a9_757212.JPG",
      "locality": "Viman Nagar",
      "areaName": "Koregaon Park",
      "costForTwo": "₹300 for two",
      "cuisines": [
        "Beverages",
        "Ice Cream",
        "Desserts",
        "Healthy Food"
      ],
      "avgRating": 4.3,
      "parentId": "268997",
      "avgRatingString": "4.3",
      "totalRatingsString": "292",
      "sla": {
        "deliveryTime": 64,
        "lastMileTravel": 11.2,
        "serviceability": "SERVICEABLE",
        "slaString": "60-65 mins",
        "lastMileTravelString": "11.2 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2025-02-26 23:00:00",
        "opened": true
      },
      "badges": {
        
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            
          },
          "textBased": {
            
          },
          "textExtendedBadges": {
            
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "50% OFF",
        "subHeader": "UPTO ₹100"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      },
      "externalRatings": {
        "aggregatedRating": {
          "rating": "4.0",
          "ratingCount": "433"
        },
        "source": "GOOGLE",
        "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
      },
      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {
      "context": "seo-data-5a030f5b-abaf-48c5-ab2c-b71d0e513c7f"
    },
    "cta": {
      "link": "https://www.swiggy.com/city/pune/keventers-milkshakes-and-desserts-viman-nagar-koregaon-park-rest757212",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "56142",
      "name": "Frozen Bottle - Milkshakes, Desserts And Ice Cream",
      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/2/17/84ae198a-ab51-4f00-99f4-fcf9aed6ea2d_56142.jpg",
      "locality": "Meera Nagar",
      "areaName": "Koregaon Park",
      "costForTwo": "₹250 for two",
      "cuisines": [
        "Beverages",
        "Ice Cream",
        "Desserts"
      ],
      "avgRating": 4.3,
      "veg": true,
      "parentId": "5655",
      "avgRatingString": "4.3",
      "totalRatingsString": "4.0K+",
      "sla": {
        "deliveryTime": 60,
        "lastMileTravel": 11.2,
        "serviceability": "SERVICEABLE",
        "slaString": "55-60 mins",
        "lastMileTravelString": "11.2 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2025-02-27 01:00:00",
        "opened": true
      },
      "badges": {
        "imageBadges": [
          {
            "imageId": "v1695133679/badges/Pure_Veg111.png",
            "description": "pureveg"
          }
        ]
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            "badgeObject": [
              {
                "attributes": {
                  "description": "pureveg",
                  "imageId": "v1695133679/badges/Pure_Veg111.png"
                }
              }
            ]
          },
          "textBased": {
            
          },
          "textExtendedBadges": {
            
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "ITEMS",
        "subHeader": "AT ₹65"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      },
      "externalRatings": {
        "aggregatedRating": {
          "rating": "--"
        }
      },
      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {
      "context": "seo-data-5a030f5b-abaf-48c5-ab2c-b71d0e513c7f"
    },
    "cta": {
      "link": "https://www.swiggy.com/city/pune/frozen-bottle-milkshakes-desserts-and-ice-cream-meera-nagar-koregaon-park-rest56142",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "62973",
      "name": "LunchBox - Meals and Thalis",
      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/10/16/b037f4fd-9cce-4ba7-8e4b-d423298b578f_62973.jpg",
      "locality": "NEAR INDRAYANI NAGAR",
      "areaName": "Bhosari",
      "costForTwo": "₹200 for two",
      "cuisines": [
        "Thalis",
        "North Indian",
        "Biryani"
      ],
      "avgRating": 4.4,
      "parentId": "4925",
      "avgRatingString": "4.4",
      "totalRatingsString": "9.3K+",
      "sla": {
        "deliveryTime": 43,
        "lastMileTravel": 7.9,
        "serviceability": "SERVICEABLE",
        "slaString": "40-45 mins",
        "lastMileTravelString": "7.9 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2025-02-26 23:59:00",
        "opened": true
      },
      "badges": {
        "textExtendedBadges": [
          {
            "iconId": "guiltfree/GF_Logo_android_3x",
            "shortDescription": "options available",
            "fontColor": "#7E808C"
          }
        ]
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            
          },
          "textBased": {
            
          },
          "textExtendedBadges": {
            "badgeObject": [
              {
                "attributes": {
                  "description": "",
                  "fontColor": "#7E808C",
                  "iconId": "guiltfree/GF_Logo_android_3x",
                  "shortDescription": "options available"
                }
              }
            ]
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "ITEMS",
        "subHeader": "AT ₹149"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      },
      "externalRatings": {
        "aggregatedRating": {
          "rating": "--"
        }
      },
      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {
      "context": "seo-data-5a030f5b-abaf-48c5-ab2c-b71d0e513c7f"
    },
    "cta": {
      "link": "https://www.swiggy.com/city/pune/lunchbox-meals-and-thalis-near-indrayani-nagar-bhosari-rest62973",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "33328",
      "name": "Faasos - Wraps, Rolls & Shawarma",
      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/7/28/18827930-450c-4e26-a680-bee1a38f4228_33328.JPG",
      "locality": "NEAR INDRAYANI NAGAR",
      "areaName": "Bhosari",
      "costForTwo": "₹200 for two",
      "cuisines": [
        "Kebabs",
        "Fast Food",
        "Snacks",
        "American",
        "Healthy Food",
        "Desserts",
        "Beverages"
      ],
      "avgRating": 4.3,
      "parentId": "21809",
      "avgRatingString": "4.3",
      "totalRatingsString": "9.8K+",
      "sla": {
        "deliveryTime": 52,
        "lastMileTravel": 7.9,
        "serviceability": "SERVICEABLE",
        "slaString": "50-55 mins",
        "lastMileTravelString": "7.9 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2025-02-26 23:59:00",
        "opened": true
      },
      "badges": {
        "textExtendedBadges": [
          {
            "iconId": "guiltfree/GF_Logo_android_3x",
            "shortDescription": "options available",
            "fontColor": "#7E808C"
          }
        ]
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            
          },
          "textBased": {
            
          },
          "textExtendedBadges": {
            "badgeObject": [
              {
                "attributes": {
                  "description": "",
                  "fontColor": "#7E808C",
                  "iconId": "guiltfree/GF_Logo_android_3x",
                  "shortDescription": "options available"
                }
              }
            ]
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "50% OFF",
        "subHeader": "UPTO ₹100"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      },
      "externalRatings": {
        "aggregatedRating": {
          "rating": "--"
        }
      },
      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {
      "context": "seo-data-5a030f5b-abaf-48c5-ab2c-b71d0e513c7f"
    },
    "cta": {
      "link": "https://www.swiggy.com/city/pune/faasos-wraps-rolls-and-shawarma-near-indrayani-nagar-bhosari-rest33328",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "27806",
      "name": "Natural Ice Cream",
      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/2/8/0b85a951-0771-4280-b9bf-dc1fcd791e88_27806.JPG",
      "locality": "Meera Nagar",
      "areaName": "Koregaon Park",
      "costForTwo": "₹150 for two",
      "cuisines": [
        "Ice Cream",
        "Desserts"
      ],
      "avgRating": 4.7,
      "veg": true,
      "parentId": "2093",
      "avgRatingString": "4.7",
      "totalRatingsString": "7.8K+",
      "sla": {
        "deliveryTime": 52,
        "lastMileTravel": 11.2,
        "serviceability": "SERVICEABLE",
        "slaString": "50-55 mins",
        "lastMileTravelString": "11.2 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2025-02-26 23:59:00",
        "opened": true
      },
      "badges": {
        
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            
          },
          "textBased": {
            
          },
          "textExtendedBadges": {
            
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "20% OFF",
        "subHeader": "UPTO ₹50"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      },
      "externalRatings": {
        "aggregatedRating": {
          "rating": "--"
        }
      },
      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {
      "context": "seo-data-5a030f5b-abaf-48c5-ab2c-b71d0e513c7f"
    },
    "cta": {
      "link": "https://www.swiggy.com/city/pune/natural-ice-cream-meera-nagar-koregaon-park-rest27806",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "763016",
      "name": "The Belgian Waffle Co.",
      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/1/17/baa053c6-7ff0-4abf-b274-fd44fbf4469a_763016.JPG",
      "locality": "MUNDHWA ROAD",
      "areaName": "LAKE SHORE MALL",
      "costForTwo": "₹200 for two",
      "cuisines": [
        "Waffle",
        "Desserts",
        "Ice Cream"
      ],
      "avgRating": 4.6,
      "veg": true,
      "parentId": "2233",
      "avgRatingString": "4.6",
      "totalRatingsString": "211",
      "sla": {
        "deliveryTime": 67,
        "lastMileTravel": 11.9,
        "serviceability": "SERVICEABLE",
        "slaString": "65-70 mins",
        "lastMileTravelString": "11.9 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2025-02-26 23:00:00",
        "opened": true
      },
      "badges": {
        
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            
          },
          "textBased": {
            
          },
          "textExtendedBadges": {
            
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "20% OFF",
        "subHeader": "UPTO ₹50"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      },
      "externalRatings": {
        "aggregatedRating": {
          "rating": "--"
        }
      },
      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {
      "context": "seo-data-5a030f5b-abaf-48c5-ab2c-b71d0e513c7f"
    },
    "cta": {
      "link": "https://www.swiggy.com/city/pune/the-belgian-waffle-co-mundhwa-road-lake-shore-mall-rest763016",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "13906",
      "name": "Wadeshwar",
      "cloudinaryImageId": "ee51fzavw0jgsryxkavp",
      "locality": "Kalyani Nagar",
      "areaName": "Kalyani Nagar",
      "costForTwo": "₹350 for two",
      "cuisines": [
        "South Indian",
        "North Indian",
        "Chinese",
        "Street Food",
        "Desserts",
        "Beverages"
      ],
      "avgRating": 4.4,
      "parentId": "1770",
      "avgRatingString": "4.4",
      "totalRatingsString": "49K+",
      "sla": {
        "deliveryTime": 54,
        "lastMileTravel": 9.7,
        "serviceability": "SERVICEABLE",
        "slaString": "50-55 mins",
        "lastMileTravelString": "9.7 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2025-02-26 22:55:00",
        "opened": true
      },
      "badges": {
        
      },
      "isOpen": true,
      "aggregatedDiscountInfoV2": {
        
      },
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            
          },
          "textBased": {
            
          },
          "textExtendedBadges": {
            
          }
        }
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      },
      "externalRatings": {
        "aggregatedRating": {
          "rating": "4.0",
          "ratingCount": "5.9K+"
        },
        "source": "GOOGLE",
        "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
      },
      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {
      "context": "seo-data-5a030f5b-abaf-48c5-ab2c-b71d0e513c7f"
    },
    "cta": {
      "link": "https://www.swiggy.com/city/pune/wadeshwar-kalyani-nagar-rest13906",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "636808",
      "name": "The Flour Works",
      "cloudinaryImageId": "hplcewcwkijykcovzuph",
      "locality": "Kalyani Nagar",
      "areaName": "Viman Nagar",
      "costForTwo": "₹1000 for two",
      "cuisines": [
        "Beverages",
        "Italian",
        "Bakery",
        "Fast Food",
        "European",
        "Pizzas",
        "Desserts"
      ],
      "avgRating": 4.3,
      "parentId": "208292",
      "avgRatingString": "4.3",
      "totalRatingsString": "537",
      "sla": {
        "deliveryTime": 54,
        "lastMileTravel": 9.4,
        "serviceability": "SERVICEABLE",
        "slaString": "50-55 mins",
        "lastMileTravelString": "9.4 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2025-02-26 23:00:00",
        "opened": true
      },
      "badges": {
        "imageBadges": [
          {
            "imageId": "newg.png",
            "description": "Gourmet"
          }
        ]
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            "badgeObject": [
              {
                "attributes": {
                  "description": "Gourmet",
                  "imageId": "newg.png"
                }
              }
            ]
          },
          "textBased": {
            
          },
          "textExtendedBadges": {
            
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "40% OFF",
        "subHeader": "UPTO ₹80"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      },
      "externalRatings": {
        "aggregatedRating": {
          "rating": "4.2",
          "ratingCount": "5.9K+"
        },
        "source": "GOOGLE",
        "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
      },
      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {
      "context": "seo-data-5a030f5b-abaf-48c5-ab2c-b71d0e513c7f"
    },
    "cta": {
      "link": "https://www.swiggy.com/city/pune/the-flour-works-kalyani-nagar-viman-nagar-rest636808",
      "type": "WEBLINK"
    }
  }
]


const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};
const root = createRoot(document.getElementById("root"));
root.render(<AppLayout />);
