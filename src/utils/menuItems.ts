import { FRONTEND_URL } from "./utilsimp";

export const menuItem = [
  // {
  //   name: `Home`,
  //   url: `/`,
  // },
  {
    name: `About`,
    url: `/`,
    // dropdown: [
    //   { name: `Company`, url: `/about/company` },
    //   {
    //     name: `Infrastructure`,
    //     url: `/about/infrastructure`,
    //   },
    // ],
  },
  {
    name: `Binfinit Marketing`,
    url: `/binfinit-marketing`,
    // dropdown: [
    //   { name: `Company`, url: `/about/company` },
    //   {
    //     name: `Infrastructure`,
    //     url: `/about/infrastructure`,
    //   },
    // ],
  },
  {
    name: `Commodities`,
    url: `/`,
    dropdown: [
      {
        name: `Metal`,
        url: "/commodities/metal",
        // subMenuItem: [
        //   { name: `CRGO`, url: `/commodities/metal` },
        //   {
        //     name: `Stainless Steel`,
        //     url: `/commodities/metal`,
        //   },
        //   { name: `HMS 1 & 2`, url: `/commodities/metal` },
        // ],
      },
      {
        name: `Consumer Goods`,
        url: "/commodities/consumer-goods",
        // subMenuItem: [
        //   {
        //     name: `Cooking Oil (MCA)`,
        //     url: `/commodities/consumer-goods`,
        //   },
        //   {
        //     name: `Palm Oil (MCA)`,
        //     url: `/commodities/consumer-goods`,
        //   },
        //   { name: `Copra`, url: `/product/copra` },
        //   { name: `Broomsticks`, url: `/commodities/consumer-goods` },
        //   {
        //     name: `Soap Noodle (MCA)`,
        //     url: `/commodities/consumer-goods`,
        //   },
        // ],
      },
      {
        name: `Agricultural Products`,
        url: "/commodities/agricultural-products",
        // subMenuItem: [
        //   { name: `Rice`, url: `/commodities/agricultural-products` },
        //   { name: `Gambier`, url: `/commodities/agricultural-products` },
        //   { name: `Cashew Nut`, url: `/commodities/agricultural-products` },
        //   { name: `Damar Batu`, url: `/commodities/agricultural-products` },
        // ],
      },
      {
        name: `Paper`,
        url: "/commodities/paper",
        // subMenuItem: [
        //   { name: `Copier Paper`, url: `/commodities/paper` },
        //   { name: `Tissue Paper`, url: `/commodities/paper` },
        //   {
        //     name: `Thermal Paper`,
        //     url: `/commodities/paper`,
        //   },
        // ],
      },
      {
        name: `Industrial Raw Materials`,
        url: "/commodities/industrial-raw-materials",
        // subMenuItem: [
        //   { name: `Copier Paper`, url: `/commodities/paper` },
        //   { name: `Tissue Paper`, url: `/commodities/paper` },
        //   {
        //     name: `Thermal Paper`,
        //     url: `/commodities/paper`,
        //   },
        // ],
      },
      {
        name: `Projects / Machinery`,
        url: "/commodities/projects-machinery",
        // subMenuItem: [
        //   { name: `Copier Paper`, url: `/commodities/paper` },
        //   { name: `Tissue Paper`, url: `/commodities/paper` },
        //   {
        //     name: `Thermal Paper`,
        //     url: `/commodities/paper`,
        //   },
        // ],
      },
    ],
  },

  // {
  //   name: `Products`,
  //   url: `#`,
  //   dropdown: [
  //     {
  //       name: `Butterfly Valve`,
  //       url: `/product/butterfly-valve`,
  //     },
  //     {
  //       name: `Forged Steel Valve`,
  //       url: `/product/forged-steel-valve`,
  //     },
  //     {
  //       name: `Cast Steel Valve`,
  //       url: `/product/cast-steel-valve`,
  //     },
  //     { name: `Choke Valves`, url: `/product/choke-valves` },
  //     {
  //       name: `Ball Valves`,
  //       url: `#`,
  //       subMenuItem: [
  //         {
  //           name: `Forged Ball Valve`,
  //           url: `#`,
  //           nestedSubMenuItem: [
  //             {
  //               name: `Forged Flanged End Ball Valves`,
  //               url: `/product/forged-flanged-end-ball-valves`,
  //             },
  //             {
  //               name: `Forged Bolted Screwed Ball Valves`,
  //               url: `/product/forged-bolted-screwed-ball-valves`,
  //             },
  //           ],
  //         },
  //         {
  //           name: `Industrial Process Floating Ball Valves`,
  //           url: `/product/industrial-process-floating-ball-valves`,
  //         },
  //         {
  //           name: `Jacketed Ball Valves`,
  //           url: `/product/jacketed-ball-valves`,
  //         },
  //         {
  //           name: `Instrumentation Ball Valve`,
  //           url: `/product/screwed-ball-valves`,
  //         },
  //       ],
  //     },
  //     {
  //       name: `Double Block & Bleed Valves`,
  //       url: `/product/double-block-bleed-valves`,
  //     },
  //     {
  //       name: `Injection Quills & Sampling Probes For DBB Valves`,
  //       url: `/product/injection-quills-sampling-probes-for-dbb-valves`,
  //     },
  //     {
  //       name: `Monoflange Valves`,
  //       url: `/product/monoflange-valve`,
  //     },
  //     {
  //       name: `Needle Valve`,
  //       url: `#`,
  //       subMenuItem: [
  //         {
  //           name: `6000 PSI Needle Valves`,
  //           url: `/product/needle-valves`,
  //         },
  //         {
  //           name: `High Pressure Needle Valves`,
  //           url: `/product/high-pressure-needle-valves`,
  //         },
  //       ],
  //     },
  //     {
  //       name: `Safety Relief Valve`,
  //       url: `/safety-relief-valve`,
  //     },
  //   ],
  // },

  // {
  //   name: `Logistics`,
  //   url: `/logistics`,
  // },
  {
    name: `Contact`,
    url: `/contact`,
  },
];
