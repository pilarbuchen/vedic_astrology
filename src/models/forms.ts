// export default interface UserData {
//     year: string,
//     month: string,
//     date:string ,
//     hours:string,
//     minutes: string,
//     seconds: string,
//     latitude: string,
//     longitud: string,
//     timezone: string,
//     id: number
// }

// export default interface SignData {
//     signs: {
//         planets: string;
//         signsData: string | number;
//         id: number;
//         planetSVG: string;
//       }[]
// };

export default interface DatePicker {
    month: number,
    day: number,
    year: number
}
