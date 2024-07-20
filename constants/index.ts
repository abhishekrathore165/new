export interface GridItem {
    id: number;
    imgSrc: string;
    title: string;
    description: string;
  }
  
  
  export interface OfficesItem {
    id:number,
    state:string,
    city:string,
    phone:string,
    email:string
  }

  export const gridItems: GridItem[] = [
    {
      id: 1,
      imgSrc: '/images/casebg.svg',
      title: 'DEVELOPED A MOBILE APP TRANSFORMATIVE',
      description: 'See how we developed a mobile app with the transformative power of advanced design.',
    },
    {
      id: 2,
      imgSrc: '/images/casebg.svg',
      title: 'DEVELOPED A MOBILE APP TRANSFORMATIVE',
      description: 'See how we developed a mobile app with the transformative power of advanced design.',
    },
    {
      id: 3,
      imgSrc: '/images/casebg.svg',
      title: 'DEVELOPED A MOBILE APP TRANSFORMATIVE',
      description: 'See how we developed a mobile app with the transformative power of advanced design.',
    },
    {
      id: 4,
      imgSrc: '/images/casebg.svg',
      title: 'DEVELOPED A MOBILE APP TRANSFORMATIVE',
      description: 'See how we developed a mobile app with the transformative power of advanced design.',
    },
  ];


  export const officeItems: OfficesItem[] = [
    {
        id:1,
        state:'UNITED STATES',
        city:"New York, 430 Park Ave, NY 10022",
        phone:'+44 (0) 793 9311 355',
        email:'mail@dashmicro.com'
    },
    {
        id:2,
        state:'UNITED STATES',
        city:"New York, 430 Park Ave, NY 10022",
        phone:'+44 (0) 793 9311 355',
        email:'mail@dashmicro.com'
    },
    {
        id:3,
        state:'UNITED STATES',
        city:"New York, 430 Park Ave, NY 10022",
        phone:'+44 (0) 793 9311 355',
        email:'mail@dashmicro.com'
    },
    {
        id:4,
        state:'UNITED STATES',
        city:"New York, 430 Park Ave, NY 10022",
        phone:'+44 (0) 793 9311 355',
        email:'mail@dashmicro.com'
    },
  ]
