import { Employee, Expense } from "./Entities";



/**
 Log into page/app 
 takes username and password
 flag isManager will determine which page
 is rendered and therefore functionality

*/
export interface Handler{

    
Login(username:string, password:string):Promise<Employee>
GetRoster():Promise<Employee[]>
approve(uid:string):Promise<string>
reject(uid:string):Promise<string>
createExpense(empId:string,request:Expense):Promise<Employee>
}


