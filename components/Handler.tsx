import { Employee, Expense } from "./Entities";
import { Handler } from "./Services-dto";
import axios from "axios";



export default class RequestHandler implements Handler{



    async GetRoster(): Promise<Employee[]> {
        const body = {}
        const response = await axios.get('http://localhost:5000/employee', body);

        return response.data.employeeList;
    }

    approve(uid: string): Promise<string> {
        throw new Error("Method not implemented.");
    }
    reject(uid: string): Promise<string> {
        throw new Error("Method not implemented.");
    }
    createExpense(empId: string, request: Expense): Promise<Employee> {
        throw new Error("Method not implemented.");
    }
    async Login(username: string, password: string): Promise<Employee> {


        throw new Error("Method not implemented.");
    }




}