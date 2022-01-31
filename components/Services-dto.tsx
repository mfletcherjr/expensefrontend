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
Approve(uid:string):Promise<string>
Reject(uid:string):Promise<string>
CreateExpense(empId:string,request:Expense):Promise<Employee>
}


