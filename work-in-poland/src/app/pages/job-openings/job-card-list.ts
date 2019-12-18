import {JobCard} from '../../models/job-card.model';

export const jobCardList: JobCard[] = [
  {
    title: 'РАБОТНИК НА ФЕРМУ',
    subtitle: 'Сельское хозяйство и садовничество',
    tags: ['Сельхозрабочий /Работник на ферму'],
    requirements: 'Требования: Срочно на ферму с коровами Lapy (недалеко от Bialostoka)требуются мужчина работник для выполнения несложных обязанностей по кормлению и уборке на ферме с коровами и бычками. Желательно умение ездить на тракторе, но не обязательно. Оплата 3000 злотых в месяц плюс бесплатное питание и проживание.Своевременная оплата,хорошая хозяйка.',
    employer: {
      paymentPerHour: '20 zł / час',
      paymentPerMonth: '6700 – 8900 zł / мес',
      employerName: 'SNK Group sp. z o.o.',
      employerAddress: 'Познань',
      employerLogoSource: '../../../assets/images/job-card/employer-logo.png',
    },
    condition: [
      {title: 'Постоянная работа', conditionType: 'condition-employment'},
      {title: 'Не требуется знание языка', conditionType: 'condition-language'},
      {title: 'Предоставляем питание', conditionType: 'condition-eat'},
      {title: 'Предоставляем жилье', conditionType: 'condition-housing'},
      {title: 'Только с рабочей визой', conditionType: 'condition-international-passport'},
      {title: 'Не требуется опыт', conditionType: 'condition-experience'},
    ],
    gender: ['male'],
  }
];
