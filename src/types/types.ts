export interface IService {
    title: string;
    description: string;
    image: string;
}

export interface IPortfolioItem {
    title: string;
    category: string;
    description: string;
    image: string;
}

export interface ITechnology {
    name: string;
    skills: string;
    image: string;
}

export interface ITestimonial {
    text: string;
    author: string;
    position: string;
    avatar: string;
}

export interface IStat {
    number: string;
    label: string;
}

export interface IContact {
    country: string;
    phone: string;
    email: string;
}

export interface IData {
    title: string;
    description: string;
    services: IService[];
    portfolio: IPortfolioItem[];
    technologies: ITechnology[];
    testimonials: ITestimonial[];
    stats: IStat[];
    contacts: IContact[];
}

export interface IPageData {
    pageData: IData;
}

export interface IPageProps {
    props: IData;
}